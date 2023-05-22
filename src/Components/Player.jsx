import React, { useState, useRef, useEffect } from "react";
import PlayerDetails from "./PlayerDetails";
import PlayerControls from "./PlayerControls";
import PlayerControls2 from "./PlayerControls2";
import ProgressBar from "./ProgressBar";
import Lyrics from "./Lyrics";


function Player(props) {

    // Declaracion de Estados del Reproductor de Musica
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
  const [previousVolume, setPreviousVolume] = useState(volume);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  

// Controla la reproducción del audio
  useEffect(() => {
    if (isPlaying) {
      audioElement.current.play();
    } else {
      audioElement.current.pause();
    }
  });

  // Siguiente Cancion
  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }

        return temp;
      });
    }
  };

  // Actualización del tiempo de reproducción
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(audioElement.current.currentTime);
      setDuration(audioElement.current.duration);
    };

    audioElement.current.addEventListener("timeupdate", updateTime);

    return () => {
      audioElement.current.removeEventListener("timeupdate", updateTime);
    };
  }, []);


  // Bajar Volumen
  const decreaseVolume = () => {
    setVolume((prevVolume) => (prevVolume > 0 ? prevVolume - 10 : 0));
  };

  // Mutear Volumen
  const muteVolume = () => {
    if (volume === 0) {
      setVolume(previousVolume);
      setIsMuted(false);
    } else {
      setPreviousVolume(volume);
      setVolume(0);
      setIsMuted(true);
    }
  };

  // Incrementar Volumen
  const increaseVolume = () => {
    setVolume((prevVolume) => (prevVolume < 100 ? prevVolume + 10 : 100));
  };

  // Actualizar el volumen del elemento de audio 
  useEffect(() => {
    audioElement.current.volume = volume / 100;
  }, [volume]);

  return (

   <>
      <header className="header-nav">
        <nav className="container-nav">
          <a className="ab-btn" href="">
            <img src={require('../assets/img/svgVR-white.png')} alt="" />
          </a>
        </nav>
      </header>

      <section className="section-mediaplayer" id="section-mediaplayer">
        <div id="container-mediaPlayer" className="container-mediaPlayer">
          <div id="container-infoSong" className="container-infoSong">
            <audio
              src={props.songs[props.currentSongIndex].src}
              ref={audioElement}
            ></audio>
            <PlayerDetails song={props.songs[props.currentSongIndex]} />
          </div>
          <ProgressBar currentTime={currentTime} duration={duration} />
          <PlayerControls
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            SkipSong={SkipSong}
          />
          <PlayerControls2
            decreaseVolume={decreaseVolume}
            muteVolume={muteVolume}
            increaseVolume={increaseVolume}
            isMuted={isMuted}
          />
        </div>
        <Lyrics lyric={props.songs[props.currentSongIndex].lyric} />

      </section>
      <footer className="footer">
        <div className="container-footer">
          <div className="container-social">

            <a href="" className="github-btn">
              <img src={require('../assets/img/github.png')} alt="" />
            </a>

            <a className="linkedin-btn" href="">
              <img src={require('../assets/img/linkedin.png')} alt="" />
            </a>

            <a className="instagram-btn" href="">
              <img src={require('../assets/img/instagram.png')} alt="" />
            </a>
          </div>

          <div className="container-copyright">
            <p>Copyright © Todos los Derechos Reservados</p>
          </div>

        </div>
      </footer>
    </>
  );
}
export default Player;
