const { Router } = require("express");
const router = Router();
const axios = require("axios");

router.get("/", async (req, res) => {
    res.send('hola mundo');
  });


module.exports = router;