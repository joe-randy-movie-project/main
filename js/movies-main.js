import * as utils from './utils.js';
import * as movieUtils from './movieUtils.js';
import * as renderUtils from './render.js';
import {getFavorites} from "./movieUtils.js";

console.log(await movieUtils.getFavorites());

const addMovieButton = document.querySelector('.addMovie');
const deleteMovieButton = document.querySelector('.deleteMovie');

setTimeout(async () => {
	renderUtils.renderFavorites(await movieUtils.getFavorites()); 
	}, 
	3000);



// // await movieUtils.patchFavorite(3, {rating: 4});
//
// await movieUtils.deleteFavorite(3);