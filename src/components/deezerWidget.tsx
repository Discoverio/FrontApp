import React from 'react';
import { View } from 'react-native';

interface Props {
  album_id: string;
}

const DeezerWidget: React.FC<Props> = ({ album_id }) => {
  return (
    <View>
      <iframe 
        id="deezer-widget" 
        src={`https://widget.deezer.com/widget/dark/album/${album_id}?app_id=457142&autoplay=false&radius=true&tracklist=true`} 
        allowtransparency="true" 
        allowfullscreen="true" 
        allow="encrypted-media" 
        width="100%" 
        height="100%"
      />
    </View>
  );
};

export default DeezerWidget;
