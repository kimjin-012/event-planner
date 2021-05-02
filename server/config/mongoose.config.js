const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/event_log', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(() => console.log('DB is connected now get it working!'))
    .catch(err => console.log('i think something is wrong', err))