import Head from 'next/head'
import useStyles from '../styles/shipping-returns.style'
import Divider from '@material-ui/core/Divider'

export default function ShippingReturns() {
    const classes = useStyles()

    return (
        <>
        <Head>
            <title>Shipping and Returns - Sacred Rites Jewelry</title>
            <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.returnContainer}>
        <p className={classes.returnPolicy}>
            <span className={classes.returnText}>
               Return Policy
            </span>
            <span style={{fontSize: "16px"}}>
                Sorry, ALL SALES ARE FINAL. I do not accept any returns or exchanges. 
            </span>
        </p>
        </div>
        <Divider />
        <div className={classes.aboutContainer}>
            <p className={classes.aboutParagraph}>
            <span>Shipping Methods</span>
                Please allow 5-10 business days for shipping. Priority shipping & insurance is available if specified in message when ordering, however there will be an additional fee. Once shipped, you will receive an e-mail including the tracking number. I am not responsible for lost or stolen packages, but I will do my best to help track down your item for you.
            </p>
            <p className={classes.aboutParagraph}>
            <span>Custom Orders</span>
                I take custom orders through e-mail, please contact me at SacredRitesJewelry@gmail.com.
            </p>
        </div>
      </>
    )
}