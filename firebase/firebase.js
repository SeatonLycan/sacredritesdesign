// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app")

// Add the Firebase products that you want to use
require("firebase/auth")
require("firebase/firestore")
require("firebase/storage")

const firebaseConfig = {
  apiKey: "AIzaSyCKCpgLdlUso9M-C-cdfKmGdkSGRh41yzY",
  authDomain: "sacred-rites-jewelry.firebaseapp.com",
  databaseURL: "https://sacred-rites-jewelry.firebaseio.com",
  projectId: "sacred-rites-jewelry",
  storageBucket: "sacred-rites-jewelry.appspot.com",
  messagingSenderId: "426780987510",
  appId: "1:426780987510:web:a1eab22329228753450f57"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export const db = firebase.firestore()
export const auth = firebase.auth()
export default firebase