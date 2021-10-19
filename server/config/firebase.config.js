const admin = require("firebase-admin");

const serviceAccount = require("../config/service-account-file.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://misiontic-bb459-default-rtdb.firebaseio.com"
});
const db = admin.firestore();
const docRef = db.collection('users')
module.exports=db;
