import LoginForm from '../forms/Login'
import Logout from '../components/Logout'
import Head from 'next/head'
import { useContext } from 'react'
import AdminContext from '../contexts/AdminContext'

export default function Admin() {
  const admin = useContext(AdminContext)
  console.log(admin.admin)

  if(admin.admin !== null){
    return(
      <div style={{backgroundColor: "rgba(90,90,90,.1)"}}>
        <Head>
            <title>Admin - Sacred Rites Jewelry</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={{width: '60%', margin: 'auto', padding: 20}}>
        <h1 style={{textAlign: 'center'}}>
          Logged In!
        </h1>
        <p style={{textAlign: 'center'}} >
          You may now access admin functionality on the site. Return to this page to log out.
        </p>
            <Logout />
        </div>
      </div>
    )
  }
  else{
    return(
      <div style={{backgroundColor: "rgba(90,90,90,.1)"}}>
        <Head>
            <title>Admin - Sacred Rites Jewelry</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div style={{width: '60%', margin: 'auto', padding: 20}}>
            <LoginForm/>
        </div>
      </div>
    )
  }
}