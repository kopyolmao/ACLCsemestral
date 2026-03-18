(function() {
    'use strict';

    // 1. Safety Check: Are we on the login page?
    if (document.body.id !== 'page-login-index') {
        console.log("Modern UI Injector: Not on login page, skipping UI override.");
        return; 
    }

    console.log("Modern UI Injector: Login page detected. Applying Glassmorphism safely...");

    function applyModernUI() {
        const style = document.createElement('style');
        style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap');

        /* 1. Ambient gradient background & Core Body */
        body {
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

        /* 2. Layout Structure: Center card, keep footer at bottom */
        #page-wrapper {
            flex: 1 !important;
            display: flex !important;
            flex-direction: column !important;
        }

        #page {
            flex: 1 !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
            margin: 0 !important;
            padding: 2rem !important;
        }

        #page-content, #region-main-box, #region-main, .login-wrapper {
            background: transparent !important;
            border: none !important;
            box-shadow: none !important;
            width: 100% !important;
            display: flex !important;
            justify-content: center !important;
        }

        /* 3. The Glassmorphism Card */
        .login-container {
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

        /* Typography & Headings */
        .loginform h1.login-heading {
            font-family: 'Outfit', sans-serif !important;
            color: #ffffff !important;
            font-weight: 600 !important;
            font-size: 24px !important;
            margin-bottom: 30px !important;
            text-align: center !important;
            letter-spacing: -0.5px !important;
        }

        /* Inputs */
        .form-group {
            margin-bottom: 20px !important;
            position: relative !important;
            width: 100% !important;
        }

        .form-control {
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

        .form-control:focus {
            background: rgba(0, 0, 0, 0.45) !important;
            border-color: #818cf8 !important;
            box-shadow: 0 0 0 4px rgba(129, 140, 248, 0.2) !important;
            outline: none !important;
        }

        .form-control::placeholder {
            color: #64748b !important;
            font-weight: 400 !important;
        }

        /* The Login Button */
        .btn-primary {
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

        .btn-primary:hover {
            transform: translateY(-2px) !important;
            box-shadow: 0 8px 25px rgba(99, 102, 241, 0.5) !important;
        }

        /* Forgot Password Link */
        .login-form-forgotpassword {
            text-align: center !important;
            margin-top: 20px !important;
        }

        .login-form-forgotpassword a {
            color: #a5b4fc !important;
            text-decoration: none !important;
            font-size: 14px !important;
            font-weight: 500 !important;
            transition: color 0.3s ease !important;
        }

        .login-form-forgotpassword a:hover {
            color: #ffffff !important;
        }

        /* Divider & Cookies Button */
        .login-divider {
            border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
            margin: 25px 0 20px 0 !important;
        }

        .btn-secondary {
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

        .btn-secondary:hover {
            background: rgba(255, 255, 255, 0.1) !important;
            color: #ffffff !important;
        }

        /* 4. Restyling the Footer to fit the theme */
        #page-footer {
            background: rgba(15, 23, 42, 0.8) !important;
            backdrop-filter: blur(10px) !important;
            -webkit-backdrop-filter: blur(10px) !important;
            border-top: 1px solid rgba(255, 255, 255, 0.05) !important;
            color: #94a3b8 !important;
            padding: 1rem 0 !important;
            margin-top: auto !important;
        }

        #page-footer a {
            color: #818cf8 !important;
            text-decoration: none !important;
        }

        #page-footer a:hover {
            color: #a5b4fc !important;
        }

        .footer-content-popover, .footer-section {
            background: transparent !important;
            border-color: rgba(255, 255, 255, 0.05) !important;
            color: #94a3b8 !important;
        }

        .btn-footer-popover {
            background: #1e293b !important;
            color: #e2e8f0 !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            box-shadow: none !important;
        }

        .footer-dark {
            background: transparent !important;
        }

        /* Proper SVG Password Toggle */
        .password-toggle {
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

        .password-toggle:hover {
            color: #ffffff !important;
        }
        
        .password-toggle svg {
            width: 20px;
            height: 20px;
        }
        `;
        document.head.appendChild(style);

        // Enhance the password field with a professional SVG toggle
        const passwordField = document.getElementById('password');
        
        if (passwordField) {
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
        }
    }

    applyModernUI();

})();
