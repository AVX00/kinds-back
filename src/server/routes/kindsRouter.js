const express = require("express");
const {
  updateKind,
  deleteKind,
  listKinds,
  getKind,
  createKind,
} = require("../controllers/kindsControlerrs");

const router = express.Router();

router.get("/list", listKinds);
router.get("/kind/:id", getKind);
router.post("/new-kind", createKind);
router.put("/kind/:id", updateKind);
router.delete("/kind/:id", deleteKind);

module.exports = router;
