// Function to toggle GIF play/pause
function toggleGif(gifElement) {
    const originalSrc = gifElement.getAttribute('data-original-src') || gifElement.src;
    
    // Store original src if not already stored
    if (!gifElement.getAttribute('data-original-src')) {
        gifElement.setAttribute('data-original-src', originalSrc);
    }
    
    if (gifElement.getAttribute('data-paused') === 'true') {
        // Resume: restore original src
        gifElement.src = originalSrc;
        gifElement.setAttribute('data-paused', 'false');
        gifElement.style.opacity = '1';
        gifElement.title = 'Click to pause';
    } else {
        // Pause: force reload to capture current frame, then stop
        gifElement.src = originalSrc + '?' + Date.now(); // Force reload
        setTimeout(() => {
            // After a brief moment, replace with a static version
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = gifElement.naturalWidth || 300;
            canvas.height = gifElement.naturalHeight || 200;
            
            // Draw current frame
            ctx.drawImage(gifElement, 0, 0);
            
            // Replace src with canvas data
            gifElement.src = canvas.toDataURL();
            gifElement.setAttribute('data-paused', 'true');
            gifElement.style.opacity = '0.8';
            gifElement.title = 'Click to play';
        }, 100);
    }
}

// Initialize GIF controls when page loads
document.addEventListener('DOMContentLoaded', function() {
    const gifs = document.querySelectorAll('.prototype-gif, .phone-screen img[src*=".gif"]');
    
    gifs.forEach(function(gif) {
        gif.style.cursor = 'pointer';
        gif.title = 'Click to pause';
        
        // Add click event if not already present
        if (!gif.hasAttribute('onclick')) {
            gif.addEventListener('click', function() {
                toggleGif(this);
            });
        }
    });
});