import { useState } from "react";

const Inspector = ({
	id,
	name,
	potholes,
	users,
	logout,
	denyRequest,
	assignWorkCrew,
	signOff,
	reassignPothole,
}) => {
	const [holeId, setHoleId] = useState("");
	const [crewId, setCrewId] = useState("");

	return (
		<div className="inspector">
			<div className="top badge">
				<h2 className="name">{name}</h2>
				<h5 className="role">
					Inspector <span className="id">{id}</span>
				</h5>
				<div className="btn logout" onClick={() => logout()}>
					Logout
				</div>
			</div>
			<div className="bottom">
				<div className="holes">
					<div className="idx">Potholes (Place, Status, CrewID)</div>
					{potholes
						.slice()
						.reverse()
						.map((pothole) => {
							return (
								<div
									className={`hole ${pothole.status}`}
									onClick={() => {
										setHoleId(pothole._id);
									}}
									style={
										holeId === pothole._id
											? { border: "2px solid black" }
											: null
									}
								>
									<span>
										{pothole.place}{" "}
										{pothole.crew && pothole.crew}{" "}
										{pothole.status}{" "}
										<span className="id">
											{pothole.crewId && pothole.crewId}
										</span>
									</span>
								</div>
							);
						})}
				</div>
				<div className="crews">
					<div className="idx passive">
						Work Crews (Name, Availablity, Size)
					</div>
					{users.map((user) => {
						if (user.role !== "crew") return null;
						else
							return (
								<div
									className={`crew ${
										user.available ? "available" : "working"
									}`}
									onClick={() => {
										setCrewId(user.id);
									}}
									style={
										crewId === user.id
											? { border: "2px solid yellow" }
											: null
									}
								>
									<span>
										{user.name}{" "}
										{user.available
											? "Available"
											: "Working"}{" "}
										{user.members}
									</span>
								</div>
							);
					})}
				</div>
			</div>
			<div>
				{/* Sign Off and Re-assign can only be done for entries that are under review mode by the crews */}
				{/* Sign Off will move the issue to a state called clear which like denied can't be revoked or done */}
				{/* anything of interest with tbh */}
				<div
					className="btn"
					onClick={() => {
						if (holeId === "") {
							window.alert("Please Select a Pothole...");
						} else {
							// we have to check for whether the hole is in progress state or not
							// check whether the hole has a non-null assigned crew bruh
							let forReview = false;
							potholes.forEach((hole) => {
								if (hole._id === holeId) {
									if (hole.status === "review")
										forReview = true;
								}
							});
							if (forReview) {
								// change its status to Completed
								signOff(holeId);
							} else {
								window.alert(
									"The selected pothole is not up for Review!"
								);
							}
						}
					}}
				>
					Sign Off
				</div>
				<div
					className="btn"
					onClick={() => {
						if (holeId === "") {
							window.alert("Please Select a Pothole...");
						} else {
							// we have to check for whether the hole is in progress state or not
							// check whether the hole has a non-null assigned crew bruh
							let forReview = false;
							potholes.forEach((hole) => {
								if (hole._id === holeId) {
									if (hole.status === "review")
										forReview = true;
								}
							});
							if (forReview) {
								// change its status to Completed
								reassignPothole(holeId);
							} else {
								window.alert(
									"The selected pothole is not up for Review!"
								);
							}
						}
					}}
				>
					Re-assign
				</div>
				<div
					className="btn"
					onClick={() => {
						denyRequest(holeId);
					}}
				>
					Deny Request
				</div>
				<div
					className="btn"
					onClick={() => {
						assignWorkCrew(holeId, crewId);
						setHoleId("");
						setCrewId("");
					}}
				>
					Assign Work Crew
				</div>
			</div>
		</div>
	);
};

export default Inspector;
