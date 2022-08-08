const fs = require("fs");
const path = require("path");

exports.getRandomImage = async (req, res, next) => {
  const imageDir = path.resolve(__dirname, '../public/images/')
  fs.readdir(imageDir, (err, files) => {
    const randomNumber = Math.floor(Math.random() * files.length);
    res.status(200).json(files[randomNumber])
  })
}
