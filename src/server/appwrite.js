import { Account, Client, Databases, Storage } from "appwrite";
import config from "../config/config";

const client = new Client();

export const databases = new Databases(client);

export const storage = new Storage(client);

export const account = new Account(client);

client.setEndpoint(config.appWriteUrl).setProject(config.projectId);
