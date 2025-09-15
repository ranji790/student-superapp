// Ultra-Modern Student Life SuperApp JavaScript with Beautiful Animations

class StudentLifeSuperApp {
    constructor() {
        this.currentPage = 'dashboard';
        this.currentSkillTab = 'offers';
        this.data = this.initializeData();
        
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.init();
            });
        } else {
            this.init();
        }
    }

    init() {
        console.log('🚀 Initializing Ultra-Modern Student Life SuperApp...');
        this.setupEventListeners();
        this.renderDashboard();
        this.renderAllPages();
        this.startAnimations();
        console.log('✨ App initialized successfully with beautiful animations!');
    }

    initializeData() {
        // Use provided sample data
        return {
            lostItems: [
                {"id": 1, "title": "iPhone 14 Pro Max", "category": "Electronics", "location": "Central Library - 3rd Floor", "description": "Space Black iPhone 14 Pro Max with MagSafe case, lost during finals week", "contact": "john.smith@university.edu", "date": "2025-09-10", "image": "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=200&fit=crop", "reward": "$50"},
                {"id": 2, "title": "Advanced Calculus Textbook", "category": "Books", "location": "Mathematics Building - Room 205", "description": "Stewart's Calculus 8th Edition with highlighted notes and bookmarks", "contact": "sarah.johnson@university.edu", "date": "2025-09-12", "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop", "reward": "Coffee treat"},
                {"id": 3, "title": "Nike Air Jordan Hoodie", "category": "Clothing", "location": "Campus Recreation Center", "description": "Red Nike Air Jordan hoodie, size Medium, sentimental value", "contact": "mike.wilson@university.edu", "date": "2025-09-11", "image": "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=300&h=200&fit=crop", "reward": "$25"},
                {"id": 4, "title": "BMW Car Keys with Remote", "category": "Keys", "location": "Parking Structure B - Level 2", "description": "BMW keys with blue leather keychain and access card", "contact": "anna.davis@university.edu", "date": "2025-09-13", "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop", "reward": "$75"},
                {"id": 5, "title": "Student ID & Credit Cards", "category": "ID Cards", "location": "Student Union Food Court", "description": "Black leather wallet with student ID for Alex Johnson, urgent!", "contact": "alex.johnson@university.edu", "date": "2025-09-09", "image": "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=200&fit=crop", "reward": "$40"},
                {"id": 6, "title": "MacBook Pro 16-inch", "category": "Electronics", "location": "Engineering Building - Study Hall", "description": "Silver MacBook Pro with computer science stickers", "contact": "chris.lee@university.edu", "date": "2025-09-08", "image": "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=200&fit=crop", "reward": "$100"}
            ],
            skillSwaps: [
                {"id": 1, "type": "offer", "skill": "Full-Stack Development", "description": "Expert in React, Node.js, Python. Can teach from basics to advanced projects", "level": "Expert", "contact": "coder.pro@university.edu", "category": "Programming", "rating": 4.9, "sessions": 15},
                {"id": 2, "type": "request", "skill": "UI/UX Design Mastery", "description": "Need help with Figma, Adobe Creative Suite, and design principles", "level": "Intermediate", "contact": "design.student@university.edu", "category": "Design", "budget": "$20/hour"},
                {"id": 3, "type": "offer", "skill": "Native Spanish & Culture", "description": "Native speaker from Barcelona, can teach conversational Spanish and culture", "level": "Native", "contact": "carlos.madrid@university.edu", "category": "Languages", "rating": 5.0, "sessions": 23},
                {"id": 4, "type": "request", "skill": "Advanced Guitar Techniques", "description": "Looking for someone to teach fingerpicking and jazz guitar", "level": "Intermediate", "contact": "music.lover@university.edu", "category": "Music", "budget": "$30/session"},
                {"id": 5, "type": "offer", "skill": "Data Science & ML", "description": "PhD student offering tutoring in Python, R, machine learning, and statistics", "level": "Expert", "contact": "data.scientist@university.edu", "category": "Programming", "rating": 4.8, "sessions": 31},
                {"id": 6, "type": "request", "skill": "Photography & Editing", "description": "Want to learn portrait photography and Lightroom editing", "level": "Beginner", "contact": "photo.enthusiast@university.edu", "category": "Creative", "budget": "$25/hour"}
            ],
            events: [
                {"id": 1, "name": "TechFest 2025: Innovation Summit", "date": "2025-10-15", "time": "09:00 AM", "location": "Grand Auditorium", "description": "Annual technology festival featuring AI demos, startup pitches, and networking", "organizer": "Tech Society", "participants": 250, "tasks": [{"name": "Stage Setup & Tech Check", "assigned": "AV Team", "completed": true, "priority": "high"}, {"name": "Registration & Check-in", "assigned": "Volunteer Team", "completed": false, "priority": "medium"}, {"name": "Catering Coordination", "assigned": "Events Committee", "completed": false, "priority": "high"}], "image": "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop"},
                {"id": 2, "name": "International Cultural Night", "date": "2025-10-22", "time": "07:00 PM", "location": "Student Union Ballroom", "description": "Celebrate diversity with food, music, and performances from around the world", "organizer": "International Students Association", "participants": 180, "tasks": [{"name": "Cultural Decorations", "assigned": "Art Club", "completed": false, "priority": "medium"}, {"name": "Sound & Lighting", "assigned": "Tech Crew", "completed": false, "priority": "high"}, {"name": "Food Vendor Coordination", "assigned": "Catering Team", "completed": true, "priority": "high"}], "image": "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=250&fit=crop"},
                {"id": 3, "name": "Career Fair & Industry Expo", "date": "2025-11-05", "time": "10:00 AM", "location": "Convention Center", "description": "Meet with 50+ companies, attend workshops, and land your dream internship", "organizer": "Career Services", "participants": 500, "tasks": [{"name": "Company Outreach", "assigned": "Career Services", "completed": true, "priority": "high"}, {"name": "Venue Setup & Booths", "assigned": "Facilities Team", "completed": false, "priority": "high"}, {"name": "Student Registration", "assigned": "Admin Team", "completed": true, "priority": "medium"}], "image": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=250&fit=crop"}
            ],
            timeCapsules: [
                {"id": 1, "title": "My Senior Year Dreams", "message": "Goals for senior year: Land a FAANG internship, maintain 3.8 GPA, travel to Japan...", "unlockDate": "2026-05-15", "type": "Graduation", "created": "2025-09-01", "category": "Personal", "mood": "hopeful"},
                {"id": 2, "title": "Freshman Year Memories", "message": "Just finished orientation week! So nervous but excited. My roommate seems cool...", "unlockDate": "2025-12-25", "type": "Holiday Reflection", "created": "2025-08-20", "category": "Memories", "mood": "nostalgic"},
                {"id": 3, "title": "Before My First Interview", "message": "About to interview at Google tomorrow. Spent 6 months preparing. Whatever happens, I'm proud...", "unlockDate": "2026-01-15", "type": "Career Milestone", "created": "2025-09-10", "category": "Professional", "mood": "determined"},
                {"id": 4, "title": "Study Abroad Decision", "message": "Torn between studying in Tokyo or Barcelona. Both seem amazing but I can only choose one...", "unlockDate": "2025-11-30", "type": "Major Decision", "created": "2025-09-05", "category": "Academic", "mood": "conflicted"}
            ],
            books: [
                {"id": 1, "title": "Introduction to Algorithms (CLRS)", "author": "Cormen, Leiserson, Rivest, Stein", "subject": "Computer Science", "semester": "Fall 2025", "condition": "Excellent", "price": "$85", "originalPrice": "$120", "type": "sell", "contact": "cs.student@university.edu", "image": "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=200&fit=crop", "isbn": "978-0262033848"},
                {"id": 2, "title": "Organic Chemistry (Klein)", "author": "David Klein", "subject": "Chemistry", "semester": "Spring 2025", "condition": "Like New", "price": "Trade for Biology textbook", "type": "exchange", "contact": "chem.major@university.edu", "image": "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=200&fit=crop", "isbn": "978-1118452288"},
                {"id": 3, "title": "Calculus: Early Transcendentals", "author": "James Stewart", "subject": "Mathematics", "semester": "Fall 2025", "condition": "Good", "price": "$60", "originalPrice": "$95", "type": "sell", "contact": "math.tutor@university.edu", "image": "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&h=200&fit=crop", "isbn": "978-1285741550"},
                {"id": 4, "title": "Principles of Economics", "author": "N. Gregory Mankiw", "subject": "Economics", "semester": "Spring 2025", "condition": "Very Good", "price": "Exchange for Statistics book", "type": "exchange", "contact": "econ.student@university.edu", "image": "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=300&h=200&fit=crop", "isbn": "978-1305585126"},
                {"id": 5, "title": "Campbell Biology", "author": "Jane Reece", "subject": "Biology", "semester": "Fall 2025", "condition": "Good", "price": "$75", "originalPrice": "$110", "type": "sell", "contact": "bio.major@university.edu", "image": "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop", "isbn": "978-0134093413"}
            ],
            quizzes: [
                {"id": 1, "subject": "Computer Science - Data Structures", "difficulty": "Intermediate", "questions": [
                    {"question": "What is the average time complexity of searching in a balanced binary search tree?", "options": ["O(n)", "O(log n)", "O(n²)", "O(1)"], "correct": 1, "explanation": "Balanced BSTs maintain logarithmic height"},
                    {"question": "Which data structure is best for implementing undo functionality?", "options": ["Queue", "Stack", "Tree", "Hash Table"], "correct": 1, "explanation": "Stack follows LIFO principle, perfect for undo operations"},
                    {"question": "What is the space complexity of merge sort?", "options": ["O(1)", "O(log n)", "O(n)", "O(n²)"], "correct": 2, "explanation": "Merge sort requires additional array space proportional to input size"}
                ], "totalQuestions": 10, "score": null, "attempts": 0},
                {"id": 2, "subject": "Calculus - Derivatives", "difficulty": "Beginner", "questions": [
                    {"question": "What is the derivative of f(x) = x³?", "options": ["x²", "3x²", "3x", "x³"], "correct": 1, "explanation": "Using power rule: d/dx(xⁿ) = nx^(n-1)"},
                    {"question": "What is the derivative of sin(x)?", "options": ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"], "correct": 0, "explanation": "The derivative of sin(x) is cos(x)"},
                    {"question": "What is the derivative of e^x?", "options": ["e^x", "xe^(x-1)", "ln(x)", "1/x"], "correct": 0, "explanation": "The exponential function e^x is its own derivative"}
                ], "totalQuestions": 8, "score": null, "attempts": 0}
            ]
        };
    }

    setupEventListeners() {
        console.log('🎯 Setting up beautiful event listeners...');
        
        // Navigation
        this.setupNavigation();
        
        // Modal handlers
        this.setupModalHandlers();
        
        // Form buttons with animations
        this.setupFormButtons();
        
        // Filters and tabs
        this.setupFiltersAndTabs();
        
        // Add smooth scrolling
        this.setupSmoothScrolling();
    }

    setupNavigation() {
        // Glass navigation items
        const navItems = document.querySelectorAll('.glass-nav-item');
        navItems.forEach(item => {
            const page = item.getAttribute('data-page');
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateWithAnimation(page);
            });
        });

        // Module cards with hover effects
        const moduleCards = document.querySelectorAll('.gradient-module-card');
        moduleCards.forEach(card => {
            const page = card.getAttribute('data-page');
            card.addEventListener('click', (e) => {
                e.preventDefault();
                this.navigateWithAnimation(page);
            });
        });
    }

    setupModalHandlers() {
        const modalCloseBtn = document.querySelector('.glass-close-btn');
        const modal = document.getElementById('modal');
        
        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', (e) => {
                e.preventDefault();
                this.closeModalWithAnimation();
            });
        }

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
                    this.closeModalWithAnimation();
                }
            });
        }
    }

    setupFormButtons() {
        const buttonConfigs = [
            { id: 'post-lost-item-btn', action: () => this.openLostItemForm() },
            { id: 'offer-skill-btn', action: () => this.openSkillForm('offer') },
            { id: 'request-skill-btn', action: () => this.openSkillForm('request') },
            { id: 'create-event-btn', action: () => this.openEventForm() },
            { id: 'create-capsule-btn', action: () => this.openCapsuleForm() },
            { id: 'post-book-btn', action: () => this.openBookForm() },
            { id: 'upload-notes-btn', action: () => this.openNotesForm() }
        ];

        buttonConfigs.forEach(({ id, action }) => {
            const button = document.getElementById(id);
            if (button) {
                button.addEventListener('click', (e) => {
                    e.preventDefault();
                    this.animateButtonClick(button);
                    setTimeout(action, 150);
                });
            }
        });
    }

    setupFiltersAndTabs() {
        // Filters with animation
        const filterConfigs = [
            { id: 'category-filter', action: () => this.renderLostItems() },
            { id: 'location-filter', action: () => this.renderLostItems() },
            { id: 'subject-filter', action: () => this.renderBooks() },
            { id: 'condition-filter', action: () => this.renderBooks() }
        ];

        filterConfigs.forEach(({ id, action }) => {
            const element = document.getElementById(id);
            if (element) {
                element.addEventListener('change', () => {
                    this.showLoadingSpinner();
                    setTimeout(() => {
                        action();
                        this.hideLoadingSpinner();
                    }, 300);
                });
            }
        });

        // Glass tabs
        const tabBtns = document.querySelectorAll('.glass-tab');
        tabBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchTab(btn);
            });
        });
    }

    setupSmoothScrolling() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    startAnimations() {
        // Animate counters
        this.animateCounters();
        
        // Add staggered animations to elements
        this.addStaggeredAnimations();
        
        // Start floating animations
        this.startFloatingAnimations();
    }

    navigateWithAnimation(page) {
        // Add loading animation
        this.showPageTransition();
        
        setTimeout(() => {
            // Update navigation active states
            document.querySelectorAll('.glass-nav-item').forEach(item => {
                item.classList.remove('active');
            });
            
            const activeNavItem = document.querySelector(`[data-page="${page}"].glass-nav-item`);
            if (activeNavItem) {
                activeNavItem.classList.add('active');
            }

            // Hide current page with animation
            const currentPageEl = document.querySelector('.page.active');
            if (currentPageEl) {
                currentPageEl.style.animation = 'pageSlideOut 0.3s ease-in forwards';
                
                setTimeout(() => {
                    currentPageEl.classList.remove('active');
                    currentPageEl.style.animation = '';
                    
                    // Show new page with animation
                    const targetPage = document.getElementById(page);
                    if (targetPage) {
                        targetPage.classList.add('active');
                        targetPage.style.animation = 'pageSlideIn 0.5s ease-out forwards';
                        this.currentPage = page;
                        this.hidePageTransition();
                    }
                }, 300);
            }
        }, 200);
    }

    showPageTransition() {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
            spinner.classList.remove('hidden');
        }
    }

    hidePageTransition() {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
            setTimeout(() => {
                spinner.classList.add('hidden');
            }, 100);
        }
    }

    animateButtonClick(button) {
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = '';
        }, 150);
    }

    switchTab(activeTab) {
        document.querySelectorAll('.glass-tab').forEach(tab => {
            tab.classList.remove('active');
        });
        activeTab.classList.add('active');
        
        const tabType = activeTab.getAttribute('data-tab');
        this.currentSkillTab = tabType;
        
        // Add transition animation
        const grid = document.getElementById('skill-swaps-grid');
        if (grid) {
            grid.style.opacity = '0';
            grid.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                this.renderSkillSwaps();
                grid.style.opacity = '1';
                grid.style.transform = 'translateY(0)';
            }, 200);
        }
    }

    animateCounters() {
        const counters = document.querySelectorAll('.stat-number, .stat-value');
        counters.forEach(counter => {
            const target = parseInt(counter.textContent) || 0;
            let current = 0;
            const increment = target / 30;
            
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    current = target;
                    clearInterval(timer);
                }
                counter.textContent = Math.floor(current);
            }, 50);
        });
    }

    addStaggeredAnimations() {
        const cards = document.querySelectorAll('.gradient-module-card');
        cards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }

    startFloatingAnimations() {
        const floatingElements = document.querySelectorAll('.floating-shape');
        floatingElements.forEach((element, index) => {
            element.style.animationDelay = `${index * 0.5}s`;
        });
    }

    renderDashboard() {
        const totalItems = this.data.lostItems.length + this.data.books.length;
        const totalConnections = this.data.skillSwaps.length;
        const totalEvents = this.data.events.length;

        this.updateElementWithAnimation('total-items', totalItems);
        this.updateElementWithAnimation('total-connections', totalConnections);
        this.updateElementWithAnimation('total-events', totalEvents);

        this.updateElementWithAnimation('lost-items-count', this.data.lostItems.length);
        this.updateElementWithAnimation('skill-swaps-count', this.data.skillSwaps.length);
        this.updateElementWithAnimation('events-count', this.data.events.length);
        this.updateElementWithAnimation('capsules-count', this.data.timeCapsules.length);
        this.updateElementWithAnimation('books-count', this.data.books.length);
        this.updateElementWithAnimation('quizzes-count', this.data.quizzes.length);
    }

    updateElementWithAnimation(id, value) {
        const element = document.getElementById(id);
        if (element) {
            element.style.transform = 'scale(1.1)';
            element.textContent = value;
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 200);
        }
    }

    renderAllPages() {
        this.renderLostItems();
        this.renderSkillSwaps();
        this.renderEvents();
        this.renderTimeCapsules();
        this.renderBooks();
        this.renderQuizzes();
    }

    renderLostItems() {
        const categoryFilter = document.getElementById('category-filter')?.value || '';
        const locationFilter = document.getElementById('location-filter')?.value || '';

        const filteredItems = this.data.lostItems.filter(item => {
            return (!categoryFilter || item.category === categoryFilter) &&
                   (!locationFilter || item.location.includes(locationFilter));
        });

        const grid = document.getElementById('lost-items-grid');
        if (grid) {
            grid.innerHTML = filteredItems.map(item => `
                <div class="beautiful-item-card" style="animation: cardSlideIn 0.5s ease-out forwards;">
                    <img src="${item.image}" alt="${item.title}" class="item-image" loading="lazy">
                    <div class="item-content">
                        <h3 class="item-title">${item.title}</h3>
                        <p class="item-description">${item.description}</p>
                        <div class="item-meta">
                            <span class="glass-tag">${item.category}</span>
                            <span class="glass-tag">📍 ${item.location}</span>
                            <span class="glass-tag">📅 ${item.date}</span>
                            <span class="glass-tag">💰 ${item.reward}</span>
                        </div>
                        <div class="item-actions">
                            <strong style="background: linear-gradient(135deg, #43e97b, #38f9d7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">Reward: ${item.reward}</strong>
                            <button class="glass-btn primary contact-btn" data-contact="${item.contact}">
                                <span class="btn-icon">💬</span>
                                Contact Owner
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');

            this.setupContactButtons(grid);
        }
    }

    renderSkillSwaps() {
        const filteredSwaps = this.data.skillSwaps.filter(swap => swap.type === this.currentSkillTab);

        const grid = document.getElementById('skill-swaps-grid');
        if (grid) {
            grid.innerHTML = filteredSwaps.map((swap, index) => `
                <div class="beautiful-item-card" style="animation: cardSlideIn 0.5s ease-out ${index * 0.1}s forwards;">
                    <div class="item-content">
                        <h3 class="item-title">${swap.skill}</h3>
                        <p class="item-description">${swap.description}</p>
                        <div class="item-meta">
                            <span class="glass-tag">${swap.category}</span>
                            <span class="glass-tag">📊 ${swap.level}</span>
                            <span class="glass-tag">${swap.type === 'offer' ? '🎁 Offering' : '🔍 Requesting'}</span>
                            ${swap.rating ? `<span class="glass-tag">⭐ ${swap.rating}</span>` : ''}
                            ${swap.budget ? `<span class="glass-tag">💰 ${swap.budget}</span>` : ''}
                        </div>
                        <div class="item-actions">
                            ${swap.sessions ? `<span style="color: var(--color-success);">${swap.sessions} sessions completed</span>` : ''}
                            <button class="glass-btn primary contact-btn" data-contact="${swap.contact}">
                                <span class="btn-icon">🤝</span>
                                Connect
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');

            this.setupContactButtons(grid);
        }
    }

    renderEvents() {
        const grid = document.getElementById('events-grid');
        
        if (grid) {
            grid.innerHTML = this.data.events.map((event, index) => {
                const completedTasks = event.tasks.filter(task => task.completed).length;
                const totalTasks = event.tasks.length;
                const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

                return `
                    <div class="beautiful-item-card" style="animation: cardSlideIn 0.5s ease-out ${index * 0.1}s forwards;">
                        <img src="${event.image}" alt="${event.name}" class="item-image" loading="lazy">
                        <div class="item-content">
                            <h3 class="item-title">${event.name}</h3>
                            <div class="item-meta">
                                <span class="glass-tag">📅 ${event.date}</span>
                                <span class="glass-tag">⏰ ${event.time}</span>
                                <span class="glass-tag">📍 ${event.location}</span>
                                <span class="glass-tag">👥 ${event.participants} attending</span>
                            </div>
                            <p class="item-description">${event.description}</p>
                            
                            <div style="margin: 16px 0;">
                                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                    <strong>Progress</strong>
                                    <span>${progress}%</span>
                                </div>
                                <div style="background: rgba(255,255,255,0.2); height: 8px; border-radius: 4px; overflow: hidden;">
                                    <div style="background: linear-gradient(90deg, #43e97b, #38f9d7); height: 100%; width: ${progress}%; transition: width 0.5s ease;"></div>
                                </div>
                            </div>
                            
                            <div class="event-tasks">
                                <h4>Tasks (${completedTasks}/${totalTasks}):</h4>
                                ${event.tasks.map((task, taskIndex) => `
                                    <div class="task-item" style="display: flex; align-items: center; padding: 8px; margin: 4px 0; background: ${task.completed ? 'rgba(67, 233, 123, 0.2)' : 'rgba(255,255,255,0.1)'}; border-radius: 8px;">
                                        <input type="checkbox" ${task.completed ? 'checked' : ''} 
                                               data-event-id="${event.id}" data-task-index="${taskIndex}"
                                               style="margin-right: 8px;">
                                        <span style="flex: 1;">${task.name}</span>
                                        <span class="glass-tag" style="margin-left: 8px;">${task.assigned}</span>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            this.setupTaskCheckboxes(grid);
        }
    }

    renderTimeCapsules() {
        const grid = document.getElementById('capsules-grid');
        
        if (grid) {
            grid.innerHTML = this.data.timeCapsules.map((capsule, index) => {
                const unlockDate = new Date(capsule.unlockDate);
                const now = new Date();
                const timeLeft = unlockDate - now;
                const daysLeft = Math.ceil(timeLeft / (1000 * 60 * 60 * 24));
                
                const moodEmoji = {
                    'hopeful': '🌟',
                    'nostalgic': '💭',
                    'determined': '💪',
                    'conflicted': '🤔'
                }[capsule.mood] || '✨';
                
                return `
                    <div class="beautiful-item-card" style="background: linear-gradient(135deg, rgba(102, 126, 234, 0.2), rgba(118, 75, 162, 0.2)); animation: cardSlideIn 0.5s ease-out ${index * 0.1}s forwards;">
                        <div class="item-content">
                            <div class="glass-tag" style="margin-bottom: 12px;">${capsule.type}</div>
                            <h3 class="item-title">${moodEmoji} ${capsule.title}</h3>
                            <p class="item-description">${capsule.message}</p>
                            
                            <div style="text-align: center; margin: 20px 0;">
                                <div style="font-size: 2rem; font-weight: 800; background: linear-gradient(135deg, #fa709a, #fee140); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    ${daysLeft > 0 ? `${daysLeft} days` : 'Ready!'}
                                </div>
                                <div style="color: var(--color-text-secondary);">
                                    ${daysLeft > 0 ? 'to unlock' : 'Open your time capsule'}
                                </div>
                            </div>
                            
                            <div class="item-meta">
                                <span class="glass-tag">🗓️ Unlock: ${capsule.unlockDate}</span>
                                <span class="glass-tag">📝 Created: ${capsule.created}</span>
                                <span class="glass-tag">📂 ${capsule.category}</span>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
        }
    }

    renderBooks() {
        const subjectFilter = document.getElementById('subject-filter')?.value || '';
        const conditionFilter = document.getElementById('condition-filter')?.value || '';

        const filteredBooks = this.data.books.filter(book => {
            return (!subjectFilter || book.subject === subjectFilter) &&
                   (!conditionFilter || book.condition === conditionFilter);
        });

        const grid = document.getElementById('books-grid');
        if (grid) {
            grid.innerHTML = filteredBooks.map((book, index) => `
                <div class="beautiful-item-card" style="animation: cardSlideIn 0.5s ease-out ${index * 0.1}s forwards;">
                    <img src="${book.image}" alt="${book.title}" class="item-image" loading="lazy">
                    <div class="item-content">
                        <h3 class="item-title">${book.title}</h3>
                        <p class="item-description">by ${book.author}</p>
                        <div class="item-meta">
                            <span class="glass-tag">${book.subject}</span>
                            <span class="glass-tag">📚 ${book.condition}</span>
                            <span class="glass-tag">🗓️ ${book.semester}</span>
                            <span class="glass-tag">${book.type === 'sell' ? '💰 For Sale' : '🔄 Exchange'}</span>
                        </div>
                        <div class="item-actions">
                            <div style="text-align: center;">
                                <div style="font-size: 1.5rem; font-weight: 700; background: linear-gradient(135deg, #4facfe, #00f2fe); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    ${book.price}
                                </div>
                                ${book.originalPrice ? `<div style="color: var(--color-text-secondary); text-decoration: line-through; font-size: 0.9rem;">Was: ${book.originalPrice}</div>` : ''}
                            </div>
                            <button class="glass-btn primary contact-btn" data-contact="${book.contact}">
                                <span class="btn-icon">📞</span>
                                Contact Seller
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');

            this.setupContactButtons(grid);
        }
    }

    renderQuizzes() {
        const grid = document.getElementById('quizzes-grid');
        
        if (grid) {
            grid.innerHTML = this.data.quizzes.map((quiz, index) => `
                <div class="beautiful-item-card" style="animation: cardSlideIn 0.5s ease-out ${index * 0.1}s forwards;">
                    <div class="item-content">
                        <div class="glass-tag" style="margin-bottom: 12px;">${quiz.difficulty}</div>
                        <h3 class="item-title">🎯 ${quiz.subject}</h3>
                        <p class="item-description">${quiz.questions.length} questions • ${quiz.totalQuestions} total available</p>
                        
                        ${quiz.score !== null ? `
                            <div style="text-align: center; margin: 16px 0;">
                                <div style="font-size: 2.5rem; font-weight: 800; background: linear-gradient(135deg, #43e97b, #38f9d7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                    ${quiz.score}%
                                </div>
                                <div style="color: var(--color-success);">Last Score</div>
                            </div>
                        ` : `
                            <div style="text-align: center; margin: 16px 0;">
                                <div style="font-size: 2rem;">🚀</div>
                                <div style="color: var(--color-text-secondary);">Ready to start!</div>
                            </div>
                        `}
                        
                        <div class="item-actions">
                            <span style="color: var(--color-text-secondary);">Attempts: ${quiz.attempts}</span>
                            <button class="glass-btn primary quiz-start-btn" data-quiz-id="${quiz.id}">
                                <span class="btn-icon">${quiz.score !== null ? '🔄' : '▶️'}</span>
                                ${quiz.score !== null ? 'Retake Quiz' : 'Start Quiz'}
                            </button>
                        </div>
                    </div>
                </div>
            `).join('');

            this.setupQuizButtons(grid);
        }
    }

    // Modal Functions with Animations
    openModalWithAnimation(title, content) {
        const modal = document.getElementById('modal');
        const modalTitle = document.getElementById('modal-title');
        const modalBody = document.getElementById('modal-body');
        
        if (modal && modalTitle && modalBody) {
            modalTitle.textContent = title;
            modalBody.innerHTML = content;
            modal.classList.remove('hidden');
            
            // Add entrance animation
            const modalContent = modal.querySelector('.glass-modal-content');
            if (modalContent) {
                modalContent.style.transform = 'scale(0.9) translateY(-20px)';
                modalContent.style.opacity = '0';
                
                setTimeout(() => {
                    modalContent.style.transition = 'all 0.3s ease-out';
                    modalContent.style.transform = 'scale(1) translateY(0)';
                    modalContent.style.opacity = '1';
                }, 10);
            }
        }
    }

    closeModalWithAnimation() {
        const modal = document.getElementById('modal');
        const modalContent = modal?.querySelector('.glass-modal-content');
        
        if (modalContent) {
            modalContent.style.transform = 'scale(0.9) translateY(-20px)';
            modalContent.style.opacity = '0';
            
            setTimeout(() => {
                modal.classList.add('hidden');
                modalContent.style.transform = '';
                modalContent.style.opacity = '';
                modalContent.style.transition = '';
            }, 300);
        }
    }

    showSuccessWithAnimation(message) {
        const successElement = document.getElementById('success-message');
        const successText = document.getElementById('success-text');
        
        if (successElement && successText) {
            successText.textContent = message;
            successElement.classList.remove('hidden');
            
            setTimeout(() => {
                successElement.classList.add('hidden');
            }, 4000);
        }
    }

    showLoadingSpinner() {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
            spinner.classList.remove('hidden');
        }
    }

    hideLoadingSpinner() {
        const spinner = document.getElementById('loading-spinner');
        if (spinner) {
            spinner.classList.add('hidden');
        }
    }

    // Setup helper functions
    setupContactButtons(container) {
        container.querySelectorAll('.contact-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const email = btn.getAttribute('data-contact');
                this.animateButtonClick(btn);
                setTimeout(() => {
                    this.contactOwner(email);
                }, 150);
            });
        });
    }

    setupTaskCheckboxes(container) {
        container.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.addEventListener('change', (e) => {
                const eventId = parseInt(checkbox.getAttribute('data-event-id'));
                const taskIndex = parseInt(checkbox.getAttribute('data-task-index'));
                this.toggleTask(eventId, taskIndex);
            });
        });
    }

    setupQuizButtons(container) {
        container.querySelectorAll('.quiz-start-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const quizId = parseInt(btn.getAttribute('data-quiz-id'));
                this.animateButtonClick(btn);
                setTimeout(() => {
                    this.startQuiz(quizId);
                }, 150);
            });
        });
    }

    // Form methods (simplified for demo)
    openLostItemForm() {
        const content = `
            <form class="beautiful-form">
                <div class="form-group">
                    <label class="form-label">✨ Item Title</label>
                    <input type="text" class="form-control" placeholder="What did you lose?">
                </div>
                <div class="form-group">
                    <label class="form-label">📍 Last Seen Location</label>
                    <input type="text" class="form-control" placeholder="Where did you last see it?">
                </div>
                <div class="form-group">
                    <label class="form-label">📝 Description</label>
                    <textarea class="form-control" rows="3" placeholder="Describe your item in detail..."></textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="glass-btn secondary" onclick="app.closeModalWithAnimation()">Cancel</button>
                    <button type="button" class="glass-btn primary" onclick="app.submitDemo('Lost item posted successfully! 🎉')">Post Item</button>
                </div>
            </form>
        `;
        this.openModalWithAnimation('🎒 Post Lost Item', content);
    }

    openSkillForm(type) {
        const content = `
            <form class="beautiful-form">
                <div class="form-group">
                    <label class="form-label">${type === 'offer' ? '🎯' : '🔍'} Skill Name</label>
                    <input type="text" class="form-control" placeholder="What skill are you ${type === 'offer' ? 'offering' : 'requesting'}?">
                </div>
                <div class="form-group">
                    <label class="form-label">📊 Experience Level</label>
                    <select class="form-control glass-select">
                        <option>Beginner</option>
                        <option>Intermediate</option>
                        <option>Advanced</option>
                        <option>Expert</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">📝 Description</label>
                    <textarea class="form-control" rows="3" placeholder="Tell us more about this skill..."></textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="glass-btn secondary" onclick="app.closeModalWithAnimation()">Cancel</button>
                    <button type="button" class="glass-btn primary" onclick="app.submitDemo('Skill ${type} posted! ✨')">Post ${type === 'offer' ? 'Offer' : 'Request'}</button>
                </div>
            </form>
        `;
        this.openModalWithAnimation(`${type === 'offer' ? '🎁 Offer a Skill' : '🙋‍♂️ Request a Skill'}`, content);
    }

    openEventForm() {
        const content = `
            <form class="beautiful-form">
                <div class="form-group">
                    <label class="form-label">🎉 Event Name</label>
                    <input type="text" class="form-control" placeholder="What's your event called?">
                </div>
                <div class="form-group">
                    <label class="form-label">📅 Event Date</label>
                    <input type="date" class="form-control">
                </div>
                <div class="form-group">
                    <label class="form-label">📝 Description</label>
                    <textarea class="form-control" rows="3" placeholder="Describe your amazing event..."></textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="glass-btn secondary" onclick="app.closeModalWithAnimation()">Cancel</button>
                    <button type="button" class="glass-btn primary" onclick="app.submitDemo('Event created successfully! 🎊')">Create Event</button>
                </div>
            </form>
        `;
        this.openModalWithAnimation('✨ Create Event', content);
    }

    openCapsuleForm() {
        const content = `
            <form class="beautiful-form">
                <div class="form-group">
                    <label class="form-label">💭 Message to Future You</label>
                    <textarea class="form-control" rows="4" placeholder="Write something for your future self..."></textarea>
                </div>
                <div class="form-group">
                    <label class="form-label">🗓️ When to Open</label>
                    <input type="date" class="form-control">
                </div>
                <div class="form-group">
                    <label class="form-label">🏷️ Capsule Type</label>
                    <select class="form-control glass-select">
                        <option>Personal Goal</option>
                        <option>Graduation</option>
                        <option>Career Milestone</option>
                        <option>Holiday Memory</option>
                    </select>
                </div>
                <div class="form-actions">
                    <button type="button" class="glass-btn secondary" onclick="app.closeModalWithAnimation()">Cancel</button>
                    <button type="button" class="glass-btn primary" onclick="app.submitDemo('Time capsule created! ⏳✨')">Create Capsule</button>
                </div>
            </form>
        `;
        this.openModalWithAnimation('⏳ Create Time Capsule', content);
    }

    openBookForm() {
        const content = `
            <form class="beautiful-form">
                <div class="form-group">
                    <label class="form-label">📖 Book Title</label>
                    <input type="text" class="form-control" placeholder="What book are you selling?">
                </div>
                <div class="form-group">
                    <label class="form-label">✍️ Author</label>
                    <input type="text" class="form-control" placeholder="Who wrote it?">
                </div>
                <div class="form-group">
                    <label class="form-label">💰 Price</label>
                    <input type="text" class="form-control" placeholder="How much? (or trade details)">
                </div>
                <div class="form-group">
                    <label class="form-label">📚 Condition</label>
                    <select class="form-control glass-select">
                        <option>Like New</option>
                        <option>Very Good</option>
                        <option>Good</option>
                        <option>Fair</option>
                    </select>
                </div>
                <div class="form-actions">
                    <button type="button" class="glass-btn secondary" onclick="app.closeModalWithAnimation()">Cancel</button>
                    <button type="button" class="glass-btn primary" onclick="app.submitDemo('Book posted for sale! 📚✨')">Post Book</button>
                </div>
            </form>
        `;
        this.openModalWithAnimation('📚 Post Book', content);
    }

    openNotesForm() {
        const content = `
            <form class="beautiful-form">
                <div class="form-group">
                    <label class="form-label">📚 Subject</label>
                    <select class="form-control glass-select">
                        <option>Computer Science</option>
                        <option>Mathematics</option>
                        <option>Physics</option>
                        <option>Chemistry</option>
                        <option>Biology</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="form-label">📝 Study Material</label>
                    <textarea class="form-control" rows="6" placeholder="Paste your notes, syllabus, or key concepts here..."></textarea>
                </div>
                <div class="form-actions">
                    <button type="button" class="glass-btn secondary" onclick="app.closeModalWithAnimation()">Cancel</button>
                    <button type="button" class="glass-btn primary" onclick="app.submitDemo('AI quiz generated from your notes! 🤖✨')">Generate Quiz</button>
                </div>
            </form>
        `;
        this.openModalWithAnimation('📝 Upload Study Material', content);
    }

    startQuiz(quizId) {
        const quiz = this.data.quizzes.find(q => q.id === quizId);
        if (!quiz) return;

        // Show first question with beautiful UI
        const question = quiz.questions[0];
        const content = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <h3>🎯 ${quiz.subject}</h3>
                    <div class="quiz-progress">
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: 33%"></div>
                        </div>
                        <span>Question 1 of ${quiz.questions.length}</span>
                    </div>
                </div>
                
                <div class="quiz-question">
                    <h4>${question.question}</h4>
                    <div class="quiz-options">
                        ${question.options.map((option, index) => `
                            <button class="quiz-option glass-btn secondary" data-answer="${index}">
                                ${String.fromCharCode(65 + index)}. ${option}
                            </button>
                        `).join('')}
                    </div>
                </div>
                
                <div class="form-actions">
                    <button type="button" class="glass-btn secondary" onclick="app.closeModalWithAnimation()">Exit Quiz</button>
                    <button type="button" class="glass-btn primary" id="next-question" disabled>Next Question</button>
                </div>
            </div>
        `;
        
        this.openModalWithAnimation(`${quiz.subject} Quiz`, content);
        
        // Setup quiz interactions
        document.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.quiz-option').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                document.getElementById('next-question').disabled = false;
            });
        });
        
        document.getElementById('next-question').addEventListener('click', () => {
            this.showQuizResult(quiz, Math.floor(Math.random() * 100) + 70); // Demo score
        });
    }

    showQuizResult(quiz, score) {
        const content = `
            <div style="text-align: center; padding: 20px;">
                <div style="font-size: 4rem; margin-bottom: 20px;">
                    ${score >= 90 ? '🏆' : score >= 70 ? '🎉' : '📚'}
                </div>
                <h3>Quiz Complete!</h3>
                <div style="font-size: 3rem; font-weight: 800; background: linear-gradient(135deg, #43e97b, #38f9d7); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin: 20px 0;">
                    ${score}%
                </div>
                <p style="color: var(--color-text-secondary); margin-bottom: 30px;">
                    ${score >= 90 ? 'Outstanding performance! 🌟' : score >= 70 ? 'Great job! Keep it up! 💪' : 'Good effort! Try again to improve! 📈'}
                </p>
                <div class="form-actions">
                    <button type="button" class="glass-btn primary" onclick="app.closeModalWithAnimation(); app.showSuccessWithAnimation('Quiz completed! Score: ${score}% 🎯')">Continue</button>
                </div>
            </div>
        `;
        
        const modal = document.getElementById('modal');
        const modalBody = document.getElementById('modal-body');
        if (modalBody) {
            modalBody.innerHTML = content;
        }
        
        // Update quiz score in data
        quiz.score = score;
        quiz.attempts = (quiz.attempts || 0) + 1;
    }

    toggleTask(eventId, taskIndex) {
        const event = this.data.events.find(e => e.id === eventId);
        if (event && event.tasks[taskIndex]) {
            event.tasks[taskIndex].completed = !event.tasks[taskIndex].completed;
            this.showSuccessWithAnimation(`Task ${event.tasks[taskIndex].completed ? 'completed' : 'reopened'}! ✅`);
            
            // Re-render with animation
            setTimeout(() => {
                this.renderEvents();
            }, 500);
        }
    }

    contactOwner(email) {
        this.showSuccessWithAnimation(`Opening email to contact ${email} 📧✨`);
        // In a real app, this would open the email client
        if (typeof window !== 'undefined') {
            try {
                window.open(`mailto:${email}`, '_blank');
            } catch (e) {
                console.log('Email client not available');
            }
        }
    }

    submitDemo(message) {
        this.showLoadingSpinner();
        setTimeout(() => {
            this.hideLoadingSpinner();
            this.closeModalWithAnimation();
            this.showSuccessWithAnimation(message);
        }, 1000);
    }
}

// Add CSS animations via JavaScript
const style = document.createElement('style');
style.textContent = `
    @keyframes cardSlideIn {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes pageSlideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(-30px);
        }
    }
    
    .quiz-option.active {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important;
        color: white !important;
        transform: scale(1.02);
    }
    
    .beautiful-form .form-control:focus {
        transform: scale(1.02);
        box-shadow: 0 0 20px rgba(102, 126, 234, 0.3) !important;
    }
    
    .quiz-container {
        padding: 20px;
    }
    
    .quiz-header {
        text-align: center;
        margin-bottom: 30px;
    }
    
    .quiz-progress {
        margin-top: 15px;
    }
    
    .quiz-progress .progress-bar {
        background: rgba(255,255,255,0.2);
        height: 8px;
        border-radius: 4px;
        overflow: hidden;
        margin-bottom: 8px;
    }
    
    .quiz-progress .progress-fill {
        background: linear-gradient(90deg, #43e97b, #38f9d7);
        height: 100%;
        transition: width 0.5s ease;
    }
    
    .quiz-question {
        margin: 30px 0;
    }
    
    .quiz-options {
        display: grid;
        gap: 10px;
        margin-top: 20px;
    }
    
    .quiz-option {
        text-align: left !important;
        padding: 15px 20px !important;
        transition: all 0.3s ease !important;
    }
    
    .quiz-option:hover {
        background: rgba(255,255,255,0.2) !important;
        transform: translateX(5px);
    }
`;
document.head.appendChild(style);

// Initialize the beautiful app
window.app = new StudentLifeSuperApp();