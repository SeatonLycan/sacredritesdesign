import { useState, useEffect, useContext } from 'react'
import { db } from '../firebase/firebase'
import Head from 'next/head'
import Link from 'next/link'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import useStyles from '../styles/index.style'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import MuiDialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import Cookies from 'js-cookie'
import AdminContext from '../contexts/AdminContext'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import AddItemDialog from '../components/AddItemDialog'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore'
import NavigateNextIcon from '@material-ui/icons/NavigateNext'
import { NextSeo } from 'next-seo'

export default function Home() {
  const classes = useStyles()
  const [open, setOpen] = useState([])
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'))
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogInfo, setDialogInfo] = useState([])
  const [items, setItems] = useState([])
  const admin = useContext(AdminContext)
  const [addItemDialogOpen, setAddItemDialogOpen] = useState(false)
  const [itemAdded, setItemAdded] = useState(null)
 
  useEffect(() => {
    const tempItems = []
    var i = 0
    const getItems = async() => {
      await db.collection("shop").orderBy('order').get().then(async function(querySnapshot) {
        for (const doc of querySnapshot.docs){
          tempItems.push(doc.data())
          tempItems[i]['id'] = doc.id
          i += 1
        }
      })
      setItems(tempItems)
    }
    getItems()
  }, [itemAdded])

  const handleListItemClick = (value) => {
    setOpenDialog(true)
    setDialogInfo(items[value])
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
  const handleAddToCart = (item) => {
    Cookies.set('item_' + item, item, { expires: 1})
  }
  const closeAddItemDialog = () => {
    setAddItemDialogOpen(false)
  }
  const checkItemAdded = () => {
    setItemAdded(true)
  }
  const moveItemRight = async (id, order) => {
    const tempItems = []
    var i = 0
    const higherOrderItem = order + 1
    const itemListLength = items.length

    if (itemListLength === order){
      return null
    }
    else{
      console.log('move item to the right')
      await db.collection('shop').where('order', '==', higherOrderItem).get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(async function(doc) {
            await db.collection('shop').doc(doc.id)
              .update({
                order
            })
          })
        })
        .then(async () => {
          await db.collection('shop').doc(id)
            .update({
              order: higherOrderItem
          })
        })
        .then(async () => {
          await db.collection("shop").orderBy('order').get().then(async function(querySnapshot) {
            for (const doc of querySnapshot.docs){
              tempItems.push(doc.data())
              tempItems[i]['id'] = doc.id
              i += 1
            }
          })
        }
      )
      setItems(tempItems)
    }
  }
  const moveItemLeft = async (id, order) => {
    const tempItems = []
    var i = 0
    const lowerOrderItem = order - 1

    if (order === 1){
      return null
    }
    else{
      console.log('move item to the left')
      await db.collection('shop').where('order', '==', lowerOrderItem).get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(async function(doc) {
            await db.collection('shop').doc(doc.id)
              .update({
                order
            })
          })
        })
        .then(async () => {
          await db.collection('shop').doc(id)
            .update({
              order: lowerOrderItem
          })
        })
        .then(async () => {
            await db.collection("shop").orderBy('order').get().then(async function(querySnapshot) {
              for (const doc of querySnapshot.docs){
                tempItems.push(doc.data())
                tempItems[i]['id'] = doc.id
                i += 1
              }
            })
          }
        )
      setItems(tempItems)
    }
  }

  return (
    <>
    <div>
    <NextSeo
        title="Sacred Rites Jewlery"
        description="Denver-based silversmith and lapidary. Rare gemstones for unique and magical silver jewelry."
        openGraph={{
          url: 'https://sacredritesjewelry.vercel.app/'
        }}
      />
      <div className={classes.shopTitle}>Shop</div>
      <div className={classes.root}>
        <GridList className={classes.gridList} spacing={6} cellHeight={matches ? 200 : 400} cols={3}>
          {items.map((item, i) => (
            <GridListTile key={item.images[0]} cols={item.cols || 1} 
              onMouseOver={() => {handleMouseOver(i)}} onMouseLeave={() => {handleMouseLeave(i)}}>
                <img src={item.images[0]} alt={item.title} />
                {open[i] === true ? 
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Link href={`/shop/${item.query}`}>
                  <div className={classes.curtain} >
                    <b className={classes.curtainText}>{item.name}, ${item.price}</b>
                  </div>
                  </Link>
                  {matchesXS ? null : 
                    <Button style={{position: "absolute",
                      top: '50%',
                      color: "white",
                      lineHeight: '1.3em',
                      fontWeight: 400,
                      border: '1px solid',
                      padding: '5px',
                      borderRadius: '5px'}} 
                      variant="outlined" color="secondary"
                        onClick={() => {handleListItemClick(i)}}>
                          Quick View
                    </Button>  
                  }
                  {matchesXS ? 
                  <Link href={`/shop/${item.query}`}>
                    <Button style={{position: "absolute",
                      top: '50%',
                      color: "white",
                      lineHeight: '1.3em',
                      fontWeight: 400,
                      border: '1px solid',
                      padding: '5px',
                      borderRadius: '5px'}} 
                      variant="outlined" color="secondary">
                        View Item
                    </Button>
                  </Link> : null }
                  {/* Admin Only: change item order */}
                  {admin.admin && matchesXS === false ? 
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
                  </div>
                   : null}
            </GridListTile>
          ))}
        </GridList>
      </div>
      {/* Admin Only: Add Item to shop */}
      {admin.admin ? 
      <Fab variant="extended" color="primary" aria-label="add" 
        onClick={() => {setAddItemDialogOpen(true)}}
        style={{position: 'fixed', bottom: 10, right: 10, padding: '8px', borderRadius: '25px', color: 'white', backgroundColor: 'black'}}
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
        <AddItemDialog 
          onClose={closeAddItemDialog}
          itemAdded={checkItemAdded}
          items={items}
        />
      </Dialog>
    </div>

    <Dialog fullWidth={true} maxWidth={matches ? 'xs' : 'md'}
      onClose={() => {setOpenDialog(false)}} open={openDialog}>
      <MuiDialogContent>
        <div className={classes.dialogContainer}>

          <div className={classes.dialogImageContainer}>
            <GridList cellHeight={300} className={classes.gridList} cols={1}>
              {dialogInfo.images && dialogInfo.images.map((image, i)=> (
                  <GridListTile cols={1} key={i}>
                    <img src={image} key={i}/>
                  </GridListTile>
              ))}
            </GridList>
          </div>
          
          <div className={classes.dialogItemInfoContainer}>
            <div>
            <h1 className={classes.name}>{dialogInfo.name}</h1>
            <IconButton className={classes.closeIcon} onClick={() => {setOpenDialog(false)}}>
              <CloseIcon />
            </IconButton>
            </div>
            <Divider className={classes.divider}/>
            <h1 className={classes.price}>${dialogInfo.price}</h1>
            <p style={{width: '80%'}}>{dialogInfo.details}</p>
            <p style={{width: '80%'}}>{dialogInfo.specs}</p>
            <Button onClick={() => {handleAddToCart(dialogInfo.query)}} variant="outlined" 
              className={classes.addToCart}>
                ADD TO CART
            </Button>
            <br/>
            <Link href={`/shop/${dialogInfo.query}`}>
              <a className={classes.viewFullItem}>View Full Item</a>
            </Link>
          </div>

        </div>

      </MuiDialogContent>
    </Dialog>
    </>
    )
}