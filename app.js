require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const motoRoutes = require('./routes/motoRoutes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
connectDB();

app.use(cors());
app.use(helmet());
app.use(express.json());

console.log("Montando rutas...");
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/motos', motoRoutes);

app.get('/', (req, res) => res.send('¡API funcionando!'));
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));