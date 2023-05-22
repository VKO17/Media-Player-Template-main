import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";

function PlayerControls2(props) {
  return (
    <div id="volume-btns" className="volume-btns">
      <button className="decrease-btn" onClick={() => props.decreaseVolume()}>
        <FontAwesomeIcon icon={faMinus} />
      </button>
      <button className="sound-btn" onClick={props.muteVolume}>
        <FontAwesomeIcon icon={props.isMuted ? faVolumeMute : faVolumeUp} />
      </button>
      <button className="increase-btn" onClick={() => props.increaseVolume()}>
        <FontAwesomeIcon icon={faPlus} />
      </button>
    </div>
  );
}

export default PlayerControls2;
