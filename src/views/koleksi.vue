<template>
  <div class="koleksi-wrapper">

    <!-- PAGE HEADER -->
    <section class="page-header">
      <p class="section-eyebrow">Warisan Nusantara</p>
      <h1 class="page-title">Koleksi Museum</h1>
      <div class="gold-line"></div>
      <p class="page-desc">
        Lebih dari 190.000 benda koleksi tersimpan di Museum Nasional, mencakup arkeologi,
        etnografi, sejarah, geografi, hingga numismatik dari seluruh penjuru Indonesia.
      </p>
    </section>

    <!-- FILTER KATEGORI -->
    <section class="filter-section">
      <div class="filter-tabs">
        <button
          v-for="(kat, i) in kategori"
          :key="i"
          class="filter-btn"
          :class="{ active: activeKategori === kat }"
          @click="activeKategori = kat"
        >
          {{ kat }}
        </button>
      </div>
    </section>

    <!-- KOLEKSI GRID -->
    <section class="koleksi-section">
      <div class="koleksi-grid">
        <div
          class="koleksi-card"
          v-for="(item, i) in koleksiFiltred"
          :key="i"
        >
          <div class="koleksi-img-wrap">
            <!-- Menggunakan tag img dengan binding :src dan :alt -->
            <img :src="item.gambar" :alt="item.nama" class="koleksi-img" />
            <span class="koleksi-badge">{{ item.kategori }}</span>
          </div>
          <div class="koleksi-content">
            <p class="koleksi-era">{{ item.era }}</p>
            <h3 class="koleksi-nama">{{ item.nama }}</h3>
            <p class="koleksi-asal">Asal: {{ item.asal }}</p>
            <p class="koleksi-desc">{{ item.deskripsi }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- INFO ZONA -->
    <section class="zona-section">
      <p class="section-eyebrow" style="text-align:center;">Tata Ruang Museum</p>
      <h2 class="section-title" style="text-align:center;">Zona Koleksi</h2>
      <div class="gold-line" style="margin: 1.2rem auto 1rem;"></div>
      <p class="zona-intro">
        Koleksi Museum Nasional dibagi ke dalam beberapa zona tematik agar pengunjung dapat
        menelusuri sejarah secara runut dan terorganisir.
      </p>
      <div class="zona-grid">
        <div class="zona-card" v-for="(zona, i) in zona" :key="i">
          <span class="zona-number">{{ String(i + 1).padStart(2, '0') }}</span>
          <h4 class="zona-nama">{{ zona.nama }}</h4>
          <p class="zona-desc">{{ zona.deskripsi }}</p>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import imgArcaBhairawa from '@/assets/arca-bhairawa.jpeg'
import imgNekaraPerunggu from '@/assets/nekara-perunggu.jpeg' 
import imgBatikGaruda from '@/assets/batik-garuda.jpg'
import imgTopengUpacara from '@/assets/topeng-upacara.jpg'
import imgStupa from '@/assets/stupa.jpeg'
import imgKeris from '@/assets/keris-nusantara.jpeg'
import imgKebonKopi from '@/assets/prasasti-kebonkopi.jpg'
import imgMataUang from '@/assets/mata-uang.jpg'
import imgSenjataKalimantan from '@/assets/senjata-kalimantan.jpeg'

const kategori = ['Semua', 'Arkeologi', 'Etnografi', 'Sejarah', 'Perunggu', 'Tekstil']
const activeKategori = ref('Semua')

const semuaKoleksi = [
  {
    nama: 'Arca Bhairawa',
    era: 'Abad XIII – XIV M',
    kategori: 'Arkeologi',
    asal: 'Sumatera Barat',
    deskripsi: 'Arca monumental setinggi 4,41 meter yang menggambarkan dewa Bhairava dalam tradisi Tantrayana.',
    gambar: imgArcaBhairawa
  },
  {
    nama: 'Nekara Perunggu Pejeng',
    era: 'Abad I SM – I M',
    kategori: 'Perunggu',
    asal: 'Bali',
    deskripsi: 'Nekara terbesar yang pernah ditemukan di dunia, simbol kekuatan spiritual masyarakat prasejarah.',
    gambar: imgNekaraPerunggu
  },
  {
    nama: 'Prasasti Kebon Kopi',
    era: 'Abad V M',
    kategori: 'Sejarah',
    asal: 'Jawa Barat',
    deskripsi: 'Salah satu prasasti tertua dari Kerajaan Tarumanegara, bukti peradaban awal di Jawa Barat.',
    gambar: imgKebonKopi
  },
  {
    nama: 'Koleksi Keris Nusantara',
    era: 'Abad IX – XIX M',
    kategori: 'Etnografi',
    asal: 'Seluruh Indonesia',
    deskripsi: 'Ratusan keris dari berbagai daerah, diakui UNESCO sebagai Warisan Budaya Tak Benda Dunia.',
    gambar: imgKeris
  },
  {
    nama: 'Batik Garuda Nusantara',
    era: 'Abad XVIII – XIX M',
    kategori: 'Tekstil',
    asal: 'Yogyakarta',
    deskripsi: 'Batik dengan motif parang, sido mukti, dan kawung dari lingkungan keraton yang sarat filosofi.',
    gambar: imgBatikGaruda
  },
  {
    nama: 'Topeng Barong Bali',
    era: 'Abad XIX – XX M',
    kategori: 'Etnografi',
    asal: 'Bali',
    deskripsi: 'Topeng upacara yang mencerminkan dualisme kosmologi Bali antara kekuatan baik dan jahat.',
    gambar: imgTopengUpacara
  },
  {
    nama: 'Stupa Borobudur Mini',
    era: 'Abad IX M',
    kategori: 'Arkeologi',
    asal: 'Jawa Tengah',
    deskripsi: 'Replika stupa dari kompleks Candi Borobudur yang menggambarkan konsepsi kosmologi Buddha.',
    gambar: imgStupa
  },
  {
    nama: 'Mata Uang Kepeng',
    era: 'Abad XIV – XVII M',
    kategori: 'Sejarah',
    asal: 'Berbagai Kerajaan',
    deskripsi: 'Koin-koin dari era kerajaan Hindu-Buddha dan Islam yang menunjukkan jalur perdagangan Nusantara.',
    gambar: imgMataUang
  },
  {
    nama: 'Senjata Tradisional Kalimantan',
    era: 'Abad XVIII – XX M',
    kategori: 'Etnografi',
    asal: 'Kalimantan',
    deskripsi: 'Koleksi mandau, sumpit, dan perisai dayak yang dihias dengan ukiran rumit dan bulu burung enggang.',
    gambar: imgSenjataKalimantan
  }
]

const koleksiFiltred = computed(() => {
  if (activeKategori.value === 'Semua') return semuaKoleksi
  return semuaKoleksi.filter(k => k.kategori === activeKategori.value)
})

const zona = [
  { nama: 'Prasejarah', deskripsi: 'Artefak dari masa sebelum tulisan — batu, perunggu, dan tembikar dari seluruh kepulauan.' },
  { nama: 'Arkeologi', deskripsi: 'Peninggalan kerajaan-kerajaan Hindu-Buddha di Jawa, Sumatera, dan Bali.' },
  { nama: 'Etnografi', deskripsi: 'Benda-benda budaya dari suku-suku di seluruh Indonesia — pakaian, senjata, dan upacara adat.' },
  { nama: 'Keramik & Porselen', deskripsi: 'Koleksi keramik lokal dan impor dari Tiongkok, Eropa, dan Timur Tengah.' },
  { nama: 'Numismatik', deskripsi: 'Mata uang dari berbagai kerajaan dan era kolonial yang mencerminkan sejarah ekonomi.' },
  { nama: 'Tekstil Nusantara', deskripsi: 'Batik, tenun ikat, songket, dan kain tradisional dari penjuru Indonesia.' },
  { nama: 'Prasasti & Naskah', deskripsi: 'Dokumen tertulis paling tua dari Nusantara, dalam berbagai bahasa dan aksara.' },
  { nama: 'Geografi & Peta', deskripsi: 'Koleksi peta kuno yang mendokumentasikan pemahaman manusia atas kepulauan Nusantara.' }
]
</script>

<style scoped>
.koleksi-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem 5rem;
}

/* PAGE HEADER */
.page-header {
  text-align: center;
  padding: 5rem 0 4rem;
}

.page-eyebrow {
  color: var(--gold);
  font-size: 0.8rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.page-title {
  font-family: var(--font-serif);
  font-size: 3rem;
  font-weight: normal;
  color: #1a1a1a;
  opacity: 0.85;
  margin-bottom: 1.2rem;
}

.gold-line {
  width: 80px;
  height: 1px;
  background-color: var(--gold);
  margin: 0 auto;
}

.page-desc {
  color: #1a1a1a;
  opacity: 0.85;
  max-width: 600px;
  margin: 1.5rem auto 0;
  line-height: 1.8;
}

/* FILTER */
.filter-section {
  margin-bottom: 3rem;
}

.filter-tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  justify-content: center;
}

.filter-btn {
  background: none;
  border: 1px solid rgba(212, 175, 55, 0.2);
  color: var(--text-dim);
  padding: 0.5rem 1.3rem;
  font-size: 0.82rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;
  font-family: var(--font-sans);
  border-radius: 2px;
}

.filter-btn:hover {
  border-color: rgba(212, 175, 55, 0.5);
  color: var(--text-light);
}

.filter-btn.active {
  background: var(--gold);
  border-color: var(--gold);
  color: var(--bg-dark);
  font-weight: bold;
}

/* KOLEKSI GRID */
.koleksi-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
}

.koleksi-card {
  background: var(--bg-card);
  border: 1px solid rgba(212, 175, 55, 0.1);
  overflow: hidden;
  transition: border-color 0.3s, transform 0.3s;
}

.koleksi-card:hover {
  border-color: rgba(212, 175, 55, 0.45);
  transform: translateY(-5px);
}

.koleksi-img-wrap {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.koleksi-img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Memastikan gambar memenuhi area card dengan proporsional */
  object-position: cover; /* Memastikan fokus gambar ada di tengah */
  transition: transform 0.3s ease; /* Opsional: memberikan efek smooth */
}

/* Opsional: Jika ingin gambarnya sedikit nge-zoom saat card di-hover */
.koleksi-card:hover .koleksi-img {
  transform: scale(1.05);
}

.koleksi-badge {
  position: absolute;
  top: 0.8rem;
  right: 0.8rem;
  background: rgba(26, 18, 12, 0.85);
  border: 1px solid rgba(212, 175, 55, 0.3);
  color: var(--gold);
  font-size: 0.68rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 0.3rem 0.7rem;
}

.koleksi-content {
  padding: 1.5rem;
}

.koleksi-era {
  color: var(--gold);
  font-size: 0.72rem;
  font-weight: bold;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 0.4rem;
}

.koleksi-nama {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: normal;
  color: var(--text-light);
  margin-bottom: 0.4rem;
}

.koleksi-asal {
  font-size: 0.78rem;
  color: rgba(194, 178, 163, 0.6);
  margin-bottom: 0.75rem;
  font-style: italic;
}

.koleksi-desc {
  color: var(--text-dim);
  font-size: 0.875rem;
  line-height: 1.7;
  margin: 0;
}

/* ZONA */
.zona-section {
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  padding: 5rem 0 0;
}

.section-title {
  font-family: var(--font-serif);
  font-size: 2.2rem;
  font-weight: normal;
  color: #1a1a1a;
  opacity: 0.85;
}

.section-eyebrow {
  color: #e8c84a;
  font-size: 0.88rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.zona-intro {
  color: #1a1a1a;
  opacity: 0.85;
  text-align: center;
  max-width: 600px;
  margin: 1.5rem auto 3rem;
  line-height: 1.8;
}

.zona-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1rem;
}

.zona-card {
  background: var(--bg-card);
  border: 1px solid rgba(212, 175, 55, 0.1);
  padding: 1.5rem;
  transition: border-color 0.3s;
}

.zona-card:hover {
  border-color: rgba(212, 175, 55, 0.4);
}

.zona-number {
  display: block;
  font-family: var(--font-serif);
  font-size: 1.6rem;
  color: rgba(212, 175, 55, 0.25);
  margin-bottom: 0.5rem;
  line-height: 1;
}

.zona-nama {
  font-family: var(--font-serif);
  font-size: 1rem;
  font-weight: normal;
  color: var(--text-light);
  margin-bottom: 0.6rem;
}

.zona-desc {
  color: var(--text-dim);
  font-size: 0.85rem;
  line-height: 1.7;
  margin: 0;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .page-title { font-size: 2.2rem; }
  .koleksi-grid { grid-template-columns: 1fr; }
  .zona-grid { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 480px) {
  .zona-grid { grid-template-columns: 1fr; }
}
</style>