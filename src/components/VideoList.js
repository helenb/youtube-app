import React from 'react';
import VideoItem from './VideoItem';

// props destructuring
const VideoList = ({ videos, onVideoSelect }) => {
    const videoMarkup = videos.map((video) => {
        return (
            <VideoItem
                key={video.id.videoId}
                video={video}
                onVideoSelect={onVideoSelect}
            />
        );
    });
    return <div className="ui relaxed divided list">{videoMarkup}</div>;
};

export default VideoList;
