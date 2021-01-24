import { SpaceClient } from "@fleekhq/space-client";
import XMLRequest from "xmlhttprequest";

global.XMLHttpRequest = XMLRequest.XMLHttpRequest;

const client = new SpaceClient({
  url: "http://0.0.0.0:9998",
  // use defaultBucket property if you don't want to specify the bucket name each time
});

export default client;
