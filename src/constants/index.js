import AdminHomePage from "../containers/AdminHomePage";
import LoginPage from "../containers/LoginPage";
import SignUpPage from "../containers/SignUpPage";
import Taskboard from "../containers/Taskboard";

export const API_ENDPOINT = "http://localhost:3000";

export const STATUSES = [
  {
    value: 0,
    label: "READY",
  },
  {
    value: 1,
    label: "IN PROGRESS",
  },
  {
    value: 2,
    label: "COMPLETED",
  },
];

export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202,
};

export const ADMIN_ROUTES = [
  {
    name: "Admin Page",
    path: "/admin",
    exact: true,
    component: AdminHomePage,
  },
  {
    name: "Task Management",
    path: "/admin/task-board",
    component: Taskboard,
  },
];

export const ROUTES = [
  {
    name: "Login",
    path: "/login",
    component: LoginPage,
  },
  {
    name: "Sign up",
    path: "/signup",
    component: SignUpPage,
  },
];
