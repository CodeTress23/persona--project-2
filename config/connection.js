const mongoose = require('mongoose');
mongoose.set('strictQuery', false);









mongoose
.connect(process.env.DB_URL)
.then(()=> console.log('mongodb is connected'))
.catch((err)=>console.log(err));