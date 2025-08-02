const express = require("express")
const router = express.Router()
const authController = require("../controllers/authController")

// @route   POST /api/auth/signup
// @desc    Register user
// @access  Public
router.post("/signup", authController.signup)

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post("/login", authController.login)

// @route   POST /api/auth/verify-otp
// @desc    Verify OTP
// @access  Public
router.post("/verify-otp", authController.verifyOTP)

// @route   POST /api/auth/resend-otp
// @desc    Resend OTP
// @access  Public
router.post("/resend-otp", authController.resendOTP)

// @route   POST /api/auth/forgot-password
// @desc    Forgot password
// @access  Public
router.post("/forgot-password", authController.forgotPassword)

// @route   POST /api/auth/reset-password
// @desc    Reset password
// @access  Public
router.post("/reset-password", authController.resetPassword)

module.exports = router
