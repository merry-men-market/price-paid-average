const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const Stock = require('../database/StockPricePaid/StockScheme.js')

const app = express();
const port = process.env.PORT || 8080;
const db = require('../database/index.js');

app.use(express.static(`${__dirname}/../public/`));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '../public')));

priceData = []
var nextId = 0;  // for setting next id

app.get('/:id', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/index.html'));
});

app.get('/api/price', (req, res) => {
  // set Default data equal to 001
    // db.getPaidPrice("001", (data) => {
    //   res.status(200).json(data)
    // })

    // search for first 730
    Stock.find({}, (err, data) => {
      if (err) {return err}
      res.send(data)
    });
});

/************************************************************************/
// SDC: POST endpoint 
app.post('/api/price', (req, res) => {
  var newStock = req.body;
  Stock.create(newStock, (err, data) => {
    if (err) {return err};
    console.log("Post successful");
  })
})

// SDC: DELETE endpoint 
app.delete('/api/price/:id', (req, res) => {
  // acquire id of thing you want to delete
  var id = req.params.id;
  Stock.deleteOne({id: id});
});

// SDC: UPDATE endpoint                                   Still need to appoint id with nextId var.
app.patch('/api/price/:id', (req, res) => {
  // set Default data equal to 001
  Stock.updateOne({id: id});
});
/************************************************************************/

// new get endpoint
app.get('/api/price/:id', (req, res) => {
  // set Default data equal to 001
    db.getPaidPrice(req.params.id, (data) => {
      res.status(200).json(data)
    })
});

app.listen(port, () => {
  console.log(`server running at: http://localhost:${port}`);
});

