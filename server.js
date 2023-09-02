const express = require("express");
const request = require("postman-request");
const cors = require("cors");

const ProxyURL = "https://api.eventmeet.xyz";

const app = express();

app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"]
}))

app.get("*", (req, res) => {
  res.send("test")
})

// app.use((req, res) => {
//     request({
//       url: `${ProxyURL}${req.url}`
//     }).on("error", function(e) {
//       res.end("Error occurred while creating server")
//     }).pipe(res);
// });

app.listen(80)