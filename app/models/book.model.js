const mongoose = require('mongoose');
// const authorModel = require("./author.model");

const bookschema = mongoose.Schema({
    name: {
        type: String,
    },
    date: {
        type: String,
    },
    theloai: {
        type: String,
    },
    tacgia: {
        // type: mongoose.Schema.Types.ObjectId,
        // ref: "Author"
        type: String,
    },
    noidung: {
        type: String,
    },
}, );

bookschema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});
const BookModel = mongoose.model("Book", bookschema);
module.exports = BookModel;

// BookModel.find()
//     .populate("tacgia")
//         .then((data) => {
//         console.log(data);
//     })
//     .catch(function(err) {
//         console.log(err);
//     })
// async function UsePopulate() {
//     const BookModels = await BookModel.find().populate("tacgia")

//      console.log(BookModels)
// }
// UsePopulate()