const CellReducer = (state = {}, action) => {
	switch(action.type) {
	case "UPDATE_CELL_VALUE": return [
		...state.board[action.payload.rowIndex].slice(0, action.payload.colIndex), 
		action.payload.value, 
		...state.board[action.payload.rowIndex].slice(action.payload.colIndex)
	];

	case "INITIALIZE_BOARD": return action.payload;

	default: return state;
	}
};

export default CellReducer;