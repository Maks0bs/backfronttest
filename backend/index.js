let express = require('express');
let cors = require('cors');
let path = require('path');

let app = express();

app.use(cors())

app.get('/api/message', (req, res) => {
	res.json({
		message: 'it works'
	})
})

console.log(path.join(__dirname, '../frontend/build'))

app.use(express.static('../frontend/build'))
app.get('*', (req, res) => {
	console.log('test');
	res.sendFile('index.html', {root: path.join(__dirname, '../frontend/build')});
})

app.listen(process.env.PORT || 3000);