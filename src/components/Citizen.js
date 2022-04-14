import Pothole from "./Pothole";
import { useState } from "react";

const Citizen = ({ id, name, potholes, reportPothole, logout }) => {
	const [place, setPlace] = useState("");
	return (
		<div className="citizen">
			<div className="top badge">
				<h2 className="name">{name}</h2>
				<h5 className="role">
					Citizen <span className="id">{id}</span>
				</h5>
				<div className="btn logout" onClick={() => logout()}>
					Logout
				</div>
			</div>
			<div className="reportView">
				<div className="reportPothole">
					<div className="idx passive">Report a Pothole!</div>
					<input
						type="text"
						placeholder="Place"
						onChange={(event) => {
							setPlace(event.target.value);
						}}
					/>
					<div
						className="btn"
						onClick={() => {
							if (place !== "") reportPothole(id, place);
							else window.alert("Please enter the place!");
						}}
					>
						Report
					</div>
				</div>
				<div className="citizenPotholes">
					<div className="idx">
						Previously Reported Potholes (Place, Status, CrewID)
					</div>
					{potholes
						.slice()
						.reverse()
						.map((pothole) => {
							if (pothole.id === id)
								return (
									<Pothole
										className={`CitizenPothole`}
										id={id}
										place={pothole.place}
										status={pothole.status}
										_id={pothole._id}
									/>
								);
							else return null;
						})}
				</div>
			</div>
		</div>
	);
};

export default Citizen;
