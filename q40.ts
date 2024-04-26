//Task 40 "Album:"

function myAlbum(artistName: string, albumTitle: string) {
  return { artistName, albumTitle };
}
let album1 = myAlbum("Ali zaffar", "Chupke Chupke");
let album2 = myAlbum("NFAK", "Kali Kali Zulfon");
let album3 = myAlbum("Asim Azhar", "Humraah");

console.log(album1);
console.log(album2);
console.log(album3);

// Number of tracks

function myAlbum2(
  artistName: string,
  albumTitle: string,
  numberOfTracks?: number
) {
  return { artistName, albumTitle, numberOfTracks };
}
let myAlbum1 = myAlbum2("Ali zaffar", "Chupke Chupke", 30);
let myalbum2 = myAlbum2("NFAK", "Kali Kali Zulfon", 10);
let myAlbum3 = myAlbum2("Asim Azhar", "Humraah");

console.log(myAlbum1);
console.log(myalbum2);
console.log(myAlbum3);
