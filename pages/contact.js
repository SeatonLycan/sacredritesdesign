import Head from 'next/head'
import React, { useState } from 'react'
import useStyles from '../styles/contact.style'
import Divider from '@material-ui/core/Divider'
import ContactForm from '../forms/Contact'

export default function About() {
    const classes = useStyles()
    const [contactSubmitted, setContactSubmitted] = useState(false)
  
    const submitContact = () => {
      setContactSubmitted(true)
    }

    return (
        <>
        <Head>
            <title>Contact - Sacred Rites Jewelry</title>
            <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.infoContainer}>
        <div className={classes.contact}>Contact</div>
          <p className={classes.info}>
            For custom requests & questions please email me: 
            <span style={{display: 'block', textAlign: 'center'}}>SacredRitesJewelry@gmail.com</span>
          </p>
      </div>
        <Divider />
        <div className={classes.containerContainer}>
          <div className={classes.contactFormContainer}>
            {contactSubmitted ? <div className={classes.responseContainer}>
              <p className={classes.responseParagraph}>
                <span className={classes.responseSpan}>Thank you! I will get back to you as soon as possible!</span>
              </p>
            </div>
            : <ContactForm submitContact={submitContact} />}
          </div>
        </div>
      </>
    )
}