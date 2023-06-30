// Get the width of the window
const windowWidth = window.innerWidth;

// Calculate the number of barcode elements needed to fill the width
const barcodeCount = Math.floor(windowWidth / 11);

// Generate the barcode elements
function generateBarcodes() {
    const barcodesTop = document.querySelector(".barcodes-top");
    const barcodesBottom = document.querySelector(".barcodes-bottom");

    // Clear existing barcodes
    barcodesTop.innerHTML = "";
    barcodesBottom.innerHTML = "";

    for (let i = 0; i < barcodeCount; i++) {
        const barcode = document.createElement("div");
        barcode.classList.add("barcode");

        // Assign a random animation delay between 0s and 4s
        const randomDelay = (Math.random() * 4).toFixed(1);
        barcode.style.animationDelay = `${randomDelay}s`;

        // Assign a random width to the bar between 1px and 20px
        const randomWidth = (Math.random() * 200).toFixed(0);
        barcode.style.width = `${randomWidth}px`;

        barcodesTop.appendChild(barcode.cloneNode(true));
        barcodesBottom.appendChild(barcode.cloneNode(true));
    }

    // Add the fade-out class after the transition completes
    setTimeout(() => {
        barcodesTop.classList.add('fade-out');
        barcodesBottom.classList.add('fade-out');
    }, 7000);

    // Remove the fade-out class after the transition completes
    setTimeout(() => {
        barcodesTop.classList.remove('fade-out');
        barcodesBottom.classList.remove('fade-out');
    }, 5);
}

// Generate initial barcodes
generateBarcodes();

// Remove and generate barcodes after 8 seconds
setInterval(generateBarcodes, 8000);

