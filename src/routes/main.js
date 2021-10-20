const express =require('express')
const router = express.Router()

const {index} = require('../controllers/mainController')


const accessAdmin = require('../middleware/adminAccess')


router.get('/',accessAdmin, index)

module.exports = router