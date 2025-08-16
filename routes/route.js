const controller = require("../controllers/controller.js")
const express = require("express")
const router = express.Router();

router.get("/", controller.testfunc1);
router.get("/all", controller.getBooks);
router.get("/:name", controller.testfunc2);
router.post("/", controller.addBook);
router.put("/:id", controller.updateBook);
router.delete("/:id", controller.deleteBook);

module.exports = router;