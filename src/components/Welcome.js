const Welcome = ({ setPage, showLoginPage }) => {
	return (
		<div className="welcomeDiv">
			<h2 className="welcome">Welcome!</h2>
			<p className="info">
				Road Repair and Tracking Software (RRTS) to be developed for
				automating various book keeping activities associated with the
				road repairing task of the Public Works Department of the
				Corporation of a large city.
			</p>
			<div className="btn" onClick={() => showLoginPage(setPage)}>
				Login
			</div>
			<img
				src={require("./ucd.png")}
				alt=""
				style={{ width: "40%", display: "block", margin: "20px auto" }}
			/>
		</div>
	);
};

export default Welcome;
