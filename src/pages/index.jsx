import { useState } from "react";
import posts from "../posts.json";
import Article from "../components/Article";

function Homepage() {
	const [search, setSearch] = useState("");
	const changeSearch = (event) => {
		setSearch(event.target.value);
	};
	return (
		<>
			<h1>Simple Blog</h1>
			<div>
				Cari Artikel :{" "}
				<input
					onChange={changeSearch}
					type="text"
				/>
			</div>
			<small>Ditemukan 0 data dengan pencarian kata {search} </small>
			{posts.map(({ title, tags, date }, index) => (
				// <Article
				// 	title={title}
				// 	tags={tags}
				// 	date={date}
				// />

				<Article
					key={index}
					// Spread attributes
					{...{ title, tags, date }}
				/>
			))}
		</>
	);
}

export default Homepage;
