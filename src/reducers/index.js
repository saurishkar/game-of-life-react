import CellReducer from "./cell";

import {reducer as FormReducer} from "redux-form";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
	board: CellReducer,
	form: FormReducer
});

export default rootReducer;