import useStyles from './Footer.style'
import Link from 'next/link'
import IconButton from '@material-ui/core/IconButton';
import PinterestIcon from '@material-ui/icons/Pinterest';
import InstagramIcon from '@material-ui/icons/Instagram';

export default function Footer(){
    const classes = useStyles()

    return(
        <div className={classes.container}>
            <div className={classes.main}>
                <Link href="/shipping-returns">
                    <a className={classes.a}>
                        Shipping & Returns
                    </a>
                </Link>
                <IconButton aria-label='Sacred Rites Pinterest'>
                <a href="https://www.pinterest.com/sacredritesjewelry/" 
                    target="_blank" rel="noopener noreferrer" aria-label='Sacred Rites Pinterest'>
                        <PinterestIcon style={{color: 'black'}}/>
                </a>
                </IconButton>
                <IconButton aria-label='Sacred Rites Instagram'>
                    <a href="https://www.instagram.com/sacred_rites_jewelry/" 
                        target="_blank" rel="noopener noreferrer" aria-label='Sacred Rites Instagram'>
                            <InstagramIcon style={{color: 'black'}}/>
                    </a>
                </IconButton>
            </div>
        </div>
    )
}