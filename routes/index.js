var express = require('express');
const {
  getBook,
  getDetail,
  addBook,
  deleteBook,
  getEditProduct,
  postEditProduct,
} = require('../controllers/book');
var router = express.Router();

/* GET home page. */
router.get('/', getBook);

router.get('/detail/:id', getDetail);

router.get('/tambah', function (req, res, next) {
  res.render('tambah');
});

router.post('/tambah', addBook);

router.get('/edit/:id', getEditProduct);

router.post('/edit/:id', postEditProduct);

router.post('/delete/:id', deleteBook);

module.exports = router;
