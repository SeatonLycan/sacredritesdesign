import { useState } from 'react'
import Link from 'next/link'
import Divider from '@material-ui/core/Divider'
import useStyles from './Navbar.style'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

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
            <Divider />
        </div>
      </div>
      <div className={classes.container}>
        <img src="/favicon.ico" className={classes.logo} />
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
              <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                <Link href='/'>
                  <a>Shop</a>
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                <Link href='/'>
                  <a>Features</a>
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                <Link href='/custom-orders'>
                  <a>Custom Orders</a>
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                <Link href='/about'>
                  <a>About</a>
                </Link>
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                <Link href='/contact'>
                  <a>Contact</a>
                </Link>
              </MenuItem>
            </Menu>
        </div>
        <div className={classes.headerCenterSmall}>Sacred Rites Jewelry</div>
      </div>
    </>
  );
}
