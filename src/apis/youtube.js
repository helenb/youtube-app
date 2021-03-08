import axios from 'axios';
const KEY = 'AIzaSyDoE5faK9ThTmhowBb7yoq_di8cxa_YOTA';

export default axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3',
    params: { part: 'snippet', maxResults: 5, key: KEY, type: 'video' },
});
