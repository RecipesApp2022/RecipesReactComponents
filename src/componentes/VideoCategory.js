import React from 'react';
import Video from './Video';

const VideoCategory = () => {
    return (
        <div className="h-full md:w-full grid md:grid-cols-3 md:gap-3">
            <Video name="Recipes Paleo" subname="Rosa Maria" />
            <Video name="Recipes Paleo" subname="Rosa Maria" />
            <Video name="Recipes Paleo" subname="Rosa Maria" />
            <Video name="Recipes Paleo" subname="Rosa Maria" />
            <Video name="Recipes Paleo" subname="Rosa Maria" />
            <Video name="Recipes Paleo" subname="Rosa Maria" />
        </div>
    );
}

export default VideoCategory;