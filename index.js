const mongoose = require("mongoose");
const { Schema } = mongoose;

mongoose.connect("mongodb://localhost:27017/test");
const db = mongoose.connection;
db.on("error", function () {
   console.log("error");
});

db.once("open", function () {
   console.log("Server running");
});

const kelasSchema = new Schema({
   title: String,
   desc: String,
   date: {
      type: Date,
      default: Date.now,
   },
});

const Kelas = mongoose.model("Kelas", kelasSchema);

// Cara pertama
// const nodejs = new Kelas({
//    title: "NodeJs",
//    desc: "asdlasndkasn kasjndkjas djkasnd jasd lnasjdnk",
// });

// nodejs.save(function (err, data) {
//    if (err) console.log(err);
//    console.log(data);
//    console.log("Success Saved");
// });

// Cara kedua
// const adddata = new Kelas();
// adddata.title = "as it was";
// adddata.desc = "sadasdas safdfs dsfdsfdsfsdfs";

// adddata.save(function (err, data) {
//    if (err) console.log(err);
//    console.log(data);
//    console.log("Success Saved");
// });

// cara ketiga(Create)
// Kelas.create(
//    {
//       title: "PHP",
//       desc: "asdlasndkasn kasjndkjas djkasnd jasd lnasjdnk",
//    },
//    function (err, data) {
//       if (err) console.log(err);
//       console.log(data);
//       console.log("Success Saved");
//    }
// );

// Kelas.find({ title: /as/ }, "title decs", function (err, data) {
//    if (err) console.log(err);

//    console.log(data);
// });

// Kelas.findById("62a4c5f657a853bd8b64d0b8", "title desc", function (err, data) {
//    if (err) console.log(err);

//    console.log(data);
// });

// Execute
const query = Kelas.find({ title: "PHP" });
query.select("title desc");
query.exec(function (err, data) {
   if (err) console.log(err);
   console.log(data);
});
