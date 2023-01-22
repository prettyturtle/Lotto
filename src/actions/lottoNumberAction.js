import { getRandomSixNumber } from "../utils/Utils"

export const CREATE_NEW_NUMBER = "CREATE_NEW_NUMBER"

export const createNewNumber = () => {
  const numbers = getRandomSixNumber()

  return {
    type: CREATE_NEW_NUMBER,
    numbers,
  }
}
