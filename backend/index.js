let express = require('express');
let cors = require('cors');
let path = require('path');
let subdomain = require('express-subdomain');

let app = express();

app.use(cors())

let router = express.Router();

router.get('/message', (req, res) => {
	res.json({
		message: 'it works'
	})
})

app.use('/api', router);

app.listen(process.env.PORT || 3000);