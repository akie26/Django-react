import { CREATE_MESSAGE } from "../actions/types";

const InitialState = {};

export default function (state = InitialState, action) {
  switch (action.type) {
    case CREATE_MESSAGE:
      return (state = action.payload);
    default:
      return state;
  }
}
