import * as React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";
import {AppRoute} from "../../const";
import {AuthorizationStatus} from "../../reducer/user/user";


class PrivateRoute extends React.PureComponent {
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

PrivateRoute.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
  checkAuth: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default PrivateRoute;

