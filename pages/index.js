import { useState } from 'react'
import Head from 'next/head'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import useStyles from '../styles/index.style'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { useTheme } from '@material-ui/core/styles'
import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import CloseIcon from '@material-ui/icons/Close'
import IconButton from '@material-ui/core/IconButton'

const shopItems = [
  {
    img: "https://images.squarespace-cdn.com/content/v1/58e583053a0411bf4edc7573/1572724488232-JE38C6YWTJ533C8HW2H6/ke17ZwdGBToddI8pDm48kHkmoO6CwjuOxzvhX6rrD_lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpwEf0wcMRo4OMNBYSpBnK0Pu7oVS3afTdiQB852Y8PUn153X4VZRblL9NSYokvTbPw/IMG_5731.jpg?format=500w",
    title: 'Desiccation Necklace',
    price: "$350.00",
    cols: 2,
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/58e583053a0411bf4edc7573/1572459285704-92KRLH5A7BG2DPQ6QYU6/ke17ZwdGBToddI8pDm48kK4IyTFWj-nzmfy3qICdh8tZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PIfVoY_Rut3bOGZ-U80-e8RRAOvpg_jB5mjURZQTSknjMKMshLAGzx4R3EDFOm1kBS/IMG_5673.jpg?format=500w",
    title: "Unearthed Ring",
    price: "$200.00",
    cols: 1
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/58e583053a0411bf4edc7573/1571428426947-I0PT9NZH3WHXOPQTFBI1/ke17ZwdGBToddI8pDm48kF8hYqNnYXbYA7qL3Yb3kUFZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PICWdrp5BkIo-QhJYRUaTYGLNKvj9yBjp5P4wfrkz5K1sKMshLAGzx4R3EDFOm1kBS/IMG_5558.jpg?format=500w",
    title: "Snowville Variscite Ring",
    price: "$260.00",
    cols: 1
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/58e583053a0411bf4edc7573/1565648948191-EZ3X1DO5SN22NVM4JJSQ/ke17ZwdGBToddI8pDm48kAw-fh6CyRzfUxPzn4nnHWpZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PINX5TVWvKWpZpGfnmZ1pNk2DMKZ-LeeH8AimzmWqdaacKMshLAGzx4R3EDFOm1kBS/IMG_4509.jpg?format=500w",
    title: 'Saguaro Variscite Signet Ring',
    price: "$300.00",
    cols: 1
  },
  {
    img: "https://images.squarespace-cdn.com/content/v1/58e583053a0411bf4edc7573/1555033488968-IPQI38PNYJKDW7JOCKP3/ke17ZwdGBToddI8pDm48kPgv0ZItuOPhOZ1JEt0uc617gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UdZuMiofIYA1YNg-cpohaGgSn53-I2sbAQSHhq9SgyQCm_c7z1K7QovUjPUprEAi5Q/LRG_DSC01274.JPG?format=500w",
    title: 'Luster Ring',
    price: "$350.00",
    cols: 1
  }
]

export default function Home() {
  const classes = useStyles()
  const [open, setOpen] = useState([])
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))
  const [openDialog, setOpenDialog] = useState(false)
  const [dialogInfo, setDialogInfo] = useState([])

  const handleListItemClick = (value) => {
    setOpenDialog(true)
    setDialogInfo(shopItems[value])
  }
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
    <>
    <div>
      <Head>
        <title>Sacred Rites Jewelry</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.shopTitle}>Shop</div>
      <div className={classes.root}>
        <GridList className={classes.gridList} spacing={6} cellHeight={matches ? 200 : 400} cols={3}>
          {shopItems.map((item, i) => (
            <GridListTile key={item.img} cols={item.cols || 1} 
              onMouseOver={() => {handleMouseOver(i)}} onMouseLeave={() => {handleMouseLeave(i)}}>
                <img src={item.img} alt={item.title} />
                {open[i] === true ? 
                  <div className={classes.curtain} >
                    <b className={classes.curtainText}>{item.title}, {item.price}</b>
                    <Button className={classes.quickView} variant="outlined" color="secondary"
                      onClick={() => {handleListItemClick(i)}}>
                        Quick View
                    </Button>
                  </div> : null}
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>

    <Dialog fullWidth={true} maxWidth = {'md'} onClose={() => {setOpenDialog(false)}} open={openDialog}>
      <DialogContent className={classes.dialogContainer}>
        <img className={classes.dialogImage} src={dialogInfo.img}/>
        <div className={classes.dialogItemInfoContainer}>
          <h1 style={{ fontWeight: 200 }}>{dialogInfo.title}</h1>
          <Divider className={classes.divider}/>
          <h1 style={{fontWeight: 200}}>{dialogInfo.price}</h1>
          {/* TODO : add details and specs when app is no longer using dummy data */}
          {/* <h2>{itemInfo.details}</h2>
          <h2>{itemInfo.specs}</h2> */}
          <Button variant="outlined" className={classes.addToCart}>ADD TO CART</Button>
        </div>
        <div className={classes.closeIcon}>
          <IconButton onClick={() => {setOpenDialog(false)}}>
            <CloseIcon />
          </IconButton>
        </div>
      </DialogContent>
    </Dialog>
    </>
    )
}