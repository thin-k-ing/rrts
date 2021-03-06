const Mayor = ({ id, name, potholes, users, logout, addCrew }) => {
	let denied = 0,
		pending = 0,
		wip = 0,
		review = 0,
		fixed = 0;
	return (
		<div className="admin">
			<div className="badge">
				<h2 className="name">{name}</h2>
				<h5 className="role">
					Mayor <span className="id">{id}</span>
				</h5>
				<div className="btn logout" onClick={() => logout()}>
					Logout
				</div>
			</div>
			<div className="adminContainer">
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

export default Mayor;
