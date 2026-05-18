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
 
        const menuContainer = document.getElementById("menu");
 
        async function displayData() {
            const querySnapshot = await getDocs(collection(db, "varmmat"));
 
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const id = doc.id;
 
                const dag          = data.dag          || "";
                const matrett      = data.matrett      || "";
                const ingredienser = data.ingredienser || "";
                const allergi      = data.allergi      || "";
                const pris         = data.pris         || "";
                const bilde        = data.bilde        || "";
 
                menuContainer.innerHTML += `
                    <h1>${dag}:</h1>
 
                    <div class="hero">
                        <div class="heroAll">
                            <div class="heroText">
                                <div class="Text">
                                    <h2>
                                        
                                        ${data.matrett}
                                      
                                    </h2>
                                    <p>
                                        ${ingredienser}
                                        <br>${allergi}
                                    </p>
                                </div>
                            </div>
 
                            <div class="heroButton">
                                <button>${pris} Kr</button>
                            </div>
                        </div>
 
                        <div class="heroImg">
                            <img src="${bilde}" alt="${matrett}">
                        </div>
                    </div>
 
                    <hr>
                `;
            });
        }
 
        displayData();


   