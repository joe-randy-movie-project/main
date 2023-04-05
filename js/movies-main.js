import * as utils from './utils.js';
import * as movieUtils from './movieUtils.js';
import * as renderUtils from './render.js';
import {renderFavorites} from "./render.js";
import * as buttons from "./buttons.js";

const addMovieButton = document.querySelector('.addMovie');
const moviesParent = document.querySelector('#movieGrid')
const searchTitle = document.querySelector('#searchTitle');

setTimeout(async () => {
	renderUtils.renderFavorites(await movieUtils.getFavorites());
	},
	1000);

addMovieButton.addEventListener('click', async () => {
	let movie = {
		title: document.querySelector('#movieTitle').value,
		genre: document.querySelector('#movieGenre').value,
		rating: document.querySelector('#movieRating').value
	}
	await movieUtils.setFavorite(movie);
	renderFavorites(await movieUtils.getFavorites());
});

moviesParent.addEventListener('click', async function (event) {
	if (event.target.className === ('deleteMovie')) {
		let movies = await (movieUtils.getFavorites());
		let movie = event.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
		let movieToDelete = movies.find((result) => {
			return movie === result.title;
		});
		await movieUtils.deleteFavorite(movieToDelete.id);
		renderFavorites(await movieUtils.getFavorites());
	}
	if (event.target.className === ('edit')) {
		await buttons.editButton();
	}
	if (event.target.className === ('doneButton')) {
		await buttons.doneButton();
	}
});

searchTitle.addEventListener('keyup', utils.debounce (async function (event) {
	event.preventDefault()
	let title = document.querySelector('#searchTitle').value;
	let movieToSearch =title
	let dontSearch= ['the ', 'a ', 'an ', 'to ', 'the', 'a', 'an', 'to'];
	// Check if the title matches any of the words in dontSearch and if the title is longer than 3 characters
	if (!dontSearch.includes(title.toLowerCase()) && title.length > 3) {
		let searchResult = [await movieUtils.searchFavorite(movieToSearch)];
		console.log(searchResult);
		await renderFavorites(searchResult)
	} else {
		renderFavorites(await movieUtils.getFavorites());
	}
}, 800));