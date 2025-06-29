// Validadores para motos usando Joi
const Joi = require('joi');

const motoSchema = Joi.object({
  marca: Joi.string().required(),
  modelo: Joi.string().required(),
  anio: Joi.number().integer().min(1900).max(new Date().getFullYear()).required(),
  color: Joi.string().optional(),
  precio: Joi.number().optional()
});

module.exports = { motoSchema };
