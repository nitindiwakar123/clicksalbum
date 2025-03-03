import { Client, Storage, ID } from "appwrite";
import config from "../../config/config";

export class PostStorageService {
    client = new Client();
    storage;

    constructor() {
        this.client
            .setEndpoint(config.apiEndpoint)
            .setProject(config.projectId);
        this.storage = new Storage(this.client);
    }

    async uploadPost(file) {
        try {
            const file = await this.storage.createFile(
                config.postBucketId,
                ID.unique(),
                file
            );

            if(file) {
                return file;
            }
        } catch (error) {
            console.log("Appwrite Service :: storageService :: postService :: uploadPost :: error: ", error);
            throw error;
        }
    } 

    async getPost(fileId) {
        try {
            const file = await this.storage.getFile(
                config.postBucketId,
                fileId
            );

            if(file) {
                return file;
            }
        } catch (error) {
            console.log("Appwrite Service :: storageService :: postService :: getPost :: error: ", error);
            throw error;
        }
    }

    getPostPreview(fileId) {
        const file = this.storage.getFilePreview(
            config.postBucketId,
            fileId
        );

        if(file) {
            return file;
        }
    }

}

const postStorageService = new PostStorageService();

export default postStorageService;  