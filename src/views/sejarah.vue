<template>
  <div class="sejarah-wrapper">

    <section class="page-header">
      <p class="page-eyebrow">Mengenal Lebih Dekat</p>
      <h1 class="page-title">Sejarah Museum Nasional</h1>
      <div class="gold-line"></div>
      <p class="page-desc">
        Dari sebuah perkumpulan ilmuwan kolonial hingga menjadi museum nasional kebanggaan bangsa. Suatu perjalanan panjang selama lebih dari dua abad.
      </p>
    </section>

    <section class="timeline-section">
      <div class="timeline">
        <div
          class="timeline-item"
          v-for="(item, index) in timeline"
          :key="index"
          :class="index % 2 === 0 ? 'left' : 'right'"
        >
          <div class="timeline-content">
            <span class="timeline-year">{{ item.tahun }}</span>
            <h3 class="timeline-title">{{ item.judul }}</h3>
            <p class="timeline-desc">{{ item.deskripsi }}</p>
          </div>
          <div class="timeline-dot"></div>
        </div>
      </div>
    </section>

    <section class="tentang-section">
      <div class="tentang-inner">
        <div class="tentang-text">
          <p class="section-eyebrow">Tentang Museum</p>
          <h2 class="section-title">Gedung Gajah yang Ikonik</h2>
          <div class="gold-line" style="margin: 1.2rem 0;"></div>
          <p class="tentang-para">
            Museum Nasional Indonesia, yang akrab disebut "Museum Gajah" karena adanya patung gajah
            hadiah Raja Chulalongkorn dari Thailand di halaman depannya, adalah museum pertama dan
            terbesar di Asia Tenggara.
          </p>
          <p class="tentang-para">
            Gedung utama yang menghadap ke Lapangan Merdeka ini telah berdiri sejak 1868 dan menjadi
            salah satu bangunan bersejarah paling penting di Jakarta, dengan arsitektur neo-klasik
            bergaya Eropa yang tetap megah hingga kini.
          </p>
          <p class="tentang-para">
            Pada 2007, museum ini mengalami kebakaran yang menghanguskan sebagian koleksinya.
            Namun pemerintah dan masyarakat bersatu membangun kembali, dan kini Museum Nasional
            berdiri lebih kuat dengan gedung sayap baru yang modern.
          </p>
        </div>
        <div class="tentang-visual">
          <div class="visual-box">
            <span class="visual-year">1778</span>
            <p class="visual-label">Tahun pendirian oleh<br>Bataviaasch Genootschap</p>
          </div>
          <div class="visual-box">
            <span class="visual-year">1868</span>
            <p class="visual-label">Gedung museum resmi<br>dibuka untuk umum</p>
          </div>
          <div class="visual-box">
            <span class="visual-year">190K+</span>
            <p class="visual-label">Total koleksi yang<br>tersimpan hingga kini</p>
          </div>
        </div>
      </div>
    </section>

    <section class="pendiri-section">
      <div class="pendiri-inner">
        <p class="section-eyebrow" style="text-align:center;">Asal Muasal</p>
        <h2 class="section-title" style="text-align:center;">Bataviaasch Genootschap</h2>
        <div class="gold-line" style="margin: 1.2rem auto;"></div>
        <p class="pendiri-intro">
          Semuanya berawal dari sebuah perkumpulan yang didirikan oleh para ilmuwan Belanda pada
          24 April 1778 di Batavia, yaitu Bataviaasch Genootschap van Kunsten en Wetenschappen,
          yang berarti "Perkumpulan Seni dan Ilmu Pengetahuan Batavia."
        </p>
        <div class="pendiri-grid">
          <div class="pendiri-card" v-for="(tokoh, i) in pendiri" :key="i">
            <div class="pendiri-initial">{{ tokoh.inisial }}</div>
            <h4 class="pendiri-nama">{{ tokoh.nama }}</h4>
            <p class="pendiri-peran">{{ tokoh.peran }}</p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const timeline = [
  {
    tahun: '1778',
    judul: 'Pendirian Perkumpulan',
    deskripsi: 'Bataviaasch Genootschap van Kunsten en Wetenschappen didirikan oleh sekelompok ilmuwan Belanda di Batavia untuk mendorong penelitian seni dan ilmu pengetahuan.'
  },
  {
    tahun: '1796',
    judul: 'Museum Pertama',
    deskripsi: 'Koleksi mulai disimpan dan dipamerkan di sebuah gedung di Jalan Kalibesar, menjadikannya salah satu museum pertama di Asia.'
  },
  {
    tahun: '1862',
    judul: 'Pindah ke Lokasi Baru',
    deskripsi: 'Pemerintah Hindia Belanda membangun gedung baru di Koningsplein West (kini Jalan Medan Merdeka Barat) untuk menampung koleksi yang semakin besar.'
  },
  {
    tahun: '1868',
    judul: 'Gedung Resmi Dibuka',
    deskripsi: 'Gedung museum baru secara resmi dibuka untuk umum. Inilah gedung yang masih berdiri hingga sekarang dan dikenal sebagai Gedung A Museum Nasional.'
  },
  {
    tahun: '1962',
    judul: 'Diserahkan ke Indonesia',
    deskripsi: 'Museum resmi diserahkan kepada pemerintah Indonesia dan berganti nama menjadi Museum Pusat, di bawah pengelolaan Departemen Pendidikan dan Kebudayaan.'
  },
  {
    tahun: '1979',
    judul: 'Museum Nasional Indonesia',
    deskripsi: 'Melalui Keputusan Menteri Pendidikan dan Kebudayaan, museum berganti nama resmi menjadi Museum Nasional Indonesia, status yang disandangnya hingga kini.'
  },
  {
    tahun: '2007',
    judul: 'Kebakaran & Pemulihan',
    deskripsi: 'Kebakaran melanda sebagian gedung dan menghanguskan sejumlah koleksi. Proses restorasi besar-besaran dilakukan dan gedung diperkuat dengan sayap modern.'
  },
  {
    tahun: '2023',
    judul: 'Era Baru',
    deskripsi: 'Pembaruan besar dilakukan pada sistem pameran dan infrastruktur digital. Museum Nasional kini hadir lebih modern sambil tetap menjaga nilai warisan budayanya.'
  }
]

const pendiri = [
  { inisial: 'JCM', nama: 'J.C.M. Radermacher', peran: 'Pendiri & donatur pertama yang menyumbangkan koleksi pribadi dan rumahnya' },
  { inisial: 'HS', nama: 'Herman von Siebold', peran: 'Dokter dan naturalis yang memperkaya koleksi etnografi dan ilmu alam' },
  { inisial: 'TSD', nama: 'Thomas S. Raffles', peran: 'Gubernur Jenderal yang mendukung pengembangan ilmu pengetahuan di Nusantara' }
]
</script>

<style scoped>
.sejarah-wrapper {
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
  font-size: 2.5rem;
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
  max-width: 600px;
  margin: 1.5rem auto 0;
  line-height: 1.8;
}

/* TIMELINE */
.timeline-section {
  padding: 2rem 0 5rem;
}

.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

/* DASHED CENTER LINE */
.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  bottom: 0;
  width: 2px;
  background: repeating-linear-gradient(
    to bottom,
    rgba(212, 175, 55, 0.55) 0px,
    rgba(212, 175, 55, 0.55) 8px,
    transparent 8px,
    transparent 16px
  );
  transform: translateX(-50%);
}

.timeline-item {
  display: flex;
  justify-content: flex-end;
  padding-right: calc(50% + 2.5rem);
  margin-bottom: 3rem;
  position: relative;
}

.timeline-item.right {
  justify-content: flex-start;
  padding-right: 0;
  padding-left: calc(50% + 2.5rem);
}

/* DOT WITH GLOW */
.timeline-dot {
  position: absolute;
  left: 50%;
  top: 1.2rem;
  width: 14px;
  height: 14px;
  background: var(--gold);
  border-radius: 50%;
  transform: translateX(-50%);
  flex-shrink: 0;
  box-shadow: 0 0 0 3px rgba(212, 175, 55, 0.15), 0 0 12px rgba(212, 175, 55, 0.4);
}

.timeline-content {
  background: var(--bg-card);
  border: 1px solid rgba(212, 175, 55, 0.15);
  padding: 1.5rem 1.75rem;
  max-width: 380px;
  transition: border-color 0.3s;
}

.timeline-content:hover {
  border-color: rgba(212, 175, 55, 0.45);
}

.timeline-year {
  color: #e8c84a;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.5rem;
}

.timeline-title {
  font-family: var(--font-serif);
  font-size: 1.2rem;
  font-weight: normal;
  color: #ffffff;
  margin-bottom: 0.75rem;
}

.timeline-desc {
  color: #cfc0b1;
  font-size: 0.9rem;
  line-height: 1.7;
  margin: 0;
}

/* TENTANG */
.tentang-section {
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  padding: 5rem 0;
}

.tentang-inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: start;
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

.tentang-para {
  color: #1a1a1a;
  line-height: 1.8;
  font-size: 0.95rem;
  margin-bottom: 1.2rem;
}

.tentang-para:last-child {
  margin-bottom: 0;
}

.tentang-visual {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.visual-box {
  background: var(--bg-card);
  border: 1px solid rgba(212, 175, 55, 0.15);
  padding: 1.75rem 2rem;
  transition: border-color 0.3s;
}

.visual-box:hover {
  border-color: rgba(212, 175, 55, 0.45);
}

.visual-year {
  font-family: var(--font-serif);
  font-size: 2.6rem;
  color: #e8c84a;
  font-weight: normal;
  display: block;
  margin-bottom: 0.4rem;
}

.visual-label {
  color: #cfc0b1;
  font-size: 0.87rem;
  line-height: 1.6;
  margin: 0;
}

/* PENDIRI */
.pendiri-section {
  border-top: 1px solid rgba(212, 175, 55, 0.1);
  padding: 5rem 0 0;
}

.pendiri-inner {
  max-width: 900px;
  margin: 0 auto;
}

.pendiri-intro {
  color: #1a1a1a;
  text-align: center;
  max-width: 700px;
  margin: 1.5rem auto 3rem;
  line-height: 1.8;
  font-size: 0.95rem;
}

.pendiri-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.pendiri-card {
  background: var(--bg-card);
  border: 1px solid rgba(212, 175, 55, 0.12);
  padding: 2rem 1.5rem;
  text-align: center;
  transition: border-color 0.3s;
}

.pendiri-card:hover {
  border-color: rgba(212, 175, 55, 0.45);
}

.pendiri-initial {
  width: 56px;
  height: 56px;
  border: 1px solid rgba(212, 175, 55, 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-serif);
  color: #e8c84a;
  font-size: 0.9rem;
  margin: 0 auto 1.2rem;
}

.pendiri-nama {
  font-family: var(--font-serif);
  font-size: 1.05rem;
  font-weight: normal;
  color: #ffffff;
  margin-bottom: 0.6rem;
}

.pendiri-peran {
  color: #cfc0b1;
  font-size: 0.87rem;
  line-height: 1.7;
  margin: 0;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .page-title { font-size: 2.4rem; }

  .timeline::before { left: 16px; }
  .timeline-item,
  .timeline-item.right {
    justify-content: flex-start;
    padding-left: 3rem;
    padding-right: 0;
  }
  .timeline-dot { left: 16px; }

  .tentang-inner { grid-template-columns: 1fr; gap: 3rem; }
  .section-title { font-size: 2rem; }
  .pendiri-grid { grid-template-columns: 1fr; }
}

</style>