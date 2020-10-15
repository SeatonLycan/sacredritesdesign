import Head from 'next/head'
import Link from 'next/link'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import useStyles from '../styles/custom-orders.style'
import Button from '@material-ui/core/Button';

const shopItems = [
    {
        img: "https://images.squarespace-cdn.com/content/v1/58e583053a0411bf4edc7573/1547251665196-GNPP6U0JL1Y3QCAG85A5/ke17ZwdGBToddI8pDm48kDpFLiCYVJtCSGnHP9kSlixZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIkJ-ieHAFD0oDIPV4W_ebuO132jVxWscDmzpZMAj1xf8KMshLAGzx4R3EDFOm1kBS/IMG_2151.jpg?format=500w",
        title: '1',
        cols: 1
    },
  {
    img: "https://images.squarespace-cdn.com/content/v1/58e583053a0411bf4edc7573/1544331539076-EH41Z6NEGD00VAQ93J6C/ke17ZwdGBToddI8pDm48kN70YYSF1TxmNTlRAyUWn0RZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpznf815F2ZqBpT5ZgSi03z9sU-FpNrFuoNexlLMOlQ23dvz4lqtZ9uo1sfXwlurdPQ/IMG_1320.JPG?format=300w",
    title: '2',
    cols: 1,
  },
  {
      img: "https://images.squarespace-cdn.com/content/v1/58e583053a0411bf4edc7573/1544331327428-VZTPTJ71KLV2F89TE5BE/ke17ZwdGBToddI8pDm48kCXTVg0ByO0p77g6bpZL7-t7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmT2Rk9u7KA3hFIM978bk877VmOHOCSpdsNlW7GlpXIXYQVtHu55YcHOEzPLgr3oRG/IMG_0319.JPG?format=300w",
      title: '3',
      cols: 1,
  },
  {
      img: "https://images.squarespace-cdn.com/content/v1/58e583053a0411bf4edc7573/1574454263759-PKVZE75D7GO9IXPACY1H/ke17ZwdGBToddI8pDm48kCa4FqoOAuY54kaNznF3Jhd7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTm1v6GcKqh6mrhfxzW2tqo726BsENwc0JvpAjvzF11qiA9VxmGATaW1PGU4Hr10co2/CFA0D9D0-E876-4603-88A5-5EA7722667F2.JPG?format=300w",
      title: '4',
      cols: 1,
  },
  {
      img: "https://images.squarespace-cdn.com/content/v1/58e583053a0411bf4edc7573/1544331583648-6ZS7NSZVLSD5CLT5532Q/ke17ZwdGBToddI8pDm48kMh3mVmBaCAeGwqCLG3iONRZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIarJWwnumkapRz_nmTYj1dpaH2rx--_BA62nv3IYPJxMKMshLAGzx4R3EDFOm1kBS/IMG_1771.JPG?format=300w",
      title: '5',
      cols: 1
  },
  {
      img: "https://images.squarespace-cdn.com/content/v1/58e583053a0411bf4edc7573/1550624047697-8WXNAXRJ9TMB86QFIRQ0/ke17ZwdGBToddI8pDm48kOVY4cr8Ro_WOELIhyTbIpwUqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcxoRdRtkhBBTmRM2uYn9AK_qZrcZph2QJRARr4P-wlPhWkzghQb4Hn0bBWWncbiVX/IMG_2460.JPG?format=500w",
      title: '6',
      cols: 1
  }
]

export default function CustomOrders() {
  const classes = useStyles()
  const [open, setOpen] = React.useState([])

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

  return (
    <div>
      <Head>
        <title>Custom Orders - Sacred Rites Jewelry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.customTitle}>Custom Orders</div>
      <div className={classes.customButtons}>
        <Button variant="outlined" style={{border: "2px solid"}}>PLACE AN ORDER</Button>
        <Link className={classes.a} href='/shipping-returns'>
            <Button variant="outlined" style={{border: "2px solid"}}>LEARN MORE</Button>
        </Link>
      </div>
      <div className={classes.root}>
        <GridList className={classes.gridList} cellHeight={300} cols={3}>
          {shopItems.map((item, i) => (
            <GridListTile key={item.img} cols={item.cols || 1} 
              onMouseOver={() => {handleMouseOver(i)}} onMouseLeave={() => {handleMouseLeave(i)}}>
                <img src={item.img} alt={item.title} />
                {open[i] === true ? 
                  <div className={classes.curtain} >
                  </div> : null}
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
    )
}