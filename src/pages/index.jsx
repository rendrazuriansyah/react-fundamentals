import { useEffect, useState } from "react";
import postsData from "../posts.json";
import Article from "../components/Article";
import Search from "../components/Search";

function Homepage() {
	const [posts, setPosts] = useState(postsData);
	const [totalPosts, setTotalPosts] = useState(0);

	const onSearchChange = (value) => {
		const filteredPosts = postsData.filter(
			(item) => item.title.toLowerCase().includes(value.toLowerCase())
			// item.title.includes(value)
		);
		setPosts(filteredPosts);
		setTotalPosts(filteredPosts.length);
	};
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((json) => setExternalPosts(json));
	}, []); // Re-render when posts change

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
		</>
	);
}

export default Homepage;
