import Play from "../Play";
import StylesMusic from "../../assets/styles/myStyles.css";




export function App() {
	return (
		<div className="App">
			{/* <Play /> */}
			<header className="header-nav">
				<nav className="container-nav">
					<a className="ab-btn" href="">
						<img src={require('../../assets/img/svgAB-white.png')} alt="Logo Augusto Blanco" />
					</a>
				</nav>
			</header>

			<section className="section-mediaplayer" id="section-mediaplayer">
				<div id="container-mediaPlayer" className="container-mediaPlayer">

					<div id="container-infoSong" className="container-infoSong">

						{/* <!--Imagen de album --> */}
						<div id="container-imageAlbum" className="container-imageAlbum">
							<img src={require('../../assets/img/dookie-album.jpg')} alt="Album de Green Day Dookie" className="image-album" />
						</div>

						{/* <!-- Titulos y nombres --> */}
						<div id="text-song" className="text-song">
							<h1 id="title-band" className="title-band">Green Day</h1>
							<h2 id="title-album" className="title-album">Dookie (1994)</h2>
							<h3 id="title-song" className="title-song"></h3>
						</div>

					</div>

					{/* <!-- Barra de Progreso --> */}
					<div id="bar-under" className="bar-under">
						<div id="bar-upper" className="bar-upper"></div>
					</div>

					{/* <!-- Tiempo de cancion --> */}
					<div id="time-song" className="time-song">
						<span id="duration-time" className="duration-time">00:00</span>
						<span id="maxDuration-time" className="maxDuration-time">00:00</span>
					</div>

					{/* <!-- Botones Multimedia --> */}
					<div id="control-btns" className="control-btns">

						<a href="#" id="previous-btn" className="previous-btn">
						<img src={require('../../assets/img/skip-previous.png')} alt="" />
						</a>

						<a href="#" id="play-btn" className="play-btn">
						<img src={require('../../assets/img/play-circle.png')} alt="" />
						</a>
						<a href="#" id="pause-btn" className="pause-btn hidden">
						<img src={require('../../assets/img/pause.png')} alt="" />
						</a>


						<a href="#" id="next-btn" className="next-btn">
						<img src={require('../../assets/img/skip-previous.png')} alt="" />
						</a>

					</div>

					{/* <!-- Botones de control de Volumen --> */}
					<div id="volume-btns" className="volume-btns">

						<a href="#" id="decrease-btn" className="decrease-btn">
						<img src={require('../../assets/img/volume-minus.png')} alt="" />
						</a>

						<a href="#" id="sound-btn" className="sound-btn">
						<img src={require('../../assets/img/volume-sound.png')} alt="" />
						</a>

						<a href="#" id="mute-btn" className="mute-btn hidden">
						<img src={require('../../assets/img/volume-mute.png')} alt="" />
						</a>

						<a href="#" id="increase-btn" className="increase-btn">
						<img src={require('../../assets/img/volume-plus.png')} alt="" />
						</a>

					</div>

				</div>

				<div id="container-lyrics" className="container-lyrics">
					<div id="container-songText" className="container-songText">
						<h3 id="title-lyrics" className="title-lyrics"><strong></strong>Lyrics</h3>
						<div id="song-lyrics" className="song-lyrics"></div>
					</div>
				</div>
			</section>

			<footer className="footer">
				<div className="container-footer">
					<div className="container-social">

						<a href="" className="github-btn">
						<img src={require('../../assets/img/github.png')} alt="" />
						</a>

						<a className="linkedin-btn" href="">
						<img src={require('../../assets/img/linkedin.png')} alt="" />
						</a>

						<a className="instagram-btn" href="">
						<img src={require('../../assets/img/instagram.png')} alt="" />
						</a>
					</div>

					<div className="container-copyright">
						<p>Copyright © Todos los Derechos Reservados</p>
					</div>

				</div>
			</footer>
		</div>
	);
}
