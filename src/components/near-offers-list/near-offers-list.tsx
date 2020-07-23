import * as React from "react";
import NearOffersItem from "../near-offers-item/near-offers-item";
import { Offer } from "../../types";

interface Props {
  nearOffers: Offer[],
  onHeaderClick: () => void,
  onCardMouseEnter: () => void,
  onCardMouseLeave: () => void,
  changeFavoriteStatus: () => void,
};

const NearOffersList: React.FunctionComponent<Props> = (props: Props) => {

  const {nearOffers, onCardMouseEnter, onHeaderClick, onCardMouseLeave, changeFavoriteStatus} = props;
  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">
        {nearOffers.map((it) => <NearOffersItem
          key={it.id}
          nearOffer={it}
          onCardMouseEnter={onCardMouseEnter}
          onCardMouseLeave={onCardMouseLeave}
          onHeaderClick={onHeaderClick}
          changeFavoriteStatus={changeFavoriteStatus}
        />)}
      </div>
    </section>
  );
};

export default NearOffersList;
