const User = require('../models/user')
const {Router} = require('express');
var bcrypt = require("bcryptjs");
const router = Router();


router.get('/',async(req,res)=>{
    const users = await  User.find();
   res.render('index',{users:users})
})


router.post('/register',async(req,res)=>{
    req.body.password = bcrypt.hashSync(req.body.password, 12)
    const user = new User(req.body);
    await user.save();
    res.status(200).send({users:user})
});

router.delete('/register/:id',async(req,res)=>{
   await User.findOneAndRemove({_id: req.params.id});
   res.status(200).send({id:req.params.id})
});


module.exports = router