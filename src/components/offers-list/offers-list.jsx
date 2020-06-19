import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import OfferCard from "../offer-card/offer-card.jsx";


class OffersList extends PureComponent {
  constructor(props) {
    super(props);

    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);

    this.state = {
      activeCard: ``,
    };
  }

  _handleCardMouseEnter(offer) {
    this.setState({activeCard: offer.id});
  }

  render() {
    const {offers} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((it, i) => <OfferCard
          key={it.description + i}
          offer={it}
          onCardMouseEnter={this._handleCardMouseEnter}
        />)}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isItPremium: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
  ).isRequired,
};

export default OffersList;
