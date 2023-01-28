const express = require("express");
const BmiRouter = express.Router();
BmiRouter.post("/", async (req, res) => {
  const { weight, height } = req.body;
  if (height == +height) {
    var heightinM = height * 0.3048;
    var bmi = weight / (heightinM * heightinM); // formula for BMI
    var result; // conditon
    if (bmi < 18.5) {
      result = "Under Weight";
    } else if (bmi >= 18.5 && bmi < 25) {
      result = "Normal Weight";
    } else if (bmi >= 25 && bmi < 30) {
      result = "Healthy Weight ";
    } else {
      result = "Obese Weight";
    }
    return res.status(200).send({ BMI: bmi, res: result });
  }
  return res.status(401).send("Need All details");
});
module.exports = BmiRouter;
