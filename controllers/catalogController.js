const { getAll, getById } = require('../services/accommodation service');

const router = require('express').Router();

router.get('/', (req, res) => {

    const search = req.query.search || '';
    const city = req.query.city || '';
    const fromPrice = Number(req.query.fromPrice) || 1;
    const toPrice = Number(req.query.toPrice) || 1000;

    const rooms = getAll(search, city, fromPrice, toPrice);

    res.render('catalog', {
        title: 'All Accomodation',
        rooms,
        search,
        city,
        fromPrice,
        toPrice
    });
});

router.get('/:id', (req, res) => {
    const accId = req.params.id;
    const acc = getById(accId);

    if (acc) {
        res.render('details', {
            title: 'Accomodation Details',
            acc
        });
    } else {
        res.render('roomNotFound', {
            title: 'Room Not Found',
            accId
        });
    }


});

module.exports = router;