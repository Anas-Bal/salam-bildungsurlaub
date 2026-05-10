import type { APIRoute } from 'astro';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { token } = await request.json();
    if (!token) {
      return new Response(JSON.stringify({ success: false, error: 'Token fehlt' }), { status: 400 });
    }

    const secret = import.meta.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      return new Response(JSON.stringify({ success: false, error: 'Server-Konfigurationsfehler' }), { status: 500 });
    }

    const params = new URLSearchParams({ secret, response: token });
    const verifyRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      body: params,
    });
    const data = await verifyRes.json();

    if (data.success && data.score >= 0.5) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    }

    return new Response(JSON.stringify({ success: false, error: 'Verdacht auf automatisiertes Verhalten' }), { status: 403 });
  } catch {
    return new Response(JSON.stringify({ success: false, error: 'Interner Fehler' }), { status: 500 });
  }
};
