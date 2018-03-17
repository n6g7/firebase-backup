const admin = require('firebase-admin')
const functions = require('firebase-functions')

const realtimeDBReader = require('./realtimedb')

const getDestinationPath = () => {
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth() + 1
  const day = now.getDate()

  return `backups/${year}/${month}/${day}.json`
}

const storeBackup = (data, path) => {
  const file = admin
    .storage()
    .bucket()
    .file(path)

  const stream = file.createWriteStream({
    metadata: {
      contentType: 'application/json'
    }
  })
  const json = JSON.stringify(data)

  return new Promise((resolve, reject) => {
    stream.write(json)
    stream.end()

    stream.on('error', reject)
    stream.on('finish', resolve)
  })
}

const buildBackup = (reader, dest = getDestinationPath) =>
  functions.https.onRequest((req, res) => {
    reader()
      .then(data => storeBackup(data, dest()))
      .then(() => res.status(200).send('Backup saved'))
      .catch(error => {
        console.error(error)
        res.sendStatus(500)
      })
  })

module.exports = {
  realtimeDb: dest => buildBackup(realtimeDBReader, dest)
}
