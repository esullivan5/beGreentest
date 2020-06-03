const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
var auth = require("../controllers/authController");
// API Routes

router.post("/api/users/register", auth.doRegister);
router.post("/api/users/checkuser", auth.doLogin);
router.post("/api/users/fav", auth.doFav);
// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
