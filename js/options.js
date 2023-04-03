import * as utils from './utils.js';
import * as movieUtils from './movieUtils.js';
import * as renderUtils from './render.js';
import {getFavorites} from "./movieUtils.js";

console.log(await movieUtils.getFavorites());

const addMovieButton = document.querySelector('.addMovie');
const deleteMovieButton = document.querySelector('.deleteMovie');

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