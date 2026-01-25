const express = require("express");
const client = require("prom-client");
const app = express();
const port = 3000;


// Prometheus metrics
const collectDefaultMetrics = client.collectDefaultMetrics;
collectDefaultMetrics();


app.get("/api/traffic", (req, res) => {
res.json({ message: "High traffic handled successfully ✅" });
});


app.get("/metrics", async (req, res) => {
res.set('Content-Type', client.register.contentType);
res.end(await client.register.metrics());
});


app.use(express.static("../frontend"));


app.listen(port, () => {
console.log(`Server running on port ${port}`);
});