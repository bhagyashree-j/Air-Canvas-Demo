# Air Canvas: Draw in the Air

Air Canvas is a gesture-based drawing application that uses computer vision techniques to track colored objects and turn hand movements into digital art. Using just your webcam and a colored object (like a pen cap or your fingertip), you can draw in the air and see your creations appear on screen in real-time.

![Air Canvas Demo](docs/images/drawing-demo.png)

## Features

- **Real-time Object Tracking**: Track colored objects using your webcam
- **Multi-color Drawing**: Choose between blue, green, red, and yellow colors
- **Adjustable Tracking Parameters**: Fine-tune HSV values for optimal object detection
- **Simple Interface**: Intuitive UI with color selection and clear canvas functionality

## How It Works

1. **Object Detection**: The application uses OpenCV to detect colored objects in the webcam feed based on HSV color values.
2. **Color Selection**: Users can select different colors by hovering over the color panels at the top of the screen.
3. **Drawing Mechanism**: As you move the colored object, the application tracks its path and draws lines connecting the points.
4. **Computer Vision**: The app uses binary masking to isolate and track colored objects in real-time.

![Object Tracking](docs/images/multicolor-demo.png)

## Tech Stack

- **Python**: Core programming language
- **OpenCV (cv2)**: Computer vision library for image processing, color detection, and contour finding
- **NumPy**: Array manipulation and mathematical operations
- **Computer Vision Techniques**: HSV color space filtering, contour detection, morphological operations

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bhagyashree-j/air-canvas.git
   cd air-canvas
   ```

2. **Install dependencies**:
   ```bash
   pip install numpy opencv-python
   ```

3. **Run the application**:
   ```bash
   python air_canvas.py
   ```

## Usage Instructions

1. **Setup**: Position your webcam so it can clearly see your hand movements.
2. **Adjusting Detection**: Use the "Color detectors" trackbars to adjust HSV values to detect your colored object. A colored pen cap, marker, or finger with nail polish works well.
3. **Drawing**:
   - Hover over the color selection rectangles at the top to choose your color
   - Move your colored object in the air to draw
   - Hover over the "CLEAR ALL" button to reset the canvas

## Demo

An interactive web demo is available at [https://bhagyashree-j.github.io/air-canvas/](https://bhagyashree-j.github.io/air-canvas/). This is a simplified version that demonstrates the drawing functionality, while the actual application uses computer vision for gesture-based input.

## Project Background

This project was created as part of my exploration into computer vision techniques and interactive applications. It demonstrates practical applications of HSV color space filtering, contour detection, and real-time video processing.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Bhagyashree Jena  
GitHub: [bhagyashree-j](https://github.com/bhagyashree-j)  
LinkedIn: [bhagyashree-jena](https://linkedin.com/in/bhagyashree-jena)
