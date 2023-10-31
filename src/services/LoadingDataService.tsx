const URL = 'https://stapi.co/api/v1/rest/animal/search';

export async function searchAnimalsByName(name: string) {
  const response = await fetch(URL + `?name=${name}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(`Error: ${data}`);
  }
}

export async function searchAllAnimals() {
  const response = await fetch(URL);

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(`Error: ${data.message}`);
  }
}
