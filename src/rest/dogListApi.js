const ENDPOINT =
  "https://crudcrud.com/api/3585ab3cf2724407b4b84f8cb20904bd/dogs";

class DogsApi {
  async create(dog) {
    try {
      return await fetch(`${ENDPOINT}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dog),
      });
    } catch (exception) {
      console.log(`Problem creating dog: ${exception}`);
    }
  }
  
  async get() {
    try {
      const resp = await fetch(ENDPOINT);
      return await resp.json();
    } catch (exception) {
      console.log("Looks like fetchDogs had an issue.", exception);
    }
  }

  async put(dog) {
    try {
      let dogWithoutId = {
        dog: dog.dog,
        meals: dog.meals
      };
      console.log(JSON.stringify(dogWithoutId))
      const resp = await fetch(`${ENDPOINT}/${dog._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dogWithoutId),
      });
      return await resp.json();
    } catch (exception) {
      console.log("Looks like update dogs had an issue", exception);
    }
  }

  async delete(id) {
    try {
      return await fetch(`${ENDPOINT}/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (exception) {
      console.log(`Problem deleting dog: ${exception}`);
    }
  }
}

export const dogsApi = new DogsApi();
