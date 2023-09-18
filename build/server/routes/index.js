"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const controllers_1 = require("./../controllers");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (req, res) => {
    return res.send('Olá dev');
});
router.get('/cidades', controllers_1.CidadesController.getAllValidation, controllers_1.CidadesController.getAll);
router.get('/cidades/:id', controllers_1.CidadesController.getByIdValidation, controllers_1.CidadesController.getById);
router.post('/cidades', controllers_1.CidadesController.createValidator, controllers_1.CidadesController.create);
router.put('/cidades/:id', controllers_1.CidadesController.updateByIdValidation, controllers_1.CidadesController.updateById);
router.delete('/cidades/:id', controllers_1.CidadesController.deleteByIdValidation, controllers_1.CidadesController.deleteById);
