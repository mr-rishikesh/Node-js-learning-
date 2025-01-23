const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rishikeshkumar:rishikesh123@cluster0.lie6d.mongodb.net/').then(
    () => { console.log('Database connected successfully')}
).catch((err) => console.log("Error found here" , err));


const userSchema = new mongoose.Schema({
    name : String ,
    email : String , 
    age : Number , 
    isActive : Boolean ,
    tags : [String] ,
    createdAt : {type : Date , default : Date.now}
});

// create a user model
const User = mongoose.model('User' , userSchema);

async function runQueryExample(){
    try {
        //create a new document 
        // const newUser = await User.create({
        //     name : "Updated  user " ,
        //     email : "aman@gmail.com" , 
        //     age : 20 , 
        //     isActive : false ,
        //     tags : ['developer', 'manager'] 
        // })

        // this is the second method to create any instance 
        // const newUser = new User({
        //     name : "Rishikesh kumar Yadav" ,
        //     email : "rishikeshbhai393@gmail.com" , 
        //     age : 20 , 
        //     isActive : true ,
        //     tags : ['developer', 'manager'] 
        // })
        // await newUser.save();
        //console.log("New user created successfully" , newUser);
        const allUser = await User.find({ age : 100 , isActive : false} );
        console.log(allUser)

        // how to delete any user data
        // const deletedUser = await User.findByIdAndDelete(newUser._id);
        // console.log(deletedUser);
        



    //this is use to update any user data
        // const updteUser = await User.findByIdAndUpdate(newUser._id , {
        //     $set : {age : 100} , $push : {tags : "Android developer"}
        // } , {new : true})

        // console.log(updteUser);
        



      
        
    } catch (error) { console.log(error);
        
    } finally {
        await mongoose.connection.close();
    }
}
runQueryExample();