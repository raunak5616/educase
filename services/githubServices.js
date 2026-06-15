import axios from "axios";

export const gitHubData = async (gitHubProfile)=>{
    try {
        const userResponse = await axios.get(`https://api.github.com/users/${gitHubProfile}`);
        const repoResponse = await axios.get(`https://api.github.com/users/${gitHubProfile}/repos`);
        return{
            user: userResponse.data,
            repos: repoResponse.data
        }
    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        throw error;
    }
}