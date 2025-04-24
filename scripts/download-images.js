const fs = require('fs');
const path = require('path');
const https = require('https');
const { backgroundImages } = require('../src/app/utils/imageUtils');

// Create the directory if it doesn't exist
const imagesDir = path.join(__dirname, '../public/images/background');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Function to download an image from a URL
function downloadImage(url, destPath) {
  return new Promise((resolve, reject) => {
    console.log(`Downloading ${url} to ${destPath}...`);
    
    const file = fs.createWriteStream(destPath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${url} to ${destPath}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(destPath, () => {}); // Delete the file on error
      console.error(`Error downloading ${url}: ${err.message}`);
      reject(err);
    });
  });
}

// Main function to download all images
async function downloadAllImages() {
  const urls = Object.keys(backgroundImages);
  for (const url of urls) {
    const localPath = backgroundImages[url];
    const fullPath = path.join(__dirname, '../public', localPath);
    
    try {
      await downloadImage(url, fullPath);
    } catch (error) {
      console.error(`Failed to download ${url}: ${error.message}`);
    }
  }
  
  console.log('All downloads completed!');
}

// Run the download
downloadAllImages(); 