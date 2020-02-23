import Artist from "./artist";
export default class Album extends Artist{
    constructor(albumName, caratula, artistName, price, numSongs, creationDate, musicGenre){
        super(artistName);
            this.albumName = albumName;
            this.caratula = caratula;
            this.price = price;
            this.numSongs = numSongs;
            this.creationDate = creationDate;
            this.musicGenre = musicGenre;
    }
}