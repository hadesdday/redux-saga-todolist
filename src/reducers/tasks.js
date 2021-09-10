import { STATUSES } from "../constants";
import * as taskConstants from "../constants/task";
import { toastError } from "../helpers/toastHelper";

const initialState = {
  listTasks: [],
  taskEditing: {
    title: "",
    description: "",
    status: STATUSES[0].value,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK:
      return {
        ...state,
        listTasks: [],
      };
    case taskConstants.FETCH_TASK_SUCCESS:
      const { data } = action.payload;

      return {
        ...state,
        listTasks: data,
      };

    case taskConstants.FETCH_TASK_FAILED:
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTasks: [],
      };

    case taskConstants.FILTER_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTasks: data,
      };
    }

    case taskConstants.ADD_TASK: {
      return {
        ...state,
      };
    }

    case taskConstants.ADD_TASK_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        listTasks: [data].concat(state.listTasks),
      };
    }

    case taskConstants.ADD_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }

    case taskConstants.SET_TASK_EDITING: {
      const { task } = action.payload;
      return {
        ...state,
        taskEditing: {
          title: task.title,
          description: task.description,
          status: task.status,
        },
      };
    }

    default:
      return state;
  }
};

export default reducer;
