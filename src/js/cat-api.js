const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY = '1PNDV7scbonS1t5xCBm2ncuVNECtXhmJs'
const ENDPOINT = '/breeds';

export function fetchBreeds(){
	return fetch(`${BASE_URL}${ENDPOINT}?api_key=${API_KEY}`)
	.then(resp => {
		if(!resp.ok){
			throw new Error(resp.statusText)
		}
		return resp.json()
	})
}

export function fetchCatByBreed(breedId){
	return fetch(`${BASE_URL}/images/${breedId}`)
	.then(resp => {
		if(!resp.ok){
			throw new Error(resp.statusText)
		}
		return resp.json()
	})
}