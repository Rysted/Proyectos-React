import React from "react";
import Player from "@madzadev/audio-player";
import "@madzadev/audio-player/dist/index.css";

const colors = `html {
  --tagsBackground: #e91e63;
  --tagsText: #ffffff;
  --tagsBackgroundHoverActive: #2cc0a0;
  --tagsTextHoverActive: #ffffff;
  --searchBackground: #18191f;
  --searchText: #61dafb;
  --searchPlaceHolder: #575a77;
  --playerBackground: #18191f;
  --titleColor: #ffffff; 
  --timeColor: #ffffff;
  --progressSlider: #e91e63;
  --progressUsed: #ffffff;
  --progressLeft: #151616;
  --volumeSlider: #e91e63;
  --volumeUsed: #ffffff;
  --volumeLeft:  #151616;
  --playlistBackground: #18191f;
  --playlistText: #575a77;
  --playlistBackgroundHoverActive:  #18191f;
  --playlistTextHoverActive: #ffffff;
}`;

const tracks = [
  {
    url: "https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3",
    title: "Madza - Chords of Life",
    tags: ["house"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3",
    title: "Madza - Late Night Drive",
    tags: ["dnb"],
  },
  {
    url: "https://audioplayer.madza.dev/Madza-Persistence.mp3",
    title: "Madza - Persistence",
    tags: ["dubstep"],
  },
];

const Play = () => {
  return (
    <div>
      <Player
        trackList={tracks}
        includeTags={true}
        includeSearch={true}
        showPlaylist={true}
        autoPlayNextTrack={true}
        customColorScheme={colors}
      />
    </div>
  );
};

export default Play;
