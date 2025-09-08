document.getElementById("giziForm").addEventListener("submit", function(e){
  e.preventDefault();

  let bb = parseFloat(document.getElementById("bb").value);
  let tb = parseFloat(document.getElementById("tb").value)/100; 
  let lila = parseFloat(document.getElementById("lila").value);

  let bmi = bb / (tb*tb);
  let status = "";
  let rekom = "";
  let barColor = "bg-success";
  let boxColor = "#d4edda"; // default hijau muda

  if(lila < 23.5){
    status = "Berisiko Kekurangan Energi Kronis (KEK)";
    rekom = "🍗🥚 Perbanyak konsumsi makanan berprotein seperti ikan, telur, kacang-kacangan.";
    barColor = "bg-danger";
    boxColor = "#f8d7da"; // merah muda
  } else if(bmi < 18.5){
    status = "Berat badan kurang";
    rekom = "🥛🥑 Tambahkan asupan kalori sehat seperti nasi, roti gandum, alpukat, susu.";
    barColor = "bg-warning";
    boxColor = "#fff3cd"; // kuning muda
  } else if(bmi >= 18.5 && bmi < 24.9){
    status = "Status gizi normal";
    rekom = "🥦🍎 Pertahankan pola makan seimbang: sayur, buah, protein, dan cairan cukup.";
    barColor = "bg-success";
    boxColor = "#d4edda"; // hijau muda
  } else if(bmi >= 25){
    status = "Kelebihan berat badan";
    rekom = "🥗🚶 Kurangi makanan manis/berlemak, lebihkan sayur dan aktivitas fisik ringan.";
    barColor = "bg-danger";
    boxColor = "#f8d7da"; // merah muda
  }

  // tampilkan hasil
  document.getElementById("bmiResult").innerText = "BMI: " + bmi.toFixed(2);
  document.getElementById("statusResult").innerText = "Status Gizi: " + status;
  document.getElementById("result").classList.remove("d-none");

  // update progress bar
  let bmiPercent = Math.min((bmi/40)*100, 100);
  let bmiBar = document.getElementById("bmiBar");
  bmiBar.style.width = bmiPercent + "%";
  bmiBar.className = "progress-bar " + barColor;
  bmiBar.innerText = bmi.toFixed(1);

  // ubah warna box sesuai status
  document.getElementById("result").style.backgroundColor = boxColor;

  // rekomendasi
  document.getElementById("rekomendasiResult").innerText = rekom;
});