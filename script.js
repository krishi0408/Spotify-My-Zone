console.log("Welcome to Taylor Swift world");
//initilaize the variables 
let songIndex=0;
let audioElement =  new Audio('songs/song1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('masterSongName');
let songs = [
    {songName: "Lover", filePath: "songs/song1.mp3",coverPath:"covers/cover.png"},
    {songName: "Red", filePath: "songs/song1.mp3",coverPath:"covers/cover2.png"},
    {songName: "Love Story", filePath: "songs/song3.mp3",coverPath:"covers/cover3.png"},
    {songName: "Mine", filePath: "songs/song4.mp3",coverPath:"covers/cover4.png"},
    {songName: "22", filePath: "songs/song1.mp3",coverPath:"covers/cover5.png"},
    {songName: "Look what you made me do", filePath: "songs/song6.mp3",coverPath:"covers/cover6.png"},
    {songName: "I don't wanna live forever", filePath: "songs/song1.mp3",coverPath:"covers/cover7.png"},
    {songName: "Anti Hero", filePath: "songs/song1.mp3",coverPath:"covers/cover8.png"},
    {songName: "August", filePath: "songs/song1.mp3",coverPath:"covers/cover9.png"},
]

songItems.forEach((element , i )=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
//audioElement.play()
//handle play pause 
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;


    } 
})
//Listen to event
audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    //update seek bar
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
  
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        masterSongName.innerText = songs[songIndex].songName;
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/song${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play(); 
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');


    })

}) 


document.getElementById(`next`).addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;  
    }
        audioElement.src=`songs/song${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play(); 
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
document.getElementById(`previous`).addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex-=1;  
    }
        audioElement.src=`songs/song${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play(); 
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})
