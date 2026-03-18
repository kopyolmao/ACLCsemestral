(function() {
    'use strict';

    console.log("Modern UI Injector: Running...");

    // 1. Inject the CSS safely. 
    // By prepending body#page-login-index to everything, it physically CANNOT break your dashboard.
    function injectStyles() {
        if (document.getElementById('moodle-modern-theme')) return; // Prevent duplicates

        const style = document.createElement('style');
        style.id = 'moodle-modern-theme';
        style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');

        /* ----------------------------------------------------
           ALL STYLES SCOPED STRICTLY TO THE LOGIN PAGE
        ----------------------------------------------------- */
        
        body#page-login-index {
            font-family: 'Outfit', sans-serif !important;
            margin: 0 !important;
            padding: 0 !important;
            background-color: #0f172a !important;
            background-image: 
                radial-gradient(at 0% 0%, hsla(253,16%,7%,1) 0, transparent 50%), 
                radial-gradient(at 50% 0%, hsla(225,39%,30%,1) 0, transparent 50%), 
                radial-gradient(at 100% 0%, hsla(339,49%,30%,1) 0, transparent 50%) !important;
            background-size: cover !important;
            background-repeat: no-repeat !important;
            background-attachment: fixed !important;
            color: #e2e8f0 !important;
            display: flex !important;
            flex-direction: column !important;
            min-height: 100vh !important;
        }

        body#page-login-index nav, 
        body#page-login-index .toast-wrapper, 
        body#page-login-index .logininfo, 
        body#page-login-index .tool_dataprivacy { 
            display: none !important; 
        }

        body#page-login-index #page-wrapper {
            flex: 1 !important;
            display: flex !important;
            flex-direction: column !important;
            background: transparent !important;
        }

        body#page-login-index #page {
            flex: 1 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 !important;
            padding: 2rem !important;
        }

        body#page-login-index #page-content, 
        body#page-login-index #region-main-box, 
        body#page-login-index #region-main, 
        body#page-login-index .login-wrapper {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
        }

        /* Glassmorphism Card */
        body#page-login-index .login-container {
            background: rgba(17, 25, 40, 0.65) !important;
            backdrop-filter: blur(16px) saturate(180%) !important;
            -webkit-backdrop-filter: blur(16px) saturate(180%) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-radius: 24px !important;
            padding: 45px 40px !important;
            width: 100% !important;
            max-width: 420px !important;
            box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.6) !important;
            animation: formAppear 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards !important;
            transform: translateY(30px);
            opacity: 0;
            position: relative;
            z-index: 10;
        }

        @keyframes formAppear {
            to { transform: translateY(0); opacity: 1; }
        }

        /* Headings & Inputs */
        body#page-login-index .loginform h1.login-heading {
            font-family: 'Outfit', sans-serif !important;
            color: #ffffff !important;
            font-weight: 600 !important;
            font-size: 24px !important;
            margin-bottom: 30px !important;
            text-align: center !important;
            letter-spacing: -0.5px !important;
        }

        body#page-login-index .form-group {
            margin-bottom: 20px !important;
            position: relative !important;
            width: 100% !important;
        }

        body#page-login-index .form-control {
            background: rgba(0, 0, 0, 0.25) !important;
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
            background: rgba(0, 0, 0, 0.45) !important;
            border-color: #818cf8 !important;
            box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.2) !important;
            outline: none !important;
        }

        /* Buttons & Links */
        body#page-login-index .btn-primary {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%) !important;
            border: none !important;
            border-radius: 12px !important;
            color: white !important;
            font-size: 16px !important;
            font-weight: 600 !important;
            padding: 14px !important;
            width: 100% !important;
            transition: all 0.3s ease !important;
            box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3) !important;
            cursor: pointer !important;
        }

        body#page-login-index .btn-primary:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5) !important;
        }

        body#page-login-index .login-form-forgotpassword {
            text-align: center !important;
            margin-top: 20px !important;
        }

        body#page-login-index .login-form-forgotpassword a {
            color: #a5b4fc !important;
            text-decoration: none !important;
            font-size: 14px !important;
            font-weight: 500 !important;
        }

        body#page-login-index .login-divider {
            border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
            margin: 25px 0 20px 0 !important;
        }

        body#page-login-index .btn-secondary {
            background: rgba(255, 255, 255, 0.03) !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            border-radius: 12px !important;
            color: #94a3b8 !important;
            width: 100% !important;
            padding: 12px !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            transition: all 0.3s ease !important;
        }

        body#page-login-index .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1) !important;
            color: #ffffff !important;
        }

        /* Footer */
        body#page-login-index #page-footer {
            background: rgba(15, 23, 42, 0.8) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            border-top: 1px solid rgba(255, 255, 255, 0.05) !important;
            color: #94a3b8 !important;
            padding: 1rem 0 !important;
            margin-top: auto !important;
        }

        body#page-login-index #page-footer a { color: #818cf8 !important; text-decoration: none !important; }
        body#page-login-index .footer-content-popover, body#page-login-index .footer-section { background: transparent !important; border-color: rgba(255, 255, 255, 0.05) !important; }
        body#page-login-index .btn-footer-popover { background: #1e293b !important; color: #e2e8f0 !important; border: 1px solid rgba(255, 255, 255, 0.1) !important; }

        /* SVG Toggle */
        body#page-login-index .password-toggle {
            position: absolute !important;
            right: 18px !important;
            top: 50% !important;
            transform: translateY(-50%) !important;
            cursor: pointer !important;
            color: #64748b !important;
            transition: color 0.3s ease !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            padding: 5px !important;
            z-index: 10 !important;
        }
        body#page-login-index .password-toggle:hover { color: #ffffff !important; }
        body#page-login-index .password-toggle svg { width: 20px; height: 20px; }
        `;
        document.head.appendChild(style);
    }

    // 2. The Form Hunter: Wait for Moodle to draw the password field before modifying it
    function initPasswordToggle() {
        if (document.body.id !== 'page-login-index') return; // Only run on login page

        let attempts = 0;
        const findFormInterval = setInterval(() => {
            attempts++;
            const passwordField = document.getElementById('password');
            
            if (passwordField) {
                clearInterval(findFormInterval); // Found it! Stop hunting.
                if (document.querySelector('.password-toggle')) return; // Already added

                const wrapper = passwordField.parentElement;
                const toggle = document.createElement('div');
                toggle.className = 'password-toggle';
                
                const eyeIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path stroke-linecap="round" stroke-linejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>`;
                const eyeSlashIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" /></svg>`;
                
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
            } else if (attempts > 50) {
                // If it can't find it after 5 seconds (50 * 100ms), give up to save memory
                clearInterval(findFormInterval);
                console.warn("Modern UI Injector: Could not find password field.");
            }
        }, 100); // Check every 100 milliseconds
    }

    // Execute immediately 
    injectStyles();
    initPasswordToggle();

})();
