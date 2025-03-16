const images = [
    "https://picsum.photos/id/12/367/267",
    "https://picsum.photos/id/13/367/267",
    "https://picsum.photos/id/14/367/267",
    "https://picsum.photos/id/15/367/267",
    "https://picsum.photos/id/16/367/267",
    "https://picsum.photos/id/18/367/267"
];

let currentIndex = 0;

        function updateImage() {
            document.getElementById("slider").src = images[currentIndex];
            updateDots();
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            updateImage();
        }

        function prevImage() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateImage();
        }

        function createDots() {
            const dotsContainer = document.getElementById("dotsContainer");
            dotsContainer.innerHTML = "";
            images.forEach((_, index) => {
                const dot = document.createElement("div");
                dot.classList.add("dot");
                dot.onclick = () => {
                    currentIndex = index;
                    updateImage();
                };
                dotsContainer.appendChild(dot);
            });
        }

        function updateDots() {
            const dots = document.querySelectorAll(".dot");
            dots.forEach((dot, index) => {
                dot.classList.toggle("active", index === currentIndex);
            });
        }

        // Initialize slider
        createDots();
        updateImage();