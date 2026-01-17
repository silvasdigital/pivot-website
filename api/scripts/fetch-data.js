const { execSync } = require('child_process');
const path = require('path');

const REMOTE_URL = 'https://admin.pire.ae';
const TRANSFER_TOKEN = 'ab5a8a5053684f733ec3fe9236f45354125eb710b4adadb474b6fe26e78393185fff26e116e2749d4f479e391655df3180eb536896db975e02f164c3bfa8a52db3297e6dcef66bd8016ff13c4665dc72f4f3317e3cc7fa9b54872dee4c219eadbd441d6de6fbf7154cf028e1954e23ee2a605ad01b97dfc6ade259d764f5d03f';

async function syncData() {
  try {
    console.log('Starting data transfer from remote Strapi...');
    
    const command = `npx strapi transfer --from ${REMOTE_URL} --from-token ${TRANSFER_TOKEN} --force`;
    
    console.log('Executing transfer command...');
    execSync(command, { stdio: 'inherit', cwd: __dirname + '/..' });
    
    console.log('Data transfer completed!');
  } catch (error) {
    console.error('Error during transfer:', error.message);
  }
}

syncData();