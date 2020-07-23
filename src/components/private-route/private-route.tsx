import * as React from "react";
import {Route, Redirect} from "react-router-dom";
import {AppRoute} from "../../const";
import {AuthorizationStatus} from "../../reducer/user/user";

interface Props {
  authorizationStatus: string,
  exact: boolean,
  path: string,
  render: () => void,
  checkAuth: () => void,
  isLoading: boolean,
};

class PrivateRoute extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {checkAuth} = this.props;

    checkAuth();
  }

  render() {
    const {render, path, exact, authorizationStatus, isLoading} = this.props;
    return (
      isLoading ? <div
        style={{
          position: `fixed`,
          top: 0,
          right: 0,
          width: `100%`,
          color: `white`,
          backgroundColor: `blue`,
          boxShadow: `0 14px 28px blue`,
          fontSize: `20px`,
          fontWeight: `bold`,
          textAlign: `center`,
        }}>Loading</div> :
        <Route
          path={path}
          exact={exact}
          render={() => {
            return (
              authorizationStatus === AuthorizationStatus.AUTH
                ? render()
                : <Redirect to={AppRoute.SING_IN} />
            );
          }}
        />
    );
  }
}

export default PrivateRoute;

