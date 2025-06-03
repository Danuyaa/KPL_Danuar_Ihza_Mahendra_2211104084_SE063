window.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('angkaInput');
  const btn = document.getElementById('cekTandaBtn');
  const output = document.getElementById('output');

  btn.addEventListener('click', () => {
    const nilai = Number(input.value);

    if (isNaN(nilai)) {
      output.textContent = 'Hasil: Masukkan angka yang valid';
      return;
    }

    if (nilai > 0) {
      output.textContent = 'Hasil: Positif';
    } else if (nilai < 0) {
      output.textContent = 'Hasil: Negatif';
    } else {
      output.textContent = 'Hasil: Nol';
    }
  });
});
