<div align="center">

**TUGAS JURNAL**  
**KONSTRUKSI PERANGKAT LUNAK**

**MODUL X**  
**AUTOMATA & TABLE-DRIVEN CONSTRUCTION**

<img src="https://github.com/user-attachments/assets/637271ab-0240-4561-a7a6-04cb1169f636" alt="Logo Vertikal Telkom University" width="350"/>

Disusun Oleh :

**Danuar Ihza Mahendra (2211104084)**  
**SE06-03**

Asisten Praktikum :  
Vaninside
rizqiiirz

Dosen Pengampu :  
riyandwwi

PROGRAM STUDI S1 REKAYASA PERANGKAT LUNAK  
FAKULTAS DIREKTORAT KAMPUS PURWOKERTO  
TELKOM UNIVERSITY PURWOKERTO  
2024

</div>

---

# TUGAS JURNAL

# SOAL

- matematikaLibraries.js
```
const MatematikaLibraries = {
  FPB: function(a, b) {
    while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
    }
    return Math.abs(a);
  },

  KPK: function(a, b) {
    return Math.abs(a * b) / this.FPB(a, b);
  },

  Turunan: function(coefficients) {
    const result = [];

    for (let i = 0; i < coefficients.length - 1; i++) {
      const pangkat = coefficients.length - 1 - i;
      const turunan = coefficients[i] * pangkat;
      if (turunan === 0) continue;

      let term = `${turunan}`;
      if (pangkat - 1 === 1) term += 'x';
      else if (pangkat - 1 > 1) term += `x^${pangkat - 1}`;
      result.push(term);
    }

    return result.join(' + ');
  },

  Integral: function(coefficients) {
    const result = [];

    for (let i = 0; i < coefficients.length; i++) {
      const pangkat = coefficients.length - i;
      const integral = coefficients[i] / pangkat;
      let term = `${integral}`;
      if (pangkat === 1) term += 'x';
      else term += `x^${pangkat}`;
      result.push(term);
    }

    result.push('C');
    return result.join(' + ');
  }
};

module.exports = MatematikaLibraries;
```

- main.js
```
const MathLib = require('./matematikaLibraries');

console.log("FPB dari 60 dan 45:", MathLib.FPB(60, 45));         
console.log("KPK dari 12 dan 8:", MathLib.KPK(12, 8));           

const koefTurunan = [1, 4, -12, 9]; 
console.log("Turunan:", MathLib.Turunan(koefTurunan));           

const koefIntegral = [1, 4, -12, 9]; 
console.log("Integral:", MathLib.Integral(koefIntegral));                    
```

- Output<br>
![image](https://github.com/user-attachments/assets/bb56c7b5-1098-40cb-9a26-b3123cf7959d)


