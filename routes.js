const express = require('express')
const router = express.Router()
const {
  verifyToken
} = require('./controller')

router.post('/verify', verifyToken)

module.exports = router
