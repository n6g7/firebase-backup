# firebase-backup

[![Greenkeeper badge](https://badges.greenkeeper.io/n6g7/firebase-backup.svg)](https://greenkeeper.io/)

[![CircleCI](https://circleci.com/gh/n6g7/firebase-backup.svg?style=svg)](https://circleci.com/gh/n6g7/firebase-backup)
[![npm version](https://badge.fury.io/js/firebase-backup.svg)](https://badge.fury.io/js/firebase-backup)
[![Known Vulnerabilities](https://snyk.io/test/github/n6g7/firebase-backup/badge.svg?targetFile=package.json)](https://snyk.io/test/github/n6g7/firebase-backup?targetFile=package.json)

Firebase functions to backup realtime and firestore databases.
Backup files are stored in firebase storage.

## Usage

- Install in your functions directory:
  ```sh
  cd ./functions
  npm install firebase-backup --save
  ```
- Register a new function in `functions/index.js`:
  ```js
  const backup = require('firebase-backup')

  exports.backup = backup.realtimeDb()
  ```

## To do

- [X] Support firestore
- [ ] Support other types of functions (pubsub, ...?)
- [ ] Option: only backup a subsection of the database (selector)
- [ ] Option: custom path for backup file
- [ ] Option: compress backup file
