const mongoose = require('mongoose');

main().then((res) => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test');
}

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});

const User = mongoose.model("User", userSchema);

User.insertMany([
    {name: "SK", email: "sk@gmail.com", age: 22},
    {name: "AK", email: "ak@gmail.com", age: 23},
    {name: "AP", email: "ap@gmail.com", age: 21},
]).then((res) => {
    console.log(res);
    
})

// const user2 = new User({
//     name: "Aditya",
//     email: "a@gamil.com",
//     age: 24,
// })

// user2.save().then((res) => {
//     console.log(res);
    
// })
// .catch((err) => {
//     console.log(err);
    
// })

