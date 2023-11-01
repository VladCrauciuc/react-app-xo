import { useState } from "react";

const initialGameBoard = [
	[null, null, null],
	[null, null, null],
	[null, null, null],
];

function GameBoard() {
	const [gameBoard, setGameBoard] = useState(initialGameBoard);

	function handleSelectSquare(rowIndex, colIndex) {
		setGameBoard((prevGameBoard) => {
			const updatedBoard = { ...prevGameBoard };
			updatedBoard[rowIndex][colIndex] = "X";
			return updatedBoard;
		});
	}

	return (
		<ol id="game-board">
			{initialGameBoard.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={colIndex}>
								<button onClick={handleSelectSquare}>{playerSymbol}</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	);
}

export default GameBoard;