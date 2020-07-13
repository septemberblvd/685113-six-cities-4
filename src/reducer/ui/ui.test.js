import {reducer, ActionCreator} from "./ui.js";


it(`Reducer without parameters return initial state`, () => {
  expect(reducer(void 0, {})).toEqual({
    activeOfferId: null,
    activeOffer: null,
    showSortMenu: false,
  });
});

it(`Reducer should set activeOffer`, () => {
  expect(reducer(
      {},
      ActionCreator.setActiveOfferId(`1`))
  ).toEqual({activeOfferId: `1`});
});

it(`Reducer: showSortMenu`, () => {
  expect(reducer(
      {
        showSortMenu: false,
      },
      ActionCreator.showSortMenu(true))
  ).toEqual({showSortMenu: true});
});
