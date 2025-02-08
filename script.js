document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('.glitch-text');
    const buttons = document.querySelectorAll('.neon-button');
    const bars = document.querySelectorAll('.bar');

    // Add hover effect to buttons
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.style.transform = 'scale(1.1)';
        });
        
        button.addEventListener('mouseout', () => {
            button.style.transform = 'scale(1)';
        });
    });

    // Randomize visualizer bar heights
    function updateVisualizer() {
        bars.forEach(bar => {
            const height = Math.random() * 50 + 10;
            bar.style.height = `${height}px`;
        });
    }

    // Update visualizer every 100ms
    setInterval(updateVisualizer, 100);

    // Add click effects to buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.transform = 'scale(0.95)';
            setTimeout(() => {
                button.style.transform = 'scale(1)';
            }, 100);
        });
    });
}); 