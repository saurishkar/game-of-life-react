import React, { Component } from "react";
import "./App.css";

import generateBoard from "./board";
import CellConnector from "./containers/cell-connector";

import { connect } from "react-redux";

class App extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.InitBoard(generateBoard());
	}

	render() {
		const { board } = this.props;
		const renderRows = Object.keys(board).length ? this.props.board.map((row, rowIndex) => {
			const renderCells = row.map((val, cellIndex) => {
				return (
					<CellConnector value={val} key={cellIndex} cellIndex={cellIndex} rowIndex={rowIndex}/>
				);
			});
			return (
				<tr key={rowIndex}>
					{renderCells}
				</tr>
			);
		}) : (<tr></tr>);
		return (
			<div className="App">
				<div>
					<table className="table">
						<tbody>
							{renderRows}
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {board: state.board};
}

function mapDispatchToProps(dispatch) {
	return {
		InitBoard: (data) => {
			dispatch({
				type: "INITIALIZE_BOARD",
				payload: data
			});
		}
	};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
