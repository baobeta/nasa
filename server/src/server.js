const mongoose = require('mongoose');
const http = require("http");
const app = require("./app");

const { loadData } = require("../src/service/planets.service");

const PORT = process.env.PORT || 5000;
const server = http.Server(app);

const { mongoUrl } = require('../mongo_config');
const _Launch = require('./model/launches.model');

// console.log(mongoUrl);


async function startServer () {
  try {
    await loadData();
    await initLauncher();
    server.listen(PORT, () => console.log("Server running on port :", PORT));
  } catch (err) {
    console.log(err);
  }
};


const initLauncher = async () => {
  const checkExist = await _Launch.findOne({flightNumber: 100});
  if(!checkExist) {
    const launch = await _Launch.create({
      flightNumber: 100,
      mission: 'keep Exploration x',
      rocket: 'Exploration IS1',
      launchDate: new Date("11-27-2030"),
      target: 'Kepler 442 b',
      customer : ['Nasa', 'Istro'],
      upcoming: true,
      success: true,
    });
  }
} 

mongoose.Promise = global.Promise;
mongoose.connect(mongoUrl, { useNewUrlParser: true })
  .then(() => {
    console.log('Connected MongoDB');

  })
  .catch((err) => console.log(err));

startServer();