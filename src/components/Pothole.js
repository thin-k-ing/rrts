const Pothole = ({ _id, id, place, status, crewName, crewId }) => {
	return (
		<div className={`potholeSimple  ${status}`}>
			<span>
				{place} <span className="status">{`-${status}-`}</span>{" "}
				<span className="id">{crewId}</span>
			</span>
		</div>
	);
};

export default Pothole;
