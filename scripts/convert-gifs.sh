#!/bin/bash

# GIF to Video Conversion Script
# This script converts GIF files to WebM and MP4 formats for better web performance

echo "🎬 GIF to Video Conversion Script"
echo "=================================="
echo ""

# Check if ffmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ Error: ffmpeg is not installed"
    echo ""
    echo "Install ffmpeg:"
    echo "  • Ubuntu/Debian: sudo apt install ffmpeg"
    echo "  • macOS: brew install ffmpeg"
    echo "  • Windows: Download from https://ffmpeg.org/download.html"
    exit 1
fi

echo "✅ ffmpeg is installed"
echo ""

# Define the images directory
IMAGES_DIR="./src/images/projects"
OUTPUT_DIR="./public/videos"

# Create output directory if it doesn't exist
mkdir -p "$OUTPUT_DIR"

# Array of GIF files to convert
GIFS=(
    "drone.gif"
    "javagame.gif"
    "maze.gif"
    "posture.gif"
    "offshape.gif"
)

echo "📁 Converting GIFs from: $IMAGES_DIR"
echo "📁 Output directory: $OUTPUT_DIR"
echo ""

# Function to convert GIF to video
convert_gif() {
    local gif_file="$1"
    local base_name="${gif_file%.gif}"
    local input_path="$IMAGES_DIR/$gif_file"
    local output_webm="$OUTPUT_DIR/${base_name}.webm"
    local output_mp4="$OUTPUT_DIR/${base_name}.mp4"

    if [ ! -f "$input_path" ]; then
        echo "⚠️  Skipping $gif_file - file not found"
        return
    fi

    echo "🔄 Converting $gif_file..."

    # Get original file size
    original_size=$(du -h "$input_path" | cut -f1)
    echo "   Original size: $original_size"

    # Convert to WebM (best compression)
    echo "   → Creating WebM..."
    ffmpeg -i "$input_path" -c:v libvpx-vp9 -crf 30 -b:v 0 -an "$output_webm" -y -loglevel error

    if [ $? -eq 0 ]; then
        webm_size=$(du -h "$output_webm" | cut -f1)
        echo "   ✅ WebM created: $webm_size"
    else
        echo "   ❌ WebM conversion failed"
    fi

    # Convert to MP4 (better compatibility)
    echo "   → Creating MP4..."
    ffmpeg -i "$input_path" -movflags faststart -pix_fmt yuv420p -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -an "$output_mp4" -y -loglevel error

    if [ $? -eq 0 ]; then
        mp4_size=$(du -h "$output_mp4" | cut -f1)
        echo "   ✅ MP4 created: $mp4_size"
    else
        echo "   ❌ MP4 conversion failed"
    fi

    echo ""
}

# Convert all GIFs
total_saved=0
for gif in "${GIFS[@]}"; do
    convert_gif "$gif"
done

echo "=================================="
echo "✨ Conversion complete!"
echo ""
echo "Next steps:"
echo "1. Update your components to use the OptimizedVideo component"
echo "2. Replace Image imports with video paths"
echo "3. Test the videos in your browser"
echo ""
echo "Example usage:"
echo "<OptimizedVideo"
echo "  webmSrc=\"/videos/drone.webm\""
echo "  mp4Src=\"/videos/drone.mp4\""
echo "  poster=\"/path/to/poster.jpg\""
echo "  alt=\"Drone animation\""
echo "  className=\"object-cover\""
echo "/>"

