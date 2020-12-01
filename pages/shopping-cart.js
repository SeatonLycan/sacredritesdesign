import useStyles from '../styles/shopping-cart.style'
import { useState, useEffect } from 'react'
import Cookies from 'js-cookie'
import { db } from '../firebase/firebase'
import Divider from '@material-ui/core/Divider'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'
import CheckoutForm from '../forms/Checkout'
import { NextSeo } from 'next-seo'
import Link from 'next/link'

export default function ShoppingCart() {
    const classes = useStyles()
    const [cartItems, setCartItems] = useState([])
    const [subtotal, setSubtotal] = useState(0)
    const [purchased, setPurchased] = useState(false)

    const getCart = () => {
        let items = Object.values(Cookies.get())
        items.length ? items = atob(items) : null
        items.length ? items = JSON.parse(items) : null
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
        let tempCookies = Object.values(Cookies.get())
        tempCookies.length ? tempCookies = atob(tempCookies) : null
        tempCookies.length ? tempCookies = JSON.parse(tempCookies) : null
        tempCookies.length === 1 ? Cookies.remove('cart') : null
        if (tempCookies.includes(itemName)) {
            const index = tempCookies.indexOf(itemName)
            tempCookies.splice(index, 1)
        }
        const cookiesJSON = JSON.stringify(tempCookies)
        const itemsEncode = btoa(cookiesJSON)
        Cookies.set('cart', itemsEncode, { expires: 7})
        getCart()
    }
    const handlePurchase = () => {
        setPurchased(true)
    }

    return(
        <>
        <NextSeo
            title="Shopping Cart - Sacred Rites Jewlery"
            description="Denver-based silversmith and lapidary. Rare gemstones for unique and magical silver jewelry."
            openGraph={{
            url: 'https://sacredritesjewelry.vercel.app/shopping-cart'
            }}
        />
        <div className={classes.cartContainer}>
            <div style={{textAlign: 'center'}}>
                <h1 className={classes.cartTitle}>Shopping Cart</h1>
                <p className={classes.purchaseInfo}>
                    All transactions are handled through Venmo and each purchase has flat shipping fee of $7.00. 
                    Upon checkout, an email will be sent to sacredritesjewelry@gmail.com 
                    and I will get back to you as soon as possible.
                </p>
                <Divider />
                {cartItems.length === 0 ? 
                    <p className={classes.noItems}>There are no items in your cart.</p>
                    : null
                }
            </div>
            {purchased === false ? 
                cartItems.map(item => {
                    return(
                        <div key={item.name}>
                        <div className={classes.cartItems}>
                            <img className={classes.itemImage} src={item.images[0]} />
                            <span className={classes.itemName}>
                                <Link href={`/shop/${item.query}`}>
                                    {item.name}
                                </Link>
                            </span>
                            <span className={classes.price}>${item.price}</span>
                            <IconButton className={classes.deleteButton} onClick={() => {handleRemoveItem(item.query)}}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                        <Divider />
                        </div>
                    )
                }) 
            :   
            <p className={classes.purchasedMessage}>
                Thank you for your support! I will contact you as soon as possible about your purchase!
            </p>
            }
            {purchased === false ? 
            <>
            <div className={classes.checkout}>
                <h3 className={classes.totals}>Total -  ${subtotal}.00</h3>
                <h3 className={classes.totals}>Shipping Fee -  $7.00</h3>
                <h1 className={classes.totals}>Subtotal -  ${subtotal + 7}.00</h1>
                <CheckoutForm items={cartItems} handlePurchase={handlePurchase}/>
            </div>
            </>
            : null
            }
        </div>
        </>
    )
}