const express = require("express");
const router = express.Router();
const axios = require("axios");

const getResume = async () => {
  try {
    const data = await axios.get(
      "https://api.github.com/gists/5e8846d20351f7d5ab004bc692b00262"
    );
    const resume = await data.data.files["resume.json"].content;
    return JSON.parse(resume);
  } catch (error) {
    return error;
  }
};

router.get("/", function (req, res, next) {
  const resume = getResume();
  resume.then((data) => {
    res.json(data);
  });
});

router.get("/skills", function (req, res, next) {
  const resume = getResume();
  resume.then((data) => {
    res.json(data.skills);
  });
});

router.get("/basics", function (req, res, next) {
  const resume = getResume();
  resume.then((data) => {
    res.json(data.basics);
  });
});

module.exports = router;
