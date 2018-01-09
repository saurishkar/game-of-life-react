import React, { Component } from "react";

class Cell extends Component {
	constructor(props) {
		super(props);
		this.state = {
			value: this.props.value
		};
		this.evolveCell = this.evolveCell.bind(this);
	}

	componentDidMount() {
		const {rowIndex, colIndex} = this.props;
		// const evolvedValue = this.evolveCell(rowIndex, colIndex);
		// console.log(evolvedValue);
	}

	evolveCell(row, col) {
		let count = 0;
		console.log(123);
		const { board } = this.props;
		console.log(board);
		if(row - 1 > -1) {
			if(col - 1 > -1) {
				if (board[row-1][col-1] > 0)
					count++;
			} else if(col + 1 < board.length) {
				if (board[row-1][col+1] > 0)
					count++;
			}
		}
		if(row + 1 < board.length) {
			if(col - 1 > -1) {
				if (board[row+1][col-1] > 0)
					count++;
			} else if(col + 1 < board.length) {
				if (board[row+1][col+1] > 0)
					count++;
			}
		}
		if(col - 1 > -1) {
			if(board[row][col-1] > 0) count++;
		}
		if(col + 1 <board.length) {
			if(board[row][col+1] > 0) count++;
		}
		console.log("count", count);
		return count;
	}

	render() {
		const color = () => {
			if(this.props.value === 0)
				return "#17202A";
			else if(this.props.value === 1)
				return "#F5B7B1";
			else return "#E74C3C";
		};
		return (
			<td style={{"backgroundColor": `${color()}`}}></td>
		);
	}
}

export default Cell;