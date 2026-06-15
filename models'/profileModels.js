import { pool } from "../config/db.js";

export const save = async (profile) => {

  const sql = `
    INSERT INTO github_profiles
    (
      username,
      followers,
      public_repos,
      total_stars,
      total_forks
    )
    VALUES (?, ?, ?, ?, ?)
  `;

  await pool.execute(sql, [
    profile.username,
    profile.followers,
    profile.publicRepos,
    profile.totalStars,
    profile.totalForks
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
