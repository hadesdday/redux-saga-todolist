import * as taskConstants from "../constants/task";

export const fetchTasks = () => {
  return {
    type: taskConstants.FETCH_TASK,
  };
};

export const fetchTasksSuccess = (data) => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: { data },
  };
};

export const fetchTasksFailed = (error) => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: { error },
  };
};

// export const fetchTasksRequest = () => {
//   return (dispatch) => {
//     dispatch(fetchTasks());
//     taskApis
//       .getTasks()
//       .then((res) => {
//         const { data } = res;
//         dispatch(fetchTasksSuccess(data));
//       })
//       .catch((err) => {
//         dispatch(fetchTasksFailed(err));
//       });
//   };
// };

export const filterTask = (keyword) => ({
  type: taskConstants.FILTER_TASK,
  payload: {
    keyword,
  },
});

export const filterTaskSuccess = (data) => ({
  type: taskConstants.FILTER_TASK_SUCCESS,
  payload: {
    data,
  },
});

export const addTask = (title, description) => {
  return {
    type: taskConstants.ADD_TASK,
    payload: {
      title,
      description,
    },
  };
};

export const addTaskSuccess = (data) => {
  return {
    type: taskConstants.ADD_TASK_SUCCESS,
    payload: { data },
  };
};

export const addTaskFailed = (error) => {
  return {
    type: taskConstants.ADD_TASK_FAILED,
    payload: { error },
  };
};
