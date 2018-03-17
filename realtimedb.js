const admin = require('firebase-admin')

module.exports = path =>
  admin
    .database()
    .ref(path)
    .once('value')
    .then(snapshot => {
      if (!snapshot.exists()) throw new Error('No data')
      else return snapshot.val()
    })
