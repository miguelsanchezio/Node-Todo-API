// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb')

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').deleteMany({ text: 'Buy food'}).then(result => {
    //     console.log(result);
    // })

    // db.collection('Todos').deleteOne({ text: 'Sell games'}).then(result => {
    //     console.log(result);
    // })

    // db.collection('Todos').findOneAndDelete({ completed: false }).then(result => {
    //     console.log(result);
    // })

    // db.collection('Users').deleteMany({ name: 'Miguel'});

    // db.collection('Users').findOneAndDelete({ _id: new ObjectID('5a3b178978ab239075b809ff')}).then(result => {
    //     console.log(JSON.stringify(result, undefined, 2));
    // })

    // db.close();
});