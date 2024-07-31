import { NavLink, Outlet } from "react-router-dom";
import "../styles/index.css";

function RootLayout() {
	return (
		<>
			<NavLink
				className={({ isActive, isPending }) => {
					return isActive ? "active" : isPending ? "pending" : "";
				}}
				to="/"
			>
				Home
			</NavLink>{" "}
			| <NavLink to="/blog">Blog</NavLink> |{" "}
			<NavLink to="/about">About</NavLink>
			<p />
			<Outlet />
		</>
	);
}

export default RootLayout;
