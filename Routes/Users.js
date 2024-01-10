const express = require('express')
const router = express.Router()
const db = require('../db')

//get user info
router.get('/:userEmail',async (req,res) => {
  try {
    const userEmail = req.params.userEmail
    const result = await db.query(
        `SELECT * FROM users WHERE email = $1`,[userEmail]);
        console.log(userEmail);
        res.status(200).json(result.rows)
  } catch (err) {
    console.log('encountered an error')
    console.error(err);
    res.status(500).send("internal server error");
  }
})

module.exports = router;