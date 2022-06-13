const mongoose = require('mongoose');

module.exports = async () => {
    try {
        const connectionParams = {
            userNewUrlParser: true,
            userCreateIndex: true,
            useUnifiedTopology: true
        };
        await mongoose.connect('mongodb://localhost:27017/todo_list');
        console.log('Successfully connected to the database');
    } catch (error) {
        console.log('Unable to connect to the database', error);
    } finally {
    }
}