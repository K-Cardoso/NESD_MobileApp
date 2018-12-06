export const getLocation = (address) => {
    // let address = address;
    const URL = `https://mcmap.org/api/search/v1/${address}?tables=address,park,library,school,pid,business`;
    return fetch(URL)
            .then((res) => res.json());
  }