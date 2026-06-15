export const insiteCalculate = ({ user, repos }) => {

  const totalStars = repos.reduce(
    (sum, repo) =>
      sum + repo.stargazers_count,
    0
  );

  const totalForks = repos.reduce(
    (sum, repo) =>
      sum + repo.forks_count,
    0
  );

  return {
    username: user.login,
    followers: user.followers,
    publicRepos: user.public_repos,
    totalStars,
    totalForks
  };
};