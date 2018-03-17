const admin = require('firebase-admin')

exports.collection = path =>
  admin
    .firestore()
    .collection(path)
    .get()
    .then(snapshot => snapshot.docs.map(doc => doc.data()))

exports.document = path =>
  admin
    .firestore()
    .doc(path)
    .get()
    .then(snapshot => {
      if (!snapshot.exists) throw new Error('No data')
      else return snapshot.data()
    })
