const router = require('express').Router();
const budgetGet = require('../controllers/budgetGet.js');
const budgetTest = require('../controllers/budgetTest.js');

// Routes
router.get('/budget/all', budgetGet.getAll);
router.get('/budget/allCategories', budgetGet.getCat);
router.get('/budget/allAccounts', budgetGet.getAcc);
router.get('/test/table/reset/tables', budgetTest.resetTables);
router.get('/test/table/fill/tables', budgetTest.fillTables);

module.exports = router;