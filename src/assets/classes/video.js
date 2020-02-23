import  Artist from "./artist";
import Song from "./song";
export default class MusicVideo extends (Artist, Song) {
    constructor(id, songName, caratula, artistName, price, creationDate, lenght, musicGenre, video, link){
        super(artistName, songName);
            this.id = id;
            this.caratula = caratula;
            this.price = price;
            this.creationDate = creationDate;
            this.lenght = lenght;
            this.musicGenre = musicGenre;
            this.video = video;
            this.link = link;
    }
}