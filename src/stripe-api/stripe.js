import dotenv from 'dotenv';
dotenv.config();

import express from "express";
import Stripe from "stripe";
import bodyParser from "body-parser";
import cors from "cors";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors({ origin: 'http://localhost:3030', methods: ['GET', 'POST', 'OPTIONS'], allowedHeaders: ['Content-Type'] }));
app.use(bodyParser.json());

app.options('*', cors()); // Enable preflight requests for all routes

app.post('/create-checkout-session', async (req, res) => {
    try {
        const { items } = req.body; // Changed cartItems to items
        console.log('Received cart items:', items); // Log received cart items

        if (!Array.isArray(items) || items.length === 0) {
            return res.status(400).json({ error: 'Invalid cart items' });
        }

        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                { shipping_rate: 'shr_1PYoF7HC6nOX9y45Sja720jV' },
                { shipping_rate: 'shr_1PYoGGHC6nOX9y453isqaUtV' }
            ],
            line_items: items.map(item => ({ 
                price_data: {
                    currency: 'eur',
                    product_data: {
                        name: item.price_data.product_data.name,
                    },
                    unit_amount: item.price_data.unit_amount,
                },
                quantity: item.quantity
            })),
            success_url: 'http://localhost:3030/success',
            cancel_url: 'http://localhost:3030/cancel'
        };

        console.log('Checkout session params:', params); // Log params sent to Stripe

        const session = await stripe.checkout.sessions.create(params);
        res.status(200).json(session);
    } catch (err) {
        console.error('Error creating checkout session:', err); // Log server-side error
        res.status(err.statusCode || 500).json({ error: err.message });
    }
});

app.all('/create-checkout-session', (req, res) => {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
});

const PORT = 8800;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
