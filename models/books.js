const mongoose = require('mongoose');

const booksSchema = mongoose.Schema({
  id: {type: Number},
  userId: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true},
  rating: [{
    userId: { type: String, required: true },
    grade: { type: Number },
  }],
  averageRating: { type: Number },
});

module.exports = mongoose.model('Book', booksSchema);