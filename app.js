// Fungsi untuk menampilkan surat dengan pilihan "Ya" atau "Tidak"
function showMessage() {
    document.getElementById("letter").style.display = "block";
    document.getElementById("letter").classList.add("show-letter");
    document.getElementById("blur").style.display = "block"; // Tampilkan blur background

    var audio = document.getElementById('bg-audio');
    audio.play();
}

// Fungsi ketika memilih "Ya"
function showLoveMessage() {
    const letter = document.getElementById("letter");
    letter.innerHTML = `<div class='letter-content'>
        <p>Semoga kita bisa menjadi lebih dekat dan lebih baik. Semoga hubungan kita akan lama, dan kita dapat terus saling mendukung dalam setiap langkah yang kita ambil. Aku berharap perjalanan kita bersama ini bisa menjadi cerita yang indah dan penuh kenangan yang tak terlupakan. Dengan setiap tawa, setiap pembicaraan, dan setiap perasaan yang kita bagi, aku merasa lebih yakin bahwa kita bisa menghadapinya bersama.</p>
        <p>Jangan pernah ragu,Ya Nikoooo. Kita akan melewati semua tantangan, baik besar maupun kecil, dengan cinta yang tulus dan kesabaran yang tak terbatas. Aku percaya dengan setiap waktu yang kita habiskan bersama, kita akan tumbuh lebih kuat. Semoga hubungan ini bukan hanya tentang kebahagiaan saat ini, tetapi juga tentang komitmen dan perjuangan untuk masa depan yang lebih baik. Aku tak sabar untuk melihat apa yang akan datang, bersama kamu. Semoga kita terus menjadi pribadi yang lebih baik dan tidak pernah berhenti menghargai satu sama lain.</p>
        <p>WA aku segera dan katakan 'Aku mau'.</p>
        <div class="buttons">
            <a href="https://wa.me/6285117162287?text=MASS%20Ayiff,%20mau" class="yes">Kirim WA</a>
        </div>
    </div>`;
    letter.classList.add("open-letter");

    // Confetti hearts
    const confetti = document.getElementById('confetti');
    for (let i = 0; i < 30; i++) {
        const heart = document.createElement('div');
        heart.className = 'confetti-heart';
        heart.innerText = '💖';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.fontSize = (Math.random() * 20 + 20) + 'px';
        heart.style.color = ['#ff5eaa', '#ff7e5f', '#feb47b', '#ffb6b9', '#f67280'][Math.floor(Math.random()*5)];
        confetti.appendChild(heart);
        setTimeout(() => heart.remove(), 1500);
    }

    // Sparkle burst
    for (let i = 0; i < 15; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.innerText = '✨';
        sparkle.style.left = (50 + Math.random() * 30 - 15) + '%';
        sparkle.style.top = (50 + Math.random() * 30 - 15) + '%';
        sparkle.style.fontSize = (Math.random() * 18 + 12) + 'px';
        document.body.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 1200);
    }
}

// Fungsi untuk mengacak posisi tombol "Tidak"
function moveButton() {
    const button = document.querySelector('.no');
    button.style.position = 'absolute';
    button.style.top = Math.random() * 80 + '%';
    button.style.left = Math.random() * 80 + '%';
}

function createLove() {
    const loveBg = document.querySelector('.love-bg');
    const love = document.createElement('div');
    love.className = 'love-float';
    love.innerText = ['❤️','💖','💕','💗','💘','💝'][Math.floor(Math.random()*6)];
    love.style.left = Math.random() * 100 + 'vw';
    love.style.fontSize = (Math.random() * 32 + 24) + 'px';
    love.style.animationDuration = (Math.random() * 2 + 4) + 's';
    love.style.color = ['#ff5eaa', '#ff7e5f', '#feb47b', '#ffb6b9', '#f67280', '#fff', '#e75480'][Math.floor(Math.random()*7)];
    loveBg.appendChild(love);
    setTimeout(() => love.remove(), 7000);
}
setInterval(createLove, 350);

function showFinalQuestion() {
    const letter = document.getElementById("letter");
    letter.innerHTML = `
        <div class='letter-content'>
            <p>Do you want to be my boyfriend Nikoo?</p>
            <div class="buttons">
                <button class="yes" onclick="showLoveMessage()">Ya</button>
                <button class="no" onclick="moveButton()">Tidak</button>
            </div>
        </div>
    `;
}
