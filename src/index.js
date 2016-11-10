import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World'
  , });
});
app.get('/task2a', (req, res) => {
  const sum = (+req.query.a || 0) + (+req.query.b || 0);
  res.send(sum.toString());
});
app.get('/task2b', (req, res) => {
  const name = req.query.fullname.split(' ');
  if (name[0].length === 0) {
    res.send('Invalid fullname');
  }
  else if (name.length > 3) {
    res.send('Invalid fullname');
  }
  else if (name.length === 3) {
    name[1] = name[1].substr(0, 1) + '.';
    name[0] = name[0].substr(0, 1) + '.';
    name.unshift(name[2]);
    name.pop();
    res.send(name.join(' '));
  }
  else if (name.length === 2) {
    name[0] = name[0].substr(0, 1) + '.';
    res.send(name.reverse().join(' '));
  }
  else {
    res.send(name.join(' '));
  }
})
app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
