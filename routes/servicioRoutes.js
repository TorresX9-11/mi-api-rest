const express = require('express');
const router = express.Router();
const servicioControllers = require('../controllers/servicioControllers');
const { servicioSchema } = require('../validators/servicioValidators');
const validate = require('../middleware/validate');
const auth = require('../middleware/auth');

router.get('/', servicioControllers.getServicios);
router.get('/:id', servicioControllers.getServicioById);
router.post('/', auth, validate(servicioSchema), servicioControllers.createServicio);
router.put('/:id', auth, validate(servicioSchema), servicioControllers.updateServicio);
router.delete('/:id', auth, servicioControllers.deleteServicio);

module.exports = router;
