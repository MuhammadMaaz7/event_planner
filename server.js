const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./eventRoutes');
const userRoutes = require('./userRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());

mongoose.connect('mongodb+srv://maazawan100:maazawan2004@cluster0.g4ozi.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Failed to connect to MongoDB', err);
});


app.use('/events', eventRoutes);
app.use('/users', userRoutes);

//Listening on port
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});