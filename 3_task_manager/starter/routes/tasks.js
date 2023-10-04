const express = require("express")
const router = express()
const {getAllTasks}=require('../controller/tasks')
router.route('/').get(getAllTasks)
module.exports = router
