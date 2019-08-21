const router = require('express').Router();
const budgetGet = require('../controllers/budgetGet.js');
const budgetTest = require('../controllers/budgetTest.js');
const budgetPost = require('../controllers/budgetPost.js');
const budgetDelete = require('../controllers/budgetDelete.js');
const budgetPut = require('../controllers/budgetPut.js');

// Routes
router.get('/budget/all', budgetGet.getAll);
router.get('/budget/allCategories', budgetGet.getCat);
router.get('/budget/allAccounts', budgetGet.getAcc);
router.get('/test/table/reset/tables', budgetTest.resetTables);
router.get('/test/table/fill/tables', budgetTest.fillTables);

router.post('/budget/addEntry', budgetPost.addEntry);

router.put('/budget/update/:id', budgetPut.updateOne);

router.delete('/budget/deleteEntry/:id', budgetDelete.deleteOne);

module.exports = router;