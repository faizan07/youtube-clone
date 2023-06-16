export const YOUTUBE_VIDEO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${process.env.REACT_APP_GOOGLE_API_KEY}`

export const YOUTUBE_SEARCH_SUGGESTION_API = "https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const YOUTUBE_SEARCH_QUERY = `https://youtube.googleapis.com/youtube/v3/search?type=video&maxResults=50&part=snippet&key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=`