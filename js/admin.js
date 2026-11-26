const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

async function adminInit(active){
  const { data: { session } } = await dfClient.auth.getSession();
  if (!session) { location.href = 'login.html'; return null; }
  const { data: mem, error } = await dfClient.from('restaurant_members')
    .select('role, restaurants(id,name,slug,plan_id)').eq('user_id', session.user.id).limit(1);
  if (error || !mem.length) { location.href = 'dashboard.html'; return null; }
  const links = [['dashboard.html','Home'],['admin-menu.html','Menu'],['admin-tables.html','Tables & QR'],['kitchen.html','Kitchen']];
  $('nav').innerHTML = links.map(([h,t]) => `<a href="${h}" class="${h===active?'on':''}">${t}</a>`).join('');
  $('out').onclick = async () => { await dfClient.auth.signOut(); location.href = 'login.html'; };
  return { r: mem[0].restaurants, role: mem[0].role };
}
