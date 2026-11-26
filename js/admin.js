const $ = id => document.getElementById(id);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

const NAV = [
  ['dashboard.html','Home',['owner','manager']],
  ['admin-menu.html','Menu',['owner','manager']],
  ['admin-tables.html','Tables & QR',['owner','manager','waiter']],
  ['kitchen.html','Kitchen',['owner','manager','kitchen','waiter']],
  ['admin-analytics.html','Analytics',['owner','manager']],
  ['admin-staff.html','Staff',['owner']],
  ['admin-settings.html','Settings',['owner']]
];
function renderNav(active, role){
  $('nav').innerHTML = NAV.filter(n => n[2].includes(role))
    .map(([h,t]) => `<a href="${h}" class="${h===active?'on':''}">${t}</a>`).join('');
}

async function adminInit(active){
  const { data: { session } } = await dfClient.auth.getSession();
  if (!session) { location.href = 'login.html'; return null; }
  const { data: mem, error } = await dfClient.from('restaurant_members')
    .select('role, restaurants(id,name,slug,plan_id)').eq('user_id', session.user.id).limit(1);
  if (error || !mem.length) { location.href = 'dashboard.html'; return null; }
  const role = mem[0].role;
  const page = NAV.find(n => n[0] === active);
  if (page && !page[2].includes(role)) { location.href = 'kitchen.html'; return null; }
  renderNav(active, role);
  $('out').onclick = async () => { await dfClient.auth.signOut(); location.href = 'login.html'; };
  return { r: mem[0].restaurants, role };
}
