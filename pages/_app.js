import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdminContext from '../contexts/AdminContext'
import { auth } from '../firebase/firebase'

export default function MyApp(props) {
  const { Component, pageProps } = props
  const [admin, setAdmin] = useState('')

  useEffect(() => {
    auth.onAuthStateChanged((admin) => {
      admin ? setAdmin({ admin: admin.uid }) : setAdmin({ admin: null })
    })
  }, [])

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, [])

  return (
    <React.Fragment>
      <AdminContext.Provider value={admin}>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </AdminContext.Provider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}