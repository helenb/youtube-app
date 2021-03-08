// example of a custom hook that takes in a search term and returns
// a list of videos and a function to update that list with a new term
import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);

    // we only want this useEffect to run once when the component renders,
    // but React complains if we don't put defaultSearch term in the array.
    // It's fine to add it - in fact we might want to re-run the search if for any reason the defaultSearchTerm was updated, e.g. if it was passed as a prop.
    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async (term) => {
        const response = await youtube.get('/search', { params: { q: term } });
        setVideos(response.data.items);
    };

    // can return an array or an object here
    return [videos, search];
};

export default useVideos;
