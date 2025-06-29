// Rutas para motos adaptadas desde movieRoutes.js
const express = require('express');
const router = express.Router();
const motoControllers = require('../controllers/motoControllers');
const { motoSchema } = require('../validators/motoValidators');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');

router.get('/', motoControllers.getMotos);
router.get('/:id', motoControllers.getMotoById);
router.post('/', auth, validate(motoSchema), motoControllers.createMoto);
router.put('/:id', auth, validate(motoSchema), motoControllers.updateMoto);
router.delete('/:id', auth, motoControllers.deleteMoto);

module.exports = router;
