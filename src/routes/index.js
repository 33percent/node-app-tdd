var express = require("express");
var router = express.Router();
import getpost from '../modules/jsonplaceholder';
/* GET home page. */
router.get("/", function(req, res, next) {
  res.json({
    status: "working perfectly fine"
  });
});

router.get("/ping", (req,res,next) => {
  res.json({
    status:"success"
  })
});

router.post("/get-post", async (req,res,next) => {
  try {
    const data = await getpost(req.body.id);
    res.json(data)      
  }catch(err) {
    res.json({})
  }
})

module.exports = router;
