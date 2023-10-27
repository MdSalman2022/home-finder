const pool = require("../database");

exports.getAllProperties = (req, res) => {
  pool.query("SELECT * FROM properties", (err, rows) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json(rows);
  });
};

exports.getPropertyById = (req, res) => {
  const propertyId = req.params.id;
  pool.query(
    "SELECT * FROM properties WHERE id = ?",
    [propertyId],
    (err, rows) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.json(rows[0]);
    }
  );
};

exports.createProperty = async (req, res, next) => {
  console.log("req.body", req.body);
  try {
    const { name, description, location, price, area, bed, bathroom } =
      req.body;

    pool.query(
      "INSERT INTO properties (name, description, location, price, area, bed, bathroom) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, description, location, price, area, bed, bathroom],
      (err, result) => {
        if (err) {
          console.error(err);
          res.status(500).json({ error: "Internal server error" });
          return;
        }
        res.json({ message: "Property created", id: result.insertId });
      }
    );
  } catch (exception) {
    console.error("Exception occurred:", exception);
    res.status(500).send(exception);
  }
};

exports.updateProperty = (req, res) => {
  const propertyId = req.params.id;
  const updateProperty = req.body;
  pool.query(
    "UPDATE properties SET ? WHERE id = ?",
    [updateProperty, propertyId],
    (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Internal server error" });
        return;
      }
      res.json({ message: "Property updated", id: propertyId });
    }
  );
};

exports.deleteProperty = (req, res) => {
  const propertyId = req.params.id;
  pool.query("DELETE FROM properties WHERE id = ?", [propertyId], (err) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    res.json({ message: "Employee deleted", id: propertyId });
  });
};

module.exports = exports;
