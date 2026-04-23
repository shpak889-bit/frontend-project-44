import { randomInt } from 'node:crypto'

const getRandomNumber = (min, max) => {
  return randomInt(min, max + 1)
}

export default getRandomNumber
