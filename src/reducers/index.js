import { combineReducers } from "redux";
import tasksReducer from "./tasks";
import uiReducer from "./ui";
import modalReducer from "./modal";
import formReducer from "./form";

const rootReducer = combineReducers({
  task: tasksReducer,
  ui: uiReducer,
  modal: modalReducer,
  form: formReducer,
});

export default rootReducer;
