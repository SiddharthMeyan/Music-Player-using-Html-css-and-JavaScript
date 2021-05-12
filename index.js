music_list=['/music/starboy.mp3','/music/good_song.mp3','music/old_lofi.mp3']
songname = document.getElementById('songname')
imgg = document.getElementById("imgg")

const shuffle =()=>{
    randomInt=Math.ceil(Math.random() * (music_list.length ) + (-1));
    rand=music_list[randomInt]
    console.log(rand);
    const audio = new Audio(rand)
    audio.play()
}
const shuffleImg =()=>{
    randomInt=Math.ceil(Math.random() * (music_list.length ) + (-1));
    
}

imgg.src='https://source.unsplash.com/300x300/?lofi'

const audio = new Audio('/music/starboy.mp3')

playMusic = ()=>{
    audio.play()
}


pauseMusic = ()=>{
    audio.pause()
}

