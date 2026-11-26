// Supabase > Project Settings > API
// anon / public key only. NEVER put the service_role key here.
window.DF_CONFIG = {
  SUPPORT_TEXT: "To activate your plan, WhatsApp us on +91 7897383084",
  SUPABASE_URL: "https://trwlosltntbfgujlxrea.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRyd2xvc2x0bnRiZmd1amx4cmVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTU2MjUzMTYsImV4cCI6MjExMTIwMTMxNn0.D0-VT9AQ7BmRCBsEdJlhVTqKONOBChRemzXPNZHE0Fc"
};

window.dfClient = window.supabase.createClient(
  window.DF_CONFIG.SUPABASE_URL,
  window.DF_CONFIG.SUPABASE_ANON_KEY
);
