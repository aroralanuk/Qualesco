const express = require('express');

const router = express.Router();

router.use('/login', (req, res) => {
        res.send({
          token: 'test123'
        });
      });

module.exports = router;