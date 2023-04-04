import {renderFavorites} from "./render.js";


export const getFavorites = async () => {
	try {
		let url = `http://localhost:3000/favorites`;
		let options = {
			headers: {
				'Content-Type': 'application/json'
			}
		}
		let response = await fetch(url, options);
		let data = await response.json();
		return data;
	} catch(error){
		console.log(error);
	}
}

export const getFavorite = async (id) => {
	try {
		let url = `http://localhost:3000/favorites/${id}`;
		let options = {
			headers: {
				'Content-Type': 'application/json'
			}
		}
		let response = await fetch(url, options);
		let data = await response.json();
		return data;
	} catch(error){
		console.log(error);
	}
}

export const searchFavorite = async (movie) => {
	let favorites = await getFavorites();
	if (movie.title) {
		let favorite = favorites.find((result) => {
			let compareMovie = result.title.toLowerCase()
			let searchResult = movie.title.toLowerCase()
			if (compareMovie.includes(searchResult)) {
				return result.title

			}
		});
		if (favorite) {
			return favorite;
		} else {
			return 'No movie was found with that title';
		}
	} else if(movie.genre) {
		let favoritesFiltered = favorites.filter((result) => {
			return movie.genre === result.genre;
		});
		if (favoritesFiltered.length > 0) {
			return favoritesFiltered;
		} else {
			return 'No movies were found with that genre';
		}
	}
}

export const setFavorite = async (movie) => {
	try {
		let url = `http://localhost:3000/favorites`;
		let options = {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(movie)
		}
		let response = await fetch(url, options);
		let data = await response.json();
		return data;
	} catch(error){
		console.log(error);
	}
}

export const patchFavorite = async (id, movie) => {
	try {
		if (!id) {
			throw new Error('You must provide an id');
		}
		let url = `http://localhost:3000/favorites/${id}`;
		let options = {
			method: "PATCH",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(movie)
		}
		let response = await fetch(url, options);
		let data = await response.json();
		return data;
	} catch(error){
		console.log(error);
	}
}

export const deleteFavorite = async (id) => {
	try {
		if (!id) {
			throw new Error('You must provide a title');
		}
		let url = `http://localhost:3000/favorites/${id}`;
		let options = {
			method: "DELETE",
			headers: {
				'Content-Type': 'application/json'
			}
		}
		let response = await fetch(url, options);
		let data = await response.json();
		return data;
	} catch(error){
		console.log(error);
	}
}

export const editButton = async () => {
	let editTitle = event.target.parentElement.previousElementSibling.previousElementSibling;
	let editGenre = event.target.parentElement.previousElementSibling.children[1];
	let editRating = event.target.parentElement.previousElementSibling.children[3];
	let currentTitle = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
	let currentGenre = event.target.parentElement.previousElementSibling.children[0];
	let currentRating = event.target.parentElement.previousElementSibling.children[2];
	let deleteButtonRow = event.target.parentElement.nextElementSibling;
	let editButtonRow = event.target.parentElement;
	editTitle.classList.toggle('hidden');
	editGenre.classList.toggle('hidden');
	editRating.classList.toggle('hidden');
	currentTitle.classList.toggle('hidden');
	currentGenre.classList.toggle('hidden');
	currentRating.classList.toggle('hidden');
	deleteButtonRow.classList.toggle('hidden');
	editButtonRow.classList.toggle('hidden');
};
export const doneButton = async () => {
	let editTitle = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
	let editGenre = event.target.parentElement.previousElementSibling.previousElementSibling.children[1];
	let editRating = event.target.parentElement.previousElementSibling.previousElementSibling.children[3];
	let currentTitle = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling;
	let currentGenre = event.target.parentElement.previousElementSibling.previousElementSibling.children[0];
	let currentRating = event.target.parentElement.previousElementSibling.previousElementSibling.children[2];
	let deleteButtonRow = event.target.parentElement;
	let editButtonRow = event.target.parentElement.previousElementSibling;
	if (editTitle.value === '') {
		editTitle.value = currentTitle.innerText;
		editTitle.classList.toggle('hidden');
		editGenre.classList.toggle('hidden');
		editRating.classList.toggle('hidden');
		currentTitle.classList.toggle('hidden');
		currentGenre.classList.toggle('hidden');
		currentRating.classList.toggle('hidden');
		deleteButtonRow.classList.toggle('hidden');
		editButtonRow.classList.toggle('hidden');
		let title = currentTitle.innerText;
		let genre = currentGenre.innerText;
		let rating = currentRating.innerText;
		let movieToSearch = {title, genre, rating}
		let userEdits = {title: editTitle.value, genre: editGenre.value, rating: editRating.value}
		let movieToEdit = await searchFavorite(movieToSearch);
		console.log(movieToEdit);
		await patchFavorite(movieToEdit.id, userEdits);
		renderFavorites(await getFavorites());
	} else {
		editTitle.classList.toggle('hidden');
		editGenre.classList.toggle('hidden');
		editRating.classList.toggle('hidden');
		currentTitle.classList.toggle('hidden');
		currentGenre.classList.toggle('hidden');
		currentRating.classList.toggle('hidden');
		deleteButtonRow.classList.toggle('hidden');
		editButtonRow.classList.toggle('hidden');
		let title = currentTitle.innerText;
		let genre = currentGenre.innerText;
		let rating = currentRating.innerText;
		let movieToSearch = {title, genre, rating}
		let userEdits = {title: editTitle.value, genre: editGenre.value, rating: editRating.value}
		let movieToEdit = await searchFavorite(movieToSearch);
		console.log(movieToEdit);
		await patchFavorite(movieToEdit.id, userEdits);
		renderFavorites(await getFavorites());
	}
};


