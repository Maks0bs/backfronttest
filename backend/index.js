let express = require('express');

let app = express();

app.get('/api/message', (req, res) => {
	res.json({
		message: 'it works'
	})
})

if (process.env.NODE_ENV === 'production') {
	//set static folder
	app.use(express.static('../frontend/build'))
	app.get('*', (req, res) => {
		res.sendFile('index.html', {root: path.join(__dirname, '../frontend/build')});
	})
}

app.listen(process.env.PORT || 3000);