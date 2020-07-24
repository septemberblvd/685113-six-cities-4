import * as React from "react";
import OfferCard from "../offer-card/offer-card";
import {Offer} from "../../types";

interface Props {
  offers: Offer[];
  onHeaderClick: () => void;
  onCardMouseEnter: () => void;
  onCardMouseLeave: () => void;
  changeFavoriteStatus: () => void;
}

const OffersList: React.FunctionComponent<Props> = (props: Props) => {

  const {offers, onHeaderClick, onCardMouseEnter, onCardMouseLeave, changeFavoriteStatus} = props;
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((it) => <OfferCard
        key={it.id }
        offer={it}
        onCardMouseEnter={onCardMouseEnter}
        onCardMouseLeave={onCardMouseLeave}
        onHeaderClick={onHeaderClick}
        changeFavoriteStatus={changeFavoriteStatus}
      />)}
    </div>
  );
};

export default OffersList;
