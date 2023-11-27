const URL = 'https://stapi.co/api/v1/rest/animal/search';

export async function searchAnimalsByName(
  name: string,
  pageNumber = 0,
  pageSize = 50
) {
  const response = await fetch(
    URL + `?name=${name}&pageNumber=${pageNumber}&pageSize=${pageSize}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(`Error: ${data.message}`);
  }
}

export async function searchAllAnimals(pageNumber = 0, pageSize = 50) {
  const response = await fetch(
    URL + `?pageNumber=${pageNumber}&pageSize=${pageSize}`
  );

  const data = await response.json();

  if (response.ok) {
    return data;
  } else {
    throw new Error(`Error: ${data.message}`);
  }
}
