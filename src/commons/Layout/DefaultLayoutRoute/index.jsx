import { Route } from "react-router";

function DefaultLayoutRoute(props) {
  const { component: YourComponent, ...remainProps } = props;
  return (
    <>
      <Route
        {...remainProps}
        render={(routeProps) => {
          return <YourComponent {...routeProps} />;
        }}
      />
    </>
  );
}

export default DefaultLayoutRoute;
