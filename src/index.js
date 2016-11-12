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
		regExp = new RegExp(/[\d\_\/]/,'g'),
		regExpS = new RegExp(/\s+/,'g');
	let fullname = req.query.fullname,
		fullnameArr;


		console.log(fullname.match(regExp));

	if(fullname && fullname.match(regExp) === null) {
		fullname = fullname.trim().toLowerCase().replace(regExpS, ' ');
		fullnameArr = fullname.split(' ');
		switch(fullnameArr.length) {
			case 3:
				fullname = fullnameArr[2][0].toUpperCase() + fullnameArr[2].substr(1) + ' ' + fullnameArr[0][0].toUpperCase() + '.' + ' ' + fullnameArr[1][0].toUpperCase() + '.';
				break;
			case 2:
				fullname = fullnameArr[1][0].toUpperCase() + fullnameArr[1].substr(1) + ' ' + fullnameArr[0][0].toUpperCase() + '.';
				break;
			case 1:
				fullname = fullnameArr[0][0].toUpperCase() + fullnameArr[0].substr(1);
				break;
			default:
			 	fullname = error;
		}
	} else {
		fullname = error;
	}

	res.send(fullname);
});

app.get('/task2C', (req, res) => {
	const error = 'Invalid username';
	let username = req.query.username,
		result;

	result = username.split('//');

	result = result[result.length - 1];

	result = result.split('/');

	result = result.length > 1 ? result[1] : result[0];

	result = result.split('?');

	result = '@' + result[0].replace('@', '');

	res.send(result);
});

app.listen(3000, () => {
  console.log('Your app listening on port 3000!');
});
