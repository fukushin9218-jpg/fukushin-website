document.addEventListener("DOMContentLoaded", function () {

  const header = document.getElementById("common-header");
  if (!header) return;

  const style = document.createElement("style");

  style.textContent = `
    .fsj-header {
      font-family: "Noto Sans JP", sans-serif;
    }

    .fsj-header-top {
      background: white;
      padding: 12px 5%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;
    }

    .fsj-logo {
      display: block;
    }

    .fsj-logo img {
      width: 350px;
      max-width: 100%;
      display: block;
    }

    .fsj-schools {
      font-size: 28px;
      font-weight: bold;
      color: #124b91;
      text-align: center;
    }

    .fsj-instagram {
      border: 2px solid #ff9bc8;
      border-radius: 20px;
      padding: 12px 22px;
      text-align: center;
      background: #f4f8ff;
      color: #124b91;
      text-decoration: none;
      cursor: pointer;
      transition: transform 0.25s ease;
    }

    .fsj-instagram:hover {
      transform: translateY(-4px);
    }

    .fsj-instagram-title {
      font-size: 19px;
      font-weight: bold;
      color: #ff3485;
    }

    .fsj-instagram-bottom {
      font-size: 18px;
      font-weight: bold;
      margin-top: 6px;
    }

    .fsj-instagram-inner {
      display: inline-flex;
      align-items: center;
      gap: 12px;
    }

    /* 上部メニュー全体 */

    .fsj-nav {
      background: #1c508f;
      padding: 16px 15px;
      position: relative;
      z-index: 1000;
    }

    .fsj-nav-inner {
      max-width: 1450px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 12px;
    }

    /* メニューの文字 */

    .fsj-nav-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;

      color: white !important;
      text-decoration: none !important;

      font-size: 16px;
      font-weight: 800;

      padding: 10px 9px;

      background: transparent !important;
      border: none !important;
      border-radius: 0 !important;
      box-shadow: none !important;

      white-space: nowrap;

      transition:
        transform 0.25s ease,
        color 0.25s ease,
        text-shadow 0.25s ease;
    }

    /* マウスを重ねると文字だけ浮き上がる */

    .fsj-nav-link:hover {
      transform: translateY(-5px);
      color: #ffffff !important;
      text-shadow: 0 2px 8px rgba(255,255,255,0.35);
      background: transparent !important;
    }

    /* 現在のページも背景色は変更しない */

    .fsj-nav-link.active {
      background: transparent !important;
      color: white !important;
    }

    .fsj-nav-link:focus-visible,
    .fsj-menu-toggle:focus-visible {
      outline: 2px solid #ffffff;
      outline-offset: 3px;
    }

    /* スマートフォン用 */

    .fsj-menu-toggle {
      display: none;
      width: 100%;
      padding: 12px 18px;

      background: transparent;
      color: white;

      border: 1px solid rgba(255,255,255,0.45);
      border-radius: 8px;

      font-family: inherit;
      font-size: 17px;
      font-weight: 800;

      cursor: pointer;
    }

    @media (max-width: 1100px) {

      .fsj-header-top {
        justify-content: center;
      }

      .fsj-nav-inner {
        gap: 7px;
      }

      .fsj-nav-link {
        font-size: 14px;
        padding: 9px 7px;
      }

    }

    @media (max-width: 700px) {

      .fsj-header-top {
        padding: 15px;
        gap: 15px;
        flex-direction: column;
      }

      .fsj-logo img {
        width: 290px;
      }

      .fsj-schools {
        font-size: 21px;
      }

      .fsj-instagram {
        padding: 10px 15px;
        width: 100%;
        max-width: 390px;
      }

      .fsj-instagram-title {
        font-size: 15px;
      }

      .fsj-instagram-bottom {
        font-size: 15px;
      }

      .fsj-nav {
        padding: 10px 15px;
      }

      .fsj-menu-toggle {
        display: block;
      }

      .fsj-nav-inner {
        display: none;
        flex-direction: column;
        align-items: stretch;
        gap: 0;
        padding-top: 10px;
      }

      .fsj-nav-inner.open {
        display: flex;
      }

      .fsj-nav-link {
        display: block;
        width: 100%;

        text-align: center;
        font-size: 16px;

        padding: 14px 10px;

        background: transparent !important;
        border-bottom: 1px solid rgba(255,255,255,0.16) !important;
      }

      .fsj-nav-link:hover {
        transform: translateY(-3px);
      }

    }

    @media (prefers-reduced-motion: reduce) {

      .fsj-nav-link,
      .fsj-instagram {
        transition: none;
      }

      .fsj-nav-link:hover,
      .fsj-instagram:hover {
        transform: none;
      }

    }
  `;

  document.head.appendChild(style);

  header.innerHTML = `

    <div class="fsj-header">

      <div class="fsj-header-top">

        <a href="index.html" class="fsj-logo">

          <img
            src="新ホームページ用.png"
            alt="福岡進学塾"
          >

        </a>

        <div class="fsj-schools">
          那珂川校　｜　春日校
        </div>

        <a
          class="fsj-instagram"
          href="https://www.instagram.com/fukuokashingakujuku_official/"
          target="_blank"
          rel="noopener noreferrer"
        >

          <div class="fsj-instagram-title">
            塾内の様子をInstagramでチェック♪
          </div>

          <div class="fsj-instagram-bottom">

            <span class="fsj-instagram-inner">

              <svg
                width="40"
                height="40"
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
                aria-label="Instagram"
              >

                <defs>

                  <linearGradient
                    id="instaGradient"
                    x1="0"
                    y1="1"
                    x2="1"
                    y2="0"
                  >

                    <stop offset="0%" stop-color="#ffcb42"/>
                    <stop offset="45%" stop-color="#fa315f"/>
                    <stop offset="100%" stop-color="#8646c8"/>

                  </linearGradient>

                </defs>

                <rect
                  x="2"
                  y="2"
                  width="60"
                  height="60"
                  rx="17"
                  fill="url(#instaGradient)"
                />

                <rect
                  x="15"
                  y="15"
                  width="34"
                  height="34"
                  rx="10"
                  fill="none"
                  stroke="white"
                  stroke-width="4"
                />

                <circle
                  cx="32"
                  cy="32"
                  r="9"
                  fill="none"
                  stroke="white"
                  stroke-width="4"
                />

                <circle
                  cx="44"
                  cy="20"
                  r="3"
                  fill="white"
                />

              </svg>

              タップしてみてね！

            </span>

          </div>

        </a>

      </div>

      <nav class="fsj-nav" aria-label="メインメニュー">

        <button
          class="fsj-menu-toggle"
          type="button"
          aria-expanded="false"
          aria-controls="fsj-nav-links"
        >
          ☰ メニュー
        </button>

        <div class="fsj-nav-inner" id="fsj-nav-links">

          <a class="fsj-nav-link" href="index.html">
            ホーム
          </a>

          <a class="fsj-nav-link" href="index.html#news">
            新着情報
          </a>

          <a class="fsj-nav-link" href="index.html#course">
            学びのご案内
          </a>

          <a class="fsj-nav-link" href="special.html">
            季節講習・特別講座
          </a>

          <a class="fsj-nav-link" href="index.html#support">
            保護者の安心
          </a>

          <a class="fsj-nav-link" href="index.html#school">
            校舎案内
          </a>

          <a class="fsj-nav-link" href="index.html#contact">
            お問い合わせ
          </a>

          <a class="fsj-nav-link" href="students.html">
            塾生専用
          </a>

        </div>

      </nav>

    </div>
  `;

  // スマホメニューの開閉

  const toggle = header.querySelector(".fsj-menu-toggle");
  const navLinks = header.querySelector(".fsj-nav-inner");

  toggle.addEventListener("click", function () {

    const isOpen = navLinks.classList.toggle("open");

    toggle.setAttribute("aria-expanded", String(isOpen));

    toggle.textContent = isOpen
      ? "✕ メニューを閉じる"
      : "☰ メニュー";

  });

  // メニュー選択後は閉じる

  header.querySelectorAll(".fsj-nav-link").forEach(function (link) {

    link.addEventListener("click", function () {

      navLinks.classList.remove("open");

      toggle.setAttribute("aria-expanded", "false");

      toggle.textContent = "☰ メニュー";

    });

  });

});
