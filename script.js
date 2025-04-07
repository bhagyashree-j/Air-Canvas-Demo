document.addEventListener('DOMContentLoaded', function() {
    // Canvas setup
    const canvas = document.getElementById('drawingCanvas');
    const ctx = canvas.getContext('2d');
    resizeCanvas();
    
    // Variables for drawing
    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let currentColor = 'blue';
    let colorMap = {
        'blue': '#3b82f6',
        'green': '#10b981',
        'red': '#ef4444',
        'yellow': '#f59e0b'
    };
    
    // Event listeners for drawing
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);
    
    // Touch support
    canvas.addEventListener('touchstart', handleTouchStart);
    canvas.addEventListener('touchmove', handleTouchMove);
    canvas.addEventListener('touchend', stopDrawing);
    
    // Color selection buttons
    const colorButtons = document.querySelectorAll('.color-btn');
    colorButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            colorButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Set current color
            currentColor = this.getAttribute('data-color');
        });
    });
    
    // Clear button
    const clearButton = document.querySelector('.clear-btn');
    clearButton.addEventListener('click', clearCanvas);
    
    // Handle window resize
    window.addEventListener('resize', resizeCanvas);
    
    // Functions
    function resizeCanvas() {
        // Set canvas size based on container
        const container = canvas.parentElement;
        canvas.width = container.clientWidth;
        canvas.height = 400;
        
        // Clear and redraw if needed
        clearCanvas();
    }
    
    function startDrawing(e) {
        isDrawing = true;
        const pos = getPosition(e);
        [lastX, lastY] = [pos.x, pos.y];
    }
    
    function draw(e) {
        if (!isDrawing) return;
        e.preventDefault();
        
        const pos = getPosition(e);
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(pos.x, pos.y);
        ctx.strokeStyle = colorMap[currentColor];
        ctx.lineWidth = 5;
        ctx.lineCap = 'round';
        ctx.stroke();
        
        [lastX, lastY] = [pos.x, pos.y];
    }
    
    function stopDrawing() {
        isDrawing = false;
    }
    
    function clearCanvas() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    function getPosition(e) {
        let x, y;
        const rect = canvas.getBoundingClientRect();
        
        if (e.type.includes('touch')) {
            // Touch event
            x = e.touches[0].clientX - rect.left;
            y = e.touches[0].clientY - rect.top;
        } else {
            // Mouse event
            x = e.clientX - rect.left;
            y = e.clientY - rect.top;
        }
        
        return { x, y };
    }
    
    function handleTouchStart(e) {
        e.preventDefault();
        startDrawing(e);
    }
    
    function handleTouchMove(e) {
        e.preventDefault();
        draw(e);
    }
});
