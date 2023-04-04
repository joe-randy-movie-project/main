export const renderFavorites = (favorites) => {
	const movieGrid = document.querySelector('#movieGrid');
	movieGrid.innerHTML = '';
	favorites.forEach((favorite) => {
		const favoriteItem = document.createElement(`div`);
		favoriteItem.classList.add('movie-card');
		favoriteItem.innerHTML = `
			<div class="img-wrapper">
				<img src="https://via.placeholder.com/300x300?" alt="Movie image" class="avatar">
			</div>
			<h2>${favorite.title}</h2>
			<input type="text" placeholder="New Title" id="editTitle" class="hidden edit-title">
			<div class="row justify-space-between">
				<p>${favorite.genre}</p>
				<select name="editGenre" id="editGenre" class="hidden edit-genre">
					<option value="Action">Action</option>
					<option value="Adventure">Adventure</option>
					<option value="Animation">Animation</option>
					<option value="Comedy">Comedy</option>
					<option value="Crime">Crime</option>
					<option value="Documentary">Documentary</option>
					<option value="Drama">Drama</option>
					<option value="Family">Family</option>
					<option value="Fantasy">Fantasy</option>
					<option value="Historical">Historical</option>
					<option value="Horror">Horror</option>
					<option value="Musical">Musical</option>
					<option value="Mystery">Mystery</option>
					<option value="Romance">Romance</option>
					<option value="Science Fiction">Science Fiction</option>
					<option value="Sports">Sports</option>
					<option value="Thriller">Thriller</option>
					<option value="War">War</option>
					<option value="Western">Western</option>
				</select>
				<p>${favorite.rating}</p>
				<select name="editRating" id="editRating" class="hidden edit-rating">
					<option value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
					<option value="4">4</option>
					<option value="5">5</option>
				</select>
			</div>	
			<div class="row justify-end ">
				<button class="edit"></button>
			</div>
			<div class="row justify-space-between movie-edit hidden">
				<button id="deleteMovie" class="deleteMovie">Delete</button>
				<button class="doneButton">Done</button>
			</div>		
		`;
		movieGrid.appendChild(favoriteItem);
	});
}

