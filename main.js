(function() {
    'use strict';

    // Safety Check: Only run on login page
    if (document.body.id !== 'page-login-index') return;

    console.log("Modern UI Injector: Split-Screen Layout Initializing...");

    // 1. Inject the Master CSS
    function injectStyles() {
        if (document.getElementById('moodle-modern-theme')) return; 

        const style = document.createElement('style');
        style.id = 'moodle-modern-theme';
        style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');

        /* ----------------------------------------------------
           CORE LAYOUT: FULL SCREEN NO SCROLL
        ----------------------------------------------------- */
        body#page-login-index {
            font-family: 'Outfit', sans-serif !important;
            margin: 0 !important;
            padding: 0 !important;
            background-color: #0f172a !important;
            color: #e2e8f0 !important;
            display: block !important;
            height: 100vh !important;
            overflow: hidden !important; /* Locks the screen in place */
        }

        /* Nuke the clutter natively */
        body#page-login-index nav, 
        body#page-login-index .toast-wrapper, 
        body#page-login-index .logininfo, 
        body#page-login-index button[data-modal="alert"], /* Hides Moodle's default cookie button */
        body#page-login-index .tool_dataprivacy { 
            display: none !important; 
        }

        /* Reset Moodle's weird grid */
        body#page-login-index #page-wrapper,
        body#page-login-index #page,
        body#page-login-index #page-content,
        body#page-login-index #region-main-box,
        body#page-login-index #region-main {
            height: 100% !important;
            margin: 0 !important;
            padding: 0 !important;
            display: block !important;
            max-width: 100% !important;
        }

        /* ----------------------------------------------------
           THE SPLIT SCREEN: 60/40 LAYOUT
        ----------------------------------------------------- */
        body#page-login-index .login-wrapper {
            display: flex !important;
            flex-direction: row !important;
            height: 100vh !important;
            width: 100vw !important;
            background: #0f172a !important;
        }

        /* LEFT SIDE: Hero Image */
        .moodle-hero-bg {
            flex: 5.5 !important; /* Takes up 55% of the screen */
            background-image: url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2000&auto=format&fit=crop');
            background-size: cover !important;
            background-position: center !important;
            position: relative !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
        }

        /* Hero Gradient Overlay */
        .moodle-hero-bg::after {
            content: '';
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(15, 23, 42, 0.85) 0%, rgba(99, 102, 241, 0.4) 100%);
            z-index: 1;
        }

        .moodle-hero-content {
            position: relative;
            z-index: 2;
            color: white;
            text-align: left;
            max-width: 500px;
            padding: 0 40px;
            animation: fadeIn 1.2s ease forwards;
        }

        .moodle-hero-content h1 {
            font-size: 3.5rem !important;
            font-weight: 600 !important;
            margin-bottom: 20px !important;
            font-family: 'Outfit', sans-serif !important;
            line-height: 1.1 !important;
            letter-spacing: -1px !important;
        }

        .moodle-hero-content p {
            font-size: 1.1rem !important;
            color: #cbd5e1 !important;
            line-height: 1.6 !important;
            font-weight: 300 !important;
        }

        /* RIGHT SIDE: Login Panel */
        body#page-login-index .login-container {
            flex: 4.5 !important; /* Takes up 45% of the screen */
            min-width: 450px !important;
            background: #0f172a !important;
            box-shadow: -20px 0 50px rgba(0, 0, 0, 0.5) !important;
            border-radius: 0 !important;
            border: none !important;
            border-left: 1px solid rgba(255,255,255,0.05) !important;
            height: 100vh !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: center !important;
            align-items: center !important;
            padding: 40px !important;
            position: relative !important;
            z-index: 10 !important;
        }

        /* Limit the width of the form inside the panel */
        body#page-login-index .loginform {
            width: 100% !important;
            max-width: 380px !important;
            margin-bottom: 50px !important; /* Give space for footer */
            animation: formSlideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards !important;
            transform: translateY(20px);
            opacity: 0;
        }

        @keyframes formSlideUp { to { transform: translateY(0); opacity: 1; } }
        @keyframes fadeIn { from { opacity: 0; transform: translateX(-20px); } to { opacity: 1; transform: translateX(0); } }

        /* ----------------------------------------------------
           FORM ELEMENTS
        ----------------------------------------------------- */
        body#page-login-index .loginform h1.login-heading {
            font-family: 'Outfit', sans-serif !important;
            color: #ffffff !important;
            font-weight: 600 !important;
            font-size: 26px !important;
            margin-bottom: 35px !important;
            text-align: left !important;
            letter-spacing: -0.5px !important;
        }

        body#page-login-index .form-group { margin-bottom: 22px !important; position: relative !important; width: 100% !important; }

        body#page-login-index .form-control {
            background: rgba(255, 255, 255, 0.03) !important;
            border: 1px solid rgba(255, 255, 255, 0.08) !important;
            border-radius: 12px !important;
            color: #ffffff !important;
            padding: 16px 20px !important;
            font-size: 15px !important;
            height: auto !important;
            transition: all 0.3s ease !important;
            width: 100% !important;
            box-sizing: border-box !important;
        }

        body#page-login-index .form-control:focus {
            background: rgba(0, 0, 0, 0.3) !important;
            border-color: #818cf8 !important;
            box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.15) !important;
            outline: none !important;
        }

        body#page-login-index .btn-primary {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) !important;
            border: none !important;
            border-radius: 12px !important;
            color: white !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            padding: 16px !important;
            width: 100% !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3) !important;
            cursor: pointer !important;
            margin-top: 10px !important;
        }

        body#page-login-index .btn-primary:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5) !important;
        }

        body#page-login-index .login-form-forgotpassword { text-align: left !important; margin-top: 20px !important; }
        body#page-login-index .login-form-forgotpassword a { color: #a5b4fc !important; text-decoration: none !important; font-size: 14px !important; font-weight: 500 !important; }
        body#page-login-index .login-divider { display: none !important; } /* We don't need this anymore */

        /* SVG Toggle */
        body#page-login-index .password-toggle {
            position: absolute !important; right: 18px !important; top: 50% !important; transform: translateY(-50%) !important; cursor: pointer !important; color: #64748b !important; padding: 5px !important; z-index: 10 !important;
        }
        body#page-login-index .password-toggle:hover { color: #ffffff !important; }
        
        /* ----------------------------------------------------
           FOOTER (Anchored to the right panel)
        ----------------------------------------------------- */
        body#page-login-index #page-footer {
            position: absolute !important;
            bottom: 0 !important;
            right: 0 !important;
            width: 45% !important; /* Matches right panel width */
            background: transparent !important;
            border: none !important;
            color: #64748b !important;
            padding: 1.5rem !important;
            z-index: 20 !important;
        }
        body#page-login-index #page-footer a { color: #818cf8 !important; text-decoration: none !important; }
        body#page-login-index .footer-content-popover, body#page-login-index .footer-section { background: transparent !important; border: none !important; padding: 0 !important;}
        body#page-login-index .btn-footer-popover { background: rgba(255,255,255,0.05) !important; color: #e2e8f0 !important; border: 1px solid rgba(255, 255, 255, 0.1) !important; }

        /* ----------------------------------------------------
           CUSTOM TOAST ANIMATIONS
        ----------------------------------------------------- */
        #custom-cookie-toast {
            position: fixed !important;
            bottom: 30px !important;
            left: 30px !important;
            background: rgba(30, 41, 59, 0.85) !important;
            backdrop-filter: blur(12px) !important;
            -webkit-backdrop-filter: blur(12px) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            padding: 18px 22px !important;
            border-radius: 16px !important;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4) !important;
            display: flex !important;
            align-items: flex-start !important;
            justify-content: space-between !important;
            width: 380px !important;
            max-width: calc(100vw - 40px) !important;
            z-index: 9999 !important;
            color: #f8fafc !important;
            animation: toastSlideIn 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards !important;
        }

        #custom-cookie-toast.slide-out {
            animation: toastSlideOut 0.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards !important;
        }

        @keyframes toastSlideIn { from { transform: translateX(-120%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes toastSlideOut { from { transform: translateX(0); opacity: 1; } to { transform: translateX(-120%); opacity: 0; } }

        /* Responsive Breakpoint for Mobile */
        @media (max-width: 900px) {
            .moodle-hero-bg { display: none !important; }
            body#page-login-index .login-container { flex: 1 !important; min-width: 100vw !important; width: 100vw !important; border-left: none !important;}
            body#page-login-index #page-footer { width: 100% !important; text-align: center !important;}
        }
        `;
        document.head.appendChild(style);
    }

    // 2. DOM Builder: Injects Hero Panel, SVG Eye, and Toast Notification
    function buildModernUI() {
        let attempts = 0;
        const domInterval = setInterval(() => {
            attempts++;
            const loginWrapper = document.querySelector('.login-wrapper');
            const passwordField = document.getElementById('password');
            
            if (loginWrapper && passwordField) {
                clearInterval(domInterval); // Stop hunting once elements exist

                // --- A. Inject Hero Side ---
                if (!document.querySelector('.moodle-hero-bg')) {
                    const hero = document.createElement('div');
                    hero.className = 'moodle-hero-bg';
                    hero.innerHTML = `
                        <div class="moodle-hero-content">
                            <h1>Welcome Back.</h1>
                            <p>Log in to access your dashboard, connect with peers, and seamlessly manage your academic journey.</p>
                        </div>
                    `;
                    loginWrapper.prepend(hero); // Adds to the left side of the flexbox
                }

                // --- B. Inject SVG Password Toggle ---
                if (!document.querySelector('.password-toggle')) {
                    const wrapper = passwordField.parentElement;
                    const toggle = document.createElement('div');
                    toggle.className = 'password-toggle';
                    
                    const eyeIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>`;
                    const eyeSlashIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="20" height="20" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>`;
                    
                    toggle.innerHTML = eyeIcon;
                    wrapper.appendChild(toggle);

                    toggle.addEventListener('click', () => {
                        if (passwordField.type === 'password') {
                            passwordField.type = 'text';
                            toggle.innerHTML = eyeSlashIcon;
                        } else {
                            passwordField.type = 'password';
                            toggle.innerHTML = eyeIcon;
                        }
                    });
                }

                // --- C. Inject Custom Cookie Toast ---
                if (!document.getElementById('custom-cookie-toast')) {
                    const toast = document.createElement('div');
                    toast.id = 'custom-cookie-toast';
                    toast.innerHTML = `
                        <div style="display: flex; align-items: flex-start; gap: 14px;">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" width="24" height="24" style="color:#818cf8; flex-shrink:0;">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <div>
                                <strong style="display:block; font-size: 15px; margin-bottom: 4px; color:#f8fafc; font-family:'Outfit', sans-serif;">Cookie Notice</strong>
                                <p style="margin:0; font-size:13px; color:#94a3b8; line-height: 1.5; font-family:'Outfit', sans-serif;">We use cookies to ensure you get the best experience on our platform.</p>
                            </div>
                        </div>
                        <button id="close-cookie-toast" style="background:rgba(255,255,255,0.05); border:1px solid rgba(255,255,255,0.1); color:#94a3b8; border-radius:8px; cursor:pointer; padding:6px; transition:all 0.2s; flex-shrink:0;">
                            <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                        </button>
                    `;
                    document.body.appendChild(toast);

                    // Hover & Close Logic for Toast
                    const closeBtn = document.getElementById('close-cookie-toast');
                    closeBtn.addEventListener('mouseover', () => { closeBtn.style.color = '#fff'; closeBtn.style.background = 'rgba(255,255,255,0.15)'; });
                    closeBtn.addEventListener('mouseout', () => { closeBtn.style.color = '#94a3b8'; closeBtn.style.background = 'rgba(255,255,255,0.05)'; });

                    closeBtn.addEventListener('click', () => {
                        toast.classList.add('slide-out');
                        setTimeout(() => toast.remove(), 500); // Matches animation duration
                    });
                }

            } else if (attempts > 50) {
                clearInterval(domInterval);
                console.warn("Modern UI Injector: Timed out waiting for DOM elements.");
            }
        }, 100); 
    }

    // Execute
    injectStyles();
    buildModernUI();

})();
