document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.collageimages img');
  let currentImageIndex = 0;
  const baeText = document.getElementById('baetext');
  const everybodyAudio = document.getElementById('everybody');
  const backtomeAudio = document.getElementById('backtome');
  const daddyText = document.getElementById('daddytext');

  // Function to play "everybody" audio, checking if it's already playing
  function playEverybodyAudio() {
      // If "everybody" isn't already playing, play it
      if (everybodyAudio.paused) {
          everybodyAudio.play();
      }
      // Ensure "backtome" is stopped and reset if it was playing
      backtomeAudio.pause();
      backtomeAudio.currentTime = 0;
  }

  // Function to switch to "backtome" audio, stopping "everybody"
  function switchToBacktomeAudio() {
      everybodyAudio.pause();
      everybodyAudio.currentTime = 0;
      backtomeAudio.play();
  }

  

  // Function to update the image display
  function updateImageDisplay() {
      images.forEach((img, index) => {
          img.style.display = 'none'; // Initially hide all images
          if (index === currentImageIndex) {
              img.style.display = 'block';
              // Update the text's display based on whether the "bae" image is shown
              baeText.style.display = img.id === 'bae' ? 'block' : 'none';
              daddyText.style.display = img.id === 'daddy' ? 'block' : 'none'; // Update for daddytext
          }
      });
  }

  // Event listener for 'Previous' button
  document.getElementById('previous').addEventListener('click', () => {
      // Switch to "backtome" audio when "Previous" is clicked
      switchToBacktomeAudio();
      
      // Update the current image index and display
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      updateImageDisplay();
  });

  // Event listener for 'Next' button
  document.getElementById('next').addEventListener('click', () => {
      // Play or continue playing "everybody" audio when "Next" is clicked
      playEverybodyAudio();
      
      // Update the current image index and display
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateImageDisplay();
  });

  // Initial setup to show the first image and check for bae
  updateImageDisplay();
});
