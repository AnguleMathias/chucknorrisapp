const SEARCH_JOKES = "SEARCH_JOKES";
const SEARCH_JOKES_SUCCEEDED = "SEARCH_JOKES_SUCCEEDED";
const SEARCH_JOKES_FAILED = "SEARCH_JOKES_FAILED";

const searchJokes = () => ({
  type: SEARCH_JOKES
});

const searchJokesSucceeded = data => ({
  type: SEARCH_JOKES_SUCCEEDED,
  data
});

const searchJokesFailed = error => ({
  type: SEARCH_JOKES_FAILED,
  error
});

export {
  SEARCH_JOKES,
  SEARCH_JOKES_SUCCEEDED,
  SEARCH_JOKES_FAILED,
  searchJokes,
  searchJokesSucceeded,
  searchJokesFailed
};
