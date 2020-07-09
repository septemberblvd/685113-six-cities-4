import {combineReducers} from "redux";
import {reducer as data} from "./reducer/data/data.js";
import {reducer as ui} from "./reducer/ui/ui.js";
// import {reducer as user} from "./reducer/user/user.js";
import NameSpace from "./reducer/name-space.js";

export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.UI]: ui,
  // [NameSpace.USER]: user,
});
