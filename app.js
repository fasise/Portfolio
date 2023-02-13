
function mouseMove(event) {
          let bulbs = document.querySelectorAll('.bulb');
          for (let bulb of bulbs) {
            let xDiff = bulb.offsetLeft + bulb.clientWidth / 2 - event.clientX;
            let yDiff = bulb.offsetTop + bulb.clientHeight / 2 - event.clientY;
            let distance = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
            let newX = bulb.offsetLeft - xDiff / distance * 5;
            let newY = bulb.offsetTop - yDiff / distance * 5;
            bulb.style.left = `${newX}px`;
            bulb.style.top = `${newY}px`;
          }
        }
      
        for (let i = 0; i < 30; i++) {
          let bulb = document.createElement('div');
          bulb.classList.add('bulb');
          bulb.style.left = `${Math.random() * 100}%`;
          bulb.style.top = `${Math.random() * 100}%`;
          document.body.appendChild(bulb);
        }



        
        // Define an array of images to be displayed
        const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
        let currentImageIndex = 0;

        // Get a reference to the image element
        const imageElement = document.getElementById('scroll-image');

        // Function to change the image every second
        function changeImage() {
            // Set the source of the image to the next image in the array
            imageElement.src = images[currentImageIndex];

            // Increment the current image index, and reset to 0 if we've reached the end of the array
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }

        // Call the changeImage function every second
        setInterval(changeImage, 1000);

