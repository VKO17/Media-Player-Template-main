import React from "react";

function Lyrics({ lyric }) {
  return (
    <div className="container-lyrics">
      <div className="container-songText">
        <h3 className="title-lyrics"><strong>Lyrics</strong></h3>
        <div className="song-lyrics">{lyric}</div>
      </div>
    </div>
  );
}

export default Lyrics;
