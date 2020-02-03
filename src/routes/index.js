var express = require("express");
var router = express.Router();

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

module.exports = router;
