<template>
  <div id="app">
    <header class="navbar">
      <div class="nav-container">
        <div class="logo">
          <span class="logo-main">Museum Nasional</span>
          <span class="logo-sub">DKI Jakarta</span>
        </div>
        <nav class="nav-links">
          <RouterLink to="/">Beranda</RouterLink>
          <RouterLink to="/sejarah">Sejarah</RouterLink>
          <RouterLink to="/koleksi">Koleksi</RouterLink>
          <RouterLink to="/info">Kunjungan</RouterLink>
          <RouterLink to="/bukutamu">Buku Tamu</RouterLink>
        </nav>
      </div>
    </header>

    <main class="main-content">
      <RouterView />
    </main>

    <footer class="footer">
      <div class="footer-container">
        <div class="footer-left">
          <h4>Museum Nasional Indonesia</h4>
          <p>Jl. Medan Merdeka Barat No.12, Gambir, Jakarta Pusat</p>
        </div>
        <div class="footer-right">
          <p>&copy; 2026 Wisata Edukasi Jabodetabek.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
/* KODE WARNA GLOBAL (Ditaruh di sini biar semua halaman bisa pakai) */
:root {
  --bg-dark: #1a120c;      
  --bg-card: #261a12;      
  --gold: #d4af37;         
  --text-light: #fdfaf6;   
  --text-dim: #c2b2a3;     
  --font-serif: 'Georgia', 'Times New Roman', serif;
  --font-sans: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  background-color: var(--bg-dark);
  color: var(--text-light);
  line-height: 1.6;
}

/* --- NAVBAR --- */
.navbar {
  background-color: var(--bg-dark);
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2rem;
}

.logo {
  display: flex;
  flex-direction: column;
}

.logo-main {
  font-family: var(--font-serif);
  color: var(--text-light);
  font-size: 1.3rem;
}

.logo-sub {
  color: var(--gold);
  font-size: 0.75rem;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.nav-links a {
  color: var(--text-dim);
  text-decoration: none;
  font-size: 0.9rem;
  margin-left: 2rem;
  transition: color 0.3s;
}

.nav-links a:hover, 
.nav-links a.router-link-exact-active {
  color: var(--gold);
}

.main-content {
  min-height: 80vh;
}

/* --- FOOTER --- */
.footer {
  background-color: #110a05;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  padding: 3rem 0;
  margin-top: 5rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-left h4 {
  font-family: var(--font-serif);
  color: var(--gold);
  font-weight: normal;
  margin-bottom: 5px;
}

.footer-left p, .footer-right p {
  color: var(--text-dim);
  font-size: 0.85rem;
}

@media (max-width: 768px) {
  .nav-container { flex-direction: column; gap: 15px; }
  .nav-links a { margin: 0 10px; }
  .footer-container { flex-direction: column; text-align: center; gap: 20px; }
}
</style>