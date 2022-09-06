const sqlite3 = require('sqlite3').verbose();
const axios = require('axios');

const db = new sqlite3.Database('./node_crud.db', sqlite3.OPEN_READWRITE, (err)=> {
    if (err) return console.error(err.message);
    console.log('connection successfull!');
});

// axios.get("https://random-data-api.com/api/users/random_user").then((response)=>{
//    const {data} = response;
//    const {first_name} = data;
//    const {last_name} = data;
//    const { username} = data;
//    const {email} =  data;
//    const {password} = data;
//    const {id} = data;

// const sql = 'INSERT INTO users(first_name, last_name, username, password, email, id) VALUES(?, ?, ?, ?, ? ,?)';

// db.run(sql, [first_name, last_name, username, password, email, id], (err)=> {
//     if (err) return console.error(err.message);

//     console.log('A new row has been created!');
// });

// db.close((err)=>{
//     if (err) return console.error(err);
// })

// }).catch((error)=>{
//     if (error) return console.error(error);
// });

// db.run(
//     'CREATE TABLE users(first_name, last_name, username, password, email, id)'
// );

// const sql = 'INSERT INTO users(first_name, last_name, username, password, email, id) VALUES(?, ?, ?, ?, ? ,?)';

// db.run(sql, ['Chigozirim', 'Azubuike', 'ChigoGaming', 'Chigo000', 'chigo@gaming.com', 1], (err)=> {
//     if (err) return console.error(err.message);

//     console.log('A new row has been created!');
// })

const sql = 'SELECT * FROM users';

db.all(sql, (err, rows)=> {
    if (err) return console.error(err.message);

     rows.forEach((row) => {
        console.log(row);
    });
});

db.close((err)=>{
    if (err) return console.error(err.message);
})
