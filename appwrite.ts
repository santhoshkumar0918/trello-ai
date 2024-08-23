import { Client, ID, Databases, Account, Storage } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!);

const account = new Account(client);
const databases = new Databases(client);
const promise = databases.createDocument(
  "<DATABASE_ID>",
  "[COLLECTION_ID]",
  ID.unique(),
  {}
);

const storage = new Storage(client);

export { Client,Databases, Account, Storage, ID };

