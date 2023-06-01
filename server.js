const app = require('./src/app');
const mongoose = require('mongoose');
const { DB_HOST, PORT } = process.env;
mongoose.set('strictQuery', false);

mongoose
    .connect(DB_HOST)
    .then(() => console.log('Database connection successful'))
    .then(() => app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
    )
    .catch(error => {
        console.log(error.message);
        process.exit(1);
    });