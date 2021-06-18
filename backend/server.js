const dotenv = require('dotenv');

const express = require('express');
const productRoutes = require('./routes/productRoutes');
const connectDB = require('./config/db');

// config
dotenv.config({ path: '../.env' });
connectDB();

const app = express();

app.use(express.json());

const PORT = process.env.PORT || 45000;

app.use('/api/products', productRoutes);
app.listen(PORT, () => console.log(`server runnng on port ${PORT}`));
