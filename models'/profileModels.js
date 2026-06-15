import { pool } from "../config/db.js";

export const save = async (profile) => {

  const sql = `
    INSERT INTO github_profiles
    (
      username,
      followers,
      following_count,
      public_repos,
      total_stars,
      total_forks,
      most_used_language,
      account_age
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  await pool.execute(sql, [
    profile.username,
    profile.followers,
    profile.followingCount,
    profile.publicRepos,
    profile.totalStars,
    profile.totalForks,
    profile.mostUsedLanguage,
    profile.accountAge
  ]);
};

export const findAll = async () => {

  const [rows] =
    await pool.execute(
      "SELECT * FROM github_profiles"
    );

  return rows;
};

export const findByUsername = async (username) => {

  const [rows] =
    await pool.execute(
      "SELECT * FROM github_profiles WHERE username=?",
      [username]
    );

  return rows[0];
};
