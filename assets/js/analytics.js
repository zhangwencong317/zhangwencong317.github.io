// ============================================
// 访问统计系统
// ============================================

// 使用 localStorage 存储统计数据（客户端存储）
// 注意：这是客户端统计，实际数据会因用户清除缓存而重置
// 如需服务器端统计，建议使用 Google Analytics 或其他专业服务

class WebsiteAnalytics {
    constructor() {
        this.storageKey = 'website_stats';
        this.init();
    }

    init() {
        // 初始化统计数据
        this.stats = this.loadStats();
        
        // 记录页面访问
        this.recordPageView();
        
        // 更新显示
        this.updateDisplay();
        
        // 监听下载事件
        this.trackDownloads();
        
        // 监听链接点击
        this.trackLinkClicks();
        
        // 监听论文查看
        this.trackPaperViews();
    }

    loadStats() {
        const stored = localStorage.getItem(this.storageKey);
        if (stored) {
            return JSON.parse(stored);
        }
        return {
            pageViews: 0,
            downloads: 0,
            linkClicks: 0,
            paperViews: 0,
            lastUpdate: new Date().toISOString()
        };
    }

    saveStats() {
        this.stats.lastUpdate = new Date().toISOString();
        localStorage.setItem(this.storageKey, JSON.stringify(this.stats));
        this.updateDisplay();
    }

    recordPageView() {
        // 检查是否今天已经访问过（避免刷新重复计数）
        const today = new Date().toDateString();
        const lastVisit = localStorage.getItem('last_visit_date');
        
        if (lastVisit !== today) {
            this.stats.pageViews++;
            localStorage.setItem('last_visit_date', today);
            this.saveStats();
        }
    }

    trackDownloads() {
        // 跟踪简历下载
        const resumeLink = document.querySelector('a[href*="resume.pdf"]');
        if (resumeLink) {
            resumeLink.addEventListener('click', () => {
                this.stats.downloads++;
                this.saveStats();
                // 发送到 Google Analytics（如果已配置）
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'download', {
                        'event_category': 'Resume',
                        'event_label': 'PDF Download'
                    });
                }
            });
        }
    }

    trackLinkClicks() {
        // 跟踪所有外部链接点击
        const externalLinks = document.querySelectorAll('a[target="_blank"], a[href^="http"]');
        externalLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.stats.linkClicks++;
                this.saveStats();
                
                // 发送到 Google Analytics（如果已配置）
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'click', {
                        'event_category': 'External Link',
                        'event_label': link.href
                    });
                }
            });
        });
    }

    trackPaperViews() {
        // 跟踪论文链接点击（PDF、webpage、arXiv等）
        const paperLinks = document.querySelectorAll('.pub-link');
        paperLinks.forEach(link => {
            link.addEventListener('click', () => {
                this.stats.paperViews++;
                this.saveStats();
                
                // 发送到 Google Analytics（如果已配置）
                if (typeof gtag !== 'undefined') {
                    gtag('event', 'view', {
                        'event_category': 'Paper',
                        'event_label': link.textContent.trim()
                    });
                }
            });
        });

        // 跟踪 abstract 和 bibtex 查看
        const abstractLinks = document.querySelectorAll('.pub-link');
        abstractLinks.forEach(link => {
            if (link.textContent.toLowerCase().includes('abstract') || 
                link.textContent.toLowerCase().includes('bibtex')) {
                link.addEventListener('click', () => {
                    this.stats.paperViews++;
                    this.saveStats();
                });
            }
        });
    }

    updateDisplay() {
        // 统计数据仅在后台记录，不在页面上显示
        // 可以通过浏览器控制台使用 websiteAnalytics.getStats() 查看
    }

    formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'K';
        }
        return num.toString();
    }

    // 获取统计数据（供外部调用）
    getStats() {
        return this.stats;
    }

    // 重置统计数据（可选）
    resetStats() {
        if (confirm('确定要重置所有统计数据吗？')) {
            localStorage.removeItem(this.storageKey);
            localStorage.removeItem('last_visit_date');
            this.stats = {
                pageViews: 0,
                downloads: 0,
                linkClicks: 0,
                paperViews: 0,
                lastUpdate: new Date().toISOString()
            };
            this.saveStats();
        }
    }
}

// ============================================
// 使用免费的访问统计服务（可选）
// ============================================

// 方案1: 使用 visitor-badge.io（显示总访问量）
function addVisitorBadge() {
    const badge = document.createElement('img');
    badge.src = 'https://visitor-badge.laobi.icu/badge?page_id=Vincent0317.zhangwencong';
    badge.alt = '访问统计';
    badge.style.cssText = 'display: inline-block; margin-left: 10px;';
    
    // 可以添加到统计模块中
    const statsNote = document.querySelector('.stats-note');
    if (statsNote) {
        statsNote.appendChild(badge);
    }
}

// ============================================
// 初始化
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // 初始化统计系统
    window.websiteAnalytics = new WebsiteAnalytics();
    
    // 可选：添加访问徽章
    // addVisitorBadge();
    
    console.log('访问统计系统已启动');
});
