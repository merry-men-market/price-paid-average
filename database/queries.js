
// const Pool = require('pg').Pool

// const pool = new Pool({
//   user: '',
//   host: 'localhost',
//   database: 'stocks',
//   password: '',
//   port: 5432,
// });

// const getStocks = (req, res) => {
//   var id = req.params.id;
//   console.log(id);
//   pool.query(`SELECT * FROM stocks where id=${id}`, (error, results) => {
//     if (error) {
//       throw error;
//     }
//     console.log('working');
//     res.status(200).json(results.rows);
//   });
//   // console.log('stock')
// };

// module.exports = {
//   getStocks,
// };
