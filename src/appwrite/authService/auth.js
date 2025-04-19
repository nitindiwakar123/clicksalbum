import {Client, Account, ID} from "appwrite";
import config from "../../config/config";

export class AuthService {

    client = new Client();
    account;

    constructor() {
        this.client
             .setProject(config.projectId);
        this.account = new Account(this.client);     
    }

    async createAccount({email, password, fullName, username}) {
        try {
            const newUser = await this.account.create(ID.unique(), email, password, fullName, username);
 
            if(newUser) {
                return this.login({email, password});
            } else {
                return newUser;
            }
        } catch (error) {
            console.log("Appwrite Service :: auth :: createAccount :: error: ", error);
            throw error;
        }
    }

    async login({email, password}) {
        try {
            const session = await this.account.createEmailPasswordSession(email, password);

            if(session) {
                return session;
            } else {
                return false;
            }
        } catch (error) {
            console.log("Appwrite Service :: auth :: login :: error: ", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const currentUser = await this.account.get();

            if(currentUser) {
                return currentUser;
            } else {
                return false;
            }
        } catch (error) {
            console.log("Appwrite Service :: auth :: getCurrentUser :: error: ", error);
            throw error;
        }
    }

    async logout() {
        try {
            const session = await this.account.deleteSessions();

            if(session) {
                return true;
            } else {
                false;
            }
        } catch (error) {
            console.log("Appwrite Service :: auth :: logout :: error: ", error);
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;