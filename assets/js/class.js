//** This file contain all the classes for save data get from the API */

class Artist {
    constructor(artistName, musicGenre, link){
        this.artistName = artistName;
        this.musicGenre = musicGenre;
        this.link = link;
    }
}

class Album extends Artist{
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

class Song extends (Artist, Album) {
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


class MusicVideo extends (Artist, Song) {
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

class Search{
    constructor(term, country, limit, explicit, type){
        this.term = term;
        this.country = country;
        this.limit = limit;
        this.explicit = explicit;
        this.type = type;
    }
}