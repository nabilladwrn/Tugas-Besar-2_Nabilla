<template>
  <div class="bukutamu-page">
    <div class="page-header">
      <h2>Buku Tamu Pengunjung</h2>
      <p>Silakan isi testimoni Anda setelah berkunjung</p>
      <div class="gold-line"></div>
    </div>

    <div class="form-container">
      <form @submit.prevent="kirimPesan" class="museum-form">
        <div class="form-group">
          <label>Nama Lengkap</label>
          <input type="text" v-model="form.nama" required placeholder="Contoh: Budi Santoso" />
        </div>
        <div class="form-group">
          <label>Pesan & Kesan</label>
          <textarea v-model="form.pesan" required placeholder="Tuliskan pengalaman edukasimu..."></textarea>
        </div>
        <button type="submit" class="btn-submit">Kirim Testimoni</button>
      </form>
    </div>

    <div class="daftar-pesan">
      <h3>Ulasan Pengunjung</h3>
      <div v-if="daftarTamu.length === 0" class="no-message">Belum ada ulasan.</div>
      <div v-for="tamu in daftarTamu" :key="tamu.id" class="pesan-card">
        <h4>{{ tamu.nama }} <span class="tanggal">{{ tamu.tanggal }}</span></h4>
        <p>"{{ tamu.pesan }}"</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const form = ref({ nama: '', pesan: '' });
const daftarTamu = ref([]);

const ambilDataTamu = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/bukutamu');
    daftarTamu.value = await response.json();
  } catch (error) {
    console.error('Koneksi ke Node.js mati/gagal:', error);
  }
};

const kirimPesan = async () => {
  try {
    const response = await fetch('http://localhost:3000/api/bukutamu', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value)
    });

    if (response.ok) {
      form.value.nama = '';
      form.value.pesan = '';
      ambilDataTamu();
    }
  } catch (error) {
    alert("Gagal terhubung ke backend server Node.js!");
  }
};

onMounted(() => {
  ambilDataTamu();
});
</script>

<style scoped>
.bukutamu-page {
  max-width: 700px;
  margin: 3rem auto;
  padding: 0 2rem;
}

.page-header { text-align: center; margin-bottom: 2rem; }
.page-header h2 { font-size: 2.2rem; }
.page-header p { font-family: 'Segoe UI', sans-serif; color: #666; }
.gold-line { background-color: #c5a059; height: 2px; width: 60px; margin: 0.5rem auto 0 auto; }

.form-container {
  background: #fff;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 10px rgba(0,0,0,0.03);
  margin-bottom: 3rem;
}

.form-group {
  margin-bottom: 1.2rem;
  font-family: 'Segoe UI', sans-serif;
}

.form-group label {
  display: block;
  margin-bottom: 0.4rem;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ccc;
  font-family: inherit;
}

.btn-submit {
  background-color: #111a24;
  color: #c5a059;
  border: 1px solid #c5a059;
  padding: 0.8rem 1.5rem;
  cursor: pointer;
  font-weight: bold;
  letter-spacing: 1px;
  transition: all 0.3s ease;
}

.btn-submit:hover {
  background-color: #c5a059;
  color: #111a24;
}

.daftar-pesan h3 {
  border-bottom: 2px solid #111a24;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.pesan-card {
  background: #fff;
  padding: 1rem;
  margin-bottom: 1rem;
  border-left: 3px solid #c5a059;
  box-shadow: 0 2px 5px rgba(0,0,0,0.02);
}

.pesan-card h4 { font-size: 1.05rem; }
.tanggal { font-size: 0.8rem; color: #888; font-weight: normal; margin-left: 10px; }
.pesan-card p { font-family: 'Segoe UI', sans-serif; font-style: italic; color: #555; margin-top: 0.3rem; }
.no-message { font-family: 'Segoe UI', sans-serif; color: #999; }
</style>