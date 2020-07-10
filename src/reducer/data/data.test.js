/* eslint-disable max-nested-callbacks */
import {reducer, ActionCreator, ActionType, Operation} from "./data.js";
import {createAPI} from "../../api.js";
import MockAdapter from "axios-mock-adapter";

const api = createAPI(() => {});

const offers = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    img: `img/apartment-01.jpg`,
    price: 140,
    rating: 3,
    type: `Apartment`,
    isItPremium: true,
    id: 1,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Adipisicing velit officia reprehenderit sit.Minim ipsum eiusmod eu adipisicing duis cupidatat qui Lorem.Ea sunt esse do sint ut deserunt veniam anim incididunt.`,
    bedrooms: 2,
    guests: 3,
    appliances: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `War`,
      isSuper: true,
    },
    coords: [52.3909553943508, 4.85309666406198],
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
    nearOffers: [2, 3, 4]
  },
  {
    title: `Wood and stone place`,
    img: `img/room.jpg`,
    price: 80,
    rating: 4,
    type: `Private room`,
    isItPremium: false,
    id: 2,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Exercitation exercitation culpa proident occaecat adipisicing aliquip.`,
    bedrooms: 3,
    guests: 3,
    appliances: [
      `Wi-Fi`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-max.jpg`,
      name: `Death`,
      isSuper: true,
    },
    coords: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        reviewId: 12,
        reviewName: `Corey`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 3,
        reviewText: `Adipisicing do reprehenderit ipsum commodo culpa laborum amet eiusmod minim labore culpa esse.`,
        reviewTime: `May 6, 2018`,
      },
      {
        reviewId: 45,
        reviewName: `Tom`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 2,
        reviewText: `Eu sit consectetur pariatur excepteur do.Occaecat voluptate do elit culpa cupidatat nisi labore reprehenderit tempor commodo minim.`,
        reviewTime: `August 13, 2018`,
      },
    ],
    nearOffers: [1, 3, 4]
  },
  {
    title: `Canal View Prinsengracht`,
    img: `img/apartment-02.jpg`,
    price: 138,
    rating: 4,
    type: `Apartment`,
    isItPremium: false,
    id: 3,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Officia anim fugiat mollit laboris irure ex non ut adipisicing minim reprehenderit qui.`,
    bedrooms: 1,
    guests: 2,
    appliances: [
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-max.jpg`,
      name: `Hunger`,
      isSuper: false,
    },
    coords: [52.3909553943508, 4.929309666406198],
    reviews: [
      {
        reviewId: 44,
        reviewName: `Sid`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 5,
        reviewText: `Exercitation enim non esse minim quis voluptate Lorem commodo velit eu aliqua commodo in irure.`,
        reviewTime: `Feb 1, 2012`,
      },
      {
        reviewId: 46,
        reviewName: `Stive`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 1,
        reviewText: `Ex incididunt exercitation dolore dolore mollit.`,
        reviewTime: `March 22, 2020`,
      },
    ],
    nearOffers: [2, 4, 1]
  },
  {
    title: `Nice, cozy, warm big bed apartment`,
    img: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    type: `Apartment`,
    isItPremium: true,
    id: 4,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Irure enim cillum labore pariatur laboris consectetur.`,
    bedrooms: 3,
    guests: 6,
    appliances: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Plague`,
      isSuper: false,
    },
    coords: [52.3809553943508, 4.939309666406198],
    reviews: [
      {
        reviewId: 78,
        reviewName: `Jim`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 4,
        reviewText: `Ex voluptate eu commodo pariatur irure laboris do. Magna incididunt tempor sunt eu mollit qui.`,
        reviewTime: `May 13, 2017`,
      },
      {
        reviewId: 69,
        reviewName: `Mat`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 5,
        reviewText: `Aliquip officia et et fugiat.`,
        reviewTime: `June 24, 2020`,
      },
    ],
    nearOffers: [1, 2, 4]
  },
  {
    title: `Warm big bed apartment`,
    img: `img/apartment-01.jpg`,
    price: 160,
    rating: 4,
    type: `Hotel room`,
    isItPremium: true,
    id: 5,
    cityName: `Paris`,
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
    ],
    description: `Irure enim cillum labore pariatur laboris consectetur.`,
    bedrooms: 1,
    guests: 2,
    appliances: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Hoose`,
      isSuper: true,
    },
    coords: [48.85312312341, 2.312321388],
    reviews: [
      {
        reviewId: 78,
        reviewName: `Jim`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 4,
        reviewText: `Ex voluptate eu commodo pariatur irure laboris do. Magna incididunt tempor sunt eu mollit qui.`,
        reviewTime: `May 13, 2017`,
      },
      {
        reviewId: 69,
        reviewName: `Mat`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 5,
        reviewText: `Aliquip officia et et fugiat.`,
        reviewTime: `June 24, 2020`,
      },
    ],
    nearOffers: [5]
  },
];

const offersInAmsterdam = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    img: `img/apartment-01.jpg`,
    price: 140,
    rating: 3,
    type: `Apartment`,
    isItPremium: true,
    id: 1,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Adipisicing velit officia reprehenderit sit.Minim ipsum eiusmod eu adipisicing duis cupidatat qui Lorem.Ea sunt esse do sint ut deserunt veniam anim incididunt.`,
    bedrooms: 2,
    guests: 3,
    appliances: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `War`,
      isSuper: true,
    },
    coords: [52.3909553943508, 4.85309666406198],
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
    nearOffers: [2, 3, 4]
  },
  {
    title: `Wood and stone place`,
    img: `img/room.jpg`,
    price: 80,
    rating: 4,
    type: `Private room`,
    isItPremium: false,
    id: 2,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Exercitation exercitation culpa proident occaecat adipisicing aliquip.`,
    bedrooms: 3,
    guests: 3,
    appliances: [
      `Wi-Fi`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-max.jpg`,
      name: `Death`,
      isSuper: true,
    },
    coords: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        reviewId: 12,
        reviewName: `Corey`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 3,
        reviewText: `Adipisicing do reprehenderit ipsum commodo culpa laborum amet eiusmod minim labore culpa esse.`,
        reviewTime: `May 6, 2018`,
      },
      {
        reviewId: 45,
        reviewName: `Tom`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 2,
        reviewText: `Eu sit consectetur pariatur excepteur do.Occaecat voluptate do elit culpa cupidatat nisi labore reprehenderit tempor commodo minim.`,
        reviewTime: `August 13, 2018`,
      },
    ],
    nearOffers: [1, 3, 4]
  },
  {
    title: `Canal View Prinsengracht`,
    img: `img/apartment-02.jpg`,
    price: 138,
    rating: 4,
    type: `Apartment`,
    isItPremium: false,
    id: 3,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Officia anim fugiat mollit laboris irure ex non ut adipisicing minim reprehenderit qui.`,
    bedrooms: 1,
    guests: 2,
    appliances: [
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-max.jpg`,
      name: `Hunger`,
      isSuper: false,
    },
    coords: [52.3909553943508, 4.929309666406198],
    reviews: [
      {
        reviewId: 44,
        reviewName: `Sid`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 5,
        reviewText: `Exercitation enim non esse minim quis voluptate Lorem commodo velit eu aliqua commodo in irure.`,
        reviewTime: `Feb 1, 2012`,
      },
      {
        reviewId: 46,
        reviewName: `Stive`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 1,
        reviewText: `Ex incididunt exercitation dolore dolore mollit.`,
        reviewTime: `March 22, 2020`,
      },
    ],
    nearOffers: [2, 4, 1]
  },
  {
    title: `Nice, cozy, warm big bed apartment`,
    img: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    type: `Apartment`,
    isItPremium: true,
    id: 4,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Irure enim cillum labore pariatur laboris consectetur.`,
    bedrooms: 3,
    guests: 6,
    appliances: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Plague`,
      isSuper: false,
    },
    coords: [52.3809553943508, 4.939309666406198],
    reviews: [
      {
        reviewId: 78,
        reviewName: `Jim`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 4,
        reviewText: `Ex voluptate eu commodo pariatur irure laboris do. Magna incididunt tempor sunt eu mollit qui.`,
        reviewTime: `May 13, 2017`,
      },
      {
        reviewId: 69,
        reviewName: `Mat`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 5,
        reviewText: `Aliquip officia et et fugiat.`,
        reviewTime: `June 24, 2020`,
      },
    ],
    nearOffers: [1, 2, 4]
  },
];
const offersInParis = [
  {
    title: `Warm big bed apartment`,
    img: `img/apartment-01.jpg`,
    price: 160,
    rating: 4,
    type: `Hotel room`,
    isItPremium: true,
    id: 5,
    cityName: `Paris`,
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
    ],
    description: `Irure enim cillum labore pariatur laboris consectetur.`,
    bedrooms: 1,
    guests: 2,
    appliances: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Hoose`,
      isSuper: true,
    },
    coords: [48.85312312341, 2.312321388],
    reviews: [
      {
        reviewId: 78,
        reviewName: `Jim`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 4,
        reviewText: `Ex voluptate eu commodo pariatur irure laboris do. Magna incididunt tempor sunt eu mollit qui.`,
        reviewTime: `May 13, 2017`,
      },
      {
        reviewId: 69,
        reviewName: `Mat`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 5,
        reviewText: `Aliquip officia et et fugiat.`,
        reviewTime: `June 24, 2020`,
      },
    ],
    nearOffers: [5]
  },
];

const offersInHamburg = [
];

const lowToHighOffersSorted = [
  {
    title: `Wood and stone place`,
    img: `img/room.jpg`,
    price: 80,
    rating: 4,
    type: `Private room`,
    isItPremium: false,
    id: 2,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Exercitation exercitation culpa proident occaecat adipisicing aliquip.`,
    bedrooms: 3,
    guests: 3,
    appliances: [
      `Wi-Fi`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-max.jpg`,
      name: `Death`,
      isSuper: true,
    },
    coords: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        reviewId: 12,
        reviewName: `Corey`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 3,
        reviewText: `Adipisicing do reprehenderit ipsum commodo culpa laborum amet eiusmod minim labore culpa esse.`,
        reviewTime: `May 6, 2018`,
      },
      {
        reviewId: 45,
        reviewName: `Tom`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 2,
        reviewText: `Eu sit consectetur pariatur excepteur do.Occaecat voluptate do elit culpa cupidatat nisi labore reprehenderit tempor commodo minim.`,
        reviewTime: `August 13, 2018`,
      },
    ],
    nearOffers: [1, 3, 4]
  },
  {
    title: `Canal View Prinsengracht`,
    img: `img/apartment-02.jpg`,
    price: 138,
    rating: 4,
    type: `Apartment`,
    isItPremium: false,
    id: 3,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Officia anim fugiat mollit laboris irure ex non ut adipisicing minim reprehenderit qui.`,
    bedrooms: 1,
    guests: 2,
    appliances: [
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-max.jpg`,
      name: `Hunger`,
      isSuper: false,
    },
    coords: [52.3909553943508, 4.929309666406198],
    reviews: [
      {
        reviewId: 44,
        reviewName: `Sid`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 5,
        reviewText: `Exercitation enim non esse minim quis voluptate Lorem commodo velit eu aliqua commodo in irure.`,
        reviewTime: `Feb 1, 2012`,
      },
      {
        reviewId: 46,
        reviewName: `Stive`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 1,
        reviewText: `Ex incididunt exercitation dolore dolore mollit.`,
        reviewTime: `March 22, 2020`,
      },
    ],
    nearOffers: [2, 4, 1]
  },
  {
    title: `Beautiful & luxurious apartment at great location`,
    img: `img/apartment-01.jpg`,
    price: 140,
    rating: 3,
    type: `Apartment`,
    isItPremium: true,
    id: 1,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Adipisicing velit officia reprehenderit sit.Minim ipsum eiusmod eu adipisicing duis cupidatat qui Lorem.Ea sunt esse do sint ut deserunt veniam anim incididunt.`,
    bedrooms: 2,
    guests: 3,
    appliances: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `War`,
      isSuper: true,
    },
    coords: [52.3909553943508, 4.85309666406198],
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
    nearOffers: [2, 3, 4]
  },
  {
    title: `Nice, cozy, warm big bed apartment`,
    img: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    type: `Apartment`,
    isItPremium: true,
    id: 4,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Irure enim cillum labore pariatur laboris consectetur.`,
    bedrooms: 3,
    guests: 6,
    appliances: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Plague`,
      isSuper: false,
    },
    coords: [52.3809553943508, 4.939309666406198],
    reviews: [
      {
        reviewId: 78,
        reviewName: `Jim`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 4,
        reviewText: `Ex voluptate eu commodo pariatur irure laboris do. Magna incididunt tempor sunt eu mollit qui.`,
        reviewTime: `May 13, 2017`,
      },
      {
        reviewId: 69,
        reviewName: `Mat`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 5,
        reviewText: `Aliquip officia et et fugiat.`,
        reviewTime: `June 24, 2020`,
      },
    ],
    nearOffers: [1, 2, 4]
  },
];

const highToLowOffersSorted = [
  {
    title: `Nice, cozy, warm big bed apartment`,
    img: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    type: `Apartment`,
    isItPremium: true,
    id: 4,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Irure enim cillum labore pariatur laboris consectetur.`,
    bedrooms: 3,
    guests: 6,
    appliances: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Plague`,
      isSuper: false,
    },
    coords: [52.3809553943508, 4.939309666406198],
    reviews: [
      {
        reviewId: 78,
        reviewName: `Jim`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 4,
        reviewText: `Ex voluptate eu commodo pariatur irure laboris do. Magna incididunt tempor sunt eu mollit qui.`,
        reviewTime: `May 13, 2017`,
      },
      {
        reviewId: 69,
        reviewName: `Mat`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 5,
        reviewText: `Aliquip officia et et fugiat.`,
        reviewTime: `June 24, 2020`,
      },
    ],
    nearOffers: [1, 2, 4]
  },
  {
    title: `Beautiful & luxurious apartment at great location`,
    img: `img/apartment-01.jpg`,
    price: 140,
    rating: 3,
    type: `Apartment`,
    isItPremium: true,
    id: 1,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Adipisicing velit officia reprehenderit sit.Minim ipsum eiusmod eu adipisicing duis cupidatat qui Lorem.Ea sunt esse do sint ut deserunt veniam anim incididunt.`,
    bedrooms: 2,
    guests: 3,
    appliances: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `War`,
      isSuper: true,
    },
    coords: [52.3909553943508, 4.85309666406198],
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
    nearOffers: [2, 3, 4]
  },
  {
    title: `Canal View Prinsengracht`,
    img: `img/apartment-02.jpg`,
    price: 138,
    rating: 4,
    type: `Apartment`,
    isItPremium: false,
    id: 3,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Officia anim fugiat mollit laboris irure ex non ut adipisicing minim reprehenderit qui.`,
    bedrooms: 1,
    guests: 2,
    appliances: [
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-max.jpg`,
      name: `Hunger`,
      isSuper: false,
    },
    coords: [52.3909553943508, 4.929309666406198],
    reviews: [
      {
        reviewId: 44,
        reviewName: `Sid`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 5,
        reviewText: `Exercitation enim non esse minim quis voluptate Lorem commodo velit eu aliqua commodo in irure.`,
        reviewTime: `Feb 1, 2012`,
      },
      {
        reviewId: 46,
        reviewName: `Stive`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 1,
        reviewText: `Ex incididunt exercitation dolore dolore mollit.`,
        reviewTime: `March 22, 2020`,
      },
    ],
    nearOffers: [2, 4, 1]
  },
  {
    title: `Wood and stone place`,
    img: `img/room.jpg`,
    price: 80,
    rating: 4,
    type: `Private room`,
    isItPremium: false,
    id: 2,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Exercitation exercitation culpa proident occaecat adipisicing aliquip.`,
    bedrooms: 3,
    guests: 3,
    appliances: [
      `Wi-Fi`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-max.jpg`,
      name: `Death`,
      isSuper: true,
    },
    coords: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        reviewId: 12,
        reviewName: `Corey`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 3,
        reviewText: `Adipisicing do reprehenderit ipsum commodo culpa laborum amet eiusmod minim labore culpa esse.`,
        reviewTime: `May 6, 2018`,
      },
      {
        reviewId: 45,
        reviewName: `Tom`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 2,
        reviewText: `Eu sit consectetur pariatur excepteur do.Occaecat voluptate do elit culpa cupidatat nisi labore reprehenderit tempor commodo minim.`,
        reviewTime: `August 13, 2018`,
      },
    ],
    nearOffers: [1, 3, 4]
  },
];

const topRatedOffersSorted = [
  {
    title: `Nice, cozy, warm big bed apartment`,
    img: `img/apartment-03.jpg`,
    price: 180,
    rating: 5,
    type: `Apartment`,
    isItPremium: true,
    id: 4,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Irure enim cillum labore pariatur laboris consectetur.`,
    bedrooms: 3,
    guests: 6,
    appliances: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Heating`,
      `Coffee machine`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `Plague`,
      isSuper: false,
    },
    coords: [52.3809553943508, 4.939309666406198],
    reviews: [
      {
        reviewId: 78,
        reviewName: `Jim`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 4,
        reviewText: `Ex voluptate eu commodo pariatur irure laboris do. Magna incididunt tempor sunt eu mollit qui.`,
        reviewTime: `May 13, 2017`,
      },
      {
        reviewId: 69,
        reviewName: `Mat`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 5,
        reviewText: `Aliquip officia et et fugiat.`,
        reviewTime: `June 24, 2020`,
      },
    ],
    nearOffers: [1, 2, 4]
  },
  {
    title: `Wood and stone place`,
    img: `img/room.jpg`,
    price: 80,
    rating: 4,
    type: `Private room`,
    isItPremium: false,
    id: 2,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Exercitation exercitation culpa proident occaecat adipisicing aliquip.`,
    bedrooms: 3,
    guests: 3,
    appliances: [
      `Wi-Fi`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-max.jpg`,
      name: `Death`,
      isSuper: true,
    },
    coords: [52.369553943508, 4.85309666406198],
    reviews: [
      {
        reviewId: 12,
        reviewName: `Corey`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 3,
        reviewText: `Adipisicing do reprehenderit ipsum commodo culpa laborum amet eiusmod minim labore culpa esse.`,
        reviewTime: `May 6, 2018`,
      },
      {
        reviewId: 45,
        reviewName: `Tom`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 2,
        reviewText: `Eu sit consectetur pariatur excepteur do.Occaecat voluptate do elit culpa cupidatat nisi labore reprehenderit tempor commodo minim.`,
        reviewTime: `August 13, 2018`,
      },
    ],
    nearOffers: [1, 3, 4]
  },
  {
    title: `Canal View Prinsengracht`,
    img: `img/apartment-02.jpg`,
    price: 138,
    rating: 4,
    type: `Apartment`,
    isItPremium: false,
    id: 3,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Officia anim fugiat mollit laboris irure ex non ut adipisicing minim reprehenderit qui.`,
    bedrooms: 1,
    guests: 2,
    appliances: [
      `Heating`,
      `Coffee machine`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
      `Cabel TV`,
      `Fridge`,
    ],
    owner: {
      avatar: `img/avatar-max.jpg`,
      name: `Hunger`,
      isSuper: false,
    },
    coords: [52.3909553943508, 4.929309666406198],
    reviews: [
      {
        reviewId: 44,
        reviewName: `Sid`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 5,
        reviewText: `Exercitation enim non esse minim quis voluptate Lorem commodo velit eu aliqua commodo in irure.`,
        reviewTime: `Feb 1, 2012`,
      },
      {
        reviewId: 46,
        reviewName: `Stive`,
        reviewAvatar: `img/avatar-max.jpg`,
        reviewGrade: 1,
        reviewText: `Ex incididunt exercitation dolore dolore mollit.`,
        reviewTime: `March 22, 2020`,
      },
    ],
    nearOffers: [2, 4, 1]
  },
  {
    title: `Beautiful & luxurious apartment at great location`,
    img: `img/apartment-01.jpg`,
    price: 140,
    rating: 3,
    type: `Apartment`,
    isItPremium: true,
    id: 1,
    cityName: `Amsterdam`,
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Adipisicing velit officia reprehenderit sit.Minim ipsum eiusmod eu adipisicing duis cupidatat qui Lorem.Ea sunt esse do sint ut deserunt veniam anim incididunt.`,
    bedrooms: 2,
    guests: 3,
    appliances: [
      `Wi-Fi`,
      `Washing machine`,
      `Towels`,
      `Baby seat`,
      `Kitchen`,
      `Dishwasher`,
    ],
    owner: {
      avatar: `img/avatar-angelina.jpg`,
      name: `War`,
      isSuper: true,
    },
    coords: [52.3909553943508, 4.85309666406198],
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
    nearOffers: [2, 3, 4]
  },
];

it(`Reducer without parameters return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    city: {
      cityName: `Amsterdam`,
      cityCoords: [52.38333, 4.9],
    },
    allOffers: [],
    currentOffers: [],
    currentSortType: `Popular`,
  });
});

it(`Reducer should change city`, () => {
  expect(reducer({
    city: {
      cityName: `Amsterdam`,
      cityCoords: [52.38333, 4.9],
    },
  }, {
    type: ActionType.CHANGE_LOCATION,
    payload: {
      cityName: `Paris`,
      cityCoords: [48.85341, 2.3488],
    },
  })).toEqual({
    city: {
      cityName: `Paris`,
      cityCoords: [48.85341, 2.3488],
    },
  });

  expect(reducer({
    city: {
      cityName: `Amsterdam`,
      cityCoords: [52.38333, 4.9],
    },
  }, {
    type: ActionType.CHANGE_LOCATION,
    payload: {
      cityName: `Hamburg`,
      cityCoords: [53.5753, 10.0153],
    },
  })).toEqual({
    city: {
      cityName: `Hamburg`,
      cityCoords: [53.5753, 10.0153],
    },
  });
});

it(`Reducer should change offers in current city`, () => {
  expect(reducer({
    city: {
      cityName: `Amsterdam`,
      cityCoords: [52.38333, 4.9],
    },
    allOffers: offers,
    currentOffers: offersInAmsterdam,
  }, {
    type: ActionType.CHANGE_CURRENT_OFFERS,
    payload: `Paris`,
  })).toEqual({
    city: {
      cityName: `Amsterdam`,
      cityCoords: [52.38333, 4.9],
    },
    allOffers: offers,
    currentOffers: offersInParis,
  });
  expect(reducer({
    city: {
      cityName: `Amsterdam`,
      cityCoords: [52.38333, 4.9],
    },
    allOffers: offers,
    currentOffers: offersInAmsterdam,
  }, {
    type: ActionType.CHANGE_CURRENT_OFFERS,
    payload: `Hamburg`,
  })).toEqual({
    city: {
      cityName: `Amsterdam`,
      cityCoords: [52.38333, 4.9],
    },
    allOffers: offers,
    currentOffers: offersInHamburg,
  });
});

it(`Reducer should sort offers`, () => {
  expect(reducer({
    allOffers: offersInAmsterdam,
    currentSortType: `Popular`,
  }, {
    type: ActionType.SORT_OFFERS,
    payload: `Price low to high`,
  })).toEqual({
    allOffers: lowToHighOffersSorted,
    currentSortType: `Price low to high`,
  });
  expect(reducer({
    allOffers: offersInAmsterdam,
    currentSortType: `Popular`,
  }, {
    type: ActionType.SORT_OFFERS,
    payload: `Price high to low`,
  })).toEqual({
    allOffers: highToLowOffersSorted,
    currentSortType: `Price high to low`,
  });
  expect(reducer({
    allOffers: offersInAmsterdam,
    currentSortType: `Popular`,
  }, {
    type: ActionType.SORT_OFFERS,
    payload: `Top rated first`,
  })).toEqual({
    allOffers: topRatedOffersSorted,
    currentSortType: `Top rated first`,
  });
});

describe(`Action creators work correctly`, () => {
  it(`Action creator for changing location returns correct action`, () => {
    expect(ActionCreator.changeLocation({
      cityName: `Hamburg`,
      cityCoords: [53.5753, 10.0153],
    })).toEqual({
      type: ActionType.CHANGE_LOCATION,
      payload: {
        cityName: `Hamburg`,
        cityCoords: [53.5753, 10.0153],
      },
    });
  });

  it(`Action creator for changing offers returns correct action`, () => {
    expect(ActionCreator.changeCurrentOffers(`Paris`)).toEqual({
      type: ActionType.CHANGE_CURRENT_OFFERS,
      payload: `Paris`
    });
  });
});

describe(`Operation work correctly`, () => {
  it(`Should make a correct API call to /hotels`, function () {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const getState = jest.fn();
    const offersLoader = Operation.loadOffers();

    apiMock
      .onGet(`/hotels`)
      .reply(200, [{fake: true}]);

    return offersLoader(dispatch, getState, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenNthCalledWith(1, {
          type: ActionType.LOAD_OFFERS,
          payload: [{fake: true}],
        });
      });
  });
});
