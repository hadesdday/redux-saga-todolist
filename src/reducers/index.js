import { combineReducers } from "redux";
import tasksReducer from "./tasks";
import uiReducer from "./ui";
import modalReducer from "./modal";

const rootReducer = combineReducers({
  task: tasksReducer,
  ui: uiReducer,
  modal: modalReducer,
});

export default rootReducer;
