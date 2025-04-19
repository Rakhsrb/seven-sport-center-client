export const BASE_URL = "https://server.7sportcenter.uz/api";

export const fetcher = (url: string) =>
  fetch(`${BASE_URL}${url}`).then((res) => res.json());
