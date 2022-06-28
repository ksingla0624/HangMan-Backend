const { Router } = require("express");

const SessionPlay = require("./sessions");
const router = Router();
router.use("/sessions", SessionPlay);
module.exports = router;
