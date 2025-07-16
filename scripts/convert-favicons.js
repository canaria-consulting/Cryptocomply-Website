// This script converts SVG files to PNG and ICO formats
// You'll need to run: npm install sharp

const fs = require("fs")
const path = require("path")
const sharp = require("sharp")

async function convertSvgToPng(svgPath, pngPath, width, height) {
  try {
    const svgBuffer = fs.readFileSync(svgPath)
    await sharp(svgBuffer).resize(width, height).png().toFile(pngPath)
    console.log(`Converted ${svgPath} to ${pngPath}`)
  } catch (error) {
    console.error(`Error converting ${svgPath} to PNG:`, error)
  }
}

// Use the original canaria_icon.svg as the source for all conversions
const sourceIcon = path.join(__dirname, "../public/canaria_icon.svg")

// Convert to PNG files
convertSvgToPng(sourceIcon, path.join(__dirname, "../public/favicon-16x16.png"), 16, 16)

convertSvgToPng(sourceIcon, path.join(__dirname, "../public/favicon-32x32.png"), 32, 32)

convertSvgToPng(sourceIcon, path.join(__dirname, "../public/apple-touch-icon.png"), 180, 180)

// Note: For ICO files, you might need a different library or tool
// You can use online converters or tools like 'png-to-ico'
console.log("Favicon conversion complete!")
