import React from "react";

function PlayerDetails(props) {
  return (
    <div className="music-player--details">
      <div className=".container-imageAlbum">
        <img
          className="image-album"
          src={props.song.img_src}
          alt={props.song.title}
        />
      </div>
      <div className="range"></div>
      <div className="artist-info">
      <h1  className="title-band">{props.song.artist}</h1>
          <h2 className="title-album">{props.song.album}</h2>
          <h3  className="title-song"> {props.song.title}</h3>
        <div className="line"></div>
      </div>
    </div>
  );
}

export default PlayerDetails;
