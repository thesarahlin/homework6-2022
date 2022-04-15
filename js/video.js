var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
});
document.querySelector("#play").addEventListener("click", function(){
	console.log("Play Video");
	video.play();
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slow down video");
	video.playbackRate *= 0.95;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up video");
	video.playbackRate /= 0.95;
	console.log("Speed is", video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip ahead");
	video.currentTime += 15
	if(video.currentTime >= video.duration)
		video.currentTime = 0;
	console.log("Video current time is", video.currentTime)
});

document.querySelector("#mute").addEventListener("click", function(){
	if(video.muted == true){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";
	}
	else{
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
	}
});



var volumeControl = document.getElementById('slider');
   volumeControl.addEventListener('change',function(e){
	   video.volume = e.currentTarget.value / 100;
	document.querySelector('#volume').innerHTML = (video.volume) * 100 + "%";
	});

var oldschoolBtn = document.getElementById('vintage');
   oldschoolBtn.addEventListener('click', function() {
	video.className = "oldSchool";
	});
   
var originalBtn = document.getElementById('orig');
   originalBtn.addEventListener('click', function() {
	if (video.classList.contains("oldSchool"))
	 video.classList.remove("oldSchool");
	});
