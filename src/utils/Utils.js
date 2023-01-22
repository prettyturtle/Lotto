export const getRandomSixNumber = () => {
  const numberArray = []

  while (numberArray.length < 6) {
    const number = Math.floor(Math.random() * 45) + 1

    const hasNumber = numberArray.filter((num) => num === number).length

    if (!hasNumber) {
      numberArray.push(number)
    }
  }

  return numberArray.sort((a, b) => a - b)
}
