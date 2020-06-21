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
    const {offers, onHeaderClick} = this.props;
    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((it, i) => <OfferCard
          key={it.title + i}
          offer={it}
          onCardMouseEnter={this._handleCardMouseEnter}
          onHeaderClick={onHeaderClick}
        />)}
      </div>
    );
  }
}

OffersList.propTypes = {
  offers: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        isItPremium: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
        images: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        description: PropTypes.string.isRequired,
        bedrooms: PropTypes.number.isRequired,
        guests: PropTypes.number.isRequired,
        appliances: PropTypes.arrayOf(
            PropTypes.string.isRequired
        ).isRequired,
        owner: PropTypes.shape({
          avatar: PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          isSuper: PropTypes.bool.isRequired,
        }).isRequired,
      })
  ).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
};

export default OffersList;
