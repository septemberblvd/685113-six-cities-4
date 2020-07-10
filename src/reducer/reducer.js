import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as ui} from "./ui/ui.js";
// import {reducer as user} from "./reducer/user/user.js";
import NameSpace from "./name-space.js";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.UI]: ui,
  // [NameSpace.USER]: user,
});
