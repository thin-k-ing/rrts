const Pothole = ({ _id, id, place, status, crewName }) => {
	return (
		<div className={`potholeSimple  ${status}`}>
			<span>
				{place} {status}
			</span>
		</div>
	);
};

export default Pothole;
