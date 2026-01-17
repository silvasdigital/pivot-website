const fs = require("fs");
const path = require("path");

const REMOTE_URL = "https://admin.pire.ae";
// استبدل هذا بـ API Token الجديد
const API_TOKEN =
	"7231cc78c1caff7ef303e5b8b69694afebd6ba49321233dc6254f458326e183985ab4131985d39352788fa124649f2f37c2ee6fdeff9074fb9815c653014c53b134adf8fb01e9aab788d630f599ffd0d1a2186ea8fef4c471f256c3f7da43177675aafe87cdb4e9784a6f0f70e303d95635b8a4e33467a0c308d2a43afb39200";

async function fetchData(endpoint) {
	const response = await fetch(`${REMOTE_URL}/api/${endpoint}?populate=*`, {
		headers: {
			Authorization: `Bearer ${API_TOKEN}`,
			"Content-Type": "application/json",
		},
	});

	if (!response.ok) {
		throw new Error(`Failed to fetch ${endpoint}: ${response.statusText}`);
	}

	return response.json();
}

async function downloadImage(imageUrl, fileName) {
	// Use direct URL if it's already a full URL
	const fullUrl = imageUrl.startsWith('http') ? imageUrl : `${REMOTE_URL}${imageUrl}`;
	const response = await fetch(fullUrl);
	const buffer = await response.arrayBuffer();

	const uploadsDir = path.join(__dirname, "../public/uploads");
	fs.writeFileSync(path.join(uploadsDir, fileName), Buffer.from(buffer));
}

async function syncData() {
	if (API_TOKEN === "YOUR_API_TOKEN_HERE") {
		console.error("Please set your API_TOKEN in the script");
		return;
	}

	try {
		const collections = ["products", "categories", "orders"];

		for (const collection of collections) {
			console.log(`Fetching ${collection}...`);
			const data = await fetchData(collection);

			fs.writeFileSync(
				path.join(__dirname, `../data/${collection}.json`),
				JSON.stringify(data, null, 2),
			);

			if (data.data) {
				for (const item of data.data) {
					const attrs = item.attributes || item;
					
					// Handle cover image
					if (attrs.cover?.url) {
						const imageUrl = attrs.cover.url;
						const fileName = path.basename(imageUrl);
						console.log(`Downloading: ${fileName}`);
						await downloadImage(imageUrl, fileName);
					}
					
					// Handle gallery images
					if (attrs.gallery) {
						const images = Array.isArray(attrs.gallery) ? attrs.gallery : [attrs.gallery];
						for (const img of images) {
							if (img.url) {
								const imageUrl = img.url;
								const fileName = path.basename(imageUrl);
								console.log(`Downloading: ${fileName}`);
								await downloadImage(imageUrl, fileName);
							}
						}
					}
				}
			}
		}

		console.log("Data sync completed!");
	} catch (error) {
		console.error("Error syncing data:", error);
	}
}

syncData();
