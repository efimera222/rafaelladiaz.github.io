// Año en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Modo oscuro simple con localStorage
const toggleBtn = document.getElementById('themeToggle');
function setTheme(isDark){
  document.documentElement.classList.toggle('dark', isDark);
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  toggleBtn.textContent = isDark ? 'Claro' : 'Oscuro';
}
setTheme(localStorage.getItem('theme') === 'dark');
toggleBtn.addEventListener('click', ()=> setTheme(!document.documentElement.classList.contains('dark')));

// Contador de visitas (temporal simulado; luego lo conectamos a tu API real)
(function loadVisits(){
  const simulated = Math.floor(Math.random()*200) + 20;
  const el = document.getElementById('visitCounter');
  if(el) el.textContent = `Visitas: ${simulated}`;
})();