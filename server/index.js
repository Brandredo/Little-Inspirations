const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const path = require("path");

// database
const mongoose = require("mongoose");
const User = require("../database/models/User");
const addressSchema = require("../database/models/Address");
const Address = mongoose.model("Address", addressSchema);
const Child = require("../database/models/Child");
const EContact = require("../database/models/EmergencyContact");
const connectData = require("../database/connectDB");

// connect to database
connectData();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'production') {
    console.log("Production mode");
    app.use(express.static(path.join(__dirname, "..", "react-app/build")));
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, "..", "react-app/build/index.html"));
    });
}
console.log("Developement mode");

// console.log(path.join(appPath, "index.html"));



// app.post("/login", function (req, res) {

//     admin.auth().verifyIdToken(req.headers.authtoken).then((decodedToken) => {
//         const uid = decodedToken.uid;

//         const found = User.findOne({ UID: uid }, function (err, user) {

//             if (user) {
//                 console.log(uid);
//                 console.log("success");
//                 res.status(200).send(JSON.stringify(user));
//             }

//             if (err) {
//                 console.log(err);
//                 res.status(400).send({ message: "error occurred" });
//             }
//         });

//     }).catch((error) => {
//         console.log(error);
//         res.status(400).send({ message: "error" });
//     })

// });


// app.post("/signup", function (req, res) {

//     // console.log("Enter signup server api")
//     //console.log(req.body);

//     try {

//         const newUserAddress = new Address({
//             street: req.body.street,
//             city: req.body.city,
//             state: req.body.state,
//             zipcode: req.body.zipcode
//         }).save().then(savedAddress => {

//             console.log(savedAddress);

//             const newUser = new User({
//                 email: req.body.email,
//                 firstname: req.body.fname,
//                 lastname: req.body.lname,
//                 birthday: req.body.birthday,
//                 phonenumber: req.body.phone,
//                 address: savedAddress,
//                 UID: req.body.UID
//             }).save();

//         });

//         res.send({ message: "User was added" });
//     } catch (error) {
//         console.log(error);
//         res.send({ message: "User was not added" });
//     }


// });

app.listen(PORT, function (err) {
    if (err) {
        return console.log(err);
    }
    console.log(`Successfully connected to the NodeJS server on port ${PORT}.`);
});