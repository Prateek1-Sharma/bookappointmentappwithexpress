const express=require("express");

const router=express.Router();
const appointmentController=require('../controllers/appointment')
router.post("/appointment",appointmentController.postData)
router.get("/appointment",appointmentController.getData)
router.delete(`/appointment/:id`,appointmentController.deleteAppointment)
router.get(`/appointment/:id`,appointmentController.editAppointment)
module.exports=router;