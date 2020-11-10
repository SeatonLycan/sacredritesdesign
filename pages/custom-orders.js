import { useState, useEffect, useContext } from 'react'
import firebase from '../firebase/firebase'
import Head from 'next/head'
import Link from 'next/link'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import useStyles from '../styles/custom-orders.style'
import Button from '@material-ui/core/Button'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import AdminContext from '../contexts/AdminContext'
import AddCustomDialog from '../components/AddCustomDialog'

export default function CustomOrders() {
  const classes = useStyles()
  const [open, setOpen] = useState([])
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogIndex, setDialogIndex] = useState('')
  const admin = useContext(AdminContext)
  const [addItemDialogOpen, setAddItemDialogOpen] = useState(false)
  const [itemAdded, setItemAdded] = useState(null)
  const [customItems, setCustomItems] = useState([])

  useEffect(() => {
    const tempImageURLs = []
    const getImages = async () => {
      await firebase.storage().ref('customItems/').listAll().then(async function(res) {
        for (const item of res.items){
          await item.getDownloadURL().then(function(url) {
            tempImageURLs.push(url)
            })
          }
        })
      setCustomItems(tempImageURLs)
    }
  getImages()
  }, [itemAdded])

  const handleListItemClick = (i) => {
    setOpenDialog(true)
    setDialogIndex(i)
  }
  const handleMouseOver = (i) => {
    const newOpen = [...open]
    newOpen[i] = true
    setOpen(newOpen)
  }
  const handleMouseLeave = (i) => {
      const newOpen = [...open]
      newOpen[i] = false
      setOpen(newOpen)
  }
  const closeAddItemDialog = () => {
    setAddItemDialogOpen(false)
  }
  const checkItemAdded = () => {
    setItemAdded(true)
  }
  const handleNextItem = () => {
    const listLength = customItems.length
    if (dialogIndex === listLength - 1){
      setDialogIndex(0)
    }
    else{
      setDialogIndex(dialogIndex + 1)
    }
  }
  const handlePreviousItem = () => {
    const listLength = customItems.length
    if (dialogIndex === 0){
      setDialogIndex(listLength -1)
    }
    else{
      setDialogIndex(dialogIndex - 1)
    }
  }

  return (
    <>
    <div>
      <Head>
        <title>Custom Orders - Sacred Rites Jewelry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.customTitle}>Custom Orders</div>
      <div className={classes.customButtons}>
        <Link href='/contact'>
          <Button variant="outlined" style={{border: "2px solid"}}>PLACE AN ORDER</Button>
        </Link>
        <Link href='/shipping-returns'>
            <Button variant="outlined" style={{border: "2px solid"}}>LEARN MORE</Button>
        </Link>
      </div>
      <div className={classes.root}>
        <GridList className={classes.gridList} cellHeight={matches ? 200 : 300} cols={3}>
          {customItems.map((item, i) => (
            <GridListTile key={item} cols={item.cols || 1} 
              onMouseOver={() => {handleMouseOver(i)}} onMouseLeave={() => {handleMouseLeave(i)}}
                onClick={() => {handleListItemClick(i)}}>
                <img src={item} alt={item} />
                {open[i] === true ? 
                  <div className={classes.curtain} >
                  </div> : null}
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>

    <Dialog PaperProps={{
    style: {
      backgroundColor: 'transparent',
      boxShadow: 'none',
      borderRadius: '0px'
    },
  }} maxWidth='md' onClose={() => {setOpenDialog(false)}} open={openDialog}>
      <img className={classes.dialogImage} src={customItems[dialogIndex]}/>
      <CloseIcon className={classes.closeIcon} onClick={() => {setOpenDialog(false)}}/>
      <IconButton className={classes.backArrow} onClick={() => {handlePreviousItem()}}>
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton className={classes.forwardArrow} onClick={() => {handleNextItem()}}>
        <ArrowForwardIosIcon />
      </IconButton>
    </Dialog>

    {/* Admin Only: Add Custom Item to shop */}
    {admin.admin ? 
      <Fab variant="extended" color="primary" aria-label="add" 
        onClick={() => {setAddItemDialogOpen(true)}}
        style={{position: 'fixed', bottom: 10, right: 10}}
        >
        <AddIcon />
        Add Item
      </Fab> : null
      }
      <Dialog
        onClose={() => setAddItemDialogOpen(false)}
        open={addItemDialogOpen}
        fullWidth={true}
        maxWidth='sm'
      >
        <AddCustomDialog 
          onClose={closeAddItemDialog}
          itemAdded={checkItemAdded}
        />
      </Dialog>
    </>
    )
}