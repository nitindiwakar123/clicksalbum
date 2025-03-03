import { Client, Storage, ID } from "appwrite";
import config from "../../config/config";

export class ReelsStorageService {
    client = new Client();
    storage;

    constructor() {
        this.client
            .setEndpoint(config.apiEndpoint)
            .setProject(config.projectId);
        this.storage = new Storage(this.client);
    }

    async uploadReel(file) {
        try {
            const file = await this.storage.createFile(
                config.reelsBucketId,
                ID.unique(),
                file
            );

            if(file) {
                return file;
            }
        } catch (error) {
            console.log("Appwrite Service :: storageService :: reelsService :: uploadReel :: error: ", error);
            throw error;
        }
    } 

    async getReel(fileId) {
        try {
            const file = await this.storage.getFile(
                config.reelsBucketId,
                fileId
            );

            if(file) {
                return file;
            }
        } catch (error) {
            console.log("Appwrite Service :: storageService :: reelsService :: getReel :: error: ", error);
            throw error;
        }
    }

    getReelPreview(fileId) {
        const file = this.storage.getFilePreview(
            config.reelsBucketId,
            fileId
        );

        if(file) {
            return file;
        }
    }

}

const reelsStorageService = new ReelsStorageService();

export default reelsStorageService;  