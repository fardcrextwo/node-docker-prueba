const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello World desde una pull request" });
});

module.exports = router;
