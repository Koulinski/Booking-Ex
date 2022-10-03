const { getAll, getById } = require('../services/roomService');

const router = require('express').Router();

router.get('/', async (req, res) => {

    const search = req.query.search || '';
    const city = req.query.city || '';
    const fromPrice = Number(req.query.fromPrice) || 1;
    const toPrice = Number(req.query.toPrice) || 1000;

    const rooms = await getAll(search, city, fromPrice, toPrice);

    res.render('catalog', {
        title: 'All Accomodation',
        rooms,
        search,
        city,
        fromPrice,
        toPrice
    });
});

router.get('/:id', async (req, res) => {
    const accId = req.params.id;
    const acc = await getById(accId);

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