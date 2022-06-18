import { Music } from "../class/Music.js.js";
import { Playlist } from "../class/Playlist.js.js";

const playlist = new Playlist("CabaréDaKenzie", "YuranLindo");

class kenzieMusic {
  static async buscaMusica(nomeMusica) {
    if (nomeMusica.trim() === "") {
      alert("Digite o nome de alguma música.");
      return console.log("Busca inválida!");
    }
    await fetch(`https://simple-spotify-api.herokuapp.com?search=${nomeMusica}`)
      .then((res) => res.json())
      .then((res) => {
        const soundMusic = res.data[0];
        if (!soundMusic) {
          alert("Música não encontrada!");
          return console.log("Música não encontrada!");
        } else {
          const newMusic = new Music(
            soundMusic.id,
            soundMusic.name,
            soundMusic.artists,
            soundMusic.duration_ms,
            soundMusic.music_url
          );
          playlist.addMusic(newMusic);
        }
      });
  }
}

export default kenzieMusic;
