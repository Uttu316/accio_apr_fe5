export const BASE_PATH = "https://fakestoreapi.com";

export const API = async ({ endpoint }) => {
  try {
    const URL = BASE_PATH + endpoint;
    const res = await fetch(URL);
    if (res.status >= 200 && res.status < 400) {
      const data = await res.json();
      return data;
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
};
