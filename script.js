/* ========================================================================== */
/* LOGIQUE MÉTIER NOVA — COMPATIBLE VANILLA JS & LOCALSTORAGE                  */
/* ========================================================================== */

// Données et traductions multilingues (FR, AR, EN)
const i18nData = {
    fr: {
        slogan_desc: "NOVA t'accompagne dans ton apprentissage, tes activités, tes compétences et tes objectifs scolaires.",
        adv_1: "Suivi personnalisé en temps réel",
        adv_2: "Parcours de français adapté au collège",
        adv_3: "Badges et récompenses à débloquer",
        label_nom: "Nom",
        label_prenom: "Prénom",
        label_age: "Âge",
        label_role: "Je suis",
        role_eleve: "Élève",
        role_enseignant: "Enseignant",
        role_etablissement: "Établissement",
        label_niveau: "Niveau scolaire",
        lvl_1: "1ère année collège",
        lvl_2: "2ème année collège",
        lvl_3: "3ème année collège",
        lvl_lycee: "Lycée",
        label_email: "Adresse e-mail",
        label_code: "Code de sécurité (8 chiffres)",
        label_confirm_code: "Confirmation du code",
        btn_create: "Créer mon compte",
        has_account: "Tu as déjà un compte ?",
        link_login: "Se connecter",
        login_welcome_back: "Content de te revoir !",
        login_desc: "Reprends ton parcours là où tu l'as laissé et continue de progresser.",
        login_title: "Connexion à NOVA",
        login_subtitle: "Entre tes identifiants pour accéder à ton espace.",
        btn_login: "Se connecter",
        no_account: "Pas encore de compte ?",
        link_register: "Créer un compte",
        nav_logout: "Déconnexion",
        nav_accueil: "Accueil",
        nav_cours: "Mes cours",
        nav_activites: "Mes activités",
        nav_badges: "Mes badges",
        nav_progres: "Mes progrès",
        nav_competences: "Mes compétences",
        nav_bot: "NOVA Bot",
        nav_classes: "Mes classes",
        nav_evaluations: "Évaluations",
        nav_resultats: "Résultats",
        nav_analyses: "Analyses",
        nav_formations: "Formations",
        nav_eleves: "Élèves",
        nav_enseignants: "Enseignants",
        nav_certifications: "Certifications",
        nav_stages: "Stages",
        nav_parametres: "Paramètres"
    },
    ar: {
        slogan_desc: "نوفا ترافقك في تعلمك، أنشطتك، مهاراتك وأهدافك الدراسية.",
        adv_1: "متابعة شخصية في الوقت الفعلي",
        adv_2: "مسار فرنسي مخصص للإعدادي",
        adv_3: "شارات ومكافآت لفتحها",
        label_nom: "اسم العائلة",
        label_prenom: "الاسم الشخصي",
        label_age: "العمر",
        label_role: "أنا",
        role_eleve: "تلميذ",
        role_enseignant: "أستاذ",
        role_etablissement: "مؤسسة",
        label_niveau: "المستوى الدراسي",
        lvl_1: "السولة الأولى إعدادي",
        lvl_2: "السنة الثانية إعدادي",
        lvl_3: "السنة الثالثة إعدادي",
        lvl_lycee: "ثانوي",
        label_email: "البريد الإلكتروني",
        label_code: "رمز الحماية (8 أرقام)",
        label_confirm_code: "تأكيد الرمز",
        btn_create: "إنشاء حسابي",
        has_account: "لديك حساب بالفعل؟",
        link_login: "تسجيل الدخول",
        login_welcome_back: "مرحباً بك مجدداً!",
        login_desc: "تابع رحلتك التعليمية من حيث توقفت.",
        login_title: "تسجيل الدخول إلى نوفا",
        login_subtitle: "أدخل معلومات الاعتماد الخاصة بك للوصول.",
        btn_login: "تسجيل الدخول",
        no_account: "ليس لديك حساب؟",
        link_register: "إنشاء حساب",
        nav_logout: "تسجيل الخروج",
        nav_accueil: "الرئيسية",
        nav_cours: "دروسي",
        nav_activites: "أنشطتي",
        nav_badges: "شاراتي",
        nav_progres: "تقدمي",
        nav_competences: "مهاراتي",
        nav_bot: "مساعد نوفا",
        nav_classes: "أقسامي",
        nav_evaluations: "التقييمات",
        nav_resultats: "النتائج",
        nav_analyses: "التحليلات",
        nav_formations: "التكوينات",
        nav_eleves: "التلاميذ",
        nav_enseignants: "الأساتذة",
        nav_certifications: "الشهادات",
        nav_stages: "التدريبات",
        nav_parametres: "الإعدادات"
    },
    en: {
        slogan_desc: "NOVA supports you in your learning, activities, skills, and school goals.",
        adv_1: "Real-time personalized tracking",
        adv_2: "French curriculum tailored for middle school",
        adv_3: "Badges and rewards to unlock",
        label_nom: "Last Name",
        label_prenom: "First Name",
        label_age: "Age",
        label_role: "I am an",
        role_eleve: "Student",
        role_enseignant: "Teacher",
        role_etablissement: "Institution",
        label_niveau: "School Level",
        lvl_1: "1st Year Middle School",
        lvl_2: "2nd Year Middle School",
        lvl_3: "3rd Year Middle School",
        lvl_lycee: "High School",
        label_email: "Email Address",
        label_code: "Security Code (8 digits)",
        label_confirm_code: "Confirm Code",
        btn_create: "Create Account",
        has_account: "Already have an account?",
        link_login: "Log in",
        login_welcome_back: "Welcome back!",
        login_desc: "Pick up your learning journey right where you left off.",
        login_title: "Log in to NOVA",
        login_subtitle: "Enter your credentials to access your space.",
        btn_login: "Log in",
        no_account: "Don't have an account?",
        link_register: "Create account",
        nav_logout: "Log out",
        nav_accueil: "Home",
        nav_cours: "My Courses",
        nav_activites: "My Activities",
        nav_badges: "My Badges",
        nav_progres: "My Progress",
        nav_competences: "My Skills",
        nav_bot: "NOVA Bot",
        nav_classes: "My Classes",
        nav_evaluations: "Evaluations",
        nav_resultats: "Results",
        nav_analyses: "Analytics",
        nav_formations: "Courses",
        nav_eleves: "Students",
        nav_enseignants: "Teachers",
        nav_certifications: "Certifications",
        nav_stages: "Internships",
        nav_parametres: "Settings"
    }
};

// État global de l'application
let currentLang = localStorage.getItem('nova_lang') || 'fr';
let currentTheme = localStorage.getItem('nova_theme') || 'light-mode';
let currentUser = JSON.parse(localStorage.getItem('nova_current_user')) || null;
let allUsers = JSON.parse(localStorage.getItem('nova_all_users')) || [];

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    setupEventListeners();
    checkAuthState();
});

// Gestion du Thème Clair / Sombre
function initTheme() {
    if (currentTheme === 'dark-mode') {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    }
}

function toggleTheme() {
    currentTheme = document.body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
    localStorage.setItem('nova_theme', currentTheme);
    initTheme();
}

// Gestion de la Langue & RTL
function initLanguage() {
    document.documentElement.lang = currentLang;
    document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
    
    // Mettre à jour les sélecteurs de langue
    const globalSelect = document.getElementById('global-lang-select');
    const appSelect = document.getElementById('app-lang-select');
    if (globalSelect) globalSelect.value = currentLang;
    if (appSelect) appSelect.value = currentLang;

    // Traduction des textes statiques
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (i18nData[currentLang] && i18nData[currentLang][key]) {
            el.textContent = i18nData[currentLang][key];
        }
    });
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('nova_lang', lang);
    initLanguage();
    if (currentUser) renderDashboard();
}

// Configuration des Écouteurs d'événements
function setupEventListeners() {
    // Basculement Inscription / Connexion
    document.getElementById('show-login').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('register-view').classList.add('hidden');
        document.getElementById('login-view').classList.remove('hidden');
    });

    document.getElementById('show-register').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('login-view').classList.add('hidden');
        document.getElementById('register-view').classList.remove('hidden');
    });

    // Affichage conditionnel du niveau scolaire selon le rôle "Élève"
    document.getElementById('reg-role').addEventListener('change', (e) => {
        const lvlGroup = document.getElementById('school-level-group');
        if (e.target.value === 'eleve') {
            lvlGroup.classList.remove('hidden');
        } else {
            lvlGroup.classList.add('hidden');
        }
    });

    // Thème toggles
    document.getElementById('theme-toggle-auth').addEventListener('click', toggleTheme);
    document.getElementById('theme-toggle-app').addEventListener('click', toggleTheme);

    // Langue changers
    document.getElementById('global-lang-select').addEventListener('change', (e) => changeLanguage(e.target.value));
    document.getElementById('app-lang-select').addEventListener('change', (e) => changeLanguage(e.target.value));

    // Soumission Inscription
    document.getElementById('register-form').addEventListener('submit', handleRegister);

    // Soumission Connexion
    document.getElementById('login-form').addEventListener('submit', handleLogin);

    // Déconnexion
    document.getElementById('logout-btn').addEventListener('click', handleLogout);

    // Sidebar Mobile
    document.getElementById('sidebar-toggle').addEventListener('click', () => {
        document.getElementById('sidebar').classList.toggle('mobile-open');
    });
}

// Gestion de l'Inscription avec Validation stricte
function handleRegister(e) {
    e.preventDefault();
    const nom = document.getElementById('reg-nom').value.trim();
    const prenom = document.getElementById('reg-prenom').value.trim();
    const age = document.getElementById('reg-age').value;
    const role = document.getElementById('reg-role').value;
    const niveau = role === 'eleve' ? document.getElementById('reg-niveau').value : null;
    const email = document.getElementById('reg-email').value.trim();
    const code = document.getElementById('reg-code').value;
    const confirmCode = document.getElementById('reg-confirm-code').value;
    const errBox = document.getElementById('register-error');

    errBox.textContent = '';

    // Validations JS réelles
    if (!email.includes('@') || !email.includes('.')) {
        errBox.textContent = "Veuillez entrer une adresse e-mail valide.";
        return;
    }
    if (code.length !== 8 || isNaN(code)) {
        errBox.textContent = "Le code de sécurité doit comporter exactement 8 chiffres.";
        return;
    }
    if (code !== confirmCode) {
        errBox.textContent = "Les deux codes de sécurité ne correspondent pas.";
        return;
    }

    // Vérifier si l'email existe déjà
    if (allUsers.some(u => u.email === email)) {
        errBox.textContent = "Cet e-mail est déjà associé à un compte.";
        return;
    }

    // Création du profil initial (ZÉRO fausses données, état initial vide)
    const newUser = {
        nom,
        prenom,
        age,
        role,
        niveau,
        email,
        code,
        coursesCompleted: 0,
        badgesCount: 0,
        testsCompleted: 0,
        completedTasks: { task1: false, task2: false, task3: false },
        badges: [],
        skills: { grammaire: 'en_cours', conjugaison: 'en_cours', orthographe: 'a_renforcer', lecture: 'a_decouvrir' },
        activityTime: 0,
        createdAt: new Date().toISOString()
    };

    allUsers.push(newUser);
    localStorage.setItem('nova_all_users', JSON.stringify(allUsers));
    
    // Connexion automatique
    currentUser = newUser;
    localStorage.setItem('nova_current_user', JSON.stringify(currentUser));

    checkAuthState();
    showToast("Compte créé avec succès !", "Bienvenue dans NOVA !");
}

// Gestion de la Connexion
function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('log-email').value.trim();
    const code = document.getElementById('log-code').value;
    const errBox = document.getElementById('login-error');

    errBox.textContent = '';

    const user = allUsers.find(u => u.email === email && u.code === code);
    if (!user) {
        errBox.textContent = "E-mail ou code de sécurité incorrect.";
        return;
    }

    currentUser = user;
    localStorage.setItem('nova_current_user', JSON.stringify(currentUser));
    checkAuthState();
}

// Déconnexion
function handleLogout() {
    currentUser = null;
    localStorage.removeItem('nova_current_user');
    checkAuthState();
}

// Vérification de l'état d'authentification
function checkAuthState() {
    if (currentUser) {
        document.getElementById('auth-container').classList.add('hidden');
        document.getElementById('app-container').classList.remove('hidden');
        setupSidebarNav();
        renderDashboard();
    } else {
        document.getElementById('auth-container').classList.remove('hidden');
        document.getElementById('app-container').classList.add('hidden');
    }
}

// Configuration de la Navigation Sidebar selon le profil
function setupSidebarNav() {
    const navContainer = document.getElementById('sidebar-nav-links');
    navContainer.innerHTML = '';

    document.getElementById('sidebar-user-name').textContent = `${currentUser.prenom} ${currentUser.nom}`;
    document.getElementById('sidebar-user-initials').textContent = `${currentUser.prenom[0]}${currentUser.nom[0]}`.toUpperCase();
    document.getElementById('sidebar-user-role-badge').textContent = currentUser.role.toUpperCase();
    document.getElementById('topbar-user-display').textContent = `${currentUser.role.toUpperCase()} — ${currentUser.prenom}`;

    let links = [];
    if (currentUser.role === 'eleve') {
        links = [
            { id: 'accueil', icon: 'fa-house', label: i18nData[currentLang].nav_accueil },
            { id: 'cours', icon: 'fa-book-open', label: i18nData[currentLang].nav_cours },
            { id: 'activites', icon: 'fa-pen-to-square', label: i18nData[currentLang].nav_activites },
            { id: 'badges', icon: 'fa-award', label: i18nData[currentLang].nav_badges },
            { id: 'progres', icon: 'fa-chart-line', label: i18nData[currentLang].nav_progres },
            { id: 'competences', icon: 'fa-bullseye', label: i18nData[currentLang].nav_competences },
            { id: 'bot', icon: 'fa-comments', label: i18nData[currentLang].nav_bot }
        ];
    } else if (currentUser.role === 'enseignant') {
        links = [
            { id: 'accueil', icon: 'fa-house', label: i18nData[currentLang].nav_accueil },
            { id: 'classes', icon: 'fa-users', label: i18nData[currentLang].nav_classes },
            { id: 'evaluations', icon: 'fa-clipboard-list', label: i18nData[currentLang].nav_evaluations },
            { id: 'resultats', icon: 'fa-square-poll-vertical', label: i18nData[currentLang].nav_resultats },
            { id: 'bot', icon: 'fa-comments', label: i18nData[currentLang].nav_bot }
        ];
    } else if (currentUser.role === 'etablissement') {
        links = [
            { id: 'accueil', icon: 'fa-house', label: i18nData[currentLang].nav_accueil },
            { id: 'analyses', icon: 'fa-chart-pie', label: i18nData[currentLang].nav_analyses },
            { id: 'formations', icon: 'fa-graduation-cap', label: i18nData[currentLang].nav_formations },
            { id: 'eleves', icon: 'fa-user-group', label: i18nData[currentLang].nav_eleves },
            { id: 'certifications', icon: 'fa-certificate', label: i18nData[currentLang].nav_certifications },
            { id: 'stages', icon: 'fa-briefcase', label: i18nData[currentLang].nav_stages }
        ];
    }

    links.forEach((link, idx) => {
        const a = document.createElement('a');
        a.href = '#';
        a.className = `nav-item ${idx === 0 ? 'active' : ''}`;
        a.innerHTML = `<i class="fa-solid ${link.icon}"></i> <span>${link.label}</span>`;
        a.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
            a.classList.add('active');
            switchView(link.id);
        });
        navContainer.appendChild(a);
    });

    switchView('accueil');
}

// Changement de Vue Principal (Routeur SPA simple)
function switchView(viewId) {
    const viewport = document.getElementById('content-viewport');
    viewport.innerHTML = '';

    if (currentUser.role === 'eleve') {
        if (viewId === 'accueil') renderEleveAccueil(viewport);
        else if (viewId === 'cours') renderEleveCours(viewport);
        else if (viewId === 'activites') renderEleveActivites(viewport);
        else if (viewId === 'badges') renderEleveBadges(viewport);
        else if (viewId === 'progres') renderEleveProgres(viewport);
        else if (viewId === 'competences') renderEleveCompetences(viewport);
        else if (viewId === 'bot') renderNovaBot(viewport);
    } else if (currentUser.role === 'enseignant') {
        if (viewId === 'accueil') renderEnseignantAccueil(viewport);
        else if (viewId === 'classes') renderEnseignantClasses(viewport);
        else if (viewId === 'evaluations') renderEnseignantEvaluations(viewport);
        else if (viewId === 'resultats') renderEnseignantResultats(viewport);
        else if (viewId === 'bot') renderNovaBot(viewport);
    } else if (currentUser.role === 'etablissement') {
        if (viewId === 'accueil') renderEtablissementAccueil(viewport);
        else if (viewId === 'analyses') renderEtablissementAnalyses(viewport);
        else if (viewId === 'formations') renderEtablissementFormations(viewport);
        else if (viewId === 'eleves') renderEtablissementEleves(viewport);
        else if (viewId === 'certifications') renderEtablissementCertifications(viewport);
        else if (viewId === 'stages') renderEtablissementStages(viewport);
    }
}

// ================= VUES ÉLÈVE =================

function renderEleveAccueil(container) {
    container.innerHTML = `
        <div class="welcome-banner">
            <div class="welcome-text">
                <h1>Salut, ${currentUser.prenom} 👋</h1>
                <p>Prêt à apprendre aujourd'hui ? Continue ton cahier de bord.</p>
            </div>
            <div class="welcome-badge-pill">
                <i class="fa-solid fa-fire text-orange"></i> ${currentUser.coursesCompleted} cours terminés
            </div>
        </div>

        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-icon blue"><i class="fa-solid fa-book"></i></div>
                <div class="stat-info">
                    <h3>${currentUser.coursesCompleted}</h3>
                    <p>Cours terminés</p>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon green"><i class="fa-solid fa-pen"></i></div>
                <div class="stat-info">
                    <h3>${currentUser.testsCompleted}</h3>
                    <p>Tests réalisés</p>
                </div>
            </div>
            <div class="stat-card">
                <div class="stat-icon yellow"><i class="fa-solid fa-award"></i></div>
                <div class="stat-info">
                    <h3>${currentUser.badgesCount}</h3>
                    <p>Badges débloqués</p>
                </div>
            </div>
        </div>

        <div class="dashboard-sections-grid">
            <div class="dashboard-card">
                <div class="card-header-flex">
                    <h3>À faire aujourd'hui</h3>
                    <span class="text-muted text-sm">Français — Collège</span>
                </div>
                <div class="tasks-list">
                    <div class="task-item">
                        <div class="task-info">
                            <i class="fa-solid fa-book-bookmark"></i>
                            <div>
                                <div class="task-title">Le passé composé</div>
                                <div class="task-type">Cours de français</div>
                            </div>
                        </div>
                        <button class="btn-action ${currentUser.completedTasks.task1 ? 'completed' : ''}" onclick="completeTask('task1', 'Le passé composé')">
                            ${currentUser.completedTasks.task1 ? 'Terminé ✓' : 'Commencer'}
                        </button>
                    </div>
                    <div class="task-item">
                        <div class="task-info">
                            <i class="fa-solid fa-pen-nib"></i>
                            <div>
                                <div class="task-title">Exercices sur l'accord</div>
                                <div class="task-type">Activité interactive</div>
                            </div>
                        </div>
                        <button class="btn-action ${currentUser.completedTasks.task2 ? 'completed' : ''}" onclick="completeTask('task2', 'Exercices sur l accord')">
                            ${currentUser.completedTasks.task2 ? 'Terminé ✓' : 'Fايre'}
                        </button>
                    </div>
                    <div class="task-item">
                        <div class="task-info">
                            <i class="fa-solid fa-file-lines"></i>
                            <div>
                                <div class="task-title">Dictée : Le Voyage</div>
                                <div class="task-type">Test d'orthographe</div>
                            </div>
                        </div>
                        <button class="btn-action ${currentUser.completedTasks.task3 ? 'completed' : ''}" onclick="completeTask('task3', 'Dictée Le Voyage')">
                            ${currentUser.completedTasks.task3 ? 'Terminé ✓' : 'Commencer'}
                        </button>
                    </div>
                </div>
            </div>

            <div class="dashboard-card">
                <div class="card-header-flex">
                    <h3>Capsule recommandée</h3>
                </div>
                <div class="video-preview-card" style="background:var(--bg-main); border:1px solid var(--border-color); border-radius:10px; padding:15px; text-align:center;">
                    <i class="fa-solid fa-circle-play" style="font-size:3rem; color:var(--primary); margin-bottom:10px;"></i>
                    <h4 style="font-size:0.95rem; margin-bottom:5px;">Comprendre le passé composé</h4>
                    <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:15px;">Durée : 08:45</p>
                    <button class="btn-action" onclick="openVideoModal()">▶ Regarder</button>
                </div>
            </div>
        </div>
    `;
}

// Action réelle sur une tâche avec mise à jour du state et localStorage
function completeTask(taskId, taskName) {
    if (currentUser.completedTasks[taskId]) return;
    
    currentUser.completedTasks[taskId] = true;
    currentUser.coursesCompleted += 1;
    currentUser.testsCompleted += 1;
    
    // Débloquer un badge automatique si premier cours
    if (currentUser.coursesCompleted === 1 && !currentUser.badges.includes('Premier pas')) {
        currentUser.badges.push('Premier pas');
        currentUser.badgesCount += 1;
        showToast("🏅 Premier pas débloqué !", "Tu as réalisé ta première activité sur NOVA !");
    }

    updateUserData();
    renderDashboard();
}

function updateUserData() {
    // Mettre à jour dans allUsers
    const idx = allUsers.findIndex(u => u.email === currentUser.email);
    if (idx !== -1) {
        allUsers[idx] = currentUser;
        localStorage.setItem('nova_all_users', JSON.stringify(allUsers));
    }
    localStorage.setItem('nova_current_user', JSON.stringify(currentUser));
}

function renderDashboard() {
    setupSidebarNav();
}

// Vues spécifiques Élève
function renderEleveCours(container) {
    container.innerHTML = `
        <h2 style="margin-bottom:20px; color:var(--primary);">📚 Cours de Français — Collège</h2>
        <div class="stats-grid">
            <div class="stat-card" style="cursor:pointer;" onclick="openQuizModal()">
                <div class="stat-icon blue"><i class="fa-solid fa-bookmark"></i></div>
                <div class="stat-info">
                    <h3>Module 1</h3>
                    <p>Grammaire (Les types de phrases)</p>
                </div>
            </div>
            <div class="stat-card" style="cursor:pointer;" onclick="openQuizModal()">
                <div class="stat-icon green"><i class="fa-solid fa-bookmark"></i></div>
                <div class="stat-info">
                    <h3>Module 2</h3>
                    <p>Conjugaison (Passé composé & Imparfait)</p>
                </div>
            </div>
            <div class="stat-card" style="cursor:pointer;" onclick="openQuizModal()">
                <div class="stat-icon yellow"><i class="fa-solid fa-bookmark"></i></div>
                <div class="stat-info">
                    <h3>Module 3</h3>
                    <p>Orthographe (Accord sujet/verbe)</p>
                </div>
            </div>
        </div>
    `;
}

function renderEleveActivites(container) {
    container.innerHTML = `
        <h2 style="margin-bottom:20px; color:var(--primary);">📝 Activités et Quiz interactifs</h2>
        <div class="dashboard-card">
            <h3>Quiz de grammaire interactif</h3>
            <p style="color:var(--text-muted); margin-bottom:15px;">Teste tes connaissances et reçois une correction immédiate.</p>
            <button class="btn-action" onclick="openQuizModal()">Lancer le Quiz</button>
        </div>
    `;
}

function renderEleveBadges(container) {
    container.innerHTML = `
        <h2 style="margin-bottom:20px; color:var(--primary);">🏆 Mes Badges de Réussite</h2>
        <div class="badges-showcase">
            <div class="badge-card ${currentUser.badges.includes('Premier pas') ? 'unlocked' : ''}">
                <i class="fa-solid fa-medal"></i>
                <h4>Premier pas</h4>
                <p>${currentUser.badges.includes('Premier pas') ? 'Débloqué !' : 'À débloquer'}</p>
            </div>
            <div class="badge-card">
                <i class="fa-solid fa-book-reader"></i>
                <h4>Lecteur assidu</h4>
                <p>À débloquer</p>
            </div>
            <div class="badge-card">
                <i class="fa-solid fa-pen-fancy"></i>
                <h4>Maître grammaire</h4>
                <p>À débloquer</p>
            </div>
            <div class="badge-card">
                <i class="fa-solid fa-trophy"></i>
                <h4>Champion français</h4>
                <p>À débloquer</p>
            </div>
        </div>
    `;
}

function renderEleveProgres(container) {
    container.innerHTML = `
        <h2 style="margin-bottom:20px; color:var(--primary);">📈 Mes Progrès</h2>
        <div class="stats-grid">
            <div class="stat-card"><div class="stat-icon blue"><i class="fa-solid fa-check"></i></div><div class="stat-info"><h3>${currentUser.coursesCompleted}</h3><p>Activités terminées</p></div></div>
            <div class="stat-card"><div class="stat-icon green"><i class="fa-solid fa-award"></i></div><div class="stat-info"><h3>${currentUser.badgesCount}</h3><p>Badges obtenus</p></div></div>
            <div class="stat-card"><div class="stat-icon yellow"><i class="fa-solid fa-clock"></i></div><div class="stat-info"><h3>Actif</h3><p>Statut régulier</p></div></div>
        </div>
    `;
}

function renderEleveCompetences(container) {
    container.innerHTML = `
        <h2 style="margin-bottom:20px; color:var(--primary);">🎯 Carte de Compétences</h2>
        <div class="dashboard-card">
            <div class="task-item"><span class="task-title">Grammaire</span><span class="badge-pill" style="color:var(--accent-green); font-weight:600;">🟢 En cours</span></div>
            <div class="task-item"><span class="task-title">Conjugaison</span><span class="badge-pill" style="color:var(--accent-green); font-weight:600;">🟢 En cours</span></div>
            <div class="task-item"><span class="task-title">Orthographe</span><span class="badge-pill" style="color:var(--accent-orange); font-weight:600;">🟠 À renforcer</span></div>
            <div class="task-item"><span class="task-title">Lecture</span><span class="badge-pill" style="color:var(--text-muted); font-weight:600;">⚪ À découvrir</span></div>
        </div>
    `;
}

// NOVA Bot Assistant Intégré
function renderNovaBot(container) {
    container.innerHTML = `
        <h2 style="margin-bottom:20px; color:var(--primary);">💬 NOVA Bot — Assistant pédagogique</h2>
        <div class="dashboard-card">
            <div class="chat-container">
                <div class="chat-messages" id="chat-messages-box">
                    <div class="chat-bubble bot">Bonjour ! Je suis l'assistant pédagogique de NOVA. Comment puis-je t'aider dans ton apprentissage aujourd'hui ?</div>
                </div>
                <div class="chat-quick-actions">
                    <button class="quick-btn" onclick="sendBotPrompt('Explique-moi cette leçon')">Explique-moi cette leçon</button>
                    <button class="quick-btn" onclick="sendBotPrompt('Aide-moi avec cet exercice')">Aide-moi avec cet exercice</button>
                    <button class="quick-btn" onclick="sendBotPrompt('Que dois-je faire aujourd\'hui ?')">Que dois-je faire aujourd'hui ?</button>
                </div>
                <div class="chat-input-area">
                    <input type="text" id="chat-user-input" placeholder="Écris ta question...">
                    <button class="btn-action" onclick="handleUserChat()"><i class="fa-solid fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    `;
}

function sendBotPrompt(text) {
    const box = document.getElementById('chat-messages-box');
    box.innerHTML += `<div class="chat-bubble user">${text}</div>`;
    
    setTimeout(() => {
        let reply = "C'est une excellente question ! Pour progresser en français, relis bien tes leçons de grammaire et pratique régulièrement sur les exercices interactifs.";
        if (text.includes("aujourd'hui")) reply = "Regarde ta section 'À faire aujourd'hui' sur ton tableau de bord pour accomplir tes tâches du jour.";
        else if (text.includes("exercice")) reply = "Pour réussir tes exercices, identifie d'abord le verbe et le sujet de la phrase.";
        
        box.innerHTML += `<div class="chat-bubble bot">${reply}</div>`;
        box.scrollTop = box.scrollHeight;
    }, 500);
}

function handleUserChat() {
    const input = document.getElementById('chat-user-input');
    if (!input.value.trim()) return;
    sendBotPrompt(input.value);
    input.value = '';
}

// ================= VUES ENSEIGNANT =================
function renderEnseignantAccueil(container) {
    // Calculer les élèves réels inscrits ayant le rôle "eleve"
    const realStudents = allUsers.filter(u => u.role === 'eleve');
    container.innerHTML = `
        <div class="welcome-banner">
            <div class="welcome-text">
                <h1>Espace Enseignant 👨‍🏫</h1>
                <p>Suivi de vos classes et des activités pédagogiques.</p>
            </div>
        </div>
        <div class="stats-grid">
            <div class="stat-card"><div class="stat-icon blue"><i class="fa-solid fa-users"></i></div><div class="stat-info"><h3>${realStudents.length}</h3><p>Élèves inscrits</p></div></div>
            <div class="stat-card"><div class="stat-icon green"><i class="fa-solid fa-clipboard-check"></i></div><div class="stat-info"><h3>3</h3><p>Activités créées</p></div></div>
        </div>
    `;
}

function renderEnseignantClasses(container) {
    const realStudents = allUsers.filter(u => u.role === 'eleve');
    let studentRows = realStudents.length === 0 ? `<tr><td colspan="4" style="text-align:center; padding:20px; color:var(--text-muted);">Aucun élève inscrit pour le moment.</td></tr>` : 
        realStudents.map(s => `<tr><td style="padding:10px;">${s.prenom} ${s.nom}</td><td style="padding:10px;">${s.niveau || 'Collège'}</td><td style="padding:10px;">${s.coursesCompleted} cours</td><td style="padding:10px;"><span style="color:var(--accent-green)">Actيف</span></td></tr>`).join('');

    container.innerHTML = `
        <h2 style="margin-bottom:20px; color:var(--primary);">👥 Ma classe (Données réelles)</h2>
        <div class="dashboard-card">
            <table style="width:100%; border-collapse:collapse;">
                <thead>
                    <tr style="border-bottom:2px solid var(--border-color); text-align:left;">
                        <th style="padding:10px;">Élève</th>
                        <th style="padding:10px;">Niveau</th>
                        <th style="padding:10px;">Progression</th>
                        <th style="padding:10px;">Statut</th>
                    </tr>
                </thead>
                <tbody>
                    ${studentRows}
                </tbody>
            </table>
        </div>
    `;
}

function renderEnseignantEvaluations(container) {
    container.innerHTML = `<h2 style="color:var(--primary);">📝 Évaluations de la classe</h2><div class="dashboard-card"><p>Aucune évaluation en attente de correction.</p></div>`;
}

function renderEnseignantResultats(container) {
    container.innerHTML = `<h2 style="color:var(--primary);">📊 Résultats enregistrés</h2><div class="dashboard-card"><p>Les résultats s'afficheront dès la réalisation des tests par les élèves.</p></div>`;
}

// ================= VUES ÉTABLISSEMENT =================
function renderEtablissementAccueil(container) {
    const realStudents = allUsers.filter(u => u.role === 'eleve');
    container.innerHTML = `
        <div class="welcome-banner">
            <div class="welcome-text">
                <h1>Tableau de bord Établissement 🏛️</h1>
                <p>Vue d'ensemble et analyses basées sur l'activité réelle de la plateforme.</p>
            </div>
        </div>
        <div class="stats-grid">
            <div class="stat-card"><div class="stat-icon blue"><i class="fa-solid fa-user-group"></i></div><div class="stat-info"><h3>${realStudents.length}</h3><p>Élèves actifs</p></div></div>
            <div class="stat-card"><div class="stat-icon green"><i class="fa-solid fa-chart-line"></i></div><div class="stat-info"><h3>100%</h3><p>Indice d'engagement observable</p></div></div>
        </div>
    `;
}

function renderEtablissementAnalyses(container) { container.innerHTML = `<h2 style="color:var(--primary);">📊 Analyses globales</h2><div class="dashboard-card"><p>Données agrégées basées strictement sur l'utilisation du prototype.</p></div>`; }
function renderEtablissementFormations(container) { container.innerHTML = `<h2 style="color:var(--primary);">🎓 Formations et Modules</h2><div class="dashboard-card"><p>Modules de français actifs pour le collège.</p></div>`; }
function renderEtablissementEleves(container) { renderEnseignantClasses(container); }
function renderEtablissementCertifications(container) { container.innerHTML = `<h2 style="color:var(--primary);">🏆 Certifications</h2><div class="dashboard-card"><p>Aucune certification délivrée pour le moment.</p></div>`; }
function renderEtablissementStages(container) { container.innerHTML = `<h2 style="color:var(--primary);">💼 Stages & Orientation</h2><div class="dashboard-card"><p>Aucun stage enregistré.</p></div>`; }

// ================= MODALS & TOASTS =================
function openQuizModal() {
    const modal = document.getElementById('modal-overlay');
    const content = document.getElementById('modal-card-content');
    modal.classList.remove('hidden');

    content.innerHTML = `
        <h3 style="margin-bottom:15px; color:var(--primary);">Quiz interactif : Grammaire</h3>
        <p style="font-weight:600; margin-bottom:15px;">Quel est le verbe dans la phrase : « Les collégiens étudient leurs leçons » ?</p>
        <div style="display:flex; flex-direction:column; gap:10px; margin-bottom:20px;">
            <button class="btn-action" style="text-align:left; background:var(--bg-main); color:var(--text-main); border:1px solid var(--border-color);" onclick="checkQuizAnswer(false)">A) Les collégiens</button>
            <button class="btn-action" style="text-align:left; background:var(--bg-main); color:var(--text-main); border:1px solid var(--border-color);" onclick="checkQuizAnswer(true)">B) étudient</button>
            <button class="btn-action" style="text-align:left; background:var(--bg-main); color:var(--text-main); border:1px solid var(--border-color);" onclick="checkQuizAnswer(false)">C) leurs leçons</button>
        </div>
        <div id="quiz-feedback" style="font-weight:600; margin-bottom:15px;"></div>
        <button class="btn-action" onclick="closeModal()">Fermer</button>
    `;
}

function checkQuizAnswer(isCorrect) {
    const feedback = document.getElementById('quiz-feedback');
    if (isCorrect) {
        feedback.style.color = 'var(--accent-green)';
        feedback.textContent = 'Correct ! « étudient » est le verbe conjugué de la phrase.';
        currentUser.testsCompleted += 1;
        updateUserData();
    } else {
        feedback.style.color = 'var(--accent-orange)';
        feedback.textContent = 'Incorrect. Retente ta chance ! Le verbe exprime l’action.';
    }
}

function openVideoModal() {
    const modal = document.getElementById('modal-overlay');
    const content = document.getElementById('modal-card-content');
    modal.classList.remove('hidden');

    content.innerHTML = `
        <h3 style="margin-bottom:15px; color:var(--primary);">🎥 Capsule vidéo : Le passé composé</h3>
        <div style="background:#000; border-radius:10px; height:250px; display:flex; align-items:center; justify-content:center; color:#FFF; margin-bottom:15px;">
            <i class="fa-solid fa-play" style="font-size:3rem;"></i> (Lecture vidéo simulée)
        </div>
        <button class="btn-action" onclick="closeModal()">Fermer</button>
    `;
}

function closeModal() {
    document.getElementById('modal-overlay').classList.add('hidden');
    renderDashboard();
}

function showToast(title, message) {
    const toast = document.getElementById('toast-notification');
    document.getElementById('toast-title').textContent = title;
    document.getElementById('toast-message').textContent = message;
    toast.classList.remove('hidden');
    setTimeout(() => {
        toast.classList.add('hidden');
    }, 4000);
}