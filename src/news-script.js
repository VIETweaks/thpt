// News Page Specific JavaScript

// News data
const newsData = [
    {
        id: 2,
        title: "Học sinh trường đạt giải Nhất cuộc thi Khoa học Kỹ thuật toàn quốc",
        summary: "Đội tuyển học sinh của trường đã xuất sắc giành giải Nhất trong cuộc thi Khoa học Kỹ thuật dành cho học sinh THPT với dự án về môi trường.",
        image: "https://images.unsplash.com/photo-1663247454628-512fd688043f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzY2llbmNlJTIwY29tcGV0aXRpb24lMjBzdHVkZW50c3xlbnwxfHx8fDE3NTYyNjIwNDh8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "achievement",
        categoryText: "Thành tích",
        date: "28/8/2024",
        author: "Phòng Học thuật",
        readTime: "5 phút",
        likes: 156,
        comments: 32
    },
    {
        id: 3,
        title: "Lễ tốt nghiệp khóa 2021-2024: Chào tương lai với hy vọng",
        summary: "325 học sinh khóa 2021-2024 đã chính thức tốt nghiệp và bước vào giai đoạn mới của cuộc đời với những ký ức đẹp về mái trường.",
        image: "https://images.unsplash.com/photo-1660795307991-8a7ebbef311c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzdHVkZW50cyUyMGdyYWR1YXRpb24lMjBjZXJlbW9ueXxlbnwxfHx8fDE3NTYyNjIwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "event",
        categoryText: "Sự kiện",
        date: "15/6/2024",
        author: "Ban Giám hiệu",
        readTime: "4 phút",
        likes: 234,
        comments: 67
    },
    {
        id: 4,
        title: "Giải bóng đá học sinh THPT: Chiến thắng ấn tượng",
        summary: "Đội bóng đá nam của trường đã giành chức vô địch giải bóng đá học sinh THPT cấp thành phố sau trận chung kết đầy kịch tính.",
        image: "https://images.unsplash.com/photo-1548077880-656c402b344e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBzcG9ydHMlMjBmb290YmFsbCUyMHRlYW18ZW58MXx8fHwxNzU2MjYyMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "sports",
        categoryText: "Thể thao",
        date: "20/7/2024",
        author: "CLB Thể thao",
        readTime: "3 phút",
        likes: 98,
        comments: 18
    },
    {
        id: 5,
        title: "Triển lãm nghệ thuật học sinh: Sắc màu tuổi trẻ",
        summary: "Triển lãm nghệ thuật thường niên của trường với hơn 200 tác phẩm từ các học sinh khối 10, 11, 12 thu hút đông đảo người tham quan.",
        image: "https://images.unsplash.com/photo-1570638935065-a4836c72d442?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBhcnQlMjBleGhpYml0aW9uJTIwc3R1ZGVudHN8ZW58MXx8fHwxNzU2MjYyMDU2fDA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "culture",
        categoryText: "Văn hóa",
        date: "10/5/2024",
        author: "CLB Nghệ thuật",
        readTime: "4 phút",
        likes: 112,
        comments: 28
    },
    {
        id: 6,
        title: "Thư viện số hiện đại: Không gian học tập mới",
        summary: "Thư viện trường vừa được nâng cấp với hệ thống số hóa hiện đại, mang đến trải nghiệm học tập hoàn toàn mới cho học sinh.",
        image: "https://images.unsplash.com/photo-1634951401794-6c84f593db82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvb2wlMjBsaWJyYXJ5JTIwc3R1ZHklMjBzdHVkZW50c3xlbnwxfHx8fDE3NTYyNjIwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "facility",
        categoryText: "Cơ sở vật chất",
        date: "15/4/2024",
        author: "Phòng Thiết bị",
        readTime: "3 phút",
        likes: 201,
        comments: 45
    }
];

// SVG Icons
const icons = {
    calendar: `<svg class="icon" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
    </svg>`,
    user: `<svg class="icon" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
    </svg>`,
    clock: `<svg class="icon" viewBox="0 0 20 20" fill="currentColor">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
        <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
    </svg>`,
    heart: `<svg class="icon" style="width: 0.75rem; height: 0.75rem;" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd" />
    </svg>`,
    comment: `<svg class="icon" style="width: 0.75rem; height: 0.75rem;" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clip-rule="evenodd" />
    </svg>`,
    arrow: `<svg class="icon" style="width: 0.875rem; height: 0.875rem;" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>`
};

// Get category class name
function getCategoryClass(category) {
    return `category-${category}`;
}

// Create news card HTML
function createNewsCard(news) {
    return `
        <div class="news-card animate-on-scroll">
            <div class="news-card-image">
                <img src="${news.image}" alt="${news.title}" loading="lazy">
                
                <div class="category-badge ${getCategoryClass(news.category)}">${news.categoryText}</div>
                
                <div class="engagement-stats">
                    <div class="engagement-item">
                        ${icons.heart}
                        ${news.likes}
                    </div>
                    <div class="engagement-item">
                        ${icons.comment}
                        ${news.comments}
                    </div>
                </div>
            </div>
            
            <div class="news-card-content">
                <div class="news-meta">
                    <div class="news-meta-item">
                        ${icons.calendar}
                        ${news.date}
                    </div>
                    <div class="news-meta-item">
                        ${icons.clock}
                        ${news.readTime}
                    </div>
                </div>
                
                <h3 class="news-card-title">${news.title}</h3>
                
                <p class="news-card-summary">${news.summary}</p>
                
                <div class="news-card-footer">
                    <div class="author-info">
                        ${icons.user}
                        ${news.author}
                    </div>
                    
                    <button class="read-more-btn" onclick="readMore(${news.id})">
                        Đọc tiếp
                        ${icons.arrow}
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Initialize news grid
function initializeNewsGrid() {
    const newsGrid = document.getElementById('newsGrid');
    if (!newsGrid) return;
    
    const newsHTML = newsData.map(createNewsCard).join('');
    newsGrid.innerHTML = newsHTML;
}

// Read more functionality
function readMore(newsId) {
    console.log(`Reading more about news ID: ${newsId}`);
    // Here you would typically navigate to a detailed news page
    // For demo purposes, we'll just show an alert
    const news = newsData.find(n => n.id === newsId);
    if (news) {
        alert(`Đang chuyển đến trang chi tiết: "${news.title}"`);
    }
}

// Scroll animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    // Observe elements that should animate on scroll
    function observeElements() {
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }
    
    // Initial observation
    observeElements();
    
    // Re-observe after news grid is populated
    setTimeout(observeElements, 100);
}

// Image lazy loading optimization
function optimizeImages() {
    // Add loading="lazy" to images that don't have it
    document.querySelectorAll('img:not([loading])').forEach(img => {
        img.setAttribute('loading', 'lazy');
    });
    
    // Add error handling for images
    document.querySelectorAll('img').forEach(img => {
        img.addEventListener('error', function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjE5MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZTJlOGYwIi8+CiAgPHRleHQgeD0iNTAlIiB5PSI1MCUiIGRvbWluYW50LWJhc2VsaW5lPSJtaWRkbGUiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiM2NDc0OGIiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+SGluaCBhbmggbG9pPC90ZXh0Pgo8L3N2Zz4K';
        });
    });
}

// Enhanced mobile interactions
function initializeMobileInteractions() {
    // Touch feedback for news cards
    document.addEventListener('touchstart', function(e) {
        if (e.target.closest('.news-card')) {
            e.target.closest('.news-card').style.transform = 'scale(0.98)';
        }
    });
    
    document.addEventListener('touchend', function(e) {
        if (e.target.closest('.news-card')) {
            e.target.closest('.news-card').style.transform = '';
        }
    });
}

// Performance monitoring
function initializePerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', function() {
        if ('performance' in window) {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`News page loaded in ${loadTime}ms`);
            
            // Track if load time is too slow
            if (loadTime > 3000) {
                console.warn('News page load time is slow, consider optimizing images or reducing content');
            }
        }
    });
    
    // Monitor scroll performance
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            // Scroll ended, can perform heavy operations here if needed
        }, 150);
    }, { passive: true });
}

// Error handling
function handleErrors() {
    window.addEventListener('error', function(e) {
        console.warn('News page error:', e.message);
        
        // Try to gracefully handle missing images
        if (e.message.includes('img')) {
            console.log('Attempting to fix image loading issues...');
            optimizeImages();
        }
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only run news-specific code on news page
    if (document.querySelector('.news-hero')) {
        initializeNewsGrid();
        initializeScrollAnimations();
        optimizeImages();
        initializeMobileInteractions();
        initializePerformanceMonitoring();
        handleErrors();
        
        console.log('News page initialized successfully');
    }
});

// Export functions for potential use by other scripts
window.newsPageUtils = {
    createNewsCard,
    readMore,
    getCategoryClass
};