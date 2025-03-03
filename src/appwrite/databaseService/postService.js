import { Databases, Client, ID } from "appwrite";
import config from "../../config/config";

export class PostService {
    client = new Client();
    databases;

    constructor() {
        this.client
             .setEndpoint(config.apiEndpoint)
             .setProject(config.projectId);
        this.databases = new Databases(this.client);     
    }

    async createPost({image, caption, song, location, userId}) {
        try {
            const newPost = await this.databases.createDocument(
                config.databaseId,
                config.postTableId,
                ID.unique(),
                {
                    image,
                    caption,
                    song,
                    location,
                    userId
                }
            );
        } catch (error) {
            console.log("Appwrite Service :: databases :: postService :: createPost :: error: ", error);
            throw error;
        }
    }

    async updatePost(postId, {image, caption, song, location}) {
        try {
            const post = await this.databases.updateDocument(
                config.databaseId,
                config.postTableId,
                postId,
                {
                    image,
                    caption,
                    song,
                    location
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: databases :: postService :: updatePost :: error: ", error);
            throw error;   
        }
    }

    async deletePost(postId) {
        try {
            const post = await this.databases.deleteDocument(
                config.databaseId,
                config.postTableId,
                postId
            );

            if(post) {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log("Appwrite Service :: databases :: postService :: deletePost :: error: ", error);
            throw error;  
        }
    }

    async getAllPosts() {
        try {
            const posts = await this.databases.listDocuments(
                config.databaseId,
                config.postTableId
            );

            if(posts) {
                return posts;
            }
        } catch (error) {
            console.log("Appwrite Service :: databases :: postService :: getAllPosts :: error: ", error);
            throw error;  
        }
    }

    async getPost(postId) {
        try {
            const post = await this.databases.getDocument(
                config.databaseId,
                config.postTableId,
                postId
            );

            if(post) {
                return post;
            }
        } catch (error) {
            console.log("Appwrite Service :: databases :: postService :: getPost :: error: ", error);
            throw error; 
        }
    }
}

const postService = new PostService();

export default postService;