import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import {StylesProvider, ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AdminContext from '../contexts/AdminContext'
import { auth } from '../firebase/firebase'
import { DefaultSeo } from 'next-seo'
import SEO from '../SEO/next-seo.config'

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
            <title>Sacred Rites Jewelry</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          </Head>
          <StylesProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <DefaultSeo {...SEO}/>
              <Navbar />
              <Component {...pageProps} />
              <Footer />
            </ThemeProvider>
          </StylesProvider>
      </AdminContext.Provider>
    </React.Fragment>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}