const board = new Array([]);

function generateBoard() {
	let temp = [];
	for(let a = 0; a<50; a++) {
		for(let b = 0; b<50; b++) {
			temp.push(Math.floor(Math.random()*10) % 9);
		}
		board[a] = temp;
		temp = [];
	}
	return board;
}
export default generateBoard;