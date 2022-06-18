const musicListHtml = document.querySelector("#musicList");
const audioPlayer = document.querySelector("#player_sound");

class Playlist {
  constructor(name, owner) {
    this.name = name;
    this.owner = owner;
    this.musicsList = [];
  }
  addMusic(music) {
    const searchDuplicate = this.musicsList.some(
      (value) => value.id == music.id
    );
    if (searchDuplicate) {
      return alert("Esta música já está na playlist!");
    }
    this.musicsList.push(music);

    const li = document.createElement("li");
    const div = document.createElement("div");
    const name = document.createElement("h3");
    const p = document.createElement("p");
    const button = document.createElement("button");

    name.innerText = music.name;
    p.innerText = music.artist[0].name;
    button.innerText = "tocar";
    button.id = music.id;
    button.className = "play";
    button.addEventListener("click", (event) => {
      const playSound = this.musicsList.find(
        (value) => value.id == event.target.id
      );

      audioPlayer.setAttribute("src", playSound.url);
    });

    div.append(name, p);
    li.append(div, button);

    musicListHtml.appendChild(li);
    console.log(music);
  }
}

export { Playlist };
