import { useRouter } from "next/router"
import { db } from '../../firebase/firebase'
import { useEffect, useState, useContext } from 'react'
import useStyles from '../../styles/item.style'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Cookies from 'js-cookie'
import Head from 'next/head'
import IconButton from '@material-ui/core/IconButton'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import AdminContext from '../../contexts/AdminContext'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

const ShopItem = () => {
    const classes = useStyles()
    const router = useRouter()
    const { item } = router.query; // Destructuring our router object
    const [itemInfo, setItemInfo] = useState([])
	const admin = useContext(AdminContext)
	const [anchorEl, setAnchorEl] = useState(null)
	const [open, setOpen] = useState(false)
	const [docID, setDocID] = useState()

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
        Cookies.set('item_' + item, item, { expires: 1})
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
  
    return (
      <>
      <Head>
        <title>{itemInfo.name} - Sacred Rites Jewelry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.itemPageContainer}>
        <div className={classes.gridListContainer}>
        <GridList cellHeight={500} spacing={3} className={classes.gridList} cols={1}>
            {itemInfo.images && itemInfo.images.map((image, i) => (
            <GridListTile key={i} cols={1}>
                <img src={image} alt={item + i} />
            </GridListTile>
            ))}
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
            <h2>{itemInfo.details}</h2>
            <h2>{itemInfo.specs}</h2>
            <Button className={classes.AddToCartButton} onClick={() => {handleAddToCart(itemInfo.query)}}
                variant="outlined">
                    ADD TO CART
            </Button>
        </div>
      </div>
      </>
    );
  };
  
  export default ShopItem