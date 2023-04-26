const { Router } = require("express");
const router = Router();
const axios = require("axios");

router.get("/", async (req, res, next) => {
    try {
        let products = await axios.get('https://api.mercadolibre.com/sites/MLA/search?category=MLA1055');
        res.status(200).send(products.data.results)
    } catch (error) {
        next(error)
    }
  });


module.exports = router;