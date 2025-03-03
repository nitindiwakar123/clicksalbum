import { Databases, Client, ID } from "appwrite";
import config from "../../config/config";

export class StoriesService {
    client = new Client();
    databases;

    constructor() {
        this.client
             .setEndpoint(config.apiEndpoint)
             .setProject(config.projectId);
        this.databases = new Databases(this.client);     
    }

    async createStory({story, caption, song, location, userId}) {
        try {
            const newStory = await this.databases.createDocument(
                config.databaseId,
                config.storiesTableId,
                ID.unique(),
                {
                    story,
                    caption,
                    song,
                    location,
                    userId
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: databases :: storiesService :: createStory :: error: ", error);
            throw error;
        }
    }

    async updateStory(storyId, {story, caption, song, location}) {
        try {
            const story = await this.databases.updateDocument(
                config.databaseId,
                config.storiesTableId,
                storyId,
                {
                    story,
                    caption,
                    song,
                    location
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: databases :: storiesService :: updateStory :: error: ", error);
            throw error;
        }
    }

    async deleteStory(storyId) {
        try {
            const story = await this.databases.deleteDocument(
                config.databaseId,
                config.storiesTableId,
                storyId
            );

            if(story) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log("Appwrite Service :: databases :: storiesService :: deleteStory :: error: ", error);
            throw error;
        }
    }

    async getAllStories() {
        try {
            const stories = await this.databases.listDocuments(
                config.databaseId,
                config.storiesTableId
            );

            if(stories) {
                return stories;
            }
        } catch (error) {
            console.log("Appwrite Service :: databases :: storiesService :: getAllStories :: error: ", error);
            throw error; 
        }
    }

    async getStory(storyId) {
        try {
            const story = await this.databases.getDocument(
                config.databaseId,
                config.storiesTableId,
                storyId
            );

            if(story) {
                return story;
            }
        } catch (error) {
            console.log("Appwrite Service :: databases :: storiesService :: getStory :: error: ", error);
            throw error;  
        }
    }
}

const storiesService = new StoriesService();

export default storiesService;