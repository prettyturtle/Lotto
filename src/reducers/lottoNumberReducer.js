import { CREATE_NEW_NUMBER } from "../actions/lottoNumberAction"

const defaultState = {
  currentNumber: [],
  history: [],
}
export const lottoNumberReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CREATE_NEW_NUMBER:
      const date = new Date()
      return {
        ...state,
        currentNumber: action.numbers,
        history: state.history.concat([
          {
            date: `${date.getFullYear()}. ${
              date.getMonth() + 1
            }. ${date.getDate()} ${date.getHours()}:${date.getMinutes()}`,
            numbers: action.numbers,
          },
        ]),
      }
  }
  return {
    ...state,
  }
}
