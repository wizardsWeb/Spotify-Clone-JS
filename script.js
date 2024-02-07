console.log("welcome to the spotify!")


// Initialize the Variables

let songIndex = 0;
let audioElement = new Audio('./songs/1.mp3')
let next = document.getElementById("next");
let masterPlay = document.getElementById("masterPlay");
let previous = document.getElementById("previous");
let myProgressBar = document.getElementById("myProgressBar")
let playMusic = document.getElementsByClassName("play");
let songItems = Array.from(document.getElementsByClassName("song"));
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songItems.forEach((Element, i)=>{
    // console.log(Element);
    document.getElementsByClassName("songIcon")[i].src = songs[i].coverPath;
    document.getElementsByClassName("name")[i].innerText = songs[i].songName;
})

// Handling pause/play events
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <=0) {
        audioElement.play();
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-pause-circle");
        masterPlay.classList.add("fa-play-circle");
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime/audioElement.duration) * 100)
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

//Listen to events

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((Element) =>{
    Element.addEventListener('click', (e) => {
        if(audioElement.paused || audioElement.currentTime <= 0 ) {   
            makeAllPlays()
            Element.classList.remove("fa-play-circle");
            Element.classList.add("fa-pause-circle");
            songIndex = parseInt(e.target.id);
            audioElement.currentTime = 0;
            audioElement.src = `songs/${songIndex}.mp3`
            audioElement.play();
            masterPlay.classList.remove("fa-play-circle");
            masterPlay.classList.add("fa-pause-circle");
            document.getElementById("masterSongName").innerText = songs[songIndex-1].songName;
            if(audioElement.play) {
                gif.style.opacity = 1;
            }
        }
        else {
            audioElement.pause();
            Element.classList.remove("fa-pause-circle");
            Element.classList.add("fa-play-circle");
            gif.style.opacity = 0;
            masterPlay.classList.remove("fa-pause-circle");
            masterPlay.classList.add("fa-play-circle");
        }

        })
    })

document.getElementById("next").addEventListener('click', (element) => {
    if(songIndex >=10){
        audioElement.src = "songs/1.mp3"
        audioElement.play();
    }
    else {
        songIndex = songIndex + 1;
        audioElement.src = `songs/${songIndex}.mp3`
        audioElement.play();
    }
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})

document.getElementById("previous").addEventListener('click', (element) => {
    if(songIndex <= 1){
        audioElement.src = "songs/10.mp3";
        audioElement.play();
    }
    else {
        songIndex = songIndex - 1;
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.play();
    }
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
})
