const express = require("express");
const app = express();
const cors = require('cors')
app.use(cors())

require("./config/mongoose.config");

// middleware for handling POST data request
app.use(express.json(), express.urlencoded({ extended: true }));

const ServiceRoutes = require("./routes/service.routes");
ServiceRoutes(app);

app.listen(8000, () => console.log("The server is all fired up on port 8000"));