document.addEventListener('DOMContentLoaded', () => {
    const startDate = new Date('2024-03-24'); // Replace with your start date

    function updateCountdown() {
        const today = new Date();
        const diffTime = today - startDate;

        // Calculate days, hours, minutes, and seconds
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const diffMinutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
        const diffSeconds = Math.floor((diffTime % (1000 * 60)) / 1000);

        // Calculate approximate number of months
        const totalMonths = ((today.getFullYear() - startDate.getFullYear()) * 12) + today.getMonth() - startDate.getMonth();
        const approximateMonths = Math.round(totalMonths + (today.getDate() - startDate.getDate()) / 30);

        document.getElementById('countdown').innerText = `We have been together for ${diffDays} days, ${diffHours} hours, ${diffMinutes} minutes, ${diffSeconds} seconds (approximately ${approximateMonths} months!)`;
    }

    // Update the countdown immediately and then every second
    updateCountdown();
    setInterval(updateCountdown, 1000);

    const heart = document.getElementById('heart');
    const pictures = document.querySelectorAll('.picture-container');
    let currentIndex = 0;
    
    heart.addEventListener('click', () => {
        if (pictures.length > 0) {
            pictures.forEach((pic, index) => {
                pic.style.display = 'none';
            });
            pictures[currentIndex].style.display = 'block';
            currentIndex = (currentIndex + 1) % pictures.length;
        }
    });

    // Function to create random hearts
    function createRandomHearts(numHearts) {
        const heartContainer = document.querySelector('.heart-container');
        for (let i = 0; i < numHearts; i++) {
            const heart = document.createElement('div');
            heart.className = 'heart-animation';
            heart.textContent = '❤️';
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.top = `${Math.random() * 100}vh`;
            heart.style.fontSize = `${Math.random() * 2 + 1}rem`; // Random size between 1rem and 3rem
            heart.style.animationDelay = `${Math.random() * 10}s`; // Random delay to stagger animations
            heartContainer.appendChild(heart);
        }
    }

    createRandomHearts(20); // Create 50 hearts
});

