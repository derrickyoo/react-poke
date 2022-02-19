const POKE_API_URL = `https://pokeapi.co/api/v2/pokemon/`;

export function getPokemon(id) {
  let apiResult;
  let status = "pending";

  const suspensePromise = fetch(`${POKE_API_URL}${id}`)
    .then((res) => res.json())
    .then((res) => {
      apiResult = res;
      status = "success";
    })
    .catch((err) => {
      apiResult = err;
      status = "error";
    });

  return {
    readData() {
      if (status === "pending") {
        throw suspensePromise;
      } else if (status === "success") {
        return apiResult;
      } else if (status === "error") {
        throw apiResult;
      }
    },
  };
}
