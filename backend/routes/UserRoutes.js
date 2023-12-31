const express=require("express");
const {
    registerUser,
    LoginUser,
    Logout,
    ForgotPassword,
    ResetPassword,
    getUserDetail,
    UpdatePassword,
    UpdateProfile,
    GetAllUsers,
    GetUser,
    UpdateUserProfile,
    DeleteUser,
  } = require('../controllers/UserControllers');
  const {IsAuthenticated,authorizedRoles}=require("../middleware/Auth");
const router=express.Router();
router.route("/register").post(registerUser);
router.route("/login").post(LoginUser);
router.route("/forgotpassword").post(ForgotPassword); 
router.route("/password/reset/:token").put(ResetPassword); 
router.route("/logout").get(Logout);
router.route("/me").get(IsAuthenticated,getUserDetail)
router.route("/me/update").put(IsAuthenticated,UpdateProfile)
router.route("/password/update").put(IsAuthenticated,UpdatePassword)
// -- Admin
router.route("/admin/users").get(IsAuthenticated,authorizedRoles("admin"),GetAllUsers) 
router.route("/admin/user/:id").get(IsAuthenticated,authorizedRoles("admin"),GetUser) 
router.route("/admin/user/:id").delete(IsAuthenticated,authorizedRoles("admin"),DeleteUser) 
router.route("/admin/user/:id").put(IsAuthenticated,authorizedRoles("admin"),UpdateUserProfile) 

module.exports=router ;
