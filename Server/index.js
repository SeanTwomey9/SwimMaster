// Import express to simplify server
const express = require("express");

// Create constant port for server to listen on
const PORT = 3000;

// Create express server object
const app = express();

// Create simple response for API endpoint
app.get("/api", (request, response) => {
    // Return JSON response
    response.json({message: "Hello from SwimMaster server!"});
})

// Listen on the specified port
app.listen(PORT, () => {
    // Log to the console
    console.log("SwimMaster server running on http://localhost:" + PORT);
})