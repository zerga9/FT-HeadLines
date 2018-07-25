const apiUrl =
  "http://api.ft.com/content/search/v1?apiKey=" + process.env.FT_API_KEY;

const apiActions = {};

apiActions.fetchSearch = req => {
  const qs = req && req.query && req.query.q ? req.query.q : "";

  return {
    url: apiUrl,
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: {
      queryString: qs,
      queryContext: {
        curations: ["ARTICLES"]
      },
      resultContext: {
        maxResults: 100,
        aspects: ["title", "lifecycle", "location", "summary", "editorial"]
      }
    },
    json: true
  };
};

module.exports = apiActions;
