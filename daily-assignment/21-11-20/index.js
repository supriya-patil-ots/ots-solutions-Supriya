// const getUserData = async () => {
//   await axios
//     .get("https://reqres.in/api/users")
//     .then((res) => console.log(res.data.data));
// };

// getUserData();

// PART 1
// 1. Create a function 'whereAmI' which takes as inputs a latitude value (lat) and a longitude value (lng) (these are GPS coordinates, examples are below).
// 2. Do 'reverse geocoding' of the provided coordinates. Reverse geocoding means to convert coordinates to a meaningful location, like a city and country name. Use this API to do reverse geocoding : https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=lat&longitude=long&localityLanguage=en. Use the fetch API and promises to get the data.
// 3. Once you have the data, take a look at it in the console to see all the attributes that you received about the provided location. Then, using this data, log a message like this to the console: 'You are in Noida.'
// 4. Chain a .catch method to the end of the promise chain and log errors to the console
// 5. Create this using both then method and async await keyword. Do error handling with try/catch block
// Note: We have geoLocation method for getting the current coordinates:
// https://www.w3schools.com/jsref/prop_nav_geolocation.asp

//using Async Await fun

// const whereAmI = async (lat, long) => {
//   try {
//     const data = await fetch(
//       `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
//     );
//     const newData = await data.json();
//     console.log(newData);
//     const result = newData.city;
//     console.log(result);
//     console.log(`You are in ${result}`);
//   } catch {
//     (err) => console.log(err, "error");
//   }
// };
// whereAmI(17.385, 78.4867);

//using .then function
const whereAmI = (lat, long) => {
  try {
    const data = fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${long}&localityLanguage=en`
    )
      .then((data) => {
        return data.json();
      })
      .then((res) => console.log(`You are in ${res.city}`));
  } catch {
    (err) => console.log(err, "error");
  }
};
whereAmI(17.385, 78.4867);
