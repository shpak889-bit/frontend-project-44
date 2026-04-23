
const getRandomNumber = (min, max) => {
  const range = max - min + 1
  const array = new Uint32Array(1)
  
  window.crypto.getRandomValues(array)

  return min + (array[0] % range)
}
export default getRandomNumber
