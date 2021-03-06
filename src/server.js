const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

const capitalizeRouter = require('./routes/capitalizeRoutes');

app.use('/', capitalizeRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
