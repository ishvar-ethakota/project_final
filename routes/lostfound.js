const express = require("express")
const router = express.Router()
const auth = require("../middleware/auth")
const { postItem, getApprovedItems, getUserItems, getPendingItems } = require("../controllers/lostFoundController")
const multer = require("multer")
const path = require("path")

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/lostfound/")
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`)
  },
})

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|gif/
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase())
    const mimetype = filetypes.test(file.mimetype)
    if (mimetype && extname) {
      return cb(null, true)
    } else {
      cb(new Error("Only image files are allowed!"))
    }
  },
})

// Placeholder for lost and found routes
router.get("/", (req, res) => {
  res.json({ message: "Lost and Found routes working" })
})

// Post a lost item (requires authentication)
router.post("/post-item", auth, upload.single("image"), postItem)

// Get all approved lost items
router.get("/approved-items", getApprovedItems)

// Get user's own lost items (requires authentication)
router.get("/my-items", auth, getUserItems)

// Get pending lost items (admin only)
router.get("/pending-items", auth, getPendingItems)

module.exports = router
