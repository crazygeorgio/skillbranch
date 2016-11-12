import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  res.json({
    hello: 'JS World',
  });
});

app.get('/task2A', (req, res) => {
	const sum = (+req.query.a || 0) + (+req.query.b || 0);
	res.send(sum.toString());
});

app.get('/task2B', (req, res) => {
	const error = 'Invalid fullname',
		regExp = new RegExp(/\d/,'g');
	let fullname = req.query.fullname,
		fullnameArr;

	if(fullname && fullname.match(regExp) === null) {
		fullnameArr = fullname.split(' ');
		switch(fullnameArr.length) {
			case 3:
				fullname = fullnameArr[2] + ' ' + fullnameArr[0][0] + '.' + ' ' + fullnameArr[1][0] + '.';
				break;
			case 2:
				fullname = fullnameArr[1] + ' ' + fullnameArr[0][0] + '.';
				break;
			case 1:
				fullname = fullnameArr[0];
				break;
			default:
			 	fullname = error;
		}
	} else {
		fullname = error;
	}



	res.send(fullname);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
