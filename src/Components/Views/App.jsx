import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import "../../assets/styles/Player.css";
import Player from "../Player";

/* Aqui se da un ejemplo con data manual en un array */

function App() {
  const [songs] = useState([
    {
      title: "Legends Never Die",
      artist: "Against the Current, League of Legends, Mako",
      album: "Legends Never Die (Remix)",
      year: "2017",
      img_src: "./songs_images/Screenshot_1.jpg",
      src: "./songs/Legends Never Die - Against The Current.mp3",
      lyric: `Legends never die
When the world is calling you
Can you hear them screaming out your name?
Legends never die
They become a part of you
Every time you bleed for reaching greatness
Relentless you survive
They never lose hope when everything's cold
And the fighting's near
It's deep in their bones, they'll run into smoke
When the fire is fierce
Oh, pick yourself up, 'cause
Legends never die
When the world is calling you (the world is calling you)
Can you hear them screaming out your name?
Legends never die
They become a part of you (they become a part of you)
Every time you bleed for reaching greatness
Legends never die
They're written down in eternity
But you'll never see the price it costs
The scars collected all of their lives
When everything's lost, they pick up their hearts
And avenge defeat
Before it all starts, they suffer through harm
Just to touch a dream
Oh, pick yourself up, 'cause
Legends never die
When the world is calling you (when the world is calling you)
Can you hear them screaming out your name?
Legends never die
They become a part of you (they become a part of you)
Every time you bleed for reaching greatness
Legends never die
When the world is calling out your name
Begging you to fight
Pick yourself up once more
Pick yourself up, 'cause
Legends never die
When the world is calling you (when the world is calling you)
Can you hear them screaming out your name?
Legends never die
They become a part of you (they become a part of you)
Every time you bleed for reaching greatness
Legends never die`
    },
    {
      title: "Warriors",
      artist: "Imagine Dragons",
      album: "Smoke + Mirrors",
      year: "2014",
      img_src: "./songs_images/Screenshot_2.jpg",
      src: "./songs/Warriors -  Imagine Dragons.mp3",
      lyric: `As a child, you would wait and watch from far away
But you always knew that you'd be the one
That work while they all play
In youth, you'd lay awake at night and scheme
Of all the things that you would change
But it was just a dream
Here we are, don't turn away now (don't turn away)
We are the warriors that built this town
Here we are, don't turn away now (don't turn away)
We are the warriors that built this town
From dust
Will come
When you will have to rise
Above the best and prove yourself
Your spirit never dies
Farewell, I've gone to take my throne above
But don't weep for me
'Cause this will be the labor of my love
Here we are, don't turn away now (don't turn away)
We are the warriors that built this town
Here we are, don't turn away now (don't turn away)
We are the warriors that built this town
From dust
Here we are, don't turn away now (don't turn away)
We are the warriors that built this town
Here we are, don't turn away now (don't turn away)
We are the warriors that built this town
From dust`
    },
    {
      title: "Blow Me Away",
      artist: "Breaking Benjamin",
      album: "Halo 2 Original Soundtrack: Volume One",
      year: "2009",
      img_src: "./songs_images/Screenshot_4.jpg",
      src: "./songs/Breaking Benjamin - Blow Me Away.mp3",
      lyric: `They fall in line
      One at a time
      Ready to play
      (I can't see them anyway)
      No time to lose
      We've got to move
      Steady your hand
      (I am losing sight again)
      Fire your guns
      It's time to run
      Blow me away
      (I will stay, unless I may)
      After the fall
      We'll shake it off
      Show me the way
      Only the strongest will survive
      Lead me to heaven, when we die
      I am a shadow on the wall
      I'll be the one to save us all
      There's nothing left
      So save your breath
      Lying in wait
      (Caught inside this tidal wave)
      Your cover's blown
      No where to go
      Only your fate
      (Lonely I will walk alone)
      Fire your guns
      It's time to run
      Blow me away
      (I will stay, unless I may)
      After the fall
      We'll shake it off
      Show me the way
      Only the strongest will survive
      Lead me to heaven, when we die
      I am a shadow on the wall
      I'll be the one to save us all
      Wanted it back
      (Don't fight me now)
      Don't make me beg
      Blow me away
      Only the strongest will survive
      Lead me to heaven, when we die
      I am a shadow on the wall
      I'll be the one to save us all
      Save us all`
    },
    {
      title: "Forgotten",
      artist: "Linkin Park",
      album: "Hybrid Theory",
      year: "2000",
      img_src: "./songs_images/Screenshot_3.jpg",
      src: "./songs/Forgotten - Linkin Park.mp3",
      lyric: `From the top to the bottom
      Bottom to top I stop
      At the core I've forgotten
      In the middle of my thoughts
      Taken far from my safety
      The picture's there
      The memory won't escape me
      But why should I care?
      From the top to the bottom
      Bottom to top I stop
      At the core I've forgotten
      In the middle of my thoughts
      Taken far from my safety
      The picture's there
      The memory won't escape me
      But why should I care?
      There's a place so dark you can't see the end
      (Skies cock back) and shock that which can't defend
      The rain then sends dripping acidic questions
      Forcefully, the power of suggestion
      Then with the eyes shut looking through the rust and rot, and dust
      A small spot of light floods the floor
      And pours over the rusted world of pretend
      And the eyes ease open and it's dark again
      From the top to the bottom
      Bottom to top I stop
      At the core I've forgotten
      In the middle of my thoughts
      Taken far from my safety
      The picture's there
      The memory won't escape me
      But why should I care?
      In the memory you'll find me
      Eyes burning up
      The darkness holding me tightly
      Until the sun rises up
      Moving all around
      Screaming of the ups and downs
      Pollution manifested in perpetual sound
      The wheels go 'round and the sunset creeps
      Behind street lamps, chain-link, and concrete
      A little piece of paper with a picture drawn
      Floats on down the street 'til the wind is gone
      And the memory now is like the picture was then
      When the paper's crumpled up it can't be perfect again
      From the top to the bottom
      Bottom to top I stop
      At the core I've forgotten
      In the middle of my thoughts
      Taken far from my safety
      The picture's there
      The memory won't escape me
      But why should I care?
      From the top to the bottom
      Bottom to top I stop
      At the core I've forgotten
      In the middle of my thoughts
      Taken far from my safety
      The picture's there
      The memory won't escape me
      But why should I care?
      In the memory you'll find me
      Eyes burning up
      The darkness holding me tightly
      Until the sun rises up
      Now you got me caught in the act
      You bring the thought back
      Telling you that I see it right through you
      Now you got me caught in the act
      You bring the thought back
      Telling you that I see it right through you
      Now you got me caught in the act
      You bring the thought back
      Telling you that I see it right through you
      Now you got me caught in the act
      You bring the thought back
      Telling you that I see it right through you
      Now you got me caught in the act
      You bring the thought back
      Telling you that I see it right through you
      Now you got me caught in the act
      You bring the thought back
      Telling you that I see it right through you
      Now you got me caught in the act
      You bring the thought back
      Telling you that I see it right through you
      In the memory you'll find me
      Eyes burning up
      The darkness holding me tightly
      Until the sun rises up
      In the memory you'll find me
      Eyes burning up
      The darkness holding me tightly
      Until the sun rises up.`
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}



/* Para que esta funcion sirva es necesario instalar strapi y axios*/

// function App() {

//   const [songs, setsongs] = useState([]);
  

//   const [currentSongIndex, setCurrentSongIndex] = useState(0);
//   const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const { data: response } = await axios.get(
//           "http://localhost:1337/api/music-players?populate=*"
//         );
//         let _musics = response.data;
  
//         _musics.map((music) => {
//           let pload = {
//             title: music.attributes.title,
//             artist: music.attributes.artist,
//             lyric: music.attributes.lyric, 
//             img_src: music.attributes.img_src,          
//             src: "http://localhost:1337" + music.attributes.src.data.attributes.url
            
//           };
//           console.log(pload);
//           setsongs((oldSongs) => [...oldSongs, pload]);
//         });
//       } catch (error) {
//         console.error(error);
//       }
//     };
  
//     fetchData();
//   }, []);
  

//   useEffect(() => {
//     setNextSongIndex(() => {
//       if (currentSongIndex + 1 > songs.length - 1) {
//         return 0;
//       } else {
//         return currentSongIndex + 1;
//       }
//     });
//   }, [currentSongIndex]);

//   return (
//     <div className="App">
//       {songs.length > 0 && (
//         <>
//           <Player
//             currentSongIndex={currentSongIndex}
//             setCurrentSongIndex={setCurrentSongIndex}
//             nextSongIndex={nextSongIndex}
//             songs={songs}
//           />
//         </>
//       )}
//     </div>
//   );
// };


export default App;
