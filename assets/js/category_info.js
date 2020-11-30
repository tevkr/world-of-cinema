var paramsString = document.location.search;
var searchParams = new URLSearchParams(paramsString);
var categoryID = searchParams.get("id");

let items_parent = document.getElementById('listBlockMovies'), //поиск по id main блока
    requiredJson = categoryArray[categoryID], //реАдресация
    count = requiredJson.length; //длинна Json


// for (var a = 0; a <= list_genres.length; a++) {
//       if (list_genres[a].id == Number(categoryID)) {
//         nameCategory = list_genres[a].title;
//         console.log(nameCategory);
//         let titleCat = document.getElementsByClassName('title');
//         titleCat.innerHTML = nameCategory;
//       }
//       console.log(list_genres[a].title);
//     }

function categoryShow() {
  for (var i = 0; i < list_genres.length; i++) {
    if (list_genres[i].id == Number(categoryID)) {
      titleCat = document.getElementById('titleCat');
      titleCat.innerHTML = list_genres[i].title;
    }
  }

  for (var i = 0; i < count; i++){
    let parent = items_parent,
    	aElement1 = document.createElement('a'),
    	divElement2 = document.createElement('div'),
    	divElement3 = document.createElement('div'),
      pElement4 = document.createElement('p'),
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

    divElement5.classList = 'movies-card-bg';
    divElement5.id = (i + "_5");
    divElement5.style.backgroundImage = "url(assets/img/posters/kp/" +  requiredJson[i].filmId + ".jpg)";
    	
    parent.append(aElement1);
    aElement1.append(divElement2);
    divElement2.append(divElement3);
    divElement3.append(pElement4);
    divElement2.append(divElement5);
  }
  
}

categoryShow(); //вызов функции