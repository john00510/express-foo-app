let express = require('express');
let app = express();

app.get('/asd', (req, res) => {
	res.send('foo asd');
});

app.get('/', (req, res) => {
	console.log('get request foo');
	res.send('hello from foo<br/>' + new Date());
});

app.listen('3001', () => {
	console.log('listening port 3001');
});