const fs = require('fs');
const path = require('path');

async function importData() {
  try {
    // Start Strapi programmatically
    const strapi = require('@strapi/strapi');
    const app = await strapi().load();

    const collections = ['products', 'categories', 'orders'];

    for (const collection of collections) {
      const filePath = path.join(__dirname, `../data/${collection}.json`);
      
      if (!fs.existsSync(filePath)) {
        console.log(`File not found: ${filePath}`);
        continue;
      }

      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      
      if (data.data && data.data.length > 0) {
        console.log(`Importing ${data.data.length} ${collection}...`);
        
        for (const item of data.data) {
          try {
            await strapi.entityService.create(`api::${collection.slice(0, -1)}.${collection.slice(0, -1)}`, {
              data: item.attributes
            });
          } catch (error) {
            console.log(`Error importing ${collection} item:`, error.message);
          }
        }
      }
    }

    console.log('Import completed!');
    process.exit(0);
  } catch (error) {
    console.error('Import failed:', error);
    process.exit(1);
  }
}

importData();