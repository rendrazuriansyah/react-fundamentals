function Article() {
	const name = "Rendra";
	const titles = ["Tutorial ReactJS", "Tutorial NextJS", "Tutorial NodeJS"];
	return (
		<>
			<div>Hello {name}</div>
			<div>
				{titles.map((title) => (
					<>
						<div key={title}>{title}</div>
						<div key={title}>{title}</div>
					</>
				))}
			</div>
		</>
	);
}

export default Article;
