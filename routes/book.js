var express = require('express');
const {
  getBook,
  getDetail,
  addBook,
  deleteBook,
  putEditProduct,
} = require('../controllers/book');
var router = express.Router();

/* GET home page. */
router.get('/', getBook);

router.get('/detail/:id', getDetail);

router.post('/tambah', addBook);

router.put('/edit/:id', putEditProduct);

router.delete('/delete/:id', deleteBook);

module.exports = router;
