import { createApp } from "vue"
import store from "./store"
import "./style.css"
import App from "./App.vue"

if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/ziro_butterflies_23/sw.js")
            .then((registration) => {
                console.log(
                "Service Worker registered with scope:",
                registration.scope
                )
            })
            .catch((error) => {
                console.error("Service Worker registration failed:", error)
            })
    })
} else {
    console.log("no serviceWorker in navigator")
}

const app = createApp(App)
app.use(store)
app.mount("#app")
