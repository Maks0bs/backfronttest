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

app.listen(process.env.PORT || 3000);