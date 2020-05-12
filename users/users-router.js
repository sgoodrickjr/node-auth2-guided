const express = require("express")
const userModel = require("./users-model")
const restrict = require("../middleware/restrict")

const router = express.Router()

router.get("/", restrict(), async (req, res, next) => {
	try {
		console.log("session:", req.session)
		res.json(await userModel.find())
	} catch(err) {
		next(err)
	}
})

module.exports = router