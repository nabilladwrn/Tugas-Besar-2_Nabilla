<template>
  <div class="info-wrapper">

    <section class="page-header">
      <p class="page-eyebrow">Sebelum Berkunjung</p>
      <h1 class="page-title">Informasi Kunjungan</h1>
      <div class="gold-line"></div>
      <p class="page-desc">
        Semua yang perlu Anda ketahui sebelum mengunjungi Museum Nasional Indonesia. Mulai dari jam operasional, harga tiket, lokasi, dan tips berkunjung.
      </p>
    </section>

    <section class="info-main-section">
      <div class="info-main-grid">

        <div class="info-card">
          <div class="info-card-header">
            <span class="info-icon">🕐</span>
            <h3 class="info-card-title">Jam Operasional</h3>
          </div>
          <div class="jam-list">
            <div class="jam-row" v-for="(j, i) in jamOperasional" :key="i" :class="{ closed: j.tutup }">
              <span class="jam-hari">{{ j.hari }}</span>
              <span class="jam-waktu">{{ j.waktu }}</span>
            </div>
          </div>
          <p class="info-note">* Museum tutup pada hari libur nasional tertentu</p>
        </div>

        <div class="info-card">
          <div class="info-card-header">
            <span class="info-icon">🎟</span>
            <h3 class="info-card-title">Harga Tiket Masuk</h3>
          </div>
          <div class="tiket-list">
            <div class="tiket-row" v-for="(t, i) in tiket" :key="i">
              <span class="tiket-jenis">{{ t.jenis }}</span>
              <span class="tiket-harga">{{ t.harga }}</span>
            </div>
          </div>
          <p class="info-note">* Tiket tersedia di loket maupun daring</p>
        </div>

        <div class="info-card">
          <div class="info-card-header">
            <span class="info-icon">📍</span>
            <h3 class="info-card-title">Lokasi</h3>
          </div>
          <div class="lokasi-detail">
            <p class="lokasi-alamat">Jl. Medan Merdeka Barat No.12,<br>Gambir, Jakarta Pusat,<br>DKI Jakarta 10110</p>
            <div class="lokasi-akses">
              <p class="lokasi-akses-title">Akses Transportasi</p>
              <div class="akses-item" v-for="(a, i) in akses" :key="i">
                <span class="akses-icon">{{ a.icon }}</span>
                <span class="akses-text">{{ a.keterangan }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="fasilitas-section">
      <p class="section-eyebrow" style="text-align:center;">Yang Tersedia</p>
      <h2 class="section-title" style="text-align:center;">Fasilitas Museum</h2>
      <div class="gold-line" style="margin: 1.2rem auto 3rem;"></div>
      <div class="fasilitas-grid">
        <div class="fasilitas-item" v-for="(f, i) in fasilitas" :key="i">
          <span class="fasilitas-icon">{{ f.icon }}</span>
          <h4 class="fasilitas-nama">{{ f.nama }}</h4>
          <p class="fasilitas-desc">{{ f.deskripsi }}</p>
        </div>
      </div>
    </section>

    <section class="tips-section">
      <div class="tips-inner">
        <div class="tips-header">
          <p class="section-eyebrow">Saran Kami</p>
          <h2 class="section-title">Tips Berkunjung</h2>
          <div class="gold-line" style="margin: 1.2rem 0;"></div>
        </div>
        <div class="tips-grid">
          <div class="tips-card" v-for="(tip, i) in tips" :key="i">
            <span class="tips-num">{{ String(i + 1).padStart(2, '0') }}</span>
            <p class="tips-text">{{ tip }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta-section">
      <h2 class="cta-title">Siap Berkunjung?</h2>
      <p class="cta-desc">Tinggalkan kesan dan pesan Anda setelah mengunjungi Museum Nasional Indonesia.</p>
      <RouterLink to="/bukutamu" class="btn btn-gold">Isi Buku Tamu</RouterLink>
    </section>

  </div>
</template>

<script setup>
const jamOperasional = [
  { hari: 'Senin', waktu: 'Tutup', tutup: true },
  { hari: 'Selasa – Kamis', waktu: '08.00 – 16.00 WIB', tutup: false },
  { hari: 'Jumat', waktu: '08.00 – 16.30 WIB', tutup: false },
  { hari: 'Sabtu – Minggu', waktu: '08.00 – 17.00 WIB', tutup: false }
]

const tiket = [
  { jenis: 'Dewasa (WNI)', harga: 'Rp 15.000' },
  { jenis: 'Dewasa (WNA)', harga: 'Rp 25.000' },
  { jenis: 'Pelajar / Mahasiswa', harga: 'Rp 5.000' },
  { jenis: 'Anak-anak (< 5 th)', harga: 'Gratis' },
  { jenis: 'Rombongan (min. 25)', harga: 'Rp 3.000 / orang' }
]

const akses = [
  { icon: '🚇', keterangan: 'MRT: Stasiun Bundaran HI, lanjut berjalan ~10 menit' },
  { icon: '🚌', keterangan: 'TransJakarta: Koridor 1, Halte Monumen Nasional' },
  { icon: '🚗', keterangan: 'Parkir tersedia di area museum (berbayar)' }
]

const fasilitas = [
  { icon: '🅿️', nama: 'Area Parkir', deskripsi: 'Parkir kendaraan roda dua dan roda empat tersedia di dalam kompleks museum.' },
  { icon: '🍽️', nama: 'Kafe & Kantin', deskripsi: 'Tersedia area kuliner di lantai dasar Gedung B untuk pengunjung beristirahat.' },
  { icon: '🛍️', nama: 'Toko Souvenir', deskripsi: 'Berbagai produk kerajinan dan cendera mata bertema museum tersedia di toko resmi.' },
  { icon: '♿', nama: 'Akses Disabilitas', deskripsi: 'Ramp, lift, dan toilet khusus tersedia untuk pengunjung penyandang disabilitas.' },
  { icon: '📸', nama: 'Foto & Dokumentasi', deskripsi: 'Diperbolehkan untuk keperluan pribadi. Pemotretan komersial memerlukan izin.' },
  { icon: '🎧', nama: 'Audio Guide', deskripsi: 'Tersedia pemandu audio dalam Bahasa Indonesia dan Inggris di loket informasi.' }
]

const tips = [
  'Kunjungi di pagi hari (buka jam 08.00) untuk menghindari keramaian dan mendapatkan suasana yang lebih tenang.',
  'Manfaatkan layanan pemandu wisata yang tersedia agar penjelasan koleksi lebih mendalam dan interaktif.',
  'Gunakan alas kaki yang nyaman — area museum sangat luas dan membutuhkan banyak berjalan.',
  'Bawa bekal minum sendiri. Meski ada kafe, membawa air minum dari luar diperbolehkan.',
  'Perhatikan aturan tidak menyentuh koleksi dan tidak menggunakan flash saat memotret di dalam ruangan.',
  'Pelajari dulu koleksi utama yang ingin dilihat agar kunjungan lebih terarah dan tidak terburu-buru.'
]
</script>

<style scoped>
.info-wrapper {
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
  color: #e8c84a;
  font-size: 0.9rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 1rem;
  font-weight: 700;
}

.page-title {
  font-family: var(--font-serif);
  font-size: 3.2rem;
  font-weight: normal;
  color: #1a1a1a;
  margin-bottom: 1.2rem;
}

.gold-line {
  width: 80px;
  height: 2px;
  background-color: var(--gold);
  margin: 0 auto;
}

.page-desc {
  color: #1a1a1a;
  max-width: 580px;
  margin: 1.5rem auto 0;
  line-height: 1.8;
}

/* INFO MAIN */
.info-main-section {
  margin-bottom: 5rem;
}

.info-main-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  align-items: start;
}

.info-card {
  background: var(--bg-card);
  border: 1px solid rgba(212, 175, 55, 0.15);
  padding: 2rem;
}

.info-card-header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(212, 175, 55, 0.12);
}

.info-icon {
  font-size: 1.4rem;
}

.info-card-title {
  font-family: var(--font-serif);
  font-size: 1.15rem;
  font-weight: normal;
  color: #ffffff;
}

/* JAM */
.jam-list {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
}

.jam-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
}

.jam-hari {
  color: #cfc0b1;
}

.jam-waktu {
  color: #ffffff;
  font-weight: 500;
}

.jam-row.closed .jam-hari,
.jam-row.closed .jam-waktu {
  color: rgba(194, 178, 163, 0.35);
  text-decoration: line-through;
  text-decoration-color: rgba(194, 178, 163, 0.2);
}

/* TIKET */
.tiket-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.tiket-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.65rem;
  border-bottom: 1px solid rgba(212, 175, 55, 0.08);
  font-size: 0.875rem;
}

.tiket-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

.tiket-jenis {
  color: #cfc0b1;
}

.tiket-harga {
  color: #e8c84a;
  font-weight: 700;
  font-size: 0.92rem;
}

/* LOKASI */
.lokasi-alamat {
  color: #cfc0b1;
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 1.2rem;
}

.lokasi-akses-title {
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #e8c84a;
  margin-bottom: 0.8rem;
}

.akses-item {
  display: flex;
  align-items: flex-start;
  gap: 0.6rem;
  margin-bottom: 0.7rem;
  font-size: 0.85rem;
}

.akses-icon {
  flex-shrink: 0;
  font-size: 1rem;
  margin-top: 1px;
}

.akses-text {
  color: #cfc0b1;
  line-height: 1.5;
}

.info-note {
  margin-top: 1.2rem;
  font-size: 0.78rem;
  color: rgba(194, 178, 163, 0.5);
  font-style: italic;
  padding-top: 0.8rem;
  border-top: 1px solid rgba(212, 175, 55, 0.08);
}

/* FASILITAS */
.fasilitas-section {
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  padding: 5rem 0;
}

.section-eyebrow {
  color: #e8c84a;
  font-size: 0.88rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
  font-weight: 700;
}

.section-title {
  font-family: var(--font-serif);
  font-size: 2.5rem;
  font-weight: normal;
  color: #1a1a1a;
}

.fasilitas-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1rem;
}

.fasilitas-item {
  background: var(--bg-card);
  border: 1px solid rgba(212, 175, 55, 0.12);
  padding: 1.75rem;
  transition: border-color 0.3s;
}

.fasilitas-item:hover {
  border-color: rgba(212, 175, 55, 0.4);
}

.fasilitas-icon {
  font-size: 1.75rem;
  display: block;
  margin-bottom: 0.9rem;
}

.fasilitas-nama {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: normal;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.fasilitas-desc {
  color: #cfc0b1;
  font-size: 0.87rem;
  line-height: 1.7;
  margin: 0;
}

/* TIPS */
.tips-section {
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  padding: 5rem 0;
}

.tips-inner {
  max-width: 900px;
  margin: 0 auto;
}

.tips-header {
  margin-bottom: 3rem;
}

.tips-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.tips-card {
  background: var(--bg-card);
  border: 1px solid rgba(212, 175, 55, 0.1);
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: border-color 0.3s;
}

.tips-card:hover {
  border-color: rgba(212, 175, 55, 0.35);
}

.tips-num {
  font-family: var(--font-serif);
  font-size: 1.4rem;
  color: rgba(232, 200, 74, 0.25);
  line-height: 1;
  flex-shrink: 0;
}

.tips-text {
  color: #cfc0b1;
  font-size: 0.875rem;
  line-height: 1.7;
  margin: 0;
}

/* CTA */
.cta-section {
  text-align: center;
  padding: 4rem 0 0;
  border-top: 1px solid rgba(212, 175, 55, 0.1);
}

.cta-title {
  font-family: var(--font-serif);
  font-size: 2.2rem;
  font-weight: normal;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.cta-desc {
  color: #1a1a1a;
  margin-bottom: 2rem;
  font-size: 0.95rem;
}

.btn {
  display: inline-block;
  padding: 14px 32px;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.85rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: 0.3s;
  border-radius: 2px;
}

.btn-gold {
  background-color: var(--gold);
  color: var(--bg-dark);
  border: 1px solid var(--gold);
}

.btn-gold:hover {
  background-color: #f3d578;
  transform: translateY(-3px);
}

/* RESPONSIVE */
@media (max-width: 900px) {
  .info-main-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .page-title { font-size: 2.4rem; }
  .section-title { font-size: 2rem; }
  .tips-grid { grid-template-columns: 1fr; }
}
</style>