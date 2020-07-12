export const adaptOffer = (offer) => {
  return {
    title: offer.title,
    img: offer.preview_image,
    price: offer.price,
    rating: offer.rating,
    type: offer.type,
    isItPremium: offer.is_premium,
    isItFavorite: offer.is_favorite,
    id: offer.id,
    cityName: offer.city.name,
    images: offer.images,
    description: offer.description,
    bedrooms: offer.bedrooms,
    guests: offer.max_adults,
    appliances: offer.goods,
    owner: {
      avatar: offer.host.avatar_url,
      name: offer.host.name,
      isSuper: offer.host.is_pro,
    },
    coords: [offer.location.latitude, offer.location.longitude],
  };
};

export const adaptOffersAll = (offers) => {
  const allOffers = offers.map((offer) => adaptOffer(offer));
  return allOffers;
};
