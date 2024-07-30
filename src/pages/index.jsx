import { useEffect, useState } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
	const [posts, setPosts] = useState(postsData);
	const [totalPosts, setTotalPosts] = useState(0);
	const [externalPosts, setExternalPosts] = useState([]);

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((json) => setExternalPosts(json));
	}, []); // Re-render when posts change

	const onSearchChange = (value) => {
		const filteredPosts = postsData.filter(
			(item) => item.title.toLowerCase().includes(value.toLowerCase())
			// item.title.includes(value)
		);
		setPosts(filteredPosts);
		setTotalPosts(filteredPosts.length);
	};

	return (
		<>
			<h1>Simple Blog</h1>
			<Search
				onSearchChange={onSearchChange}
				totalPosts={totalPosts}
			/>
			{posts.map((props, index) => (
				<Article
					{...props} // Spread attributes
					key={index}
				/>
			))}
			<hr />
			<h2>External Posts</h2>
			{externalPosts.map((item, index) => (
				<div key={index}>- {item.title}</div>
			))}
		</>
	);
}

export default Homepage;
