const express = require("express");
const cors = require("cors");
const {
  getDigitSum,
  isPrime,
  isPerfect,
  getParity,
  isArmstrong,
} = require("./helpers");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");

  res.send("Test endpoint working!");
});

app.get("/api/classify-number", async (req, res) => {
  const { number } = req.query;

  if (!number) {
    return res.status(400).send({
      number: null,
      error: true,
    });
  }

  if (isNaN(number)) {
    return res.status(400).send({
      number,
      error: true,
    });
  }

  let fun_fact = "Could not retrieve fun fact.";

  try {
    const response = await (
      await fetch(`http://numbersapi.com/${number}/math?json`)
    ).json();

    fun_fact = response.text || "No fun fact available.";
  } catch (error) {
    console.error("Error fetching fun fact:", error.message);
  }

  res.status(200).send({
    number,
    is_prime: isPrime(number),
    is_perfect: isPerfect(number),
    properties: isArmstrong(number)
      ? ["armstrong", getParity(number)]
      : [getParity(number)],
    digit_sum: getDigitSum(number),
    fun_fact,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
