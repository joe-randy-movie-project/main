export const renderFavorites = (favorites) => {
	const movieGrid = document.querySelector('#movieGrid');
	movieGrid.innerHTML = '';
	favorites.forEach((favorite) => {
		const favoriteItem = document.createElement(`div`);
		favoriteItem.classList.add('movie-card');
		favoriteItem.innerHTML = `
			<div class="img-wrapper">
				<img src="https://via.placeholder.com/300x300?" alt="Movie image" class="avatar">-
			</div>
			<h2>${favorite.title}</h2>
			<div class="row justify-space-between">
				<p>${favorite.genre}</p>
				<p>${favorite.rating}</p>
			</div>	
			<a href="#" target="_blank">Go to Movie</a>
		`;
		movieGrid.appendChild(favoriteItem);
	});
}

