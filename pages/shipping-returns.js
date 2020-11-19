import useStyles from '../styles/shipping-returns.style'
import Divider from '@material-ui/core/Divider'
import { NextSeo } from 'next-seo'

export default function ShippingReturns() {
    const classes = useStyles()

    return (
    <>
    <NextSeo
        title="Shipping and Returns  - Sacred Rites Jewlery"
        description="Denver-based silversmith and lapidary. Rare gemstones for unique and magical silver jewelry."
        openGraph={{
        url: 'https://sacredritesjewelry.vercel.app/shipping-returns'
        }}
    />
      <div className={classes.returnContainer}>
        <p className={classes.returnPolicy}>
            <span className={classes.returnText}>
               Return Policy
            </span>
            <span className={classes.returnMessage}>
                Sorry, ALL SALES ARE FINAL. I do not accept any returns or exchanges. 
            </span>
        </p>
        </div>
        <Divider />
        <div className={classes.infoContainer}>
            <p className={classes.infoParagraph}>
            <span className={classes.spanTitle}>Shipping Methods</span>
                Please allow 5-10 business days for shipping. Priority shipping & insurance is available if specified in message when ordering, however there will be an additional fee. Once shipped, you will receive an e-mail including the tracking number. I am not responsible for lost or stolen packages, but I will do my best to help track down your item for you.
            </p>
            <p className={classes.infoParagraph}>
            <span className={classes.spanTitle}>Custom Orders</span>
                I take custom orders through e-mail, please contact me at SacredRitesJewelry@gmail.com.
            </p>
        </div>
      </>
    )
}