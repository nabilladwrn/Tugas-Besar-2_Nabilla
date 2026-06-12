<template>
  <div class="beranda-wrapper">
    <section class="hero">
      <div class="hero-image">
        <img src="../assets/hero-museum.jpg" alt="Museum Nasional" />
      </div>
      <div class="hero-text">
        <span class="tagline">Wisata Edukasi Jakarta Sejak 1778 </span>
        <h1 class="title">Menjelajahi Warisan Nusantara</h1>
        <p class="subtitle">
          Museum Nasional Indonesia menghadirkan pengalaman belajar sejarah
          dan budaya melalui ribuan koleksi berharga yang berasal dari
          berbagai daerah di Indonesia.
        </p>
        <div class="hero-buttons">
          <RouterLink to="/koleksi" class="btn btn-gold">Lihat Koleksi</RouterLink>
          <RouterLink to="/info" class="btn btn-outline">Info Kunjungan</RouterLink>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <div class="stat-box" v-for="(stat, index) in stats" :key="index">
        <h2 class="stat-number">{{ stat.angka }}</h2>
        <p class="stat-label">{{ stat.label }}</p>
      </div>
    </section>

    <section class="koleksi-section">
      <div class="section-header">
        <h2>Koleksi Pilihan</h2>
        <div class="gold-line"></div>
        <p class="header-desc">
          Beberapa koleksi unggulan yang menjadi daya tarik utama Museum Nasional Indonesia.
        </p>
      </div>
      <div class="koleksi-grid">
        <div class="koleksi-card" v-for="(item, index) in koleksi" :key="index">
          <img :src="item.gambar" :alt="item.nama">
          <div class="koleksi-content">
            <h3>{{ item.nama }}</h3>
            <p>{{ item.deskripsi }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import arca from '../assets/arca-bhairawa.jpeg'
import prasasti from '../assets/prasasti-yupa.jpeg'
import keris from '../assets/arca-singasari.jpg'

const stats = ref([
  { angka: '190K+', label: 'Koleksi Museum' },
  { angka: '1778', label: 'Tahun Berdiri' },
  { angka: '11', label: 'Ruang Pamer' },
  { angka: '8', label: 'Zona Koleksi' }
])

const koleksi = ref([
  {
    nama: 'Arca Bhairawa',
    deskripsi: 'Arca monumental dari abad ke-13 yang menggambarkan dewa dalam tradisi Tantrayana; merupakan salah satu mahakarya arca terbesar di Indonesia.',
    gambar: arca
  },
  {
    nama: 'Prasasti Yupa',
    deskripsi: 'Tiang batu peninggalan Kerajaan Kutai yang menjadi bukti tertua dimulainya zaman sejarah di Nusantara melalui aksara Pallawa.',
    gambar: prasasti
  },
  {
    nama: 'Arca Singasari',
    deskripsi: 'Perwujudan seni pahat klasik dari masa keemasan Kerajaan Singasari yang mencerminkan kedalaman filosofi spiritual dan budaya Nusantara.',
    gambar: keris
  }
])
</script>

<style scoped>
.beranda-wrapper { width: 100%; }

/* HERO */
.hero { display: flex; min-height: 80vh; background-color: var(--bg-dark); }
.hero-image { flex: 1; position: relative; }
.hero-image img { width: 100%; height: 100%; object-fit: cover; }
.hero-image::after {
  content: ''; position: absolute; inset: 0;
  background: linear-gradient(to right, transparent, var(--bg-dark));
}
.hero-text {
  flex: 1; display: flex; flex-direction: column; justify-content: center;
  padding: 4rem 5rem 4rem 2rem; z-index: 2;
}
.tagline {
  color: var(--gold); font-size: 0.8rem; letter-spacing: 3px;
  text-transform: uppercase; margin-bottom: 1.5rem; font-weight: bold;
}
.title {
  font-family: var(--font-serif); font-size: 3.5rem; line-height: 1.2;
  font-weight: normal; margin-bottom: 1.5rem; color: var(--text-light);
}
.subtitle {
  color: var(--text-dim); font-size: 1.05rem; line-height: 1.8;
  margin-bottom: 3rem; max-width: 90%;
}
.hero-buttons { display: flex; gap: 15px; }

/* BUTTON */
.btn {
  padding: 14px 28px; text-decoration: none; font-weight: bold;
  font-size: 0.85rem; letter-spacing: 1px; text-transform: uppercase;
  transition: 0.3s; border-radius: 2px;
}
.btn-gold { background-color: var(--gold); color: var(--bg-dark); border: 1px solid var(--gold); }
.btn-gold:hover { background-color: #f3d578; border-color: #f3d578; transform: translateY(-3px); }
.btn-outline { border: 1px solid rgba(212, 175, 55, 0.4); color: var(--text-light); }
.btn-outline:hover { border-color: var(--gold); color: var(--gold); transform: translateY(-3px); }

/* STATS */
.stats-section {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  background-color: var(--bg-card);
}
.stat-box {
  text-align: center; padding: 3rem 2rem;
  border-right: 1px solid rgba(212, 175, 55, 0.1);
}
.stat-box:last-child { border-right: none; }
.stat-number { font-family: var(--font-serif); color: var(--gold); font-size: 2.8rem; font-weight: normal; }
.stat-label { color: var(--text-dim); text-transform: uppercase; letter-spacing: 2px; font-size: 0.8rem; }

/* SECTION */
.section-header { text-align: center; margin-bottom: 4rem; }
.section-header h2 { font-family: var(--font-serif); font-size: 2.5rem; font-weight: normal; }
.gold-line { width: 80px; height: 1px; background-color: var(--gold); margin: 1rem auto; }
.header-desc {  color: #1a1a1a; max-width: 800px; margin: auto; line-height: 1.8; }

/* KOLEKSI */
.koleksi-section { padding: 7rem 2rem; max-width: 1200px; margin: auto; }
.koleksi-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
.koleksi-card {
  background-color: var(--bg-card); overflow: hidden;
  border: 1px solid rgba(212, 175, 55, 0.1); transition: 0.3s;
}
.koleksi-card:hover { transform: translateY(-8px); border-color: var(--gold); }
.koleksi-card img { width: 100%; height: 250px; object-fit: cover; }
.koleksi-content { padding: 2rem; }
.koleksi-content h3 { color: var(--gold); font-family: var(--font-serif); margin-bottom: 1rem; font-weight: normal; }
.koleksi-content p { color: var(--text-dim); line-height: 1.8; }

/* RESPONSIVE */
@media (max-width: 992px) {
  .hero { flex-direction: column; }
  .hero-image { min-height: 400px; }
  .hero-image::after { background: linear-gradient(to bottom, transparent, var(--bg-dark)); }
  .hero-text { padding: 4rem 2rem; text-align: center; align-items: center; }
  .subtitle { max-width: 100%; }
}
@media (max-width: 768px) {
  .title { font-size: 2.5rem; }
  .hero-buttons { flex-direction: column; width: 100%; }
  .btn { text-align: center; }
  .stat-box { border-right: none; border-bottom: 1px solid rgba(212, 175, 55, 0.1); }
  .stat-box:last-child { border-bottom: none; }
}
</style>