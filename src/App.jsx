import "./App.css";
import Article from "./components/Article";

function App() {
	return (
		<div className="App">
			<Article
				name="Rendra"
				titles={["ReactJS", "NextJS", "NodeJS"]}
			/>
			<br />
			<Article
				name="Rico"
				titles={["VueJS", "NuxtJS", "Deno"]}
			/>
		</div>
	);
}

export default App;
