import { findAll, findByUsername, save } from "../models'/profileModels.js";
import { gitHubData } from "../services/githubServices.js";
import { insiteCalculate } from "../utils/insiteCalculater.js";

export const analyzeProfile = async (req,res) =>{
    try {
        const { username } = req.params;
        const profileData = await gitHubData(username);
        const insites = insiteCalculate(profileData);
        await save(insites);

        res.status(200).json(insites);
    } catch (err) {
        res.status(500).json({
            message:err.message
        });
    }
};
export const getAllProfile= async (req,res)=>{
    try {
        const allProfile = await findAll();
        res.status(200).json(allProfile);
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    }
};

export const getProfile = async (req,res)=>{
    try {
        const userProfile = await findByUsername(
            req.params.username
        )
        res.status(200).json(userProfile);
    } catch (error) {
        res.status(500).json({
            message:error.message
        });
    }
};
