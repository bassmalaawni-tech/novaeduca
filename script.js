document.addEventListener('DOMContentLoaded', () => {
    // Internationalization Translations Dictionary
    const translations = {
        fr: {
            auth_desc: "NOVA t'accompagne dans ton apprentissage, tes activités, tes compétences et tes objectifs scolaires.",
            badge_interactive: "✨ Cours interactifs",
            badge_rhythm: "🎯 Progrès à ton rythme",
            badge_rewards: "🏆 Badges et récompenses",
            auth_quote: "« L'éducation est l'arme la plus puissante qu'on puisse utiliser pour changer le monde. » — Nelson Mandela",
            create_account_title: "Créer ton compte",
            create_account_subtitle: "Rejoins NOVA et commence ton aventure d'apprentissage !",
            label_nom: "Nom",
            label_prenom: "Prénom",
            label_age: "Âge",
            label_role: "Je suis",
            role_eleve: "Élève",
            role_enseignant: "Enseignant",
            role_etablissement: "Établissement",
            label_niveau: "Niveau scolaire",
            niv_1: "1ère année collège",
            niv_2: "2ème année collège",
            niv_3: "3ème année collège",
            niv_lycee: "Lycée",
            label_email: "Adresse e-mail",
            label_code: "Code de sécurité (8 chiffres)",
            label_confirm_code: "Confirmer le code (8 chiffres)",
            btn_create: "Créer mon compte",
            have_account: "Tu as déjà un compte ?",
            link_login: "Se connecter",
            login_title: "Connexion à ton espace",
            btn_login: "Se connecter",
            no_account: "Pas encore de compte ?",
            link_register: "Créer un compte",
            btn_logout: "🚪 Déconnexion",
            bot_welcome: "Bonjour ! Je suis ton assistant NOVA. Comment puis-je t'aider dans ton apprentissage aujourd'hui ?",
            qr_lesson: "« Explique-moi cette leçon »",
            qr_exercise: "« Aide-moi avec cet exercice »",
            qr_plan: "« Que dois-je faire aujourd'hui ? »",
            qr_improve: "« Comment améliorer mon français ? »",
            slogan: "Apprendre. Progresser. Réussir."
        },
        ar: {
            auth_desc: "نوفا ترافقك في تعلمك، أنشطتك، مهاراتك وأهدافك المدرسية.",
            badge_interactive: "✨ دروس تفاعلية",
            badge_rhythm: "🎯 تقدم بالوتيرة التي تناسبك",
            badge_rewards: "🏆 شارات ومكافآت",
            auth_quote: "« التعليم هو السلاح الأقوى الذي يمكنك استخدامه لتغيير العالم. » — نيلسون مانديلا",
            create_account_title: "إنشاء حسابك",
            create_account_subtitle: "انضم إلى نوفا وابدأ مغامرتك التعلمية!",
            label_nom: "النسب",
            label_prenom: "الاسم الشخصي",
            label_age: "العمر",
            label_role: "أنا",
            role_eleve: "تلميذ",
            role_enseignant: "أستاذ",
            role_etablissement: "مؤسسة",
            label_niveau: "المستوى الدراسي",
            niv_1: "الأولى إعدادي",
            niv_2: "الثانية إعدادي",
            niv_3: "الثالثة إعدادي",
            niv_lycee: "الثانوي التأهيلي",
            label_email: "البريد الإلكتروني",
            label_code: "رمز الأمان (8 أرقام)",
            label_confirm_code: "تأكيد الرمز (8 أرقام)",
            btn_create: "إنشاء حسابي",
            have_account: "هل لديك حساب بالفعل؟",
            link_login: "تسجيل الدخول",
            login_title: "تسجيل الدخول إلى فضائك",
            btn_login: "تسجيل الدخول",
            no_account: "ليس لديك حساب بعد؟",
            link_register: "إنشاء حساب",
            btn_logout: "🚪 تسجيل الخروج",
            bot_welcome: "مرحباً! أنا مساعد نوفا. كيف يمكنني مساعدتك في تعلمك اليوم؟",
            qr_lesson: "« اشرح لي هذا الدرس »",
            qr_exercise: "« ساعدني في هذا التمرين »",
            qr_plan: "« ماذا يجب أن أفعل اليوم؟ »",
            qr_improve: "« كيف أطور مستواي في الفرنسية؟ »",
            slogan: "تعلم. تقدم. انحج."
        },
        en: {
            auth_desc: "NOVA supports you in your learning, activities, skills and academic goals.",
            badge_interactive: "✨ Interactive courses",
            badge_rhythm: "🎯 Learn at your own pace",
            badge_rewards: "🏆 Badges and rewards",
            auth_quote: "« Education is the most powerful weapon which you can use to change the world. » — Nelson Mandela",
            create_account_title: "Create your account",
            create_account_subtitle: "Join NOVA and start your learning journey!",
            label_nom: "Last Name",
            label_prenom: "First Name",
            label_age: "Age",
            label_role: "I am",
            role_eleve: "Student",
            role_enseignant: "Teacher",
            role_etablissement: "Institution",
            label_niveau: "Grade Level",
            niv_1: "1st year middle school",
            niv_2: "2nd year middle school",
            niv_3: "3rd year middle school",
            niv_lycee: "High School",
            label_email: "Email address",
            label_code: "Security Code (8 digits)",
            label_confirm_code: "Confirm Code (8 digits)",
            btn_create: "Create my account",
            have_account: "Already have an account?",
            link_login: "Log in",
            login_title: "Log in to your space",
            btn_login: "Log in",
            no_account: "Don't have an account?",
            link_register: "Create account",
            btn_logout: "🚪 Logout",
            bot_welcome: "Hello! I am your NOVA assistant. How can I help you with your learning today?",
            qr_lesson: "« Explain this lesson »",
            qr_exercise: "« Help me with this exercise »",
            qr_plan: "« What should I do today? »",
            qr_improve: "« How to improve my French? »",
            slogan: "Learn. Progress. Succeed."
        }
    };

    // State Management
    let currentUser = JSON.parse(localStorage.getItem('nova_current_user')) || null;
    let currentLang = localStorage.getItem('nova_lang') || 'fr';
    let currentTheme = localStorage.getItem('nova_theme') || 'light';

    // DOM Elements
    const authView = document.getElementById('auth-view');
    const appView = document.getElementById('app-view');
    const registerScreen = document.getElementById('register-screen');
    const loginScreen = document.getElementById('login-screen');
    const showLoginBtn = document.getElementById('show-login');
    const showRegisterBtn = document.getElementById('show-register');
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');
    const roleSelect = document.getElementById('reg-role');
    const niveauGroup = document.getElementById('niveau-scolaire-group');
    
    // Theme & Lang Controls
    const themeToggles = [document.getElementById('theme-toggle-auth'), document.getElementById('theme-toggle-login'), document.getElementById('theme-toggle-app')];
    const langSelects = [document.getElementById('global-lang-select'), document.getElementById('global-lang-select-login'), document.getElementById('app-lang-select')];

    // Initialize Theme & Lang
    applyTheme(currentTheme);
    applyLanguage(currentLang);

    roleSelect.addEventListener('change', () => {
        if (roleSelect.value === 'eleve') {
            niveauGroup.classList.remove('hidden');
        } else {
            niveauGroup.classList.add('hidden');
        }
    });

    themeToggles.forEach(btn => {
        if (btn) {
            btn.addEventListener('click', () => {
                currentTheme = currentTheme === 'light' ? 'dark' : 'light';
                localStorage.setItem('nova_theme', currentTheme);
                applyTheme(currentTheme);
            });
        }
    });

    langSelects.forEach(sel => {
        if (sel) {
            sel.value = currentLang;
            sel.addEventListener('change', (e) => {
                currentLang = e.target.value;
                localStorage.setItem('nova_lang', currentLang);
                applyLanguage(currentLang);
                langSelects.forEach(s => { if(s) s.value = currentLang; });
            });
        }
    });

    showLoginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        registerScreen.classList.remove('active');
        loginScreen.classList.add('active');
    });

    showRegisterBtn.addEventListener('click', (e) => {
        e.preventDefault();
        loginScreen.classList.remove('active');
        registerScreen.classList.add('active');
    });

    // Registration Handler with strict validations
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nom = document.getElementById('reg-nom').value.trim();
        const prenom = document.getElementById('reg-prenom').value.trim();
        const age = document.getElementById('reg-age').value;
        const role = document.getElementById('reg-role').value;
        const niveau = document.getElementById('reg-niveau').value;
        const email = document.getElementById('reg-email').value.trim();
        const code = document.getElementById('reg-code').value;
        const confirm = document.getElementById('reg-confirm').value;

        if (!email.includes('@')) {
            showToast("Veuillez entrer une adresse e-mail valide.", "error");
            return;
        }
        if (!/^\d{8}$/.test(code)) {
            showToast("Le code de sécurité doit comporter exactement 8 chiffres.", "error");
            return;
        }
        if (code !== confirm) {
            showToast("Les codes de sécurité ne correspondent pas.", "error");
            return;
        }

        let users = JSON.parse(localStorage.getItem('nova_users')) || [];
        if (users.find(u => u.email === email)) {
            showToast("Cet e-mail est déjà utilisé.", "error");
            return;
        }

        const newUser = {
            nom, prenom, age, role, niveau: role === 'eleve' ? niveau : null, email, code,
            coursesCompleted: 0,
            badges: 0,
            testsDone: 0,
            tasks: [
                { id: 1, title: "Le passé composé", type: "Cours", status: "commencer" },
                { id: 2, title: "Exercices sur l'accord", type: "Activité", status: "faire" },
                { id: 3, title: "Dictée : Le Voyage", type: "Test", status: "commencer" }
            ],
            competences: { grammaire: "En cours", conjugaison: "En cours", orthographe: "À renforcer", lecture: "À découvrir" }
        };

        users.push(newUser);
        localStorage.setItem('nova_users', JSON.stringify(users));
        localStorage.setItem('nova_current_user', JSON.stringify(newUser));
        currentUser = newUser;
        
        showToast("Compte créé avec succès ! Bienvenue sur NOVA.", "success");
        initApp();
    });

    // Login Handler
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('log-email').value.trim();
        const code = document.getElementById('log-code').value;

        let users = JSON.parse(localStorage.getItem('nova_users')) || [];
        const found = users.find(u => u.email === email && u.code === code);

        if (!found) {
            showToast("Identifiants incorrects ou utilisateur introuvable.", "error");
            return;
        }

        currentUser = found;
        localStorage.setItem('nova_current_user', JSON.stringify(currentUser));
        showToast(`Bon retour, ${currentUser.prenom} !`, "success");
        initApp();
    });

    logoutBtn.addEventListener('click', () => {
        localStorage.removeItem('nova_current_user');
        currentUser = null;
        appView.classList.add('hidden');
        authView.classList.remove('hidden');
        loginScreen.classList.remove('active');
        registerScreen.classList.add('active');
        showToast("Déconnexion réussie.", "success");
    });

    // Check Session on Load
    if (currentUser) {
        initApp();
    }

    function initApp() {
        authView.classList.add('hidden');
        appView.classList.remove('hidden');
        
        document.getElementById('sidebar-username').textContent = `${currentUser.prenom} ${currentUser.nom}`;
        document.getElementById('sidebar-role-badge').textContent = currentUser.role.toUpperCase();
        document.getElementById('sidebar-avatar').textContent = currentUser.prenom.charAt(0).toUpperCase();

        renderSidebarNav();
        loadRoleDashboard();
        initBot();
    }

    function renderSidebarNav() {
        const nav = document.getElementById('dynamic-nav');
        nav.innerHTML = '';
        
        let links = [];
        if (currentUser.role === 'eleve') {
            links = [
                { icon: '🏠', label: 'Accueil', view: 'accueil' },
                { icon: '📚', label: 'Mes cours', view: 'cours' },
                { icon: '📝', label: 'Mes activités', view: 'activites' },
                { icon: '🏆', label: 'Mes badges', view: 'badges' },
                { icon: '📈', label: 'Mes progrès', view: 'progres' },
                { icon: '🎯', label: 'Mes compétences', view: 'competences' },
                { icon: '💬', label: 'NOVA Bot', view: 'bot' }
            ];
        } else if (currentUser.role === 'enseignant') {
            links = [
                { icon: '🏠', label: 'Accueil', view: 'ens_accueil' },
                { icon: '👥', label: 'Mes classes', view: 'ens_classes' },
                { icon: '📚', label: 'Mes cours', view: 'ens_cours' },
                { icon: '📊', label: 'Résultats', view: 'ens_resultats' },
                { icon: '🎯', label: 'Compétences', view: 'ens_competences' }
            ];
        } else if (currentUser.role === 'etablissement') {
            links = [
                { icon: '🏠', label: 'Tableau de bord', view: 'etab_accueil' },
                { icon: '📊', label: 'Analyses', view: 'etab_analyses' },
                { icon: '🎓', label: 'Formations', view: 'etab_formations' },
                { icon: '👥', label: 'Élèves', view: 'etab_eleves' },
                { icon: '🏆', label: 'Certifications', view: 'etab_certifs' }
            ];
        }

        links.forEach(l => {
            const a = document.createElement('a');
            a.href = '#';
            a.className = 'nav-item';
            a.innerHTML = `<span>${l.icon}</span> <span>${l.label}</span>`;
            a.addEventListener('click', (e) => {
                e.preventDefault();
                document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
                a.classList.add('active');
                document.getElementById('current-page-title').textContent = l.label;
                loadView(l.view);
            });
            nav.appendChild(a);
        });

        // Trigger first link
        nav.firstChild.click();
    }

    function loadView(viewName) {
        const body = document.getElementById('content-body');
        body.innerHTML = '';

        if (viewName === 'accueil' && currentUser.role === 'eleve') {
            body.innerHTML = `
                <div class="welcome-banner">
                    <h2>Bonjour ${currentUser.prenom} 👋</h2>
                    <p>Prêt à apprendre aujourd'hui ?</p>
                </div>
                <div class="dashboard-grid">
                    <div class="card">
                        <h3>À faire aujourd'hui</h3>
                        <div class="task-list">
                            ${currentUser.tasks.map(t => `
                                <div class="task-item">
                                    <div class="task-info">
                                        <h4>📖 ${t.title}</h4>
                                        <span>Type : ${t.type}</span>
                                    </div>
                                    <button class="btn-action ${t.status === 'terminé' ? 'completed' : ''}" onclick="completeTask(${t.id})">
                                        ${t.status === 'terminé' ? 'Terminé ✓' : 'Commencer'}
                                    </button>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    <div class="card">
                        <h3>Progression globale</h3>
                        <p>Cours terminés : <strong>${currentUser.coursesCompleted}</strong></p>
                        <p>Badges débloqués : <strong>${currentUser.badges}</strong></p>
                        <p>Tests réalisés : <strong>${currentUser.testsDone}</strong></p>
                    </div>
                </div>
            `;
        } else if (viewName === 'cours') {
            body.innerHTML = `
                <h2>Modules de Français — Collège</h2>
                <div class="modules-grid" style="margin-top: 1.5rem;">
                    <div class="module-card">
                        <h3>Module 1 — Grammaire</h3>
                        <p>Les types et formes de phrases.</p>
                        <button class="btn-primary" onclick="startQuiz('Grammaire')">Lancer le quiz</button>
                    </div>
                    <div class="module-card">
                        <h3>Module 2 — Conjugaison</h3>
                        <p>Présent, Imparfait, Passé composé.</p>
                        <button class="btn-primary" onclick="startQuiz('Conjugaison')">Lancer le quiz</button>
                    </div>
                    <div class="module-card">
                        <h3>Module 3 — Orthographe</h3>
                        <p>Accord sujet/verbe, homophones.</p>
                        <button class="btn-primary" onclick="startQuiz('Orthographe')">Lancer le quiz</button>
                    </div>
                </div>
            `;
        } else if (viewName === 'badges') {
            body.innerHTML = `
                <h2>Mes Badges et Récompenses</h2>
                <div class="card" style="margin-top: 1.5rem;">
                    <p>Badges obtenus : <strong>${currentUser.badges}</strong></p>
                    <p style="margin-top: 1rem; color: var(--text-secondary);">Termine des cours et des activités pour débloquer de nouveaux badges (Premier pas, Maître de la grammaire, etc.).</p>
                </div>
            `;
        } else if (viewName === 'progres') {
            body.innerHTML = `
                <h2>Mes Progrès</h2>
                <div class="card" style="margin-top: 1.5rem;">
                    <p>Activités terminées : <strong>${currentUser.coursesCompleted}</strong></p>
                    <p>Tests validés : <strong>${currentUser.testsDone}</strong></p>
                    <p>Temps d'apprentissage estimé : <strong>${currentUser.coursesCompleted * 15} minutes</strong></p>
                </div>
            `;
        } else if (viewName === 'competences') {
            body.innerHTML = `
                <h2>Mes Compétences</h2>
                <div class="modules-grid" style="margin-top: 1.5rem;">
                    ${Object.entries(currentUser.competences).map(([k, v]) => `
                        <div class="module-card">
                            <h3 style="text-transform: capitalize;">${k}</h3>
                            <p>Statut : <strong>${v}</strong></p>
                        </div>
                    `).join('')}
                </div>
            `;
        } else if (currentUser.role === 'enseignant') {
            let allUsers = JSON.parse(localStorage.getItem('nova_users')) || [];
            let eleves = allUsers.filter(u => u.role === 'eleve');
            body.innerHTML = `
                <h2>Tableau de bord Enseignant</h2>
                <div class="dashboard-grid" style="margin-top: 1.5rem;">
                    <div class="card">
                        <h3>Ma classe (Élèves inscrits)</h3>
                        ${eleves.length === 0 ? '<p>Aucun élève inscrit pour le moment.</p>' : `
                            <ul style="padding-left: 1.2rem;">
                                ${eleves.map(e => `<li>${e.prenom} ${e.nom} — ${e.niveau || 'Collège'} (Cours finis: ${e.coursesCompleted})</li>`).join('')}
                            </ul>
                        `}
                    </div>
                    <div class="card">
                        <h3>Indicateur d'engagement global</h3>
                        <p>Basé sur les connexions et activités des élèves inscrits.</p>
                        <h2 style="color: var(--primary-color); margin-top: 1rem;">${eleves.length > 0 ? 'Actif' : 'En attente d\'élèves'}</h2>
                    </div>
                </div>
            `;
        } else if (currentUser.role === 'etablissement') {
            let allUsers = JSON.parse(localStorage.getItem('nova_users')) || [];
            let eleves = allUsers.filter(u => u.role === 'eleve');
            let enseignants = allUsers.filter(u => u.role === 'enseignant');
            body.innerHTML = `
                <h2>Tableau de bord Établissement</h2>
                <div class="modules-grid" style="margin-top: 1.5rem;">
                    <div class="module-card">
                        <h3>Total Élèves Actifs</h3>
                        <h2>${eleves.length}</h2>
                    </div>
                    <div class="module-card">
                        <h3>Total Enseignants</h3>
                        <h2>${enseignants.length}</h2>
                    </div>
                    <div class="module-card">
                        <h3>Taux de réussite global</h3>
                        <h2>${eleves.length > 0 ? '100%' : '0%'}</h2>
                    </div>
                </div>
            `;
        }
    }

    window.completeTask = function(id) {
        let task = currentUser.tasks.find(t => t.id === id);
        if (task && task.status !== 'terminé') {
            task.status = 'terminé';
            currentUser.coursesCompleted += 1;
            currentUser.testsDone += 1;
            currentUser.badges += 1;
            
            // Update storage
            let users = JSON.parse(localStorage.getItem('nova_users')) || [];
            users = users.map(u => u.email === currentUser.email ? currentUser : u);
            localStorage.setItem('nova_users', JSON.stringify(users));
            localStorage.setItem('nova_current_user', JSON.stringify(currentUser));

            showToast("🎉 Activité terminée ! Badge débloqué !", "success");
            loadView('accueil');
        }
    };

    window.startQuiz = function(moduleName) {
        const body = document.getElementById('content-body');
        body.innerHTML = `
            <div class="quiz-container">
                <h2>Quiz : ${moduleName}</h2>
                <p style="margin: 1rem 0;">Question 1 : Quel est le verbe conjugué dans la phrase : « Les élèves apprennent leurs leçons » ?</p>
                <div class="options-list">
                    <button class="option-btn" onclick="checkAnswer(this, false)">Les élèves</button>
                    <button class="option-btn" onclick="checkAnswer(this, true)">apprennent</button>
                    <button class="option-btn" onclick="checkAnswer(this, false)">leurs leçons</button>
                </div>
            </div>
        `;
    };

    window.checkAnswer = function(btn, isCorrect) {
        if (isCorrect) {
            btn.classList.add('correct');
            showToast("Bonne réponse ! Explication : Le verbe exprime l'action du sujet.", "success");
            currentUser.coursesCompleted += 1;
            currentUser.badges += 1;
            
            let users = JSON.parse(localStorage.getItem('nova_users')) || [];
            users = users.map(u => u.email === currentUser.email ? currentUser : u);
            localStorage.setItem('nova_users', JSON.stringify(users));
            localStorage.setItem('nova_current_user', JSON.stringify(currentUser));

            setTimeout(() => { loadView('accueil'); }, 1500);
        } else {
            btn.classList.add('incorrect');
            showToast("Mauvaise réponse. Essaie encore !", "error");
        }
    };

    function initBot() {
        const botContainer = document.getElementById('nova-bot-container');
        const botMessages = document.getElementById('bot-messages');
        const botInput = document.getElementById('bot-input');
        const botSend = document.getElementById('bot-send');
        const closeBot = document.getElementById('close-bot');

        // Toggle bot if clicked from nav
        document.querySelectorAll('.nav-item').forEach(item => {
            if (item.textContent.includes('NOVA Bot')) {
                item.addEventListener('click', (e) => {
                    e.preventDefault();
                    botContainer.classList.toggle('hidden');
                });
            }
        });

        if (closeBot) {
            closeBot.addEventListener('click', () => botContainer.classList.add('hidden'));
        }

        document.querySelectorAll('.qr-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const query = btn.textContent;
                appendMsg(query, 'user');
                setTimeout(() => {
                    appendMsg("Je suis là pour t'accompagner. Consulte ta section 'À faire aujourd'hui' pour progresser pas à pas dans tes modules de français !", 'system');
                }, 500);
            });
        });

        if (botSend) {
            botSend.addEventListener('click', sendUserMsg);
            botInput.addEventListener('keypress', (e) => { if (e.key === 'Enter') sendUserMsg(); });
        }

        function sendUserMsg() {
            const txt = botInput.value.trim();
            if (!txt) return;
            appendMsg(txt, 'user');
            botInput.value = '';
            setTimeout(() => {
                appendMsg("C'est bien pris en compte ! N'hésite pas à réaliser tes exercices quotidiens.", 'system');
            }, 600);
        }

        function appendMsg(text, sender) {
            const div = document.createElement('div');
            div.className = `bot-msg ${sender}`;
            div.textContent = text;
            botMessages.appendChild(div);
            botMessages.scrollTop = botMessages.scrollHeight;
        }
    }

    function applyTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        themeToggles.forEach(btn => { if(btn) btn.textContent = theme === 'light' ? '🌙' : '☀️'; });
    }

    function applyLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
        
        const dict = translations[lang];
        if (!dict) return;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) el.textContent = dict[key];
        });
    }

    function showToast(message, type = 'success') {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = `toast`;
        toast.style.borderColor = type === 'success' ? '#059669' : '#DC2626';
        toast.textContent = message;
        container.appendChild(toast);
        setTimeout(() => toast.remove(), 3000);
    }
});
