import { connect } from "react-redux";

import Cell from "../cell";

function mapStateToProps({board}) {
	return {board};
}

function mapDispatchToProps(dispatch) {
	return {
		UpdateCell: (rowIndex, colIndex, value) => {
			dispatch({
				type: "UPDATE_CELL_VALUE",
				payload: {
					rowIndex,
					colIndex,
					value
				}
			});
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Cell);