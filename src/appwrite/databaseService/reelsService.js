import { Databases, Client, ID } from "appwrite";
import config from "../../config/config";

export class ReelsService {
    client = new Client();
    databases;

    constructor() {
        this.client
             .setEndpoint(config.apiEndpoint)
             .setProject(config.projectId);
        this.databases = new Databases(this.client);     
    }

    async createReel({video, caption, song, location, userId}) {
        try {
            const newReel = await this.databases.createDocument(
                config.databaseId,
                config.reelsTableId,
                ID.unique(),
                {
                    video,
                    caption,
                    song,
                    location,
                    userId
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: databases :: reelsService :: createReel :: error: ", error);
            throw error;
        }
    }

    async updateReel(reelId, {video, caption, song, location}) {
        try {
            const reel = await this.databases.updateDocument(
                config.databaseId,
                config.reelsTableId,
                reelId,
                {
                    video,
                    caption,
                    song,
                    location
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: databases :: reelsService :: updateReel :: error: ", error);
            throw error;  
        }
    }

    async deleteReel(reelId) {
        try {
            const reel = await this.databases.deleteDocument(
                config.databaseId,
                config.reelsTableId,
                reelId
            );

            if(reel) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log("Appwrite Service :: databases :: reelsService :: deleteReel :: error: ", error);
            throw error; 
        }
    }

    async getAllReels() {
        try {
            const reels = await this.databases.listDocuments(
                config.databaseId,
                config.reelsTableId
            );

            if(reels) {
                return reels;
            }
        } catch (error) {
            console.log("Appwrite Service :: databases :: reelsService :: getAllReels :: error: ", error);
            throw error; 
        }
    }

    async getReel(reelId) {
        try {
            const reel = await this.databases.getDocument(
                config.databaseId,
                config.reelsTableId,
                reelId
            );

            if(reel) {
                return reel;
            }
        } catch (error) {
            console.log("Appwrite Service :: databases :: reelsService :: getReel :: error: ", error);
            throw error; 
        }
    }
}

const reelsService = new ReelsService();

export default reelsService;