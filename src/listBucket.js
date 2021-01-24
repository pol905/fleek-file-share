import client from "./spaceClient.js";
import metaData from "./metaData.js";

const selectBucket = async () => {
  const buckets = await client.listBuckets(metaData);
  const bucketList = buckets.getBucketsList();
  let bucketNames = [];
  bucketList.slice(2).forEach((bucket) => {
    bucketNames.push(bucket.getName());
  });
  return bucketNames;
};

export default selectBucket;
