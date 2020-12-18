import { useRouter } from "next/router"
import { db } from '../../firebase/firebase'
import { useEffect, useState, useContext } from 'react'
import useStyles from '../../styles/item.style'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Cookies from 'js-cookie'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AdminContext from '../../contexts/AdminContext'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { NextSeo } from 'next-seo'
import ItemAddedSnackbar from '../../components/ItemAddedSnackBar'

const ShopItem = () => {
  const classes = useStyles()
  const router = useRouter()
  const { item } = router.query; // Destructuring our router object
  const [itemInfo, setItemInfo] = useState([])
  const admin = useContext(AdminContext)
  const [anchorEl, setAnchorEl] = useState(null)
  const [open, setOpen] = useState(false)
  const [docID, setDocID] = useState()
  const [openSnackBar, setOpenSnackBar] = useState(false)

  useEffect(() => {
      item && db.collection('shop').where('query', '==', item).get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
      setItemInfo(doc.data())
      setDocID(doc.id)
          })
      })
  }, [item])
    
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
  const handleDeleteItem = () => {
      db.collection('shop').doc(docID).delete()
          .then(router.push('/'))
  }
  const handleItemOptionsClose = () => {
      setOpen(false)
  }
  const handleItemOptionsOpen = (event) => {
      setOpen(true)
      setAnchorEl(event.currentTarget)
  }
  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpenSnackBar(false)
  }
  
    return (
      <>
      {itemInfo.images ?
      <NextSeo
        title={`${itemInfo.name} - Sacred Rites Design`}
        description="Denver-based silversmith and lapidary. Rare gemstones for unique and magical silver jewelry."
        openGraph={{
          title: itemInfo.name,
          url: `https://sacredritesdesign.com/shop/${item}`,
          images: [
          {
            url: itemInfo.images[0],
            width: 800,
            height: 600,
            alt: 'Sacred Rites Logo'
          }
        ]
        }}
      /> : null }
      <div className={classes.itemPageContainer}>
        <div className={classes.gridListContainer}>
        <GridList spacing={3} className={classes.gridList} cols={1}>
            {itemInfo.images ? itemInfo.images.map((image, i) => (
            <GridListTile key={i} cols={1} style={{height: 'auto'}}>
                <img className={classes.gridImage} src={image} alt={itemInfo.name} />
            </GridListTile>
            )): ''}
        </GridList>
        </div>
        <div className={classes.itemInfoContainer}>
            <h1 className={classes.itemName}>
                {itemInfo.name}
                {admin.admin ? 
                    <>
                    <IconButton onClick={(event)=>{handleItemOptionsOpen(event)}}>
                        <MoreVertIcon />
                    </IconButton>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={open}
                        getContentAnchorEl={null}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        transformOrigin={{ vertical: "top", horizontal: "left" }}
                        onClose={handleItemOptionsClose}
                        >
                            <MenuItem onClick={handleDeleteItem}>Delete Item</MenuItem>
                    </Menu> 
                    </>: null}
            </h1>
            <Divider className={classes.divider}/>
            <h1 className={classes.itemPrice}>${itemInfo.price}</h1>
            <h2 className={classes.detailsAndSpecs}>{itemInfo.details}</h2>
            <h2 className={classes.detailsAndSpecs}>{itemInfo.specs}</h2>
            <Button onClick={() => {handleAddToCart(itemInfo.query)}}
                variant="outlined">
                    ADD TO CART
            </Button>
        </div>
      </div>
      <ItemAddedSnackbar handleCloseSnackbar={handleCloseSnackbar} openSnackBar={openSnackBar}/>
      </>
    )
  }
  
  export default ShopItem