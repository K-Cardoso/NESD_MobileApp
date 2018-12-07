var api = {
    getLocation(){
    // let address = address;
        var URL = `https://mcmap.org/api/search/v1/3613 DRIFTWOOD DR, CHARLOTTE NC 28205?tables=address,park,library,school,pid,business`;
        return fetch(URL).then((res) => res.json());
    }
  };

  module.exports = api;