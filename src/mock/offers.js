const offers = [
  {
    title: `Beautiful & luxurious apartment at great location`,
    img: `img/apartment-01.jpg`,
    price: 140,
    rating: 3,
    type: `Apartment`,
    isItPremium: true,
    id: 1,
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
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Exercitation exercitation culpa proident occaecat adipisicing aliquip. Aute officia 
      adipisicing incididunt sint sit nisi nulla aute. Nulla do commodo incididunt aute cillum nulla nisi 
      id eiusmod dolore esse id cillum consequat. Velit enim sit sint eiusmod ad cillum. Nostrud ipsum esse
      fugiat irure veniam nisi dolor irure nisi ex aute excepteur duis ut.
      Aute ea ea eu aliquip ipsum ea. Cillum consectetur sit dolor ad sit non reprehenderit ipsum aliquip. 
      Velit amet laboris ad eu veniam elit nisi commodo dolore do veniam id dolore est.`,
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
    images: [
      `img/apartment-01.jpg`,
      `img/apartment-01.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Officia anim fugiat mollit laboris irure ex non ut adipisicing minim
      reprehenderit qui. Lorem do laboris voluptate aliquip sit ut ipsum. Mollit incididunt
      occaecat amet culpa duis ut eu cupidatat pariatur ea. Eu incididunt nisi velit cillum
      sint consectetur. Cillum voluptate Lorem dolore mollit id aute adipisicing sint. Culpa
      incididunt nulla nostrud aliqua.
      Adipisicing ex magna enim commodo occaecat tempor reprehenderit aute reprehenderit cillum 
      est. Reprehenderit id sit magna commodo ut do in officia id aute. Adipisicing eu velit 
      magna excepteur non minim amet Lorem.`,
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
    images: [
      `img/apartment-03.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
      `img/apartment-02.jpg`,
      `img/apartment-03.jpg`,
    ],
    description: `Irure enim cillum labore pariatur laboris consectetur. 
      Magna in do est incididunt ex fugiat velit tempor commodo ad sunt in 
      fugiat. Laborum nostrud aliqua aute consequat occaecat est amet. Minim 
      ad cillum consectetur culpa nisi magna exercitation voluptate nostrud 
      eiusmod cupidatat. Commodo excepteur consectetur reprehenderit incididunt tempor 
      aute non veniam culpa. Et deserunt esse aliqua occaecat veniam.
      Exercitation labore ex ea occaecat veniam excepteur nisi tempor eiusmod officia 
      eiusmod. Deserunt id fugiat eu ex dolor aliqua est eu est ullamco et eu pariatur 
      aliquip. Elit esse reprehenderit amet veniam non eu.`,
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
export default offers;
