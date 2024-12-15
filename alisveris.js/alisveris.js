let urunler = [];
let devam = true;

while (devam) {
    let urun = prompt("Ürün ismini girin (Çıkmak için 'stop' yazın):");
    if (urun.toLowerCase() === 'stop') {
        devam = false;
    } else {
        urunler.push(urun);
    }
}

console.log("Alışveriş Listesi:");
for (let i = 0; i < urunler.length; i++) {
    console.log((i + 1) + ". " + urunler[i]);
}
