import actorsRepository from "../repository/actors.repository"

async function getAllActors() {
  return await actorsRepository.getAllActors()
}

const actorsService = {
  getAllActors,
}

export { actorsService }
