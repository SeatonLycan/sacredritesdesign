import { useRouter } from "next/router"
import { db } from '../../firebase/firebase'
import { useEffect, useState } from 'react'
import useStyles from '../../styles/item.style'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'

const ShopItem = () => {
    const classes = useStyles()
    const router = useRouter()
    const { item } = router.query; // Destructuring our router object
    const [itemInfo, setItemInfo] = useState([])

    // TODO : remove dummy data after firebase data is setup. Add to Cart button functionality after shopping cart page is created. 

    const imgs = [
        'https://images.squarespace-cdn.com/content/v1/58e583053a0411bf4edc7573/1572724488232-JE38C6YWTJ533C8HW2H6/ke17ZwdGBToddI8pDm48kHkmoO6CwjuOxzvhX6rrD_lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEf0wcMRo4OMNBYSpBnK0Pu7oVS3afTdiQB852Y8PUn153X4VZRblL9NSYokvTbPw/IMG_5731.jpg?format=500w',
        'https://images.squarespace-cdn.com/content/v1/58e583053a0411bf4edc7573/1572724508931-WA6CIEHU3BK7E01BUYFN/ke17ZwdGBToddI8pDm48kG9Dsonrkjw8Kw9Zo2idDlRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI7CSoK0_9gYVLs64immiFwEcWhOPLjoZOd4Vo3hw07TMKMshLAGzx4R3EDFOm1kBS/IMG_5732.jpg?format=500w',
        'https://images.squarespace-cdn.com/content/v1/58e583053a0411bf4edc7573/1572724525884-FGFKF98VDSLU6LM7790V/ke17ZwdGBToddI8pDm48kGGMe-p6tsW85XPcXJvSjUtZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIS-eGyljwDLym-oVUt12-lxttZ7u0Wgqs4lrV7am_8TQKMshLAGzx4R3EDFOm1kBS/IMG_5733.jpg?format=500w',
    ]

    useEffect(() => {
        item && db.collection('shop').where('query', '==', item).get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                setItemInfo(doc.data())
            });
        })
    })
    
  
    return (
      <>
      <div className={classes.itemPageContainer}>
        <div className={classes.gridListContainer}>
        <GridList cellHeight={500} className={classes.gridList} cols={1}>
            {imgs.map((image, i) => (
            <GridListTile key={i} cols={1}>
                <img src={image} alt={i} />
            </GridListTile>
            ))}
        </GridList>
        </div>
        <div className={classes.itemInfoContainer}>
            <h1 style={{margin: '0px', fontWeight: 200}}>{itemInfo.name}</h1>
            <Divider className={classes.divider}/>
            <h1 style={{fontWeight: 200}}>{itemInfo.price}</h1>
            <h2>{itemInfo.details}</h2>
            <h2>{itemInfo.specs}</h2>
            <Button variant="outlined" className={classes.addToCart}>ADD TO CART</Button>
        </div>
      </div>
      </>
    );
  };
  
  export default ShopItem;