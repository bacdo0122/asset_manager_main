import axios from "axios";

export const fetcher = (params) => {
    if (params[0]) {
      return axios
        .get(process.env.REACT_APP_API_BASE_USER_URL + params[0], {
          headers: { Authorization: 'Bearer ' + params[1] },
        })
        .then((res) => {
          return res.data;
        });
    }
  };