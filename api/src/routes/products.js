const { Router } = require("express");
const router = Router();
const axios = require("axios");
require('dotenv').config();

const data = [
    {url: process.env.CALL_PHONE},
    {url: process.env.CALL_COMP},
    {url: process.env.CALL_CAM}
];

router.get("/", async (req, res, next) => {
    try {
      let callPhones = await axios.get(data[0].url);
      let callComputing = await axios.get(data[1].url);
      let callCam = await axios.get(data[2].url);

      res.status(200).send([callPhones.data.results.slice(30,45), callComputing.data.results.slice(30,45), callCam.data.results.slice(30,45)]);
    } catch (error) {
        next(error)
    }
  });

 


module.exports = router;
