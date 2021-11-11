export function getAllBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((breedsData) => Object.keys(breedsData.message));
}

export function getBreed(breedName) {
  return fetch(`https://dog.ceo/api/breed/${breedName}/images`).then((res) =>
    res.json()
  );
}
