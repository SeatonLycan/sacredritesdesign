import { useState} from 'react'
import Link from 'next/link'
import Divider from '@material-ui/core/Divider'
import useStyles from './Navbar.style'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'

export default function Navbar() {
  const classes=useStyles()
  const [menuAnchorElement, setMenuAnchorElement] = useState(null)
  
  const handleSmallMenuClick = (event) => {
    setMenuAnchorElement(event.currentTarget)
  }
  const handleCloseSmallMenu = () => {
    setMenuAnchorElement(null)
  }

  return (
      <>
      <div className={classes.container}>
        <div className={classes.main}>
          <Link href='/'>
                <a className={classes.a}>Shop</a>
            </Link>
            <Link href='/'>
                <a className={classes.a}>Features</a>
            </Link>
            <Link href='/custom-orders'>
                <a className={classes.a}>Custom Orders</a>
            </Link>
            <Link href='/about'>
                <a className={classes.a}>About</a>
            </Link>
            <Link href='/contact'>
                <a className={classes.a}>Contact</a>
            </Link>
            <Link href='/shopping-cart'>
              <a className={classes.a}>Shopping Cart</a>
            </Link>
            <Divider />
        </div>

      </div>
      <div className={classes.container}>
        <img src="https://firebasestorage.googleapis.com/v0/b/sacred-rites-jewelry.appspot.com/o/siteLogo%2FSR_SNAKE_2.jpg?alt=media&token=fd0a4537-7133-49ed-9e06-014016d3d64b"
          className={classes.logo} />
      </div>
      <div className={classes.container}>
        <h1 className={classes.header}>Sacred Rites Jewelry</h1>
      </div>

      <div className={classes.containerSmall}>
        <div className={classes.headerLeftSmall}>
          <IconButton className={classes.iconButton} edge="start" color="primary" aria-label="menu" 
              onClick={(event)=>{handleSmallMenuClick(event)}}>
            <MenuIcon className={classes.menuIcon}/>
          </IconButton>
          <Menu
              id="simple-menu"
              anchorEl={menuAnchorElement || null}
              keepMounted
              open={Boolean(menuAnchorElement)}
              onClose={handleCloseSmallMenu}
            >
              <Link href='/'>
                <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                    <a>Shop</a>
                </MenuItem>
              </Link>
              <Divider />
              <Link href='/'>
                <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                    <a>Features</a>
                </MenuItem>
              </Link>
              <Divider />
              <Link href='/custom-orders'>
                <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                    <a>Custom Orders</a>
                </MenuItem>
              </Link>
              <Divider />
              <Link href='/about'>
                <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                    <a>About</a>
                </MenuItem>
              </Link>
              <Divider />
              <Link href='/contact'>
                <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                    <a>Contact</a>
                </MenuItem>
              </Link>
            </Menu>
        </div>
        <div className={classes.headerCenterSmall}>Sacred Rites Jewelry</div>
        <div className={classes.headerRightSmall}>
        <Link href='/shopping-cart'>
          <IconButton>
            <ShoppingCartIcon style={{color: 'white'}}/>
          </IconButton>
        </Link>
        </div>
      </div>
    </>
  );
}
