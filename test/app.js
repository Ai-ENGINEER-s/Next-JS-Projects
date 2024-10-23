const mongoose = require('mongoose');

const uri = 'mongodb+srv://barryasanoussa19:OUMCRL9mdaTtHvEz@promptshareapplication.g9b2v.mongodb.net/?retryWrites=true&w=majority&appName=PromptShareApplication';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 20000, // 20 seconds timeout
})
.then(() => {
  console.log('Successfully connected to MongoDB');
})
.catch(err => {
  console.error('Connection error', err);
});
