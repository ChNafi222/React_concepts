const axios = require('axios');
const cheerio = require('cheerio');

// Define the base URL
const baseUrl = 'https://batteryplus.pk/product/lg-velvet-5g-battery-replacement-capacity-4300-mah-lm-g900vmy/';

// Fetch the HTML of the homepage
axios.get(baseUrl)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const batteries = [];

        // Search for products
        $('.product-wrapper').each((index, element) => {
            const name = $(element).find('.product-title a').text().trim(); // Selector for product name
            const price = $(element).find('.woocommerce-Price-amount').text().trim(); // Selector for product price

            // Check if the product name contains the term "batteries"
            if (name.toLowerCase().includes('battery')) {
                batteries.push({ name, price });
            }
        });

        console.log(batteries); // Log the array of batteries with their prices
    })
    .catch(error => {
        console.error(`Error fetching data: ${error}`);
    });
