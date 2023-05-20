const play_btn = document.getElementById('play-btn')
const pause_btn = document.getElementById('pause-btn')

const previous_btn = document.getElementById('previous-btn')
const next_btn = document.getElementById('next-btn')

const control_btns = document.getElementById('control-btns')

const sound_btn = document.getElementById('sound-btn')
const mute_btn = document.getElementById('mute-btn')

const decrease_btn = document.getElementById('decrease-btn')
const increase_btn = document.getElementById('increase-btn')

const title_song = document.getElementById('title-song')

const bar_under = document.getElementById('bar-under')
const bar_upper = document.getElementById('bar-upper')

const duration_time = document.getElementById('duration-time')
const maxDuration_time = document.getElementById('maxDuration-time')

const container_songText = document.getElementById('container-songText')
const song_lyrics = document.getElementById('song-lyrics')

let audioObjet = new Audio();
console.log(audioObjet)


const playlist = {
  greenDay: {
    band: 'Green Day',
    dookie: {
      album: 'Dookie',
      year: '1994',
      songs: {
        0: 'Burnout',
        1: 'Having a Blast',
        2: 'Chump',
        3: 'Longview',
        4: 'Welcome To Paradise',
        5: 'Pulling Teeth',
        6: 'Basket Case',
        7: 'She',
        8: 'Sassafras Roots',
        9: 'When I Come Around',
        10: 'Coming Clean',
        11: 'Emenius Sleepus',
        12: 'In the End',
        13: 'F.O.D. / All by Myself'
      },
      src: {
        0: 'https://reto01-media-player-music.web.app/audio/dookie/burnout.mp3',
        1: 'https://reto01-media-player-music.web.app/audio/dookie/havingABlast.mp3',
        2: 'https://reto01-media-player-music.web.app/audio/dookie/chump.mp3',
        3: 'https://reto01-media-player-music.web.app/audio/dookie/longview.mp3',
        4: 'https://reto01-media-player-music.web.app/audio/dookie/welcomeToParadise.mp3',
        5: 'https://reto01-media-player-music.web.app/audio/dookie/pullingteeth.mp3',
        6: 'https://reto01-media-player-music.web.app/audio/dookie/basketcase.mp3',
        7: 'https://reto01-media-player-music.web.app/audio/dookie/she.mp3',
        8: 'https://reto01-media-player-music.web.app/audio/dookie/sassafrasRoots.mp3',
        9: 'https://reto01-media-player-music.web.app/audio/dookie/whenIComeAround.mp3',
        10: 'https://reto01-media-player-music.web.app/audio/dookie/comingClean.mp3',
        11: 'https://reto01-media-player-music.web.app/audio/dookie/emeniusSleepus.mp3',
        12: 'https://reto01-media-player-music.web.app/audio/dookie/inTheEnd.mp3',
        13: 'https://reto01-media-player-music.web.app/audio/dookie/fod.mp3'
      },
      lirycs: {
        0: `<p>I declare I don’t care no more\
        I’m burning up and out and growing bored\
        In my smoked out boring room</p>\
        <p>My hair is shagging in my eyes\
        Dragging my feet to hit the street tonight\
        To drive along these shit town lights</p>\
        <p>I’m not growing up, I’m just burning out\
        And I stepped in line to walk amongst the dead</p>\
        <p>Apathy has rained on me\
        Now I’m feeling like a soggy dream\
        So close to drowning, but I don’t mind</p>\
        <p>I’ve lived inside this mental cave\
        Throw my emotions in the grave\
        Hell, who needs them anyway?</p>\
        <p>I’m not growing up, I’m just burning out\
        And I stepped in line to walk amongst the dead\
        I’m not growing up, I’m just burning out\
        And I stepped in line to walk amongst the dead</p>\
        <p>I’m not growing up, I’m just burning out\
        And I stepped in line to walk amongst the dead\
        I’m not growing up, I’m just burning out\
        And I stepped in line to walk amongst the dead</p>`,

        1: `<p>I'm taking all you down with me\
        Explosives duct taped to my spine\
        Nothing's gonna change my mind\
        I won't listen to anyone's last words\
        There's nothing left for you to say\
        Soon you'll be dead anyway</p>\
        <p>Well, no one here is getting out alive\
        This time I've really lost my mind and I don't care\
        So close your eyes\
        And kiss yourself goodbye\
        And think about the times you spent and what they've meant</p>\
        <p>To me it's nothing\
        To me it's nothing\
        To me it's nothing\
        To me it's nothing</p>\
        <p>I'm losing all my happiness\
        The happiness you pinned on me\
        My loneliness still comforts me\
        My anger dwells inside of me\
        I'm taking it all out on you and all the shit you put me through</p>\
        <p>Well, no one here is getting out alive\
        This time I've really lost my mind and I don't care\
        So close your eyes\
        And kiss yourself goodbye\
        And think about the times you spent and what they've meant</p>\
        <p>To me it's nothing\
        To me it's nothing\
        To me it's nothing\
        To me it's nothing</p>\
        <p>Do you ever think back to another time?\
        Does it bring you so down that you thought you lost your mind?\
        Do you ever want to lead a long trail of destruction\
        And mow down any bullshit that confronts you?\
        Do you ever build up all the small things in your head\
        To make one problem that adds up to nothing</p>\
        <p>To me it's nothing\
        To me it's nothing\
        To me it's nothing</p>`,

        2: `<p>I don't know you but I think I hate you\
        You're the reason for my misery\
        Strange, how you've become my biggest enemy\
        And I've never even seen your face</p>\
        <p>Maybe it's just jealousy\
        Mixed up with a violent mind\
        A circumstance that doesn't make much sense\
        Or maybe I'm just dumb</p>\
        <p>You're the cloud hanging out over my head\
        Hail comes crashing down welting my face\
        Magic man, egocentric plastic man\
        Yet you still got one over on me</p>\
        <p>Maybe it's just jealousy\
        Mixed up with a violent mind\
        A circumstance that doesn't make much sense\
        Or maybe I'm just dumb</p>\
        <p>I'm a chump</p>`,

        3: `<p>I sit around and watch the tube, but nothing's on\
        I change the channels for an hour or two\
        Twiddle my thumbs just for a bit\
        I'm sick of all the same old shit\
        In a house with unlocked doors\
        And I'm fucking lazy</p>\
        <p>Bite my lip and close my eyes\
        Take me away to paradise\
        I'm so damn bored I'm going blind\
        And I smell like shit</p>\
        <p>Peel me off this velcro seat and get me moving\
        I sure as hell can't do it by myself\
        I'm feeling like a dog in heat\
        Barred indoors from the summer street\
        I locked the door to my own cell\
        And I lost the key</p>\
        <p>Bite my lip and close my eyes\
        Take me away to paradise\
        I'm so damn bored I'm going blind\
        And I smell like shit</p>\
        <p>I got no motivation\
        Where is my motivation?\
        No time for no motivation\
        Smoking my inspiration</p>\
        <p>Sit around and watch the phone, but no one's calling\
        Call me pathetic, call me what you will\
        My mother says to get a job\
        But she don't like the one she's got\
        When masturbation's lost its fun\
        You're fucking breaking</p>\
        <p>Bite my lip and close my eyes\
        Take me away to paradise\
        I'm so damn bored\
        I'm going blind\
        And loneliness has to suffice\
        Bite my lip and close my eyes\
        I'm slipping away to Paradise\
        Some say, Quit or I'll go blind\
        But it's just a myth</p>`,

        4: `<p>Dear mother\
        Can you hear me whining?\
        It's been three whole weeks\
        Since I left your home\
        This sudden fear has left me trembling\
        'Cause now it seems that I\
        Am out there on my own\
        And I'm feeling so alone</p>\
        <p>Pay attention to the cracked streets\
        And the broken homes\
        Some call it slums\
        Some call it nice\
        I want to take you through\
        A wasteland I like to call my home\
        Welcome to paradise</p>\
        <p>A gunshot rings out at the station\
        Another urchin snaps and\
        Left dead on his own\
        It makes me wonder why I'm still here\
        For some strange reason it's now\
        Feeling like my home\
        And I'm never gonna go</p>\
        <p>Pay attention to the cracked streets\
        And the broken homes\
        Some call it slums\
        Some call it nice\
        I want to take you through\
        A wasteland I like to call my home\
        Welcome to paradise</p>\
        <p>Dear mother\
        Can you hear me laughing?\
        It's been six whole months since that\
        I have left your home\
        It makes me wonder why I'm still here\
        For some strange reason it's now\
        Feeling like my home\
        And I'm never gonna go</p>\
        <p>Pay attention to the cracked streets\
        And the broken homes\
        Some call it slums\
        Some call it nice\
        I want to take you through\
        A wasteland I like to call my home\
        Welcome to paradise</p>\
        <p>Paradise</p>`,

        5: `<p>I'm all busted up, broken bones and nasty cuts\
        Accidents will happen, but this time I can't get up\
        She comes to check on me, making sure I'm on my knees\
        After all, she's the one who put me in this state</p>\
        <p>Is she ultra-violent? Is she disturbed?\
        I better tell her that I love her\
        Before she does it all over again\
        Oh God, she's killing me!</p>\
        <p>For now, I'll lie around\
        Hell, that's all I can really do\
        She takes good care of me\
        Just keep saying my love is true</p>\
        <p>Is she ultra-violent? Is she disturbed?\
        I better tell her that I love her\
        Before she does it all over again\
        Oh God, she's killing me!</p>\
        <p>Looking out my window for someone that's passing by\
        No one knows I'm locked in here, all I do is cry</p>\
        <p>For now, I'll lie around\
        Hell, that's all I can really do\
        She takes good care of me\
        Just keep saying my love is true</p>`,

        6: `<p>Do you have the time to listen to me whine\
        About nothing and everything all at once?<br/>\
        I am one of those<br/>\
        Melodramatic fools<br/>\
        Neurotic to the bone\
        No doubt about it</p>\
        <p><i>Sometimes I give myself the creeps<br/>\
        Sometimes my mind plays tricks on me<br/>\
        It all keeps adding up<br/>\
        I think I'm cracking up<br/>\
        Am I just paranoid<br/>\
        Or am I just stoned?<br/>\
        I went to a shrink</i></p>\
        <p>To analyze my dreams<br/>\
        She says it's lack of sex that's bringing me down<br/>\
        I went to a whore<br/>\
        He said my life's a bore<br/>\
        So quit my whining 'cause it's bringing her down</p>\
        <p><i>Sometimes I give myself the creeps<br/>\
        Sometimes my mind plays tricks on me<br/>\
        It all keeps adding up<br/>\
        I think I'm cracking up<br/>\
        Am I just paranoid?<br/>\
        Ah, yeah, yeah, yeah</i></p>\
        <p><b>Grasping to control<br/>\
        So I better hold on</b></p>\
        <p>Sometimes I give myself the creeps<br/>\
        Sometimes my mind plays tricks on me<br/>\
        It all keeps adding up<br/>\
        I think I'm cracking up<br/>\
        Am I just paranoid?<br/>\
        Or am I just stoned?</p>`,

        7: `<p>She\
        She screams in silence\
        A sullen roit penetrating through her mind\
        Waiting for a sign to smash the silence with the brick of self control</p>\
        <p>Are you locked up in a world that's been planned out for you?\
        Are you feeling like a social tool without a use?\
        Scream at me until my ears bleed\
        I'm taking heed just for you</p>\
        <p>She\
        She's figured out\
        All her doubts were someone else's point of view\
        Waking up this time to smash the silence with the brick of self control</p>\
        <p>Are you locked up in a world that's been planned out for you?\
        Are you feeling like a social tool without a use?\
        Scream at me until my ears bleed\
        I'm taking heed just for you</p>\
        <p>Are you locked up in a world that's been planned out for you?\
        Are you feeling like a social tool without a use?\
        Scream at me until my ears bleed\
        I'm taking heed just for you</p>`,

        8: `<p>Roaming 'round your house\
        Wasting your time\
        No obligation, just\
        Wasting your time\
        So why are you alone?\
        Wasting your time\
        When you could be with me\
        Wasting your time</p>\
        <p>I'm a waste like you\
        With nothing else to do\
        May I waste your time too?</p>\
        <p>Warding off regrets\
        Wasting your time\
        Smoking cigarettes\
        Wasting your time\
        I'm just a parasite\
        Wasting your time\
        Applying myself to\
        Wasting your time</p>\
        <p>I'm a waste like you\
        With nothing else to do\
        May I waste your time too?</p>\
        <p>So why are you alone?\
        Wasting your time\
        When you could be with me\
        Wasting your time</p>\
        <p>I'm a waste like you\
        With nothing else to do\
        May I waste your time too?\
        May I waste your time too?\
        May I waste your time too?\
        May I waste your time too?</p>`,

        9: `<p>I heard you crying loud, all the way across town\
        Cause you been searching for that someone\
        And it's me out on the prowl\
        As you sit around feeling sorry for yourself</p>\
        <p>Well, don't get lonely now, and dry your whining eyes\
        I'm just roaming for the moment\
        Sleazin' my back yard so don't get\
        So uptight you been thinking about ditching me</p>\
        <p>No time to search the world around\
        'Cause you know where I'll be found\
        When I come around</p>\
        <p>Well, I heard it all before, so don't knock down my door\
        I'm a loser and a user so I don't need no accuser\
        To try and slag me down because I know you're right</p>\
        <p>So go do what you like, make sure you do it wise\
        You may find out that your self-doubt means nothing\
        Was ever there\
        You can't go forcing something if it's just not right</p>\
        <p>No time to search the world around\
        'Cause you know where I'll be found\
        When I come around</p>\
        <p>No time to search the world around\
        'Cause you know where I'll be found\
        When I come around</p>\
        <p>When I come around</p>`,

        10: `<p>Seventeen and strung out on confusion\
        Trapped inside a roll of disillusion\
        I found out what it takes to be a man\
        Now mom and dad will never understand</p>\
        <p>Secrets collecting dust but never forget\
        Skeletons come to life in my closet\
        I found out what it takes to be a man\
        Now mom and dad will never understand\
        What's happening to me?</p>\
        <p>Seventeen and coming clean for the first time\
        I finally figured out myself for the first time\
        I found out what it takes to be a man\
        Now mom and dad will never understand\
        What's happening to me?</p>`,

        11: `<p>I saw my friend the other day\
        And I don't' know\
        Exactly just what he became\
        It goes show\
        It wasn't long ago\
        And I was just like you\
        And now I think I'm sick\
        And I want to go home</p>\
        <p>How have I been how have you been\
        It's been so long\
        What have you done with all your time\
        And what went wrong\
        I knew you back when\
        And you, you knew me\
        And now I think you're sick\
        I want to go home</p>\
        <p>Anybody ever say no?\
        Ever tell you that you weren't right?\
        Where did all the little kid go?\
        Did you lose it in a hateful fight?\
        And you know it's true\
        It wasn't long ago\
        And I was just like you\
        And now I think I'm sick\
        And I want to go home</p>`,

        12: `<p>All brawn and no brains\
        And all those nice things\
        And you finally got what you want\
        Someone to look good with\
        And light your cigarette\
        Is this what you really want?</p>\
        <p>I figured out what you're all about\
        And I don't think I like what I see\
        So I hope I won't be there in the end\
        If you come around</p>\
        <p>How long will he last\
        Before he's a creep in the past\
        And you're alone once again?\
        Will you pop up again\
        And be my special friend\
        'Till the end?\
        And when will that be?</p>\
        <p>I figured out what you're all about\
        And I don't think I like what I see\
        So I hope I won't be there in the end\
        If you come around</p>\
        <p>Hey\
        I figured out what you're all about\
        And I don't think I like what I see\
        So I hope I won't be there in the end\
        If you come around</p>`,

        13: `<p>Something's on my mind\
        It's been for quite some time\
        This time I'm on to you</p>\
        <p>So where's the other face\
        The face I heard before\
        Your head trip's boring me</p>\
        <p>Let's nuke the bridge we torched two thousand times before\
        This time we'll blast it all to hell</p>\
        <p>I've had this burning in my gut now for so long\
        My belly's aching now to say</p>\
        <p>Stuck down in a rut\
        Of dislogic and smut\
        A side of you well hid</p>\
        <p>When it's all said and done\
        It's real and it's been fun\
        But was it all real fun?</p>\
        <p>Let's nuke the bridge we torched two thousand times before\
        This time we'll blast it all to hell</p>\
        <p>I've had this burning in my guts now for so long\
        My belly's aching now to say</p>\
        <p>To say\
        You're just\
        A fuck\
        I can't explain it 'cause I think you suck</p>\
        <p>I'm taking pride\
        In telling you to fuck off and die</p>\
        <p>I've had this burning in my guts now for so long\
        My belly's aching now to say</p>\
        <p>I'm taking pleasure in announcing this to you\
        So listen up 'cause you might miss</p>\
        <p>You're just\
        A fuck\
        I can't explain it 'cause I think you suck</p>\
        <p>I'm taking pride\
        In telling you to fuck off and die</p>\
        <p>Good night</p>\
        <p>I was alone\
        I was all by myself\
        No one was looking\
        I was thinking of you</p>\
        <p>Oh yeah did I mention\
        I was all by myself\
        All by myself\
        All by myself\
        All by myself</p>\
        <p>I went to your house\
        But no one was there\
        I went in your room\
        I was all by myself</p>\
        <p>I remember we had\
        Such wonderful times\
        When I'm all by myself\
        All by myself</p>`
      }
    }
  }
}

let positionPlaylist = 0;
audioObjet.src = playlist.greenDay.dookie.src[positionPlaylist]
title_song.innerHTML = playlist.greenDay.dookie.songs[positionPlaylist]
song_lyrics.innerHTML = playlist.greenDay.dookie.lirycs[positionPlaylist]
console.log(audioObjet)


window.onload = () => {
  play_btn.addEventListener('click', (e) => {
    e.preventDefault()
    audioObjet.play()
    transicionPausePlay(audioObjet.paused);
  })
  pause_btn.addEventListener('click', (e) => {
    e.preventDefault() 
    audioObjet.pause()
    transicionPausePlay(audioObjet.paused);
  })
  previous_btn.addEventListener('click', (e) => {
    e.preventDefault()
    if(audioObjet.paused) {
      positionPlaylist-= 1
      if(positionPlaylist<0) positionPlaylist = 13;
      audioObjet.src = playlist.greenDay.dookie.src[positionPlaylist]
      title_song.textContent = playlist.greenDay.dookie.songs[positionPlaylist]
      song_lyrics.innerHTML = playlist.greenDay.dookie.lirycs[positionPlaylist]
    } else {
      audioObjet.pause()
      positionPlaylist-= 1
      if(positionPlaylist<0) positionPlaylist = 13;
      audioObjet.src = playlist.greenDay.dookie.src[positionPlaylist]
      title_song.textContent = playlist.greenDay.dookie.songs[positionPlaylist]
      song_lyrics.innerHTML = playlist.greenDay.dookie.lirycs[positionPlaylist]
      audioObjet.play()
    }
  })
  next_btn.addEventListener('click', (e) => {
    e.preventDefault()
    if(audioObjet.paused) {
      positionPlaylist+= 1
      if(positionPlaylist>13) positionPlaylist = 0;
      audioObjet.src = playlist.greenDay.dookie.src[positionPlaylist]
      title_song.textContent = playlist.greenDay.dookie.songs[positionPlaylist]
      song_lyrics.innerHTML = playlist.greenDay.dookie.lirycs[positionPlaylist]
    } else {
      audioObjet.pause()
      positionPlaylist+= 1
      if(positionPlaylist>13) positionPlaylist = 0;
      audioObjet.src = playlist.greenDay.dookie.src[positionPlaylist]
      title_song.textContent = playlist.greenDay.dookie.songs[positionPlaylist]
      song_lyrics.innerHTML = playlist.greenDay.dookie.lirycs[positionPlaylist]
      audioObjet.play()
    }
  })
  sound_btn.addEventListener('click', (e) => {
    e.preventDefault()

    audioObjet.muted = true
    transicionSoundMute(true)
  })
  mute_btn.addEventListener('click', (e) => {
    e.preventDefault()

    audioObjet.muted = false
    transicionSoundMute(false)
  })
  decrease_btn.addEventListener('click', (e) => {
    e.preventDefault()
    audioObjet.volume -= 0.10;
  })
  increase_btn.addEventListener('click', (e) => {
    e.preventDefault()
    audioObjet.volume += 0.10;
  })

  audioObjet.addEventListener('timeupdate', (e) => {
    e.preventDefault()

    let minMax = Math.floor(audioObjet.duration / 60)
    let secMax = Math.floor(audioObjet.duration % 60);
    minMax = minMax < 10 ? "0" + minMax : minMax;
    secMax = secMax < 10 ? "0" + secMax : secMax;
    maxDuration_time.textContent = minMax + ":" + secMax;
  
    let minProgesive = Math.floor(audioObjet.currentTime / 60)
    let secProgresive = Math.floor(audioObjet.currentTime % 60);
    minProgesive = minProgesive < 10 ? "0" + minProgesive : minProgesive;
    secProgresive = secProgresive < 10 ? "0" + secProgresive : secProgresive;
    duration_time.textContent = minProgesive + ":" + secProgresive;

    let position =  audioObjet.currentTime * (100 / audioObjet.duration)
    bar_upper.style.width = position + "%"
    if(audioObjet.ended) {
      audioObjet.pause()
      next_btn.click()
      audioObjet.play()
    }
  })

}

function transicionPausePlay(booleano){
  if(booleano){
    play_btn.classList.remove('hidden')
    pause_btn.classList.add('hidden')
  } else {
    pause_btn.classList.remove('hidden')
    play_btn.classList.add('hidden')
  }
}

function transicionSoundMute(booleano){
  if(booleano){
    mute_btn.classList.remove('hidden')
    sound_btn.classList.add('hidden')
  }else {
    sound_btn.classList.remove('hidden')
    mute_btn.classList.add('hidden')
  }
}