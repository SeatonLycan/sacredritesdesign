import React from 'react'
import Snackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { SnackbarContent } from '@material-ui/core'
import Link from 'next/link'

export default function itemAddedSnackbar(props) {
    const action = (
        <IconButton size="small" aria-label="close" color="primary" onClick={props.handleCloseSnackbar}>
              <CloseIcon fontSize="small" style={{color: 'white'}}/>
        </IconButton>
    )
  return (
    <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          open={props.openSnackBar}
          autoHideDuration={3000}
          onClose={props.handleCloseSnackbar}
        >
          <SnackbarContent style={{backgroundColor: 'black'}}
          message={<Link href='/shopping-cart'><a style={{color: 'white'}}>Item Added to Cart</a></Link>}
          action={action} />
        </Snackbar>
    </div>
  )
}
