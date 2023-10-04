<template>
    <div
      id="install-button-div"
      :style="{ opacity: installButtonOpacity, display: installButtonDisplay }"
    >
      <button @click="installPWA">Install App</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        installButtonOpacity: 1, // Initial opacity
        installButtonDisplay: 'flex', // Initial display
      };
    },
    mounted() {
      let deferredInstallPrompt = null;
  
      // Event listener for the beforeinstallprompt event
      window.addEventListener('beforeinstallprompt', (e) => {
        // Prevent the default browser install prompt
        e.preventDefault();
        // Store the event object for later use
        deferredInstallPrompt = e;
        // Display the custom install button
        this.showInstallButton();
      });
  
      // Function to show the custom install button
      this.showInstallButton = () => {
        const installButton = document.getElementById('install-button-div');
        if (installButton) {
          installButton.style.display = 'flex';
        }
      };
  
      // Function to handle the installation
      this.installPWA = () => {
        if (deferredInstallPrompt) {
          // Show the browser's install prompt
          deferredInstallPrompt.prompt();
  
          // Wait for the user to respond to the prompt
          deferredInstallPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the install prompt');
            } else {
              console.log('User dismissed the install prompt');
            }
  
            // Reset the deferredInstallPrompt to null
            deferredInstallPrompt = null;
          });
        }
      };
  
      // Listen for scroll events and update the opacity and display accordingly
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        // Calculate the opacity and display based on the scroll position
        const scrollPosition = window.scrollY;
        const maxScrollPosition = window.innerHeight * 0.25; // 25vh
  
        // Calculate the opacity as a linear function of the scroll position
        const opacity = 1 - (scrollPosition / maxScrollPosition);
  
        // Clamp the opacity between 0 and 1
        this.installButtonOpacity = Math.min(Math.max(opacity, 0), 1);
  
        // Hide the button when the user scrolls past 25vh
        this.installButtonDisplay = opacity > 0 ? 'flex' : 'none';
      },
    },
  };
  </script>
  
  <style scoped>
  div {
    position: fixed; /* Use fixed position for persistent display */
    bottom: 0;
    display: flex;
    justify-content: center;
    background: black;
    width: 100%;
    padding: 1rem;
    transition: opacity 0.3s; /* Add a transition for smooth opacity changes */
  }
  
  button {
    padding: 0.5rem 1rem;
    background-color: darkgreen;
    color: white;
    border-radius: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
}
button:hover{
    background-color: rgb(3, 168, 3);

}
  </style>
  