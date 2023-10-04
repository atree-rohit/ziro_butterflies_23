// Import the idb library if you haven't already
import { openDB } from "idb";

const DB_NAME = "photoDB"; // Change to your desired database name
const STORE_NAME = "photos"; // Change to your desired store name

// Function to open the IndexedDB database
async function openDb() {
    return openDB(DB_NAME, 1, {
        upgrade(db) {
            db.createObjectStore(STORE_NAME);
        },
    });
}

// Function to save a photo in the database
async function savePhoto(family, species, base64ImageData) {
    const db = await openDb();
    const tx = db.transaction(STORE_NAME, "readwrite");
    const store = tx.objectStore(STORE_NAME);
    const key = `${family}_${species}`;

    await store.put(base64ImageData, key);
    await tx.done;
}

// Function to get a photo from the database
async function getPhoto(family, species) {
    const db = await openDb();
    const tx = db.transaction(STORE_NAME, "readonly");
    const store = tx.objectStore(STORE_NAME);
    const key = `${family}_${species}`;

    return store.get(key);
}

async function getIDBlength() {
    const db = await openDb();
    const tx = db.transaction(STORE_NAME, 'readonly');
    const store = tx.objectStore(STORE_NAME);
    const count = await store.count();
    return count
}

export { openDb, savePhoto, getPhoto, getIDBlength };
