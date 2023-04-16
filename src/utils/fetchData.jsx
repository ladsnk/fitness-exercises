export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0b56f1cf37msh5b1003187ea7243p1c85f6jsn017b5250d7f3",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "0b56f1cf37msh5b1003187ea7243p1c85f6jsn017b5250d7f3",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
