import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator as ActionCreatorData} from "../../reducer/data/data.js";
import {ActionCreator as ActionCreatorUi} from "../../reducer/ui/ui.js";
import {SortType} from '../../const.js';
import {getCurrentSortType} from '../../reducer/data/selectors.js';
import {getShowSortMenu} from '../../reducer/ui/selectors.js';

const menuItems = [
  {
    type: SortType.POPULAR,
    text: `Popular`
  },
  {
    type: SortType.PRICE_HIGH_TO_LOW,
    text: `Price: high to low`
  },
  {
    type: SortType.PRICE_LOW_TO_HIGH,
    text: `Price: low to high`
  },
  {
    type: SortType.TOP_RATED,
    text: `Top rated first`
  }
];

class Sort extends PureComponent {
  constructor(props) {
    super(props);

    this._handleSortClick = this._handleSortClick.bind(this);
    this._handleMenuClick = this._handleMenuClick.bind(this);
  }

  _handleSortClick() {
    const {
      isOpened,
      onShowSortMenu,
    } = this.props;

    onShowSortMenu(!isOpened);
  }

  _handleMenuClick(sortType) {
    this._handleSortClick();
    this.props.onSort(sortType);
  }

  render() {
    const {currentSortType, isOpened} = this.props;
    return (
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" onClick={this._handleSortClick} tabIndex="0">
          {currentSortType}
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className={`places__options places__options--custom ${isOpened && `places__options--opened`}`}
        >
          {menuItems.map((menuItem, i) => (
            <li key={menuItem.type + i}
              className={`places__option ${menuItem.type === currentSortType && `places__option--active`}`}
              tabIndex="0"
              onClick={() => this._handleMenuClick(menuItem.type)}
            >
              {menuItem.text}
            </li>
          ))}
        </ul>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onSort(sortType) {
    dispatch(ActionCreatorData.sortOffers(sortType));
  },
  onShowSortMenu(isOpened) {
    dispatch(ActionCreatorUi.showSortMenu(isOpened));
  }
});

const mapStateToProps = (state) => ({
  currentSortType: getCurrentSortType(state),
  isOpened: getShowSortMenu(state),
});

Sort.propTypes = {
  isOpened: PropTypes.bool,
  onShowSortMenu: PropTypes.func.isRequired,
  currentSortType: PropTypes.string,
  onSort: PropTypes.func.isRequired,
};

export {Sort};
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
