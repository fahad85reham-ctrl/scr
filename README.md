<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="ALF2 — صفحة بحث مبني على Brave Search بتصميم نيون أحمر">
    <meta name="theme-color" content="#080000">
    <meta property="og:title" content="ALF2 • Brave Search">
    <meta property="og:description" content="صفحة بحث بتصميم نيون أحمر">
    <meta property="og:type" content="website">
    <title>ALF2 • Brave Search</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <main class="uiverse-title-pattern">
        <div class="bg-glow" aria-hidden="true"></div>
        <div class="bg-noise" aria-hidden="true"></div>
        <div class="dust-layer" aria-hidden="true"></div>
        <div class="doodle-layer" aria-hidden="true">
            <span class="doodle spark d1"></span>
            <span class="doodle scratch d2"></span>
            <span class="doodle dot d3"></span>
            <span class="doodle spark d4"></span>
        </div>
        <section class="title-stage" aria-label="ALF2 Brave Search">
            <div class="neon-line top-line" aria-hidden="true">
                <div class="neon-line-inner"></div>
            </div>
            <h1 class="main-title" aria-label="ALF2">
                <span class="letter" data-char="A" style="--d:0s;--x:-10px;--y:5px;--r:-3deg">A</span>
                <span class="letter" data-char="L" style="--d:.1s;--x:5px;--y:-5px;--r:2deg">L</span>
                <span class="letter" data-char="F" style="--d:.2s;--x:-5px;--y:8px;--r:-2deg">F</span>
                <span class="letter" data-char="2" style="--d:.3s;--x:8px;--y:-3px;--r:3deg">2</span>
            </h1>
            <div class="neon-line bottom-line" aria-hidden="true">
                <div class="neon-line-inner"></div>
            </div>
            <p class="caption">Search the web with Brave</p>
            <form class="search-form" role="search" action="https://search.brave.com/search" method="get">
                <span class="search-icon" aria-hidden="true">⌕</span>
                <input class="search-input" type="search" name="q" placeholder="اكتب ما تريد البحث عنه..." aria-label="حقل البحث" autocomplete="off" required>
                <button class="search-button" type="submit">بحث</button>
            </form>
            <p class="search-note">ستظهر نتائج البحث من Brave Search</p>
        </section>
    </main>
    <script src="script.js" defer></script>
</body>
</html> 