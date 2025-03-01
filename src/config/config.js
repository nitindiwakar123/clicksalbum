const config = {
    apiEndpoint: String(import.meta.env.VITE_APPWRITE_API_ENDPOINT),
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    databaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    storiesTableId: String(import.meta.env.VITE_APPWRITE_STORIES_TABLE_ID),
    reelsTableId: String(import.meta.env.VITE_APPWRITE_REELS_TABLE_ID),
    postTableId: String(import.meta.env.VITE_APPWRITE_POST_TABLE_ID),
    storiesBucketId: String(import.meta.env.VITE_APPWRITE_STORIES_BUCKET_ID),
    reelsBucketId: String(import.meta.env.VITE_APPWRITE_REELS_BUCKET_ID),
    postBucketId: String(import.meta.env.VITE_APPWRITE_POST_BUCKET_ID),
}

export default config;