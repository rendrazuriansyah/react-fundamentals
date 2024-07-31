import { useEffect, useState } from "react";

function Blog() {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/posts")
			.then((response) => response.json())
			.then((json) => setPosts(json));
	}, []); // Re-render when posts change

	return (
		<>
			<h2>My Blog Posts</h2>
			{posts.map((item, index) => (
				<div key={index}>- {item.title}</div>
			))}
		</>
	);
}

export default Blog;
