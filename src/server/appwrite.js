import { Account, Client, Databases, Storage } from "appwrite";

const client = new Client();

export const databases = new Databases(client);
export const storeage = new Storage(client);
export const account = new Account(client);
client
    .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
    .setProject("65c1b9ec3a4d6129f188") // Your project ID
    ;

