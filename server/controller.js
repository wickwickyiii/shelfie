module.exports = {
  get: (req, res, next) => {
    const db = req.app.get("db");
    db.get_inventory()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(console.log(err)));
  },
  post: (req, res, next) => {
    const db = req.app.get("db");
    const { name, price, imageurl } = req.body;
    db.create_product([name, price, imageurl])
      .then(() => res.sendStatus(200).json("All good"))
      .catch(err => res.status(500).json(console.log(err)));
  },
  delete: (req, res, next) => {
    const db = req.app.get("db");
    db.delete_product(req.params.id)
      .then(() => res.status(200).json(console.log("deleted")))
      .catch(err => res.status(500).json(console.log(err)));
  }
};
