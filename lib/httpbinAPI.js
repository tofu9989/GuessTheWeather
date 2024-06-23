// lib/httpbinAPI.js

async function getBytes(temperature) {
  try {
    const response = await fetch(`https://httpbin.org/bytes/${temperature}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const buffer = await response.arrayBuffer();
    const data = new Uint8Array(buffer);
    const target = data[0];  // Use the first byte from the array
    return target;
  } catch (error) {
    throw new Error(`Failed to fetch data: ${error.message}`);
  }
}

export { getBytes };
