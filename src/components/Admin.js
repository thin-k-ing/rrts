import { useState } from "react";

const Admin = ({ id, name, potholes, users, logout, addCrew }) => {
	let denied = 0,
		pending = 0,
		wip = 0,
		review = 0,
		fixed = 0;

	const [username, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [_name, setName] = useState("");
	const [members, setMembers] = useState("");
	return (
		<div className="admin">
			<div className="badge">
				<h2 className="name">{name}</h2>
				<h5 className="role">
					Admin <span className="id">{id}</span>
				</h5>
				<div className="btn logout" onClick={() => logout()}>
					Logout
				</div>
			</div>
			<div className="adminContainer">
				<div className="registerCrew">
					<div>
						<h3 className="addCrew">Add Crew</h3>
						<input
							className="registerInput"
							type="text"
							placeholder="Username"
							onChange={(event) => {
								setUserName(event.target.value);
							}}
						/>
						<input
							className="registerInput"
							type="text"
							placeholder="Password"
							onChange={(event) => {
								setPassword(event.target.value);
							}}
						/>
						<input
							className="registerInput"
							type="text"
							placeholder="Name"
							onChange={(event) => {
								setName(event.target.value);
							}}
						/>
						<input
							className="registerInput"
							type="text"
							placeholder="Members"
							onChange={(event) => {
								setMembers(event.target.value);
							}}
						/>
						<div
							className="btn"
							onClick={() => {
								addCrew(username, password, _name, members);
							}}
						>
							Register
						</div>
					</div>
				</div>
				<div className="bottomContainer">
					<div className="idx">
						Potholes (Place, Status, CitizenId, CrewId)
					</div>
					<div className="fixedHoles">
						{potholes
							.slice()
							.reverse()
							.map((pothole) => {
								if (pothole.status === "pending") pending++;
								else if (pothole.status === "denied") denied++;
								else if (pothole.status === "wip") wip++;
								else if (pothole.status === "review") review++;
								else fixed++;
								return (
									<div className={`hole ${pothole.status}`}>
										{pothole.place}
										<span className="status">{` -${pothole.status}- `}</span>
										<span className="id">
											{pothole.id} {","} {pothole.crewId}
										</span>
									</div>
								);
							})}
					</div>
					<div className="stats">
						<div className="stat pending">Pending: {pending}</div>
						<div className="stat wip">WIP: {wip}</div>
						<div className="stat denied">Denied: {denied}</div>
						<div className="stat review">Review: {review}</div>
						<div className="stat fixed">Fixed: {fixed}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Admin;
