const REMOTE_URL = 'https://admin.pire.ae';
const TRANSFER_TOKEN =
	"9bf22c5ae79b2a9ca2a5f81b6357325e4c9bb7e9c6b140d05d9cb989aee32a9ca18fcd2ffeafb3431f73033adb6f76a28ec98d4e2a755efa951311d11d0cc74476d44af067baa0468489e83a7034eea6611d419b6c327dc27f63f99212fb77488f6da0e24e15e59410c8b1a0ee83f1632c8a6fc592d6c7f1e54fa6c42a50579a";

async function testToken() {
  try {
    // اختبار Transfer API
    const response = await fetch(`${REMOTE_URL}/admin/transfer/runner/push`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${TRANSFER_TOKEN}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    });

    console.log('Transfer API Status:', response.status);

    // اختبار Content API
    const contentResponse = await fetch(`${REMOTE_URL}/api/products`, {
      headers: {
        'Authorization': `Bearer ${TRANSFER_TOKEN}`
      }
    });

    console.log('Content API Status:', contentResponse.status);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

testToken();