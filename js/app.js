// ===== 世界杯2026 数据 =====
const WORLD_CUP_START = new Date('2026-06-11T00:00:00').getTime();

// 模拟104场比赛数据
const matches = [
    { id: 1, teamA: '巴西', teamB: '阿根廷', flagA: '🇧🇷', flagB: '🇦🇷', stage: '小组赛', time: '2026-06-12 20:00', pool: 1250000, odds: { win: 2.5, draw: 3.2, lose: 2.8 }, weight: 8.5, status: 'upcoming' },
    { id: 2, teamA: '德国', teamB: '法国', flagA: '🇩🇪', flagB: '🇫🇷', stage: '小组赛', time: '2026-06-13 18:00', pool: 980000, odds: { win: 2.3, draw: 3.0, lose: 3.1 }, weight: 7.8, status: 'upcoming' },
    { id: 3, teamA: '西班牙', teamB: '葡萄牙', flagA: '🇪🇸', flagB: '🇵🇹', stage: '小组赛', time: '2026-06-14 22:00', pool: 850000, odds: { win: 2.1, draw: 3.4, lose: 3.2 }, weight: 7.2, status: 'upcoming' },
    { id: 4, teamA: '英格兰', teamB: '意大利', flagA: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', flagB: '🇮🇹', stage: '小组赛', time: '2026-06-15 20:00', pool: 720000, odds: { win: 2.4, draw: 3.1, lose: 2.9 }, weight: 6.5, status: 'upcoming' },
    { id: 5, teamA: '荷兰', teamB: '比利时', flagA: '🇳🇱', flagB: '🇧🇪', stage: '小组赛', time: '2026-06-16 18:00', pool: 650000, odds: { win: 2.2, draw: 3.3, lose: 3.0 }, weight: 6.0, status: 'upcoming' },
    { id: 6, teamA: '乌拉圭', teamB: '哥伦比亚', flagA: '🇺🇾', flagB: '🇨🇴', stage: '小组赛', time: '2026-06-17 20:00', pool: 480000, odds: { win: 2.6, draw: 3.0, lose: 2.7 }, weight: 5.2, status: 'upcoming' },
    { id: 7, teamA: '墨西哥', teamB: '美国', flagA: '🇲🇽', flagB: '🇺🇸', stage: '小组赛', time: '2026-06-18 22:00', pool: 520000, odds: { win: 2.4, draw: 3.2, lose: 2.8 }, weight: 5.5, status: 'upcoming' },
    { id: 8, teamA: '日本', teamB: '韩国', flagA: '🇯🇵', flagB: '🇰🇷', stage: '小组赛', time: '2026-06-19 18:00', pool: 380000, odds: { win: 2.8, draw: 3.1, lose: 2.5 }, weight: 4.8, status: 'upcoming' },
];

// 生成更多比赛数据
function generateMatches() {
    const teams = [
        ['卡塔尔', '🇶🇦'], ['厄瓜多尔', '🇪🇨'], ['塞内加尔', '🇸🇳'], ['荷兰', '🇳🇱'],
        ['英格兰', '🏴󠁧󠁢󠁥󠁮󠁧󠁿'], ['伊朗', '🇮🇷'], ['美国', '🇺🇸'], ['威尔士', '🏴󠁧󠁢󠁷󠁬󠁳󠁿'],
        ['阿根廷', '🇦🇷'], ['沙特', '🇸🇦'], ['墨西哥', '🇲🇽'], ['波兰', '🇵🇱'],
        ['法国', '🇫🇷'], ['澳大利亚', '🇦🇺'], ['丹麦', '🇩🇰'], ['突尼斯', '🇹🇳'],
        ['西班牙', '🇪🇸'], ['德国', '🇩🇪'], ['日本', '🇯🇵'], ['哥斯达黎加', '🇨🇷'],
        ['比利时', '🇧🇪'], ['加拿大', '🇨🇦'], ['摩洛哥', '🇲🇦'], ['克罗地亚', '🇭🇷'],
        ['巴西', '🇧🇷'], ['塞尔维亚', '🇷🇸'], ['瑞士', '🇨🇭'], ['喀麦隆', '🇨🇲'],
        ['葡萄牙', '🇵🇹'], ['加纳', '🇬🇭'], ['乌拉圭', '🇺🇾'], ['韩国', '🇰🇷']
    ];
    
    const stages = ['小组赛', '16强', '8强', '半决赛', '决赛'];
    
    for (let i = 9; i <= 104; i++) {
        const team1 = teams[Math.floor(Math.random() * teams.length)];
        let team2 = teams[Math.floor(Math.random() * teams.length)];
        while (team1 === team2) {
            team2 = teams[Math.floor(Math.random() * teams.length)];
        }
        
        const stage = stages[Math.floor(Math.random() * stages.length)];
        const pool = Math.floor(Math.random() * 1000000) + 100000;
        const weight = (Math.random() * 8 + 2).toFixed(1);
        
        matches.push({
            id: i,
            teamA: team1[0],
            teamB: team2[0],
            flagA: team1[1],
            flagB: team2[1],
            stage: stage,
            time: `2026-06-${11 + Math.floor(i / 4)} ${Math.floor(Math.random() * 8 + 18)}:00`,
            pool: pool,
            odds: {
                win: (Math.random() * 2 + 1.5).toFixed(1),
                draw: (Math.random() * 1.5 + 2.5).toFixed(1),
                lose: (Math.random() * 2 + 1.5).toFixed(1)
            },
            weight: parseFloat(weight),
            status: 'upcoming'
        });
    }
}

generateMatches();

// ===== 倒计时 =====
function updateCountdown() {
    const now = new Date().getTime();
    const distance = WORLD_CUP_START - now;
    
    if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// ===== 渲染比赛卡片 =====
function renderMatches(filter = 'all') {
    const grid = document.getElementById('matchesGrid');
    grid.innerHTML = '';
    
    const filtered = filter === 'all' ? matches : matches.filter(m => m.status === filter);
    
    filtered.slice(0, 12).forEach(match => {
        const card = document.createElement('div');
        card.className = 'match-card';
        card.innerHTML = `
            <div class="match-header">
                <span class="match-stage">${match.stage}</span>
                <span class="match-time">${match.time}</span>
            </div>
            <div class="match-teams-row">
                <div class="team-info">
                    <div class="team-flag">${match.flagA}</div>
                    <div class="team-name">${match.teamA}</div>
                </div>
                <div class="match-vs-divider">VS</div>
                <div class="team-info">
                    <div class="team-flag">${match.flagB}</div>
                    <div class="team-name">${match.teamB}</div>
                </div>
            </div>
            <div class="match-pool">
                <div class="pool-label">预测奖池</div>
                <div class="pool-value">$${match.pool.toLocaleString()}</div>
            </div>
            <div class="match-odds">
                <button class="odds-btn" onclick="openPredictModal(${match.id}, 'win')">
                    <span>主胜</span>
                    <span class="odds-value">${match.odds.win}x</span>
                </button>
                <button class="odds-btn" onclick="openPredictModal(${match.id}, 'draw')">
                    <span>平局</span>
                    <span class="odds-value">${match.odds.draw}x</span>
                </button>
                <button class="odds-btn" onclick="openPredictModal(${match.id}, 'lose')">
                    <span>客胜</span>
                    <span class="odds-value">${match.odds.lose}x</span>
                </button>
            </div>
            <div class="match-weight">
                <span class="weight-label">热度权重</span>
                <div class="weight-bar">
                    <div class="weight-fill" style="width: ${match.weight * 10}%"></div>
                </div>
                <span class="weight-value">${match.weight}x</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

renderMatches();

// ===== 筛选功能 =====
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderMatches(btn.dataset.filter);
    });
});

// ===== 预测弹窗 =====
let currentMatch = null;
let currentPrediction = null;

function openPredictModal(matchId, result) {
    currentMatch = matches.find(m => m.id === matchId);
    currentPrediction = result;
    
    if (!currentMatch) return;
    
    document.getElementById('teamA').querySelector('.team-flag').textContent = currentMatch.flagA;
    document.getElementById('teamA').querySelector('.team-name').textContent = currentMatch.teamA;
    document.getElementById('teamB').querySelector('.team-flag').textContent = currentMatch.flagB;
    document.getElementById('teamB').querySelector('.team-name').textContent = currentMatch.teamB;
    
    document.getElementById('oddsWin').textContent = currentMatch.odds.win + 'x';
    document.getElementById('oddsDraw').textContent = currentMatch.odds.draw + 'x';
    document.getElementById('oddsLose').textContent = currentMatch.odds.lose + 'x';
    
    document.querySelectorAll('.predict-btn').forEach(btn => {
        btn.classList.remove('selected');
        if (btn.dataset.result === result) {
            btn.classList.add('selected');
        }
    });
    
    document.getElementById('predictModal').classList.add('active');
}

function closeModal() {
    document.getElementById('predictModal').classList.remove('active');
}

document.querySelectorAll('.predict-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.predict-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        currentPrediction = btn.dataset.result;
    });
});

function submitPrediction() {
    const amount = document.getElementById('predictAmount').value;
    if (!amount || amount <= 0) {
        alert('请输入预测金额');
        return;
    }
    
    alert(`预测成功！\n${currentMatch.teamA} VS ${currentMatch.teamB}\n预测: ${currentPrediction === 'win' ? '主胜' : currentPrediction === 'draw' ? '平局' : '客胜'}\n金额: $${amount}`);
    closeModal();
}

// ===== 质押功能 =====
function lockTokens() {
    const amount = document.getElementById('lockAmount').value;
    const period = document.getElementById('lockPeriod').value;
    
    if (!amount || amount <= 0) {
        alert('请输入质押数量');
        return;
    }
    
    const weights = { 8: 5, 15: 4, 25: 3, 35: 2, 40: 1 };
    const weight = weights[period];
    
    alert(`质押成功！\n数量: ${amount}\n时长: ${period}天\n权重: ${weight}x`);
}

// ===== 钱包连接 =====
document.getElementById('connectWallet').addEventListener('click', async () => {
    if (typeof window.ethereum !== 'undefined') {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const address = accounts[0];
            document.getElementById('connectWallet').innerHTML = `
                <i class="fas fa-wallet"></i>
                <span>${address.slice(0, 6)}...${address.slice(-4)}</span>
            `;
        } catch (error) {
            console.error('Wallet connection failed:', error);
            alert('钱包连接失败');
        }
    } else {
        alert('请安装 MetaMask 或其他 Web3 钱包');
    }
});

// ===== 模拟数据更新 =====
function updateStats() {
    const totalPool = matches.reduce((sum, m) => sum + m.pool, 0);
    document.getElementById('totalPool').textContent = '$' + (totalPool / 1000000).toFixed(1) + 'M';
    document.getElementById('championPool').textContent = '$' + (totalPool * 0.3 / 1000000).toFixed(1) + 'M';
    document.getElementById('participantCount').textContent = Math.floor(Math.random() * 50000 + 10000).toLocaleString();
    document.getElementById('lockAmount').textContent = '$' + (Math.random() * 5 + 1).toFixed(1) + 'M';
    
    document.getElementById('totalVolume').textContent = '$' + (Math.random() * 50 + 10).toFixed(1) + 'M';
    document.getElementById('burnedTokens').textContent = (Math.random() * 1000000 + 500000).toFixed(0).toLocaleString();
    document.getElementById('activePredictions').textContent = Math.floor(Math.random() * 10000 + 5000).toLocaleString();
    document.getElementById('avgLockTime').textContent = Math.floor(Math.random() * 20 + 10) + '天';
}

updateStats();
setInterval(updateStats, 30000);

// ===== 导航滚动 =====
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
            document.querySelectorAll('.nav-links a').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// ===== 滚动动画 =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.match-card, .token-card, .dash-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(el);
});
