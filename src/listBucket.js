import client from "./spaceClient.js";
import metaData from "./metaData.js";

/**
 * Helper function that provides a list of buckets allowing a user to pick a bucket to perform various actions.
 * @returns {Array} all the buckets present locally.
 */
const selectBucket = async () => {
  const meta = await metaData;
  const buckets = await client.listBuckets(meta);
  const bucketList = buckets.getBucketsList();
  let bucketNames = [];
  bucketList.slice(1).forEach((bucket) => {
    bucketNames.push(bucket.getName());
  });
  return bucketNames;
};

export default selectBucket;
