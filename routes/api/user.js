const express = require('express');
const router = express.Router();
const User = require('../../models/user');

router.get('/test',(req,res) => res.json({msg : 'Users Works'
}));


router.post('/register',(req,res) =>{

    User.findone({email : req.body.email})
    .then(user => {
        if(user){
            return res.status(400).json({email : 'Email already exists'});
        }else{
            const newUser = new User ({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password 
            })

            newUser.save()
            .then(user => res.json(user))
            .catch(err => console.log(err))

            
        }
    })
});

module.exports = router; 