export function markup(data){
	return `<div class="cat-thomb"> 
			<img src="${data.url}" alt="${data.breeds[0].name}  " width = 500px>
			<div class="cat-info-js">
			<h2>${data.breeds[0].name}</h2>
			<p>${data.breeds[0].description}</p>
			<p><span class="bold_font">Temperament:</span> ${data.breeds[0].temperament}</p></div></div>`;
}