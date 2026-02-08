// Array of mini page paths
const miniPages = [
    'pages/bubble.html',
    'pages/cookie.html',
    'pages/doodle.html',
    'pages/balloon.html',
    'pages/doodle.html'
];

// Sound toggle functionality
const soundToggle = document.getElementById('soundToggle');
let soundEnabled = localStorage.getItem('soundEnabled') !== 'false'; // Default: true

// Update toggle button text
function updateSoundToggle() {
    soundToggle.textContent = soundEnabled ? '🔊 Sound On' : '🔇 Sound Off';
}

// Initialize toggle state
updateSoundToggle();

// Toggle sound on/off
soundToggle.addEventListener('click', function() {
    soundEnabled = !soundEnabled;
    localStorage.setItem('soundEnabled', soundEnabled);
    updateSoundToggle();
});

// Get the button element
const mainButton = document.getElementById('mainButton');

// Add click event listener
mainButton.addEventListener('click', function() {
    // Generate random index
    const randomIndex = Math.floor(Math.random() * miniPages.length);
    
    // Get random page
    const randomPage = miniPages[randomIndex];
    
    // Redirect to random page
    window.location.href = randomPage;
});