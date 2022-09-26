const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'GET de Produtos'
    })
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'POST de Produtos'
    })
});

module.exports = router;