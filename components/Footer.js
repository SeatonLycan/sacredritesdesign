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
                <IconButton>
                <a href="https://www.pinterest.com/sacredritesjewelry/" 
                    target="_blank" rel="noopener noreferrer">
                        <PinterestIcon style={{color: 'black'}}/>
                </a>
                </IconButton>
                <IconButton>
                    <a href="https://www.instagram.com/sacred_rites_jewelry/" 
                        target="_blank" rel="noopener noreferrer">
                            <InstagramIcon style={{color: 'black'}}/>
                    </a>
                </IconButton>
            </div>
        </div>
    )
}