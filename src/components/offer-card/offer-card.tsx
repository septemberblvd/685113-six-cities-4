import * as React from "react";
import {Link} from "react-router-dom";
import {Offer} from "../../types";

interface Props {
  onCardMouseEnter: (offer: Offer) => void;
  onCardMouseLeave: () => void;
  onHeaderClick: (offer: Offer) => void;
  offer: Offer;
  changeFavoriteStatus: (id, status: number) => void;
}

const OfferCard: React.FunctionComponent<Props> = (props: Props) => {
  const {offer, onCardMouseEnter, onCardMouseLeave, onHeaderClick, changeFavoriteStatus} = props;
  const {isItPremium, img, price, rating, title, type, isItFavorite, id} = offer;

  return <article className="cities__place-card place-card" onMouseEnter={() => onCardMouseEnter(offer)} onMouseLeave={() => onCardMouseLeave()}>
    {isItPremium ? <div className="place-card__mark">
      <span>Premium</span>
    </div> : ``}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={img} width="260" height="200" alt="Place image" />
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">&euro;{price}</b>
          <span className="place-card__price-text">&#47;&nbsp;night</span>
        </div>
        <button className={isItFavorite ?
          `place-card__bookmark-button place-card__bookmark-button--active button`
          : `place-card__bookmark-button button`} type="button" onClick={() => changeFavoriteStatus(id, +!isItFavorite)}>
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">In bookmarks</span>
        </button>
      </div>
      <div className="place-card__rating rating">
        <div className="place-card__stars rating__stars">
          <span style={{width: `${Math.round(rating) * 20}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <Link to={`/offer/${offer.id}`} onClick={() => {
          onHeaderClick(offer);
        }}>{title}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>;
};

export default OfferCard;
