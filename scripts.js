function addplaylist(obj, num) {
	var image = obj["image"];
	var appleLink = obj["applemusic"];
	var spotifyLink = obj["spotify"];
	
	var container = document.getElementById("playlistContainer");
	var playlistContainer = document.createElement("div");
	playlistContainer.className = "playlist";
	
	var preview = document.createElement("img");
	preview.className = "playlistPreview";
	preview.src = image;
	
	var iconContainer = document.createElement("div");
	iconContainer.className = "iconContainer";
	
	var appleMusicIcon = document.createElement("img");
	appleMusicIcon.className = "serviceIcon";
	appleMusicIcon.src = "images/applemusic.png";
	
	var spotifyIcon = document.createElement("img");
	spotifyIcon.className = "serviceIcon";
	spotifyIcon.src = "images/spotify.png";
	
	var appleA = document.createElement("a");
	appleA.href = appleLink;
	appleA.appendChild(appleMusicIcon);
	
	var spotifyA = document.createElement("a");
	spotifyA.href = spotifyLink;
	spotifyA.appendChild(spotifyIcon);
	
	iconContainer.appendChild(appleA);
	iconContainer.appendChild(spotifyA);
	
	playlistContainer.appendChild(preview);
	playlistContainer.appendChild(iconContainer);
	container.appendChild(playlistContainer);
}

function getJSON() {
	var r = new XMLHttpRequest();
	r.open("GET","data.json",true);
	r.onreadystatechange = function() {
		if(this.readyState == 4 && this.status == 200) {
			var res = JSON.parse(this.response);
			var i = 0;
			for(key in res) {
				addplaylist(res[key],i);
				i++;
			}
		}
	}
	r.send();
}