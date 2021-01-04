import { useState, useEffect, useContext } from 'react'
import { db } from '../firebase/firebase'
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
import ItemAddedSnackbar from '../components/ItemAddedSnackBar'

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
  const [itemAdded, setItemAdded] = useState(0)
  const [openSnackBar, setOpenSnackBar] = useState(false)
 
  useEffect(() => {
    const tempItems = []
    var i = 0
    const getItems = async() => {
      await db.collection("shop").orderBy('order', 'desc').get().then(async function(querySnapshot) {
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
    let tempCookies = Object.values(Cookies.get())
    tempCookies.length ? tempCookies = atob(tempCookies) : null
    tempCookies.length ? tempCookies = JSON.parse(tempCookies) : null
    {tempCookies.includes(item) ? null : setOpenSnackBar(true)}
    {tempCookies.includes(item) ? null : tempCookies.push(item)}
    const cookiesJSON = JSON.stringify(tempCookies)
    const itemsEncode = btoa(cookiesJSON)
    Cookies.set('cart', itemsEncode, { expires: 7})
  }
  const closeAddItemDialog = () => {
    setAddItemDialogOpen(false)
  }
  const checkItemAdded = () => {
    setItemAdded(itemAdded + 1)
  }
  const moveItemLeft = async (id, order) => {
    const tempItems = []
    var i = 0
    const tempArray = [...items]
    let prevIndex
    let index

    function compare(a, b) {
      const orderA = a.order
      const orderB = b.order
    
      let comparison = 0
      if (orderA > orderB) {
        comparison = 1
      } else if (orderA < orderB) {
        comparison = -1
      }
      return comparison
    }
    
    tempArray.sort(compare)
    
    tempArray.map((item, i) => {
      if (item.order === order){
        index = i
        prevIndex = i + 1
      }
      i += 1
    })

    if (index + 1 === items.length){
      return null
    }
    else{
      console.log('move item to the left')
      await db.collection('shop').where('order', '==', tempArray[prevIndex].order).get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(async function(doc) {
            await db.collection('shop').doc(doc.id)
              .update({
                order: tempArray[index].order
            })
          })
        })
        .then(async () => {
          await db.collection('shop').doc(id)
            .update({
              order: tempArray[prevIndex].order
          })
        })
        .then(async () => {
          await db.collection("shop").orderBy('order', 'desc').get().then(async function(querySnapshot) {
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
  const moveItemRight = async (id, order) => {
    const tempItems = []
    var i = 0
    const tempArray = [...items]
    let nextIndex
    let index

    function compare(a, b) {
      const orderA = a.order
      const orderB = b.order
    
      let comparison = 0
      if (orderA > orderB) {
        comparison = 1
      } else if (orderA < orderB) {
        comparison = -1
      }
      return comparison
    }
    
    tempArray.sort(compare)
    
    tempArray.map((item, i) => {
      if (item.order === order){
        index = i
        nextIndex = i - 1
      }
      i += 1
    })


    if (index === 0){
      return null
    }
    else{
      console.log('move item to the right')
      await db.collection('shop').where('order', '==', tempArray[nextIndex].order).get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(async function(doc) {
            await db.collection('shop').doc(doc.id)
              .update({
                order: tempArray[index].order
            })
          })
        })
        .then(async () => {
          await db.collection('shop').doc(id)
            .update({
              order: tempArray[nextIndex].order
          })
        })
        .then(async () => {
            await db.collection("shop").orderBy('order', 'desc').get().then(async function(querySnapshot) {
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
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnackBar(false)
  }

  return (
    <>
    <div>
    <NextSeo
        title="Sacred Rites Design"
        description="Denver-based silversmith and lapidary. Rare gemstones for unique and magical silver jewelry."
        openGraph={{
          url: 'https://sacredritesdesign.com/'
        }}
      />
      <div className={classes.shopTitle}>Shop</div>
      <div className={classes.root}>
        <GridList className={classes.gridList} spacing={6} cellHeight={matches ? 250 : 500} cols={3}>
          {items.map((item, i) => (
            <GridListTile key={item.images[0]} cols={i === 0 ? 2 : 1} rows={i >= 2 ? 0.6 : 1}
              onMouseOver={() => {handleMouseOver(i)}} onMouseLeave={() => {handleMouseLeave(i)}}>
                <img src={item.images[0]} alt={item.name} />
                {open[i] === true ? 
                  <div style={{display: 'flex', justifyContent: 'center'}}>
                  <Link href={`/shop/${item.query}`}>
                  <div className={classes.curtain} >
                    <b className={classes.curtainText}>{item.name}, ${item.price}</b>
                  </div>
                  </Link>
                  {matches ? null : 
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
                  {matches ? 
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
                  <GridListTile cols={1} key={i} style={{height: '500px'}}>
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
            <p style={{width: '80%', fontSize: '16px'}}>{dialogInfo.details}</p>
            <p style={{width: '80%', fontSize: '16px'}}>{dialogInfo.specs}</p>
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
    <ItemAddedSnackbar handleCloseSnackbar={handleCloseSnackbar} openSnackBar={openSnackBar}/>
    </>
    )
}