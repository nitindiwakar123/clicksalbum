import { Client, Storage, ID } from "appwrite";
import config from "../../config/config";

export class StoriesStorageService {
    client = new Client();
    storage;

    constructor() {
        this.client
            .setEndpoint(config.apiEndpoint)
            .setProject(config.projectId);
        this.storage = new Storage(this.client);
    }

    async uploadStory(file) {
        try {
            const file = await this.storage.createFile(
                config.storiesBucketId,
                ID.unique(),
                file
            );

            if (file) {
                return file;
            }
        } catch (error) {
            console.log("Appwrite Service :: storageService :: storiesService :: uploadStory :: error: ", error);
            throw error;
        }
    }

    async getStory(fileId) {
        try {
            const file = await this.storage.getFile(
                config.storiesBucketId,
                fileId
            );

            if (file) {
                return file;
            }
        } catch (error) {
            console.log("Appwrite Service :: storageService :: storiesService :: getStory :: error: ", error);
            throw error;
        }
    }

    getStoryPreview(fileId) {
        const file = this.storage.getFilePreview(
            config.storiesBucketId,
            fileId
        );

        if (file) {
            return file;
        }
    }

}

const storiesStorageService = new StoriesStorageService();

export default storiesStorageService;  