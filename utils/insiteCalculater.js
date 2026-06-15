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

  const languageCounts = repos.reduce(
    (counts, repo) => {
      if (repo.language) {
        counts[repo.language] =
          (counts[repo.language] || 0) + 1;
      }

      return counts;
    },
    {}
  );

  const mostUsedLanguage =
    Object.entries(languageCounts).sort(
      (left, right) => right[1] - left[1]
    )[0]?.[0] || null;

  const accountCreatedAt = new Date(user.created_at);
  const now = new Date();
  const accountAge =
    now.getFullYear() -
    accountCreatedAt.getFullYear() -
    (
      now.getMonth() < accountCreatedAt.getMonth() ||
      (
        now.getMonth() === accountCreatedAt.getMonth() &&
        now.getDate() < accountCreatedAt.getDate()
      )
        ? 1
        : 0
    );

  return {
    username: user.login,
    followers: user.followers,
    followingCount: user.following,
    publicRepos: user.public_repos,
    totalStars,
    totalForks,
    mostUsedLanguage,
    accountAge
  };
};
