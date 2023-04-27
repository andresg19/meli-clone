const { Router } = require("express");
const router = Router();
const axios = require("axios");

router.get("/", async (req, res, next) => {
    const data = [
        {url: 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1055'},
        {url: 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1648'},
        {url: 'https://api.mercadolibre.com/sites/MLA/search?category=MLA1039'}
    ];
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
