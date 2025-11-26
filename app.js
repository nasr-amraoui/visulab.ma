const text = "Coming Soon";
const typingElement = document.getElementById("typing-text");
const typingSpeed = 100; // milliseconds per character
const deletingSpeed = 50; // milliseconds per character
const delayBetweenCycles = 2000; // delay before restarting the cycle

let index = 0;
let isDeleting = false;

function typeEffect() {
    if (!isDeleting) {
        // Typing phase
        if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, typingSpeed);
        } else {
            // Pause before deleting
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenCycles);
        }
    } else {
        // Deleting phase
        if (index > 0) {
            typingElement.textContent = text.substring(0, index - 1);
            index--;
            setTimeout(typeEffect, deletingSpeed);
        } else {
            // Reset and start over
            isDeleting = false;
            setTimeout(typeEffect, delayBetweenCycles);
        }
    }
}

// Start the typing effect when page loads
typeEffect();
