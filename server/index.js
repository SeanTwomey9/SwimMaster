// Import express to simplify server
const express = require("express");

// Import cors to allow requests from front end
const cors = require('cors');

// Create constant port for server to listen on
const PORT = 3000;

// Create express server object
const app = express();

// Use CORS to avoid errors when data is requested
app.use(cors())

// Response for landing page
app.get("/", (request, response) => {
    // Return response for landing page
    response.json({message: "Landing page!"});
})

// Response for API page
app.get("/api", (request, response) => {
    // Return response for API page
    response.json({message: "API page!"});
})

// Listen on the specified port
app.listen(PORT, () => {
    // Log to the console
    console.log("SwimMaster server running on http://localhost:" + PORT);
})