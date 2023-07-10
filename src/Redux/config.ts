const HEADER = {
  "X-RapidAPI-Key": "231d53065bmsh40d574926e0d700p1e3a22jsnca411ba1690f",
  "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
};

export const suggestedConfig = {
  params: {
    relatedToVideoId: "zCb4yRPYpiI",
    part: "id,snippet,statistics",
    type: "video",
    maxResults: "20",
  },
  headers: HEADER,
};
