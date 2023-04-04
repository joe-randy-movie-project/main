import {renderFavorites} from "./render.js";
import {getFavorites, patchFavorite, searchFavorite} from "./movieUtils.js";


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
	}
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
};