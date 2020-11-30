let items_parent = document.getElementById('listBlockMovies'), //поиск по id main блока
    requiredJson = list_top_films, //реАдресация
    count = requiredJson.length; //длинна Json


    // console.log(requiredJson);

function topFilms() {
//цикл
  for (var i = 0; i < count; i++){
  	
    // console.log(requiredJson[i].filmId);

    let parent = items_parent,
    	aElement1 = document.createElement('a'),
    	divElement2 = document.createElement('div'),
    	divElement3 = document.createElement('div'),
      pElement4 = document.createElement('p'),
      divPlace =document.createElement('div'),
    	divElement5 = document.createElement('div');

    aElement1.classList = 'mb-20 item-ch item-3-xl item-4-l item-6-t item-6-m2 item-12-m1';
    aElement1.id = (i + "_1");
    aElement1.href = ('film_info.html?id=' + requiredJson[i].filmId);

    divElement2.classList = 'list-movies-item';
    divElement2.id = (i + "_2");

    divElement3.classList = 'movies-card-main';
    divElement3.id = (i + "_3");

    pElement4.classList = 'movies-card-title';
    pElement4.id = (i + "_4");
    pElement4.innerHTML = requiredJson[i].nameRu;

    divPlace.classList = 'movies-card-place'
    divPlace.id = (i + "_6");
    divPlace.innerHTML = (i + 1);

    divElement5.classList = 'movies-card-bg';
    divElement5.id = (i + "_5");
    divElement5.style.backgroundImage = "url(assets/img/posters/kp/" +  requiredJson[i].filmId + ".jpg)";
    	
    parent.append(aElement1);
    aElement1.append(divElement2);
    divElement2.append(divElement3);
    divElement3.append(pElement4);
    divElement2.append(divElement5);
    divElement2.append(divPlace);
	}
}

topFilms(); //вызов функции