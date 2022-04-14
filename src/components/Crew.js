const CurrentWork = ({ pothole, markForReview }) => {
	return (
		<div>
			<div className="currentWork">
				{pothole.place} {pothole.id}
			</div>
			<div
				className="btn"
				onClick={() => {
					markForReview(pothole._id);
				}}
				style={
					pothole.status === "review"
						? {
								cursor: "not-allowed",
						  }
						: null
				}
			>
				{pothole.status === "wip"
					? "Send for Review"
					: "Sent for Review"}
			</div>
		</div>
	);
};

const Crew = ({ id, name, potholes, users, logout, markForReview }) => {
	let currPothole = null;
	potholes.forEach((pothole) => {
		if (
			pothole.crewId === id &&
			(pothole.status === "wip" || pothole.status === "review")
		) {
			currPothole = pothole;
		}
	});
	return (
		<div className="tasks">
			<div className="top badge">
				<h2 className="name">{name}</h2>
				<h5 className="role">
					Work Crew <span className="id">{id}</span>
				</h5>
				<div className="btn logout" onClick={() => logout()}>
					Logout
				</div>
			</div>
			<div className="bottomCrew">
				<div className="currentWork">
					{currPothole ? (
						<CurrentWork
							pothole={currPothole}
							markForReview={markForReview}
						/>
					) : (
						"No Task Assigned"
					)}
				</div>
			</div>
			<div className="bottomContainer">
				<div className="idx">Fixed Potholes (Place)</div>
				<div className="fixedHoles">
					{potholes
						.slice()
						.reverse()
						.map((pothole) => {
							if (pothole.crewId !== id) return null;
							else if (pothole.status !== "fixed") return null;
							else
								return (
									<div className="hole">{pothole.place}</div>
								);
						})}
				</div>
			</div>
		</div>
	);
};

export default Crew;
