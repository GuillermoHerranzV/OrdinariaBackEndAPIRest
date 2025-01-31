import {MongoClient} from "mongodb";
import {} from "./types.ts";

const Mongo_URL = Deno.env.get ("Mongo_URL");

if (!Mongo_URL){
  throw new Error ("URL not found");
}

const client = new MongoClient (Mongo_URL);

const dbName = "";

await client.connect ();
console.log ("Successfully connected to de database")

const db = client.db(dbName);
//const collection = db.collection <> ();

const handler = async (req: Request): Promise <Response> => {

  const method = req.method;
  const url = new URL (req.url);
  const path = url.pathname;

  if (method === "GET"){

    if (path === "/test"){

      return new Response ("Hola");

    }

  }

  return new Response ("Endpoint not found", {status: 404});

}

Deno.serve({ port: 3000 }, handler);
