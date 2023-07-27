// githubApi.ts
import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

export const searchUsers = async (query: string, accessToken: string) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/search/users`, {
      params: {
        q: query,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data.items;
  } catch (error) {
    throw new Error('Failed to fetch users from GitHub API');
  }
};

export const getUserRepositories = async (username: string, accessToken: string) => {
  try {
    const response = await axios.get(`${GITHUB_API_URL}/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch repositories from GitHub API');
  }
};
