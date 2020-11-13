import { useState, useEffect, useContext } from 'react'
import firebase, { db } from '../firebase/firebase'
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
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'

export default function CustomOrders() {
  const classes = useStyles()
  const [open, setOpen] = useState([])
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogIndex, setDialogIndex] = useState('')
  const admin = useContext(AdminContext)
  const [addItemDialogOpen, setAddItemDialogOpen] = useState(false)
  const [itemAdded, setItemAdded] = useState(0)
  const [customItems, setCustomItems] = useState([])
  const [anchorEl, setAnchorEl] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)

  useEffect(() => {
    const tempItems = []
    var i = 0
    const getItems = async() => {
      await db.collection("customItems").orderBy('order', 'desc').get().then(async function(querySnapshot) {
        for (const doc of querySnapshot.docs){
          tempItems.push(doc.data())
          tempItems[i]['id'] = doc.id
          i += 1
        }
      })
      setCustomItems(tempItems)
    }
    getItems()
    // await firebase.storage().ref('customItems/').listAll().then(async function(res) {
    //   for (const item of res.items){
    //     tempImageURLs[i] = {}
    //     tempImageURLs[i]['path'] = item.fullPath
    //     await item.getDownloadURL().then(function(url) {
    //       tempImageURLs[i]['url'] = url
    //       i += 1
    //       })
    //     }
    //   })
    // setCustomItems(tempImageURLs)
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
    setItemAdded(itemAdded + 1)
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
  const handleDeleteItem = async () => {
    await firebase.storage().ref(`customItems/${customItems[dialogIndex]['name']}`).delete()
    await db.collection('customItems').doc(customItems[dialogIndex]['id']).delete()
    setOpenDialog(false)
    setOpenMenu(false)
    const tempItems = []
    var i = 0
    const getItems = async() => {
      await db.collection("customItems").orderBy('order').get().then(async function(querySnapshot) {
        for (const doc of querySnapshot.docs){
          tempItems.push(doc.data())
          tempItems[i]['id'] = doc.id
          i += 1
        }
      })
      setCustomItems(tempItems)
    }
    getItems()
	}
	const handleItemOptionsClose = () => {
    setOpenMenu(false)
	}
	const handleItemOptionsOpen = (event) => {
    setOpenMenu(true)
    setAnchorEl(event.currentTarget)
  }
  const moveItemLeft = async (id, order) => {
    const tempItems = []
    var i = 0
    const higherOrderItem = order + 1
    const itemListLength = customItems.length

    if (itemListLength === order){
      return null
    }
    else{
      console.log('move item to the right')
      await db.collection('customItems').where('order', '==', higherOrderItem).get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(async function(doc) {
            await db.collection('customItems').doc(doc.id)
              .update({
                order
            })
          })
        })
        .then(async () => {
          await db.collection('customItems').doc(id)
            .update({
              order: higherOrderItem
          })
        })
        .then(async () => {
          await db.collection("customItems").orderBy('order', 'desc').get()
          .then(async function(querySnapshot) {
            for (const doc of querySnapshot.docs){
              tempItems.push(doc.data())
              tempItems[i]['id'] = doc.id
              i += 1
            }
          })
        }
      )
      setCustomItems(tempItems)
    }
  }
  const moveItemRight = async (id, order) => {
    const tempItems = []
    var i = 0
    const lowerOrderItem = order - 1

    if (order === 1){
      return null
    }
    else{
      console.log('move item to the left')
      await db.collection('customItems').where('order', '==', lowerOrderItem).get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(async function(doc) {
            await db.collection('customItems').doc(doc.id)
              .update({
                order
            })
          })
        })
        .then(async () => {
          await db.collection('customItems').doc(id)
            .update({
              order: lowerOrderItem
          })
        })
        .then(async () => {
            await db.collection('customItems').orderBy('order', 'desc').get()
            .then(async function(querySnapshot) {
              for (const doc of querySnapshot.docs){
                tempItems.push(doc.data())
                tempItems[i]['id'] = doc.id
                i += 1
              }
            })
          }
        )
      setCustomItems(tempItems)
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
            <GridListTile key={item.image[0]} cols={item.cols || 1} 
              onMouseOver={() => {handleMouseOver(i)}} onMouseLeave={() => {handleMouseLeave(i)}}
                >
                {customItems.length && <img src={item.image[0]} alt={item.image[0]} />}
                {open[i] === true ? 
                <>
                  <div className={classes.curtain} onClick={() => {handleListItemClick(i)}}>
                  </div>
                  {admin.admin ? 
                  <>
                  <IconButton className={classes.moveItemRight} 
                    onClick={() => {moveItemRight(item.id, item.order)}} >
                    <NavigateNextIcon />
                  </IconButton>
                  <IconButton className={classes.moveItemLeft} 
                    onClick={() => {moveItemLeft(item.id, item.order)}} >
                      <NavigateBeforeIcon />
                  </IconButton>
                  </>
                  : null}
                  </> : null}
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
      {openDialog === true ?
       <img className={classes.dialogImage} src={customItems[dialogIndex].image[0]}/>
       : null }
      <CloseIcon className={classes.closeIcon} onClick={() => {setOpenDialog(false)}}/>
      <IconButton className={classes.backArrow} onClick={() => {handlePreviousItem()}}>
        <ArrowBackIosIcon />
      </IconButton>
      <IconButton className={classes.forwardArrow} onClick={() => {handleNextItem()}}>
        <ArrowForwardIosIcon />
      </IconButton>
      {admin.admin ?
        <>
        <IconButton style={{color: 'white', position: 'absolute', top: 10, left: 10}}
          onClick={(event)=>{handleItemOptionsOpen(event)}}>
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={openMenu}
          getContentAnchorEl={null}
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          transformOrigin={{ vertical: "top", horizontal: "left" }}
          onClose={handleItemOptionsClose}
          >
            <MenuItem onClick={handleDeleteItem}>Delete Item</MenuItem>
        </Menu>
        </>
      : null }
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
          customItems={customItems}
        />
      </Dialog>
    </>
    )
}