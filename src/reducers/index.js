import { combineReducers } from "redux";
import tasksReducer from "./tasks";
import uiReducer from "./ui";

const rootReducer = combineReducers({
  task: tasksReducer,
  ui: uiReducer,
});

export default rootReducer;
