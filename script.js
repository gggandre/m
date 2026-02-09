// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Create floating hearts
    createFloatingHearts();
    
    // Create falling petals
    createFallingPetals();
    
    // Create sparkles
    createSparkles();
    
    // Setup envelope click
    setupEnvelopeInteraction();
    
    // Setup button click
    setupButtonInteraction();
}

// Create floating hearts in the background
function createFloatingHearts() {
    const heartsContainer = document.getElementById('heartsContainer');
    const heartSymbols = ['💕', '💖', '💗', '💓', '💝', '❤️'];
    
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'floating-heart';
            heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 5 + 's';
            heart.style.animationDuration = (Math.random() * 10 + 10) + 's';
            heartsContainer.appendChild(heart);
        }, i * 300);
    }
}

// Create falling rose petals
function createFallingPetals() {
    const petalsContainer = document.getElementById('petalsContainer');
    const petalSymbols = ['🌸', '🌺', '🌹', '🥀'];
    
    for (let i = 0; i < 25; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.textContent = petalSymbols[Math.floor(Math.random() * petalSymbols.length)];
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDelay = Math.random() * 5 + 's';
            petal.style.animationDuration = (Math.random() * 8 + 8) + 's';
            petalsContainer.appendChild(petal);
        }, i * 250);
    }
}

// Create sparkles on the card
function createSparkles() {
    const sparklesContainer = document.getElementById('sparkles');
    
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.animationDelay = Math.random() * 3 + 's';
        sparklesContainer.appendChild(sparkle);
    }
}

// Setup envelope interaction
function setupEnvelopeInteraction() {
    const envelope = document.getElementById('envelope');
    const envelopeWrapper = envelope.parentElement;
    const cardContainer = document.getElementById('cardContainer');
    
    envelopeWrapper.addEventListener('click', function() {
        // Add opening class to envelope
        envelope.classList.add('opening');
        
        // Play sound effect (optional - can be added later)
        playOpenSound();
        
        // After animation, hide envelope and show card
        setTimeout(() => {
            envelopeWrapper.style.opacity = '0';
            envelopeWrapper.style.transform = 'translate(-50%, -50%) scale(0)';
            
            setTimeout(() => {
                envelopeWrapper.classList.add('hidden');
                cardContainer.classList.add('show');
                
                // Add confetti effect
                createConfetti();
            }, 600);
        }, 600);
    });
}

// Setup button interaction
function setupButtonInteraction() {
    const button = document.getElementById('valentineButton');
    const modal = document.getElementById('modal');
    
    button.addEventListener('click', function() {
        // Show modal
        modal.classList.add('show');
        
        // Create celebration effect
        createCelebrationHearts();
        
        // Play celebration sound (optional)
        playCelebrationSound();
        
        // Trigger confetti burst
        createMassiveConfetti();
    });
    
    // Close modal on click outside
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    });
}

// Create confetti effect when card appears
function createConfetti() {
    const colors = ['#FFB6C1', '#DC143C', '#D4AF37', '#800020', '#FFE4E9'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-20px';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.opacity = '1';
            confetti.style.zIndex = '999';
            confetti.style.pointerEvents = 'none';
            
            document.body.appendChild(confetti);
            
            // Animate confetti falling
            const animation = confetti.animate([
                { 
                    transform: 'translateY(0) rotate(0deg)',
                    opacity: 1
                },
                { 
                    transform: `translateY(${window.innerHeight + 50}px) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ], {
                duration: Math.random() * 3000 + 2000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            animation.onfinish = () => confetti.remove();
        }, i * 30);
    }
}

// Create massive confetti for button click
function createMassiveConfetti() {
    const colors = ['#FFB6C1', '#DC143C', '#D4AF37', '#800020', '#FFE4E9', '#FF69B4'];
    const confettiCount = 150;
    
    for (let i = 0; i < confettiCount; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = (Math.random() * 15 + 5) + 'px';
            confetti.style.height = (Math.random() * 15 + 5) + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = '50%';
            confetti.style.top = '50%';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.opacity = '1';
            confetti.style.zIndex = '1001';
            confetti.style.pointerEvents = 'none';
            
            document.body.appendChild(confetti);
            
            // Random direction
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 300 + 200;
            const xDistance = Math.cos(angle) * velocity;
            const yDistance = Math.sin(angle) * velocity;
            
            // Animate confetti explosion
            const animation = confetti.animate([
                { 
                    transform: 'translate(-50%, -50%) rotate(0deg)',
                    opacity: 1
                },
                { 
                    transform: `translate(calc(-50% + ${xDistance}px), calc(-50% + ${yDistance}px)) rotate(${Math.random() * 1080}deg)`,
                    opacity: 0
                }
            ], {
                duration: Math.random() * 2000 + 1500,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            animation.onfinish = () => confetti.remove();
        }, i * 10);
    }
}

// Create celebration hearts
function createCelebrationHearts() {
    const heartSymbols = ['💕', '💖', '💗', '💓', '💝', '❤️', '💞'];
    
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.textContent = heartSymbols[Math.floor(Math.random() * heartSymbols.length)];
            heart.style.position = 'fixed';
            heart.style.fontSize = (Math.random() * 30 + 20) + 'px';
            heart.style.left = '50%';
            heart.style.top = '50%';
            heart.style.zIndex = '1001';
            heart.style.pointerEvents = 'none';
            
            document.body.appendChild(heart);
            
            // Random direction
            const angle = Math.random() * Math.PI * 2;
            const velocity = Math.random() * 400 + 200;
            const xDistance = Math.cos(angle) * velocity;
            const yDistance = Math.sin(angle) * velocity;
            
            // Animate hearts
            const animation = heart.animate([
                { 
                    transform: 'translate(-50%, -50%) scale(0)',
                    opacity: 1
                },
                { 
                    transform: `translate(calc(-50% + ${xDistance}px), calc(-50% + ${yDistance}px)) scale(1)`,
                    opacity: 0
                }
            ], {
                duration: Math.random() * 2000 + 1500,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            animation.onfinish = () => heart.remove();
        }, i * 50);
    }
}

// Sound effects (using Web Audio API for simple sounds)
function playOpenSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        // Audio not supported or blocked
        console.log('Audio not available');
    }
}

function playCelebrationSound() {
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        // Create a cheerful chord
        const frequencies = [523.25, 659.25, 783.99]; // C, E, G
        
        frequencies.forEach((freq, index) => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = freq;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
            
            oscillator.start(audioContext.currentTime + (index * 0.1));
            oscillator.stop(audioContext.currentTime + 1 + (index * 0.1));
        });
    } catch (e) {
        console.log('Audio not available');
    }
}

// Add mouse trail hearts
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.9) { // Only create occasionally
        const heart = document.createElement('div');
        heart.textContent = '💕';
        heart.style.position = 'fixed';
        heart.style.left = e.clientX + 'px';
        heart.style.top = e.clientY + 'px';
        heart.style.fontSize = '12px';
        heart.style.pointerEvents = 'none';
        heart.style.zIndex = '999';
        heart.style.opacity = '0.6';
        
        document.body.appendChild(heart);
        
        const animation = heart.animate([
            { 
                transform: 'translate(-50%, -50%) scale(1)',
                opacity: 0.6
            },
            { 
                transform: 'translate(-50%, -100px) scale(0)',
                opacity: 0
            }
        ], {
            duration: 1000,
            easing: 'ease-out'
        });
        
        animation.onfinish = () => heart.remove();
    }
});
