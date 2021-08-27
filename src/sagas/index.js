import {
  call,
  fork,
  take,
  put,
  delay,
  takeLatest,
  select,
} from "redux-saga/effects";
import * as taskTypes from "../constants/task";
import * as taskApis from "../apis/task";
import { STATUS_CODE } from "../constants";
import {
  fetchTasksFailed,
  fetchTasksSuccess,
  filterTaskSuccess,
} from "../actions/task";
import { hideLoading, showLoading } from "../actions/ui";

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
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    //tu day tro xuong bi block va chi khi nao fetchTask thi moi chay tiep
    //block
    const res = yield call(taskApis.getTasks);
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
  const tasks = yield select((state) => state.task.listTasks);

  const filteredTasks = tasks.filter((task) =>
    task.title.trim().toLowerCase().includes(keyword.trim().toLowerCase())
  );

  yield put(filterTaskSuccess(filteredTasks));
}

function* rootSaga() {
  yield fork(watchFetchTasksAction); // background process
  yield fork(watchCreateTaskAction);
  //action filterTask luon duoc lang nghe nho takeLatest
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);

  //takeEvery : goi lien tuc khong can biet la action truoc do da chay xong chua
  //yield takeEvery(taskTypes.FILTER_TASK, filterTaskSaga);
}

export default rootSaga;
