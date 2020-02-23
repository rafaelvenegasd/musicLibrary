import  Artist from "./artist";
import Album from "./album";
export default class Song extends (Artist, Album) {
    constructor(id, songName, caratula, artistName, albumName, price, lenght, creationDate, musicGenre, audio, link){
        super(artistName, albumName);
            this.id = id;
            this.artistName = artistName;
            this.albumName = albumName;
            this.songName = songName;
            this.caratula = caratula;
            this.price = price;
            this.lenght = lenght;
            this.creationDate = creationDate;
            this.musicGenre = musicGenre;
            this.audio = audio;
            this.link = link;
    }
}