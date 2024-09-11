const express = require('express');
const app = express();
const trackerRoutes = require('./routes/trackerRoutes');
const port = 3000;

app.use(express.json());

app.use('/v1', trackerRoutes);
app.listen(port, () => {
    console.log(`Listening at Port: ${port}`);
})


