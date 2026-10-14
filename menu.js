
document.addEventListener("DOMContentLoaded", function () {
  const header = document.getElementById("common-header");
  if (!header) return;

  header.innerHTML = `
    <div style="background:white; padding:12px 5%; display:flex; align-items:center; justify-content:space-between; gap:20px; flex-wrap:wrap;">

      <a href="index.html" style="display:block;">
        <img src="新ホームページ用.png"
             alt="福岡進学塾"
             style="width:350px; max-width:100%; display:block;">
      </a>

      <div style="font-size:28px; font-weight:bold; color:#124b91; text-align:center;">
        那珂川校　｜　春日校
      </div>

      <a href="https://www.instagram.com/fukuokashingakujuku_official/" target="_blank" rel="noopener noreferrer" style="border:2px solid #ff9bc8; border-radius:20px; padding:12px 22px; text-align:center; background:#f4f8ff; color:#124b91; transition:transform 0.3s, box-shadow 0.3s; text-decoration:none; cursor:pointer; transition:transform 0.3s, box-shadow 0.3s;" onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 10px 24px rgba(255,80,150,0.25)'" onmouseout="this.style.transform=''; this.style.boxShadow=''">
        <div style="font-size:19px; font-weight:bold; color:#ff3485;">
          塾内の様子をInstagramでチェック♪
        </div>
        <div style="font-size:18px; font-weight:bold; margin-top:6px;">
          <span style="display:inline-flex; align-items:center; gap:12px;">
  <svg width="40" height="40" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-label="Instagram">
    <defs>
      <linearGradient id="instaGradient" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stop-color="#ffcb42"/>
        <stop offset="45%" stop-color="#fa315f"/>
        <stop offset="100%" stop-color="#8646c8"/>
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="60" height="60" rx="17" fill="url(#instaGradient)"/>
    <rect x="15" y="15" width="34" height="34" rx="10" fill="none" stroke="white" stroke-width="4"/>
    <circle cx="32" cy="32" r="9" fill="none" stroke="white" stroke-width="4"/>
    <circle cx="44" cy="20" r="3" fill="white"/>
  </svg>
  タップしてみてね！
</span>
        </div>
      </div>

    </a>

    <nav style="position:sticky; top:0; z-index:1000; background:#1c508f; padding:20px 12px; display:flex; justify-content:center; align-items:center; gap:28px; flex-wrap:wrap;">
      <a href="index.html">ホーム</a>
      <a href="index.html#news">新着情報</a>
      <a href="index.html#course">学びのご案内</a>
      <a href="index.html#school">校舎案内</a>
      <a href="index.html#contact">お問い合わせ</a>
    </nav>
  `;

  header.querySelectorAll("nav a").forEach(function (link) {
    link.style.color = "white";
    link.style.textDecoration = "none";
    link.style.fontWeight = "bold";
    link.style.fontSize = "17px";
  });
});
