import { useState } from "react";

const LoginPage = (props) => {
	const [userName, setUserName] = useState("");
	const [pwd, setPwd] = useState("");
	return (
		<div className="loginPage">
			<form action="/">
				<input
					className="userName loginInfo"
					type="text"
					placeholder="Username"
					onChange={(event) => {
						setUserName(event.target.value);
					}}
				/>
				<input
					className="userName loginInfo"
					type="password"
					placeholder="Password"
					onChange={(event) => {
						setPwd(event.target.value);
					}}
				/>
				{props.loginError && (
					<div className="loginError">User not found!</div>
				)}
			</form>
			<div
				className="btn"
				onClick={() => {
					props.handleLogin(userName, pwd);
				}}
			>
				Login
			</div>
		</div>
	);
};

export default LoginPage;
