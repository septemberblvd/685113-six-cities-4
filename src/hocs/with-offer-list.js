import React, {PureComponent} from 'react';

const withOfferList = (Component) => {
  class WithOfferList extends PureComponent {
    constructor(props) {
      super(props);

      this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);

      this.state = {
        activeCardId: ``,
      };
    }

    _handleCardMouseEnter(offer) {
      this.setState({activeCardId: offer.id});
    }

    render() {
      return <Component
        {...this.props}
        onCardMouseEnter={this._handleCardMouseEnter}
      />;
    }
  }

  WithOfferList.propTypes = {};

  return WithOfferList;
};

export default withOfferList;
