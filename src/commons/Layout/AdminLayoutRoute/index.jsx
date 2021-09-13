import Dashboard from "../../../components/Dashboard";
import { Route } from "react-router";

function AdminLayoutRoute(props) {
  const { component: YourComponent, ...remainProps } = props;
  return (
    <>
      <Route
        {...remainProps}
        render={(routeProps) => {
          return (
            <Dashboard>
              <YourComponent {...routeProps} />
            </Dashboard>
          );
        }}
      />
    </>
  );
}

export default AdminLayoutRoute;
