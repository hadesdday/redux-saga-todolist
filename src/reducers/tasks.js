import { STATUSES } from "../constants";
import * as taskConstants from "../constants/task";
import { toastError, toastSuccess } from "../helpers/toastHelper";

const initialState = {
  listTasks: [],
  taskEditing: null,
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
      toastSuccess("Successfully added new item to your list");
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
        taskEditing: task,
      };
    }
    case taskConstants.UPDATE_TASK: {
      return {
        ...state,
      };
    }

    case taskConstants.UPDATE_TASK_SUCCESS: {
      const { data } = action.payload;
      const { listTasks } = state;
      const index = listTasks.findIndex((item) => item.id === data.id);

      if (index !== -1) {
        const newList = [
          ...listTasks.slice(0, index),
          data,
          ...listTasks.slice(index + 1),
        ];
        toastSuccess("Successfully updated your task");
        return {
          ...state,
          listTasks: newList,
        };
      }
      return {
        ...state,
        listTasks,
      };
    }

    case taskConstants.UPDATE_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }

    case taskConstants.DELETE_TASK: {
      return {
        ...state,
      };
    }

    case taskConstants.DELETE_TASK_SUCCESS: {
      const { data: id } = action.payload;
      const { listTasks } = state;
      toastSuccess("Successfully deleted your task");
      return {
        ...state,
        listTasks: listTasks.filter((item) => item.id !== id),
      };
    }

    case taskConstants.DELETE_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
      };
    }
    default:
      return state;
  }
};

export default reducer;
