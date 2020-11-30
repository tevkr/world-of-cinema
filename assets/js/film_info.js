let mainBlock = document.getElementById('film_block'), //поиск по id main блока
    requiredListFilms = list_films, //реАдресация
    countFilms = requiredListFilms.length; //длинна Json

var paramsString = document.location.search;
var searchParams = new URLSearchParams(paramsString);
var idFilms = searchParams.get("id");

console.log(countFilms);

function infoFilms() {
	for (var i = 0; i < countFilms; i++) {
		if (idFilms == requiredListFilms[i].data.filmId) {
			console.log('dlina ' + requiredListFilms[i].data.countries.length);	
			let filmPosterImg = document.getElementById('filmposter'),
				filmPosterBg = document.getElementById('filmposterbg'),
				filmNameRu = document.getElementById('filmnameRu'),
				filmdesc = document.getElementById('filmdesc'),
				engAge = document.getElementById('eng_age'),
				filmAbout = document.getElementById('film_about');

			console.log('я нашел ID! Вот он: ' + requiredListFilms[i].data.filmId + ' Название фильма: ' + requiredListFilms[i].data.nameRu);	

			filmPosterImg.style.backgroundImage = "url(assets/img/posters/kp/" +  requiredListFilms[i].data.filmId + ".jpg)";

			filmPosterBg.style.backgroundImage = "url(assets/img/posters/kp/" +  requiredListFilms[i].data.filmId + ".jpg)";

			filmNameRu.innerHTML = requiredListFilms[i].data.nameRu;

			if (requiredListFilms[i].data.description != null)
			{
				filmdesc.innerHTML = requiredListFilms[i].data.description;
			}

			if (requiredListFilms[i].data.nameEn != "")
			{
				let filmNameEn = document.createElement('p');
				filmNameEn.classList = 'film-nameEn';
				filmNameEn.innerHTML = requiredListFilms[i].data.nameEn;
				engAge.append(filmNameEn);
			}

			if (requiredListFilms[i].data.ratingAgeLimits != null)
			{
				let ratingAgeLimits = document.createElement('span');
				ratingAgeLimits.classList = 'ratingAgeLimits';
				ratingAgeLimits.innerHTML = requiredListFilms[i].data.ratingAgeLimits + "+";
				if (requiredListFilms[i].data.nameEn == "")
				{
					ratingAgeLimits.style.right = 0;
				}
				engAge.append(ratingAgeLimits);
			}

			if (requiredListFilms[i].data.rating != null && requiredListFilms[i].data.rating.length < 4)
			{
				let ratingFilm = document.createElement('span');
				ratingFilm.classList = 'film-rating';
				ratingFilm.innerHTML = "Рейтинг " + requiredListFilms[i].data.rating;
				engAge.append(ratingFilm);
			}

			if (requiredListFilms[i].data.year != null)
			{
				let divMain = document.createElement('div'),
					divCat = document.createElement('div'),
					divDesc = document.createElement('div');
				divMain.classList = 'film-about-item';
				divCat.classList = 'film-about-item-cat';
				divCat.innerHTML = 'Год производства';
				divDesc.classList = 'film-about-item-desc';
				divDesc.innerHTML = requiredListFilms[i].data.year;
				divMain.append(divCat);
				divMain.append(divDesc);
				filmAbout.append(divMain);
			}

			if (requiredListFilms[i].data.filmLength != null)
			{
				let divMain = document.createElement('div'),
					divCat = document.createElement('div'),
					divDesc = document.createElement('div');
				divMain.classList = 'film-about-item';
				divCat.classList = 'film-about-item-cat';
				divCat.innerHTML = 'Длинна фильма';
				divDesc.classList = 'film-about-item-desc';
				divDesc.innerHTML = requiredListFilms[i].data.filmLength;
				divMain.append(divCat);
				divMain.append(divDesc);
				filmAbout.append(divMain);
			}

			if (requiredListFilms[i].data.slogan != null)
			{
				let divMain = document.createElement('div'),
					divCat = document.createElement('div'),
					divDesc = document.createElement('div');
				divMain.classList = 'film-about-item';
				divCat.classList = 'film-about-item-cat';
				divCat.innerHTML = 'Слоган';
				divDesc.classList = 'film-about-item-desc';
				divDesc.innerHTML = requiredListFilms[i].data.slogan;
				divMain.append(divCat);
				divMain.append(divDesc);
				filmAbout.append(divMain);
			}

			if (requiredListFilms[i].data.ratingMpaa != null)
			{
				let divMain = document.createElement('div'),
					divCat = document.createElement('div'),
					divDesc = document.createElement('div');
				divMain.classList = 'film-about-item';
				divCat.classList = 'film-about-item-cat';
				divCat.innerHTML = 'Рейтинг MPAA';
				divDesc.classList = 'film-about-item-desc';
				divDesc.innerHTML = requiredListFilms[i].data.ratingMpaa;
				divMain.append(divCat);
				divMain.append(divDesc);
				filmAbout.append(divMain);
			}

			if (requiredListFilms[i].data.premiereRu != null)
			{
				let divMain = document.createElement('div'),
					divCat = document.createElement('div'),
					divDesc = document.createElement('div');
				divMain.classList = 'film-about-item';
				divCat.classList = 'film-about-item-cat';
				divCat.innerHTML = 'Премьера в России';
				divDesc.classList = 'film-about-item-desc';
				divDesc.innerHTML = requiredListFilms[i].data.premiereRu;
				divMain.append(divCat);
				divMain.append(divDesc);
				filmAbout.append(divMain);
			}

			if (requiredListFilms[i].data.distributors != null)
			{
				let divMain = document.createElement('div'),
					divCat = document.createElement('div'),
					divDesc = document.createElement('div');
				divMain.classList = 'film-about-item';
				divCat.classList = 'film-about-item-cat';
				divCat.innerHTML = 'Прокатчик';
				divDesc.classList = 'film-about-item-desc';
				divDesc.innerHTML = requiredListFilms[i].data.distributors;
				divMain.append(divCat);
				divMain.append(divDesc);
				filmAbout.append(divMain);
			}

			if (requiredListFilms[i].data.premiereWorld != null)
			{
				let divMain = document.createElement('div'),
					divCat = document.createElement('div'),
					divDesc = document.createElement('div');
				divMain.classList = 'film-about-item';
				divCat.classList = 'film-about-item-cat';
				divCat.innerHTML = 'Премьера в мире';
				divDesc.classList = 'film-about-item-desc';
				divDesc.innerHTML = requiredListFilms[i].data.premiereWorld;
				divMain.append(divCat);
				divMain.append(divDesc);
				filmAbout.append(divMain);
			}

			if (requiredListFilms[i].data.premiereDigital != null && requiredListFilms[i].data.distributorRelease != null)
			{
				let divMain = document.createElement('div'),
					divCat = document.createElement('div'),
					divDesc = document.createElement('div');
				divMain.classList = 'film-about-item';
				divCat.classList = 'film-about-item-cat';
				divCat.innerHTML = 'Цифровой релиз';
				divDesc.classList = 'film-about-item-desc';
				divDesc.innerHTML = requiredListFilms[i].data.premiereDigital + "\"" + requiredListFilms[i].data.distributorRelease + "\"";
				divMain.append(divCat);
				divMain.append(divDesc);
				filmAbout.append(divMain);
			}

			if (requiredListFilms[i].data.premiereWorldCountry != null)
			{
				let divMain = document.createElement('div'),
					divCat = document.createElement('div'),
					divDesc = document.createElement('div');
				divMain.classList = 'film-about-item';
				divCat.classList = 'film-about-item-cat';
				divCat.innerHTML = 'Первая премьера';
				divDesc.classList = 'film-about-item-desc';
				divDesc.innerHTML = requiredListFilms[i].data.premiereWorldCountry;
				divMain.append(divCat);
				divMain.append(divDesc);
				filmAbout.append(divMain);
			}

			if (requiredListFilms[i].data.premiereDvd != null)
			{
				let divMain = document.createElement('div'),
					divCat = document.createElement('div'),
					divDesc = document.createElement('div');
				divMain.classList = 'film-about-item';
				divCat.classList = 'film-about-item-cat';
				divCat.innerHTML = 'Релиз DVD';
				divDesc.classList = 'film-about-item-desc';
				divDesc.innerHTML = requiredListFilms[i].data.premiereDvd;
				divMain.append(divCat);
				divMain.append(divDesc);
				filmAbout.append(divMain);
			}

			if (requiredListFilms[i].data.premiereBluRay != null)
			{
				let divMain = document.createElement('div'),
					divCat = document.createElement('div'),
					divDesc = document.createElement('div');
				divMain.classList = 'film-about-item';
				divCat.classList = 'film-about-item-cat';
				divCat.innerHTML = 'Релиз BluRay';
				divDesc.classList = 'film-about-item-desc';
				divDesc.innerHTML = requiredListFilms[i].data.premiereBluRay;
				divMain.append(divCat);
				divMain.append(divDesc);
				filmAbout.append(divMain);
			}

			if (requiredListFilms[i].data.countries.length != 0)
			{
				let divMain = document.createElement('div'),
					divCat = document.createElement('div'),
					divDesc = document.createElement('div');
				divMain.classList = 'film-about-item';
				divCat.classList = 'film-about-item-cat';
				divCat.innerHTML = 'Страны';
				divDesc.classList = 'film-about-item-desc';
				for (var j = 0; j < requiredListFilms[i].data.countries.length;j++){
					divDesc.innerHTML += requiredListFilms[i].data.countries[j].country;
					if (j != requiredListFilms[i].data.countries.length -1)
					{
						divDesc.innerHTML += ", ";
					}
				}
				divMain.append(divCat);
				divMain.append(divDesc);
				filmAbout.append(divMain);
			}

			if (requiredListFilms[i].data.genres.length != 0)
			{
				let divMain = document.createElement('div'),
					divCat = document.createElement('div'),
					divDesc = document.createElement('div');
				divMain.classList = 'film-about-item';
				divCat.classList = 'film-about-item-cat';
				divCat.innerHTML = 'Жанры';
				divDesc.classList = 'film-about-item-desc';
				for (var j = 0; j < requiredListFilms[i].data.genres.length;j++)
				{
					divDesc.innerHTML += requiredListFilms[i].data.genres[j].genre;
					if (j != requiredListFilms[i].data.genres.length - 1)
					{
						divDesc.innerHTML += ", ";
					}
				}
				divMain.append(divCat);
				divMain.append(divDesc);
				filmAbout.append(divMain);
			}
			break;
		}
	}
}

infoFilms();