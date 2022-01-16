const Book = require('../models/book');

exports.getBook = async (req, res, next) => {
  try {
    const book = await Book.find();

    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

exports.getDetail = async (req, res, next) => {
  try {
    const id = req.params.id;

    const book = await Book.findById(id);

    res.status(200).json(book);
  } catch (error) {
    next(error);
  }
};

exports.addBook = async (req, res, next) => {
  try {
    const {
      title,
      deskripsi,
      penulis,
      bahasa,
      harga,
    } = req.body;

    const newBook = new Book({
      title: title,
      deskripsi: deskripsi,
      penulis: penulis,
      bahasa: bahasa,
      harga: harga,
    });

    const book = await newBook.save();

    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

exports.putEditProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      title,
      deskripsi,
      penulis,
      bahasa,
      harga,
    } = req.body;

    const newBook = {
      title: title,
      deskripsi: deskripsi,
      penulis: penulis,
      bahasa: bahasa,
      harga: harga,
    };

    const book = await Book.findByIdAndUpdate(id, newBook);

    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const id = req.params.id;

    await Book.findByIdAndRemove(id);
    res.status(200).json({
      msg: "Data Berhasil Dihapus"
    })
  } catch (error) {
    next(error);
  }
};
