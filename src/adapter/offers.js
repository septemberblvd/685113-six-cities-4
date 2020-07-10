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
    reviews: [
      {
        reviewId: 14,
        reviewName: `Ozzy`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 4,
        reviewText: `Id minim labore ut velit sit velit.Magna deserunt reprehenderit consequat elit cupidatat proident nostrud amet minim nulla.`,
        reviewTime: `May 8, 2016`,
      },
      {
        reviewId: 22,
        reviewName: `Mick`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 2,
        reviewText: `Incididunt fugiat non aliqua eu nisi.Id Lorem cillum non voluptate nulla id fugiat Lorem exercitation irure ullamco enim veniam ullamco.`,
        reviewTime: `June 5, 2018`,
      },
    ],
  };
};

export const adaptOffersAll = (offers) => {
  const allOffers = offers.map((offer) => adaptOffer(offer));
  return allOffers;
};
