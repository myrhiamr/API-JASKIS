const router = require('express').Router()

router.get('/test', (req, res) => {
 res.send('Hello')
})

module.exports = router