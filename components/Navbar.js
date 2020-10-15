import Link from 'next/link'
import Divider from '@material-ui/core/Divider'
import useStyles from './Navbar.style'

export default function Navbar() {
  const classes=useStyles()

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
            <Link href='/'>
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
    </>
  );
}
