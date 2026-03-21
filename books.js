const mongoose = require('mongoose');

main().then((res) => {
    console.log("Connection Successful");
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is two low for amazon selling"],
    },
    discount: {
        type: Number,
        default: 0,
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"],
    },
    genre: [String]
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate("69bebe3a135f9e794dbef38f",
    {title: "Marvel Comics V2"},
    {runValidations: true })
    .then((res) => {
    console.log(res);
    
}).catch((err) => {
    console.log(err.erros.price.properties.message);
    
})

// let book1 = new Book({
//     title: "Marvel Comics",
//     price: "1000",
//     genre: ["comics", "superheros", "fiction"]
// });

// book1.save().then(res => {
//     console.log(res);
    
// }).catch((res) => {
//     console.log(err);
    
// });
