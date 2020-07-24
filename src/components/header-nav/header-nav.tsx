import * as React from "react";
import {connect} from "react-redux";
import {Operation as UserOperation} from "../../reducer/user/user";
import {getUserEmail} from "../../reducer/user/selectors";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";

interface Props {
  userEmail: string;
  checkAuth: () => void;
}


class HeaderNav extends React.PureComponent<Props, {}> {
  constructor(props) {
    super(props);

  }

  componentDidUpdate() {
    const {checkAuth} = this.props;

    checkAuth();
  }

  render() {
    const {userEmail} = this.props;

    return <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__nav-item user">
          <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITE}>
            <div className="header__avatar-wrapper user__avatar-wrapper">
            </div>
            <span className="header__user-name user__name">{userEmail ? userEmail : `Sing in`}</span>
          </Link>
        </li>
      </ul>
    </nav>;
  }
}

const mapStateToProps = (state) => ({
  userEmail: getUserEmail(state),
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth() {
    dispatch(UserOperation.checkAuth());
  },
});

export {HeaderNav};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderNav);
