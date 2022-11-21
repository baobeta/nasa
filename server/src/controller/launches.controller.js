const {
  getAllLaunches,
  addNewLaunch,
  existLaunchWithId,
  abortLaunchById,
} = require('../service/launches.service');

const httpGetAllLaunches = async (req, res) => {
  const a = await getAllLaunches();
  return res.status(200).json(a);
}

const httpPostNewLaunches = async (req, res) => {
  const launch = req.body;
  if (!launch ||
  !launch.mission ||
  !launch.rocket ||
  !launch.launchDate ||
  !launch.target
  ) {
    return res.status(400).json({
      error: 'Missing required launch property'
    });
  }
  launch.launchDate = new Date(launch.launchDate);

  if(isNaN(launch.launchDate)) {
    return res.status(400).json({
      error: 'Invalid date'
    });
  }
  await addNewLaunch(launch);
  return res.status(201).json(launch);
}

const httpAbortLaunch = async (req, res) => {
  const launchId = Number(req.params.id);
  const isExist = await existLaunchWithId(launchId);
  if (!isExist) {
    return res.status(400).json({
      error: 'Launch not found',
    })
  }
  const aborted = await abortLaunchById(launchId);
  return res.status(200).json(aborted);
}

module.exports =  {
  httpGetAllLaunches,
  httpPostNewLaunches,
  httpAbortLaunch
}
