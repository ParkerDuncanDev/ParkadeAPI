require("dotenv").config();
const express = require("express");
const cors = require('cors')
const routes = require("./Routes/GlobalLeaderboards");
const usersRoutes = require("./Routes/Users");
const db = require("./db");
// const { auth } = require("express-oauth2-jwt-bearer");
const app = express();
const port = process.env.PORT || 3000;

// const jwtCheck = auth({
//   audience: "https://parkade-api/",
//   issuerBaseURL: "https://dev-8s0zvmd520e17abc.us.auth0.com/",
//   tokenSigningAlg: "RS256",
// });

//enforce on all endpoints
// app.use(jwtCheck);

app.use(express.json());
app.use(cors());
app.use("/users", usersRoutes);

app.get("/", (req, res) => {
  res.json("success!");
});

app.get("/authorized", (req, res) => {
  res.send("secured Resource");
});

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});
