import axios from 'axios';

// ✅ Use environment variable if available, otherwise fallback to Django backend
const API_BASE = process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000';

// ✅ Fetch products from backend
export async function fetchProducts() {
  try {
    const res = await axios.get(`${API_BASE}/api/products/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // ✅ Normalize response
    if (Array.isArray(res.data)) {
      return res.data;
    } else if (res.data?.products && Array.isArray(res.data.products)) {
      return res.data.products;
    } else {
      console.warn('⚠️ Unexpected API format:', res.data);
      return [];
    }
  } catch (err) {
    console.error('❌ API fetch failed:', err.message);

    // ✅ Fallback mock data (so UI still works)
    return [
      {
        id: 1,
        name: 'Toy Car',
        description: 'Fun racing car',
        price: 199,
        image: '/placeholder.png',
      },
      {
        id: 2,
        name: 'Doll',
        description: 'Cute doll',
        price: 299,
        image: '/placeholder.png',
      },
    ];
  }
}
