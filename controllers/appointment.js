const appointmentData=require('../models/appointment')
exports.postData=async(req,res,next)=>{
    console.log(req.body);
    let name =req.body.name;
    let phone =req.body.phone;
    let email =req.body.email;
    let data=await appointmentData.create({name:name,email:email,phone:phone});
    res.status(201).json({message:"Data Saved Successfully"});
  
}

exports.getData=async(req,res)=>{
    const data = await appointmentData.findAll();
    // Send the retrieved data as a JSON response
    res.status(200).json(data);
}

exports.deleteAppointment=async(req,res)=>{
    const id = req.params.id;
    await appointmentData.destroy({ where: { id } });
}

exports.editAppointment=async(req,res)=>{
    const id = req.params.id;
    await appointmentData.destroy({ where: { id } });
}