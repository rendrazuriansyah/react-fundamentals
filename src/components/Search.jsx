import { useState } from "react";

function Search(props) {
	const [search, setSearch] = useState("");
	const onSearchChange = (event) => {
		setSearch(event.target.value);
		props.onSearchChange(event.target.value);
	};

	return (
		<>
			<div>
				Cari Artikel : <input onChange={onSearchChange} />
			</div>
			<small>
				Ditemukan {props.postCount} data dengan pencarian kata
				<strong> {search}</strong>
			</small>
		</>
	);
}

export default Search;
