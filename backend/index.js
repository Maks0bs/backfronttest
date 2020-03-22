let express = require('express');

let app = express();

app.get('/api/message', (req, res) => {
	res.json({
		message: 'it works'
	})
})

app.listen(process.env.PORT || 3000);