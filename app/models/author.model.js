const mongoose = require('mongoose');

const authorschema = mongoose.Schema({
    name: {
        type: String,
    },
    year: Number,
    quequan: String,
    tieusu: String,
});


// Replace _id with id and remove __V
authorschema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

const authorModel = mongoose.model("Author", authorschema);
module.exports = authorModel;