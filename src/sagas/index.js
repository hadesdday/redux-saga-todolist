import {
  call,
  delay,
  fork,
  put, take,
  takeEvery,
  takeLatest
} from "redux-saga/effects";
import { hideModal } from "../actions/modal";
import {
  addTaskFailed,
  addTaskSuccess,
  fetchTasks,
  fetchTasksFailed,
  fetchTasksSuccess
} from "../actions/task";
import { hideLoading, showLoading } from "../actions/ui";
import * as taskApis from "../apis/task";
import { STATUSES, STATUS_CODE } from "../constants";
import * as taskTypes from "../constants/task";

function* watchFetchTasksAction() {
  //Vi du ve code document o mot so cong ty
  //b1 : thuc thi action fetchTasks
  //b2 : goi api
  //b2.1 : hien thi loading
  //b3 :kiem tra status code
  //Neu thanh cong thi dispatch action fetchTasksSuccess
  // Neu that bai thi dispatch action fetchTasksFailed
  //b4 : tat loading
  //b5 :thuc thi cac cong viec tiep theo
  //end
  while (true) {
    //yield take(taskTypes.FETCH_TASK);

    const action = yield take(taskTypes.FETCH_TASK); //FETCH_TASK dispatch => chay phan code ben duoi
    yield put(showLoading());
    const { params } = action.payload;
    //tu day tro xuong bi block va chi khi nao fetchTask thi moi chay tiep
    //block
    const res = yield call(taskApis.getTasks, params);
    //block cho den khi call xong
    const { status, data } = res;

    yield delay(500, true);

    if (status === STATUS_CODE.SUCCESS) {
      //dispatch action fetchTasksSuccess
      yield put(fetchTasksSuccess(data));
    } else {
      //dispatch action fetchTasksFailed
      yield put(fetchTasksFailed(data));
    }

    yield put(hideLoading());
  }
}

function* watchCreateTaskAction() {
  console.log("Watching create task action ...");
}
//do ta dung generator nay` cho takeLatest(filter...) ben duoi nen generator nay nhan duoc payload cua action filterTask
function* filterTaskSaga({ payload }) {
  yield delay(500, true);
  const { keyword } = payload;
  // const tasks = yield select((state) => state.task.listTasks);

  // const filteredTasks = tasks.filter((task) =>
  //   task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase())
  // );

  // yield put(filterTaskSuccess(filteredTasks));

  yield put(fetchTasks({ q: keyword }));
  //yield put(hideLoading());
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;

  yield put(showLoading());

  const res = yield call(taskApis.addTask, {
    title,
    description,
    status: STATUSES[0].value,
  });

  const { data, status } = res;

  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskFailed(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchTasksAction); // background process
  yield fork(watchCreateTaskAction);
  //action filterTask luon duoc lang nghe nho takeLatest
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  //takeEvery : goi lien tuc khong can biet la action truoc do da chay xong chua
  //yield takeEvery(taskTypes.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;
