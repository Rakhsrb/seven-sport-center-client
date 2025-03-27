export const BASE_URL = "http://localhost:3001/api";

export const fetcher = (url: string) =>
  fetch(`${BASE_URL}${url}`).then((res) => res.json());
