import useStyles from '../styles/shopping-cart.style'
import { useState, useEffect } from 'react'
import Head from 'next/head'
import Cookies from 'js-cookie'
import { db } from '../firebase/firebase'
import Divider from '@material-ui/core/Divider'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import CheckoutForm from '../forms/Checkout'

export default function ShoppingCart() {
    const classes = useStyles()
    const [cartItems, setCartItems] = useState([])
    const [subtotal, setSubtotal] = useState(0)

    const getCart = () => {
        const items = Object.values(Cookies.get())
        if(items.length){
            const getItems = async () => {
                await db.collection('shop').where('query', 'in', items).get()
                    .then(function(querySnapshot) {
                        let newItems = []
                        let total = 0
                        var i = 0
                        querySnapshot.forEach((doc) => {
                            newItems[i] = doc.data()
                            total += parseInt(doc.data().price)
                            i += 1
                        })
                    setCartItems(newItems)
                    setSubtotal(total)
                })
            }
            getItems()
        }
        else{
            setCartItems([])
            setSubtotal(0)
        }
    }

    useEffect(() => {
        getCart()
    }, [])

    const handleRemoveItem = (itemName) => {
        Cookies.remove('item_' + itemName)
        getCart()
    }

    return(
        <>
        <Head>
            <title>Shopping Cart - Sacred Rites Jewelry</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={classes.cartContainer}>
            <div style={{textAlign: 'center'}}>
                <h1 className={classes.cartTitle}>Shopping Cart</h1>
                <p style={{width: '80%', margin: 'auto', marginBottom: '20px'}}>
                    All transactions are handled through Venmo. 
                    Upon checkout, an email will be sent to sacredritesjewelry@gmail.com and I will get back to you as soon as possible.
                </p>
            </div>
            {cartItems.map(item => {
                return(
                    <div key={item.name}>
                    <div className={classes.cartItems}>
                        <img className={classes.itemImage} src={item.images[0]} />
                        <span className={classes.nameAndPrice}>{item.name}</span>
                        <span className={classes.nameAndPrice}>${item.price}</span>
                        <IconButton onClick={() => {handleRemoveItem(item.query)}}>
                            <CloseIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    </div>
                )
            })}
            <div className={classes.checkout}>
            <h1 style={{fontWeight: 200}}>Subtotal -  ${subtotal}.00</h1>
            <CheckoutForm items={cartItems}/>
            </div>
        </div>
        </>
    )
}