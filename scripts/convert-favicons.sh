#!/bin/bash

# This script converts SVG files to PNG and ICO formats using ImageMagick
# You'll need to install ImageMagick: https://imagemagick.org/

# Source SVG file
SOURCE_SVG="public/canaria_icon.svg"

# Convert SVG to PNG files
convert -background none -size 16x16 $SOURCE_SVG public/favicon-16x16.png
convert -background none -size 32x32 $SOURCE_SVG public/favicon-32x32.png
convert -background none -size 180x180 $SOURCE_SVG public/apple-touch-icon.png

# Create ICO file with multiple sizes
convert public/favicon-16x16.png public/favicon-32x32.png public/favicon.ico

echo "Favicon conversion complete!"
