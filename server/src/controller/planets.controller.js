const { getAllPlanets } = require('../service/planets.service');

const httpGetAllPlanets = async (req, res) => {
  const allPlanets = await getAllPlanets();
  return res.status(200).json(allPlanets);
}


module.exports =  {
  httpGetAllPlanets,
}
