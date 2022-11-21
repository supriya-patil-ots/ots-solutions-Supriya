const getNeighbour = (country) => {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((data) => {
      if (!data.ok) throw new Error("Country not found");
      return data.json();
    })
    .then((result) => {
      console.log(result);

      const neighbour = result[1].borders;
      console.log(neighbour);
      return fetch(`https://restcountries.com/v2/name/${neighbour[1]}`);
    })
    .then((neighbour) => {
      if (!neighbour.ok) throw new Error("Neibour country not found");
      return neighbour.json();
    })
    .catch((error) => console.log(error, "error occured"));
};
getNeighbour("india");
