const axios = require("axios");

async function getUser() {
  const res = await axios.get("https://api.github.com/users/octocat");
  console.log(typeof res.data);
}

getUser();