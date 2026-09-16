// ⚠️ استبدل الرابط أدناه برابط استضافة البوت الحقيقي (Render / Discloud / Bot-Hosting) الذي يشغل الـ API
const API_URL = "https://your-bot-hosting-url.com/api/status";

async function fetchBotStatus() {
    const statusEl = document.getElementById('bot-status');
    const nameEl = document.getElementById('bot-name');
    const pingEl = document.getElementById('bot-ping');
    const guildsEl = document.getElementById('bot-guilds');

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.status === 'Online') {
            statusEl.innerText = "متصل 🟢";
            statusEl.className = "online";
        } else {
            statusEl.innerText = "غير متصل 🔴";
            statusEl.className = "offline";
        }

        nameEl.innerText = data.botName;
        pingEl.innerText = data.ping + " ms";
        guildsEl.innerText = data.guildsCount;

    } catch (error) {
        statusEl.innerText = "فشل الاتصال بالخادم ❌";
        statusEl.className = "offline";
        nameEl.innerText = "---";
        pingEl.innerText = "---";
        guildsEl.innerText = "---";
    }
}

// تشغيل الفحص فور فتح الموقع وتحديثه تلقائياً كل 10 ثوانٍ
fetchBotStatus();
setInterval(fetchBotStatus, 10000);
