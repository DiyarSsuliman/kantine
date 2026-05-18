import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getFirestore, addDoc, collection, updateDoc, deleteDoc, doc, setDoc, getDoc, getDocs} from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDTUV3letVQ5R2zQb_426iG6fIKadPHaho",
    authDomain: "kantine-e8ffc.firebaseapp.com",
    projectId: "kantine-e8ffc",
    storageBucket: "kantine-e8ffc.firebasestorage.app",
    messagingSenderId: "1068833461721",
    appId: "1:1068833461721:web:c1d6ed2ec49a136178f5c8",
    measurementId: "G-9HZ91PHV55"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
/*
await setDoc(doc(db, "kantine", "baguett ost og skinke"), {
    navn: "Baguett ost og skinke",
    bilde: "https://mortenskro.no/wp-content/uploads/2020/04/Baguetter_Skinke_Gulost_1-2048x1366.jpg",
    pris: 37
});
 
await setDoc(doc(db, "kantine", "baguett kylling"), {
    navn: "Baguett kylling",
    bilde: "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-baguette-bread-cutout-png-file-png-image_9767406.png%22",
    pris: 45
});
 
await setDoc(doc(db, "kantine", "baguett ost"), {
    navn: "Baguett ost",
    bilde: "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-baguette-bread-cutout-png-file-png-image_9767406.png%22",
    pris: 37
});
 
await setDoc(doc(db, "kantine", "baguett ost og skinke"), {
    navn: "Baguett ost og skinke",
    bilde: "https://png.pngtree.com/png-vector/20230902/ourmid/pngtree-baguette-bread-cutout-png-file-png-image_9767406.png%22",
    pris: 45
});
 
await setDoc(doc(db, "kantine", "mr lee biff"), {
    navn: "Mr Lee biff",
    bilde: "https://www.orklafoods.no/wp-content/uploads/sites/2/2024/09/159735.webp",
    pris: 20
});
 
await setDoc(doc(db, "kantine", "mr lee kylling"), {
    navn: "Mr Lee kylling",
    bilde: "https://www.orklafoods.no/wp-content/uploads/sites/2/2024/09/159734.webp",
    pris: 20
});
 
await setDoc(doc(db, "kantine", "iste"), {
    navn: "Iste",
    bilde: "https://www.holdbart.no/images/thumbs/0002362_iste-fersken-1l_550.png",
    pris: 25
});
 
await setDoc(doc(db, "kantine", "iste uten sukker"), {
    navn: "Iste uten sukker",
    bilde: "https://www.holdbart.no/images/thumbs/0002362_iste-fersken-1l_550.png",
    pris: 25
});
 
await setDoc(doc(db, "kantine", "litago skjokolade melk"), {
    navn: "Litago skjokolade melk",
    bilde: "https://www.tine.no/_/packshot/160x160/262.png",
    pris: 27
});
 
await setDoc(doc(db, "kantine", "litago jordbær melk"), {
    navn: "Litago jordbær melk",
    bilde: "https://www.tine.no/_/packshot/160x160/266.png",
    pris: 27
});
await setDoc(doc(db, "kantine", "urge"), {
    navn: "Urge",
    bilde: "https://engrosnett.no/image/kalde-drikker/mineralvann/2642791-2642791.jpg?v=638181011918700000",
    pris: 23
});
 
await setDoc(doc(db, "kantine", "fanta exotic"), {
    navn: "Fanta exotic",
    bilde: "https://cdn.dittsvenskaskafferi.com/media/iopt/catalog/product/cache/c23e908376fe6a9669f84048ef0b1af0/image/81542cac/fanta-exotic-flaska-1500ml.webp%22",
    pris: 20
});
await setDoc(doc(db, "kantine", "pespi max"), {
    navn: "Pepsi max",
    bilde: "https://www.pepsi.co.uk/prod/s3fs-public/2024-02/_MAX.png",
    pris: 23
});
await setDoc(doc(db, "kantine", "iskaffe"), {
    navn: "Iskaffe",
    bilde: "https://norwegianfoodstore.com/cdn/shop/products/tine-iskaffe-iced-coffee-kaffe-mocca-mocha-original-norwegian-norway-norsk-traditional-buy-online.jpg?v=1760716810%22",
    pris: 20
});
await setDoc(doc(db, "kantine", "pasta di parma"), {
    navn: "Pasta di parma",
    bilde: "https://bilder.ngdata.no/7037610059930/meny/large.jpg",
    pris: 27
});


*/




async function displayData() {
    // Henter alle dokumentene fra "elever"-samlingen
    const querySnapshot = await getDocs(collection(db, "kantine"));

    // Henter referansen til <div>-elementet
    const dataDisplay = document.getElementById("displayData");

    // Looper gjennom hvert dokument i samlingen
    querySnapshot.forEach((doc) => {
        const data = doc.data();
        console.log(data);

       dataDisplay.innerHTML += `
        <div class="product">
            <div class="proPh">
                <img src="${data.bilde}">
            </div>
            <div class="proInfo">
                <div class="proT">
                    <h2>${data.navn}</h2>
                </div>
                <div class="proB">
                    <button class="prisKnapp">${data.pris} kr</button>
                </div>
            </div>
        </div>
    `;

    });

} 
    

displayData();
