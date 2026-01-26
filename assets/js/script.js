// ============================================
// Abstract 切换功能
// ============================================
function toggleAbstract(abstractId) {
    const abstractElement = document.getElementById(abstractId);
    if (abstractElement) {
        if (abstractElement.style.display === 'none' || abstractElement.style.display === '') {
            abstractElement.style.display = 'block';
        } else {
            abstractElement.style.display = 'none';
        }
    }
}

// ============================================
// Bibtex 切换功能
// ============================================
function toggleBibtex(bibtexId) {
    const bibtexElement = document.getElementById(bibtexId);
    if (bibtexElement) {
        if (bibtexElement.style.display === 'none' || bibtexElement.style.display === '') {
            bibtexElement.style.display = 'block';
        } else {
            bibtexElement.style.display = 'none';
        }
    }
}

// ============================================
// 为所有 abstract 和 bibtex 链接添加事件监听
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // 为所有 abstract 链接添加点击事件
    const abstractLinks = document.querySelectorAll('.pub-link');
    abstractLinks.forEach(link => {
        if (link.textContent.toLowerCase().includes('abstract')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // 找到对应的 abstract 元素
                const pubItem = this.closest('.publication-item');
                const abstract = pubItem.querySelector('.pub-abstract');
                if (abstract) {
                    if (abstract.style.display === 'none' || abstract.style.display === '') {
                        abstract.style.display = 'block';
                    } else {
                        abstract.style.display = 'none';
                    }
                }
            });
        }
    });

    // 为所有 bibtex 链接添加点击事件
    const bibtexLinks = document.querySelectorAll('.pub-link');
    bibtexLinks.forEach(link => {
        if (link.textContent.toLowerCase().includes('bibtex')) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                // 找到对应的 bibtex 元素
                const pubItem = this.closest('.publication-item');
                const bibtex = pubItem.querySelector('.pub-bibtex');
                if (bibtex) {
                    if (bibtex.style.display === 'none' || bibtex.style.display === '') {
                        bibtex.style.display = 'block';
                    } else {
                        bibtex.style.display = 'none';
                    }
                }
            });
        }
    });

    // 默认隐藏所有 abstract 和 bibtex
    const abstracts = document.querySelectorAll('.pub-abstract');
    abstracts.forEach(abstract => {
        abstract.style.display = 'none';
    });

    const bibtexes = document.querySelectorAll('.pub-bibtex');
    bibtexes.forEach(bibtex => {
        bibtex.style.display = 'none';
    });
});
