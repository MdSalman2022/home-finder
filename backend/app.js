const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const propertyRouter = require("./routes/properties");
const userRoutes = require("./routes/users");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());

app.use("/properties", propertyRouter);
app.use("/users", userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
