document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons(); // init icons Lucide

    // --- I. Localization Data (Vietnamese and English) ---
    const translations = {
        'vi': {
            'doc-title': 'Nguyễn Khắc Hiếu - Software Developer',
            'nav-about': 'Về tôi',
            'nav-skills': 'Kỹ năng',
            'nav-projects': 'Dự án',
            'nav-experience': 'Kinh nghiệm',
            'nav-contact': 'Liên hệ',
            'hero-title-role': 'Kỹ sư Phần mềm. Xây dựng các ứng dụng hiệu suất cao với kiến trúc hiện đại.',
            'hero-cta-cv': 'Tải CV',
            'hero-cta-contact': 'Liên hệ',
            'about-title': 'Về Tôi',
            'about-p1': 'Tôi là Nguyễn Khắc Hiếu, một Software Developer với 4 năm kinh nghiệm trong việc phát triển các ứng dụng web quy mô lớn. Đam mê xây dựng các giải pháp hiệu suất cao, dễ bảo trì và tối ưu trải nghiệm người dùng.',
            'about-p2': 'Trọng tâm chuyên môn của tôi là các hệ thống Backend, API và Kiến trúc Microservices. Tôi luôn cập nhật và áp dụng các công nghệ mới nhất để mang lại giá trị tốt nhất cho sản phẩm.',
            'about-info-title': 'Thông tin cơ bản',
            'about-info-name': 'Họ tên:',
            'about-info-dob': 'Ngày sinh:',
            'about-info-home': 'Quê quán:',
            'about-info-education': 'Trình độ học vấn:',
            'about-info-position-key': 'Nghề Nghiệp:',
            'about-info-location-key': 'Địa điểm:',
            'about-info-name-value' : 'Nguyễn Khắc Hiếu',
            'about-info-home-value': 'Thanh Hóa',
            'about-info-education-value': 'Đại học',
            'about-info-position-value': 'Lập trình viên',
            'about-info-specialty-key': 'Chuyên môn:',
            'about-info-location-value': 'Hà Nội, Việt Nam',
            'skills-title': 'Bộ Kỹ Năng & Công Cụ',
            'skills-backend-title': 'Backend & Database',
            'skills-devops-title': 'Frontend & DevOps',
            'projects-title': 'Dự Án Tiêu Biểu',
            'projects-tip': 'Di chuột vào khu vực này để tạm dừng cuộn!',
            //project
            'proj1-name': 'Hệ thống quản lý cơ sở dữ liệu',
            'proj1-desc': 'Hệ thống thu thập và quản lý dữ liệu người dùng cho nhiều dự án, quản lý khảo sát, xử lý dữ liệu lớn và hỗ trợ gửi mail, import/export dữ liệu quy mô lớn.',
            'proj2-name': 'Hệ thống cho thuê bất động sản',
            'proj2-desc': 'Hệ thống giới thiệu và quản lý các thông tin cho thuê bất động sản.',
            'proj3-name': 'Hệ thống quản lý khu dân cư',
            'proj3-desc': 'Hệ thống website/app quản lý khu dân cư.',
            'proj4-name': 'Hệ thống đặt đồ ăn trực tuyến',
            'proj4-desc': 'Hệ thống quản lý đặt đồ ăn trực tuyến.',
            'proj5-name': 'Hệ thống quản lý salon làm đẹp',
            'proj5-desc': 'Nền tảng quản lý tổng thể cho salon làm đẹp: đặt lịch dịch vụ, quản lý khách hàng, nhân viên, ca làm việc và hoạt động cửa hàng.',
            'proj6-name': 'Hệ thống quản lý thuế',
            'proj6-desc': 'Hệ thống quản lý và tính toán thuế tương tự HTKK.',
            'proj7-name': 'Hệ thống đặt phòng',
            'proj7-desc': 'Hệ thống quản lý đặt phòng.',
            'proj-detail-link': 'Xem chi tiết',
            'experience-title': 'Kinh Nghiệm Làm Việc',
            'exp1-title': 'Fresher Developer',
            'exp1-company': 'Kaopiz Software | 2022 - 2022',
            'exp2-title': 'Developer',
            'exp2-company': 'Paraline Software | 2022 - Hiện tại',
            'exp1-p1': 'Hỗ trợ phát triển các module nhỏ.',
            'exp1-p2': 'Tham gia khóa đào tạo key member.',
            'exp2-p1': 'Thiết kế, phát triển và bảo trì hệ thống (Laravel, CakePHP, Livewire, NodeJs, VueJs, AWS, ...).',
            'exp2-p2': 'Thiết kế và phát triển các API hiệu suất cao cho nền tảng di động và web.',
            'exp2-p3': 'Cài đặt môi trường và triển khai hệ thống cho người dùng.',
            'exp2-p4': 'Tối ưu hóa query database (MySQL) giảm độ trễ truy vấn.',
            'exp2-p5': 'Hướng dẫn, hỗ trợ và review code.',
            'contact-title': 'Sẵn Sàng Hợp Tác',
            'contact-tagline': 'Hãy kết nối để biến ý tưởng thành hiện thực!',
            'footer-rights': 'Bản quyền đã được đăng ký.'
        },
        'en': {
            'doc-title': 'Khac Hieu Nguyen - Software Developer',
            'nav-about': 'About',
            'nav-skills': 'Skills',
            'nav-projects': 'Projects',
            'nav-experience': 'Experience',
            'nav-contact': 'Contact',
            'hero-title-role': 'Software Engineer. Building high-performance applications with modern architecture.',
            'hero-cta-cv': 'Download CV',
            'hero-cta-contact': 'Contact Me',
            'about-title': 'About Me',
            'about-p1': 'I am Khac Hieu Nguyen, a Software Developer with 4 years of experience in developing large-scale web applications. Passionate about building high-performance, maintainable, and user-experience-optimized solutions.',
            'about-p2': 'My core expertise is in Backend Systems, APIs, and Microservices Architecture. I constantly update and apply the latest technologies to deliver the best value for products.',
            'about-info-title': 'Basic Information',
            'about-info-name': 'Full Name:',
            'about-info-dob': 'Date of Birth:',
            'about-info-home': 'Hometown:',
            'about-info-education': 'Educational Qualification:',
            'about-info-position-key': 'Job:',
            'about-info-name-value': 'Nguyen Khac Hieu',
            'about-info-position-value': 'Developer',
            'about-info-home-value': 'Thanh Hoa',
            'about-info-education-value': 'University',
            'about-info-specialty-key': 'Specialty:',
            'about-info-specialty-value': 'Backend/API, System Architecture',
            'about-info-location-key': 'Location:',
            'about-info-location-value': 'Hanoi, Vietnam',
            'skills-title': 'Skillset & Tools',
            'skills-backend-title': 'Backend & Database',
            'skills-devops-title': 'Frontend & DevOps',
            'projects-title': 'Featured Projects',
            'projects-tip': 'Hover over this area to pause the scroll!',

            //project
            'proj1-name': 'Database management system',
            'proj1-desc': 'System for collecting and managing user data for multiple projects, survey management, big data processing and email sending support, large-scale data import/export.',
            'proj2-name': 'Real estate rental system',
            'proj2-desc': 'System for introducing and managing real estate rental information.',
            'proj3-name': 'Residential management system',
            'proj3-desc': 'Residential area management website/app system.',
            'proj4-name': 'Online food ordering system',
            'proj4-desc': 'Online food ordering management system.',
            'proj5-name': 'Beauty salon management system',
            'proj5-desc': 'Total management platform for beauty salons: service scheduling, client management, staff, shifts and store operations.',
            'proj6-name': 'Tax management system',
            'proj6-desc': 'Tax management and calculation system similar to HTKK.',
            'proj7-name': 'Reservation system',
            'proj7-desc': 'Reservation management system.',
            'proj-detail-link': 'View Details',
            'experience-title': 'Work Experience',
            'exp1-title': 'Fresher Developer',
            'exp1-company': 'Kaopiz Software | 2022 - 2022',
            'exp2-title': 'Developer',
            'exp2-company': 'Paraline Software | 2022 - Hiện tại',
            'exp1-p1': 'Support for developing small modules.',
            'exp1-p2': 'Join the key member training course.',
            'exp2-p1': 'Design, develop and maintain systems (Laravel, CakePHP, Livewire, NodeJs, VueJs, AWS, ...).',
            'exp2-p2': 'Design and develop high performance APIs for mobile and web platforms.',
            'exp2-p3': 'Install the environment and deploy the system to users.',
            'exp2-p4': 'Optimizing database queries (MySQL) reduces query latency.',
            'exp2-p5': 'Guidance, support and code review.',
            'contact-title': 'Ready to Collaborate',
            'contact-tagline': 'Let\'s connect to turn ideas into reality!',
            'footer-rights': 'All rights reserved.'
        }
    };

    let currentLang = 'vi';

    const switchLanguage = (lang) => {
        currentLang = lang;
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                if (el.tagName === 'TITLE') {
                    el.textContent = translations[lang][key];
                } else {
                    el.innerHTML = translations[lang][key];
                }
            }
        });

        // Update language button status
        document.getElementById('lang-vi').classList.remove('text-cyan-400', 'border-cyan-400', 'border-transparent', 'text-gray-500');
        document.getElementById('lang-en').classList.remove('text-cyan-400', 'border-cyan-400', 'border-transparent', 'text-gray-500');
        
        if (lang === 'vi') {
            document.getElementById('lang-vi').classList.add('text-cyan-400', 'border-cyan-400');
            document.getElementById('lang-en').classList.add('text-gray-500', 'border-transparent');
        } else {
            document.getElementById('lang-en').classList.add('text-cyan-400', 'border-cyan-400');
            document.getElementById('lang-vi').classList.add('text-gray-500', 'border-transparent');
        }
    };
    
    // Assign the switchLanguage function to window so it works with onclick in HTML
    window.switchLanguage = switchLanguage;

    // Initialize default language
    switchLanguage(currentLang);

    // --- II. Canvas Effects (Dragon, Snowflakes/Meteors) ---

    const dragonCanvas = document.getElementById('dragon-canvas');
    const snowCanvas = document.getElementById('snow-canvas');
    const dragonCtx = dragonCanvas.getContext('2d');
    const snowCtx = snowCanvas.getContext('2d');
    let width, height;

    const resizeCanvas = () => {
        width = window.innerWidth;
        height = window.innerHeight;
        dragonCanvas.width = width;
        dragonCanvas.height = height;
        snowCanvas.width = width;
        snowCanvas.height = height;
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // --- Dragon Entity (Path-following effect) ---
    class DragonEntity {
        constructor() {
            this.segments = [];
            this.trailLength = 100; // Total trail length
            this.speed = 0.0005; // Base speed of movement along the path
            this.time = 0;
            this.path = [];
            this.pathGenerated = false;
            this.color = 'rgba(255, 0, 100, 0.6)'; // Neon Pink/Red for Dragon

            for (let i = 0; i < this.trailLength; i++) {
                this.segments.push({ x: width / 2, y: height / 2, size: 2 + i * 0.05, alpha: 1 - i / this.trailLength });
            }
        }

        // Generates a simple circular path around the center
        generatePath() {
            const radius = Math.min(width, height) * 0.4;
            const centerX = width / 2;
            const centerY = height / 2;
            for (let i = 0; i < 360; i++) {
                const angle = i * Math.PI / 180;
                this.path.push({
                    x: centerX + radius * Math.cos(angle * 2), // Loop faster
                    y: centerY + radius * 0.8 * Math.sin(angle * 2) // Elliptical path
                });
            }
            this.pathGenerated = true;
        }

        update() {
            if (!this.pathGenerated) return;

            this.time += this.speed;
            const currentPathIndex = Math.floor((this.time % 1) * this.path.length);

            // Update head position
            const head = this.path[currentPathIndex];
            
            // Shift segments down the trail
            this.segments.unshift({
                x: head.x,
                y: head.y,
                size: 2,
                alpha: 1
            });

            // Remove the oldest segment
            if (this.segments.length > this.trailLength) {
                this.segments.pop();
            }

            // Update size and alpha for fading trail
            for (let i = 0; i < this.segments.length; i++) {
                this.segments[i].size = 2 + (1 - i / this.trailLength) * 3;
                this.segments[i].alpha = Math.pow(1 - i / this.trailLength, 2);
            }
        }

        draw() {
            dragonCtx.save();
            dragonCtx.shadowBlur = 10;
            dragonCtx.shadowColor = this.color;
            
            for (let i = 0; i < this.segments.length - 1; i++) {
                const seg = this.segments[i];
                const nextSeg = this.segments[i + 1];

                dragonCtx.beginPath();
                dragonCtx.moveTo(seg.x, seg.y);
                dragonCtx.lineTo(nextSeg.x, nextSeg.y);
                dragonCtx.strokeStyle = `rgba(255, 0, 100, ${seg.alpha * 0.8})`;
                dragonCtx.lineWidth = seg.size;
                dragonCtx.lineCap = 'round';
                dragonCtx.stroke();
            }
            
            // Draw the head with a bright glow
            if (this.segments.length > 0) {
                const head = this.segments[0];
                dragonCtx.beginPath();
                dragonCtx.arc(head.x, head.y, head.size * 1.5, 0, Math.PI * 2);
                dragonCtx.fillStyle = 'rgba(255, 255, 255, 1)';
                dragonCtx.shadowBlur = 20;
                dragonCtx.shadowColor = 'rgba(255, 0, 100, 1)';
                dragonCtx.fill();
            }

            dragonCtx.restore();
        }
    }

    const dragon = new DragonEntity();
    
    // --- Meteor (Sao Băng) Entity ---
    class Meteor {
        constructor(w, h) {
            this.reset(w, h);
        }

        reset(w, h) {
            // Start position near the top-left or top-right, off-screen
            this.x = Math.random() * w * 1.5 - w * 0.25; 
            this.y = -Math.random() * h * 0.5;

            // Random angle and speed for shooting star effect
            this.angle = Math.PI / 4 + (Math.random() - 0.5) * 0.2; // roughly 45 degrees
            this.speed = 10 + Math.random() * 8; // Fast speed

            this.life = 1;
            this.size = 2 + Math.random() * 3;
            this.trailLength = 40 + Math.random() * 40;
            this.color = `rgba(0, 255, 255, ${0.8 + Math.random() * 0.2})`; // Neon Cyan
        }

        update(w, h) {
            this.x += Math.cos(this.angle) * this.speed;
            this.y += Math.sin(this.angle) * this.speed;

            // Fade out as it leaves the screen
            this.life = Math.max(0, this.life - 0.005); 

            // Recycle if far off-screen
            if (this.x > w + 200 || this.y > h + 200 || this.life <= 0) {
                this.reset(w, h);
            }
        }

        draw(ctx) {
            ctx.save();
            ctx.shadowBlur = 10;
            ctx.shadowColor = this.color;
            
            // Draw the head
            ctx.fillStyle = `rgba(255, 255, 255, ${this.life})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();

            // Draw the fading trail
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            
            // Calculate trail end point based on speed and angle
            const tailX = this.x - Math.cos(this.angle) * this.trailLength;
            const tailY = this.y - Math.sin(this.angle) * this.trailLength;

            // Create gradient for the tail fade
            const gradient = ctx.createLinearGradient(this.x, this.y, tailX, tailY);
            gradient.addColorStop(0, this.color);
            gradient.addColorStop(1, 'rgba(0, 255, 255, 0)'); // Fade to transparent

            ctx.strokeStyle = gradient;
            ctx.lineWidth = this.size / 2;
            ctx.lineCap = 'round';
            ctx.lineTo(tailX, tailY);
            ctx.stroke();

            ctx.restore();
        }
    }
    
    // --- Snowflake/Star Entity (Small constant dots) ---
    class Snowflake {
        constructor(w, h) {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.size = Math.random() * 1.5 + 0.5;
            this.opacity = Math.random();
            this.velocity = Math.random() * 0.5 + 0.5; // Slow vertical drift
            this.drift = Math.random() * 0.1; // Gentle side drift
        }

        update(w, h) {
            this.y += this.velocity * 0.05; // Very slow movement (like distant snow/dust)
            this.x += this.drift * 0.1;
            
            // gentle flicker
            this.opacity = 0.5 + Math.sin(Date.now() * 0.005 + this.y) * 0.5;

            if (this.y > h) {
                this.y = 0;
                this.x = Math.random() * w;
            }
        }

        draw(ctx) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
            ctx.fill();
        }
    }

    const snowflakes = [];
    for (let i = 0; i < 100; i++) {
        snowflakes.push(new Snowflake(width, height));
    }

    const meteors = [];
    for (let i = 0; i < 5; i++) {
        meteors.push(new Meteor(width, height));
    }

    const animateCanvas = () => {
        // Clear Dragon Canvas
        dragonCtx.clearRect(0, 0, width, height);
        // Draw Dragon
        if (dragon.pathGenerated) {
            dragon.update();
            dragon.draw();
        }

        // Clear Snow Canvas
        snowCtx.clearRect(0, 0, width, height);
        
        // Draw Snowflakes (Small Stars/Dust)
        snowflakes.forEach(s => {
            s.update(width, height);
            s.draw(snowCtx);
        });

        // Draw Meteors (Shooting Stars)
        meteors.forEach(m => {
            m.update(width, height);
            m.draw(snowCtx);
        });

        requestAnimationFrame(animateCanvas);
    };
    
    // --- III. Project Auto-Scroll Logic (Infinite Loop) ---
    const scrollContainer = document.getElementById('projects-scroll-container');
    const originalContent = document.getElementById('project-list-original');
    let scrollAnimationFrame;
    let scrollSpeed = 0.5; 
    let originalContentWidth = 0;

    const prepareInfiniteScroll = () => {
        const clonedContent = originalContent.cloneNode(true);
        clonedContent.removeAttribute('id'); 
        scrollContainer.appendChild(clonedContent);

        requestAnimationFrame(() => {
            originalContentWidth = originalContent.offsetWidth;
        });
    };

    const startScroll = () => {
        if (scrollAnimationFrame) return; 

        const scrollLoop = () => {
            if (scrollContainer.scrollLeft >= originalContentWidth) {
                scrollContainer.scrollLeft = 0;
            } 
            
            scrollContainer.scrollLeft += scrollSpeed;
            
            scrollAnimationFrame = requestAnimationFrame(scrollLoop);
        };
        scrollLoop();
    };

    const stopScroll = () => {
        cancelAnimationFrame(scrollAnimationFrame);
        scrollAnimationFrame = null;
    };
    
    prepareInfiniteScroll();
    
    scrollContainer.addEventListener('mouseenter', stopScroll);
    scrollContainer.addEventListener('mouseleave', startScroll);

    // --- IV. Initial Calls ---
    
    if (!dragon.pathGenerated) {
        dragon.generatePath();
    }
    animateCanvas();

    setTimeout(startScroll, 100); 
});

(function() {
    const MARQUEE_INTERVAL = 50000; // 50s
    const ANIMATION_DURATION = 25000; //25s
    const START_DELAY = 2000;

    function showMarqueeOnce() {
        const marqueeElement = document.getElementById('welcomeMarquee');
        if (!marqueeElement) return;

        const content = marqueeElement.querySelector('.marquee-content');
        if (!content) return;

        marqueeElement.classList.remove('hidden');

        content.classList.remove('run');
        // Force reflow to allow restarting the animation
        void content.offsetWidth;
        content.classList.add('run');

        const onEnd = () => {
            content.removeEventListener('animationend', onEnd);
            marqueeElement.classList.add('hidden');
            content.classList.remove('run');
        };

        content.addEventListener('animationend', onEnd);

        setTimeout(() => {
            marqueeElement.classList.add('hidden');
            content.classList.remove('run');
            content.removeEventListener('animationend', onEnd);
        }, ANIMATION_DURATION + 200);
    }

    setTimeout(showMarqueeOnce, START_DELAY);
    setInterval(showMarqueeOnce, MARQUEE_INTERVAL);
})();