import { useState, useContext } from 'react'
import Link from 'next/link'
import Divider from '@material-ui/core/Divider'
import useStyles from './Navbar.style'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AdminContext from '../contexts/AdminContext'

export default function Navbar() {
  const classes=useStyles()
  const admin = useContext(AdminContext)
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
            <Link href='/custom-orders'>
                <a className={classes.a}>Customs</a>
            </Link>
            <Link href='/about'>
                <a className={classes.a}>About</a>
            </Link>
            <Link href='/contact'>
                <a className={classes.a}>Contact</a>
            </Link>
            <Link href='/shopping-cart'>
              <a className={classes.a}>Cart</a>
            </Link>
            {admin.admin ? <Link href='/admin'>
              <a className={classes.a}>Admin</a>
            </Link> : null }
            <Divider />
        </div>

      </div>
      <div className={classes.container}>
        <img src="https://firebasestorage.googleapis.com/v0/b/sacred-rites-jewelry.appspot.com/o/siteLogo%2FSR_SNAKE_2.jpg?alt=media&token=fd0a4537-7133-49ed-9e06-014016d3d64b"
          alt="SacredRitesLogo" className={classes.logo} />
      </div>
      <div className={classes.container}>
        <h1 className={classes.header}>Sacred Rites Design</h1>
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
              <div>
                <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                  <Link href='/'>
                    <a className={classes.aSmall}>Shop</a>
                  </Link>
                </MenuItem>
              </div>
              <div>
                <Divider />
                <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                  <Link href='/custom-orders'>
                      <a className={classes.aSmall}>Customs</a>
                  </Link>
                </MenuItem>
              </div>
              <div>
                <Divider />
                <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                  <Link href='/about'>
                      <a className={classes.aSmall}>About</a>
                  </Link>
                </MenuItem>
              </div>
              <div>
                <Divider />
                <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                  <Link href='/contact'>
                      <a className={classes.aSmall}>Contact</a>
                  </Link>
                </MenuItem>
              </div>
              <div>
                <Divider />
                <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                  <Link href='/shopping-cart'>
                      <a className={classes.aSmall}>Cart</a>
                  </Link>
                </MenuItem>
              </div>
              {admin.admin ?
              <div>
                <Divider />
              <MenuItem onClick={() => {handleCloseSmallMenu()}}>
                <Link href='/admin'>
                  <a className={classes.aSmall}>Admin</a>
                </Link>
              </MenuItem>
              </div>
              : null }
            </Menu>
        </div>
        <div className={classes.headerCenterSmall}>Sacred Rites Design</div>
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
