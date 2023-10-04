const express = require('express');
const router = express.Router();

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const environment = process.env.ENVIRONMENT || 'sandbox';
const client_id = process.env.PAYPAL_CLIENT_ID;
const client_secret = process.env.PAYPAL_CLIENT_SECRET;
const endpoint_url = environment === 'sandbox' ? 'https://api-m.sandbox.paypal.com' : 'https://api-m.paypal.com';

const paypalDonation = require('../modules/paypal/paypal.donation');

vlue

function get_access_token() {
    const auth = `${client_id}:${client_secret}`
    console.log(auth);
    const data = 'grant_type=client_credentials'
    return fetch(endpoint_url + '/v1/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': `Basic ${Buffer.from(auth).toString('base64')}`
        },
        body: data
    })
        .then(res => res.json())
        .then(json => {
            console.log(json)
            return json.access_token;
        })
}

router.post('/', async (req, res) => {
    try {
        let paypal_access_token = await get_access_token();
        const {order_id, intent} = req.body;
        console.log('order_id: ', order_id);
        console.log('intent: ', intent);
        let completed_donation = await fetch(endpoint_url + '/v2/checkout/orders/' + order_id + '/' + intent, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${paypal_access_token}`
            }
        });
        console.log('completed_donation: ', completed_donation);
        res.status(200).json(paypal_access_token);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Ein Fehler beim spenden ist aufgetreten.' });
    }
});

module.exports = router;
