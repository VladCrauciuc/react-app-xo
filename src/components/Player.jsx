import { useState } from "react";

function Player({ name, symbol, isActive }) {
	const [isEditing, setIsEditing] = useState(false);
	const [newName, setNewName] = useState(name);

	function handleEditClick() {
		setIsEditing((prevState) => !prevState);
	}

	function handleChange(e) {
		setNewName(e.target.value);
	}

	return (
		<li className={isActive ? "active" : ""}>
			<span className="player">
				{isEditing && (
					<input
						type="text"
						required
						value={newName}
						onChange={handleChange}></input>
				)}
				{!isEditing && <span className="player-name">{newName}</span>}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
		</li>
	);
}

export default Player;
