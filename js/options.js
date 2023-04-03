import * as utils from './utils.js';
import * as movieUtils from './movieUtils.js';
import * as renderUtils from './render.js';
import {getFavorites, searchFavorite} from "./movieUtils.js";

console.log(await movieUtils.getFavorites());

const addMovieButton = document.querySelector('.addMovie');
const deleteMovieButton = document.querySelector('.deleteMovie');
const editMovieButton = document.querySelector('.editMovie');
const searchTitle = document.querySelector('#searchTitle');

addMovieButton.addEventListener('click', async () => {
	let movie = {
		title: document.querySelector('#movieTitle').value,
		genre: document.querySelector('#movieGenre').value,
		rating: document.querySelector('#movieRating').value
	}
	await movieUtils.setFavorite(movie);
});

deleteMovieButton.addEventListener('click', async () => {
	let movies = await (getFavorites());
	let movie = document.querySelector('#deleteMovie').value;
	let movieToDelete = movies.find((result) => {
		return movie === result.title;
	});
	await movieUtils.deleteFavorite(movieToDelete.id);
});


searchTitle.addEventListener('keyup', utils.debounce (async function (event) {
	event.preventDefault()
	let title = document.querySelector('#searchTitle').value;
	let genre = document.querySelector('#editGenre')
	let rating = document.querySelector('#editRating')
	let movieToSearch ={title, genre, rating }
	let dontSearch= ['the ', 'a ', 'an ', 'to ', 'the', 'a', 'an', 'to' ];
	for await (const word of dontSearch) {

		if (title.toLowerCase()=== word.toLowerCase()){
			genre.value = '';
			rating.value = '';
		} else {
			let searchResult = await searchFavorite(movieToSearch);
			genre.value =  searchResult.genre;
			rating.value = searchResult.rating;
		}
		console.log(word);
		console.log(title);
	}
}, 1000));

editMovieButton.addEventListener('click', async () => {
	let title = document.querySelector('#searchTitle').value;
	let genre = document.querySelector('#editGenre').value;
	let rating = document.querySelector('#editRating').value;
	let movieToSearch ={title, genre, rating }
	let movieToEdit= await searchFavorite(movieToSearch);
	await movieUtils.patchFavorite(movieToEdit.id, movieToSearch);
	console.log(movieToSearch);
	console.log(movieToEdit);
});
