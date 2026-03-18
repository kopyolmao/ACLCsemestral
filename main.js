function applyModernUI() {
    const style = document.createElement('style');
    style.innerHTML = `

    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap');

    * {
        font-family: 'Inter', sans-serif;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background: #0f172a;
        background-image: radial-gradient(circle at 20% 20%, #1e293b, transparent 40%),
                          radial-gradient(circle at 80% 80%, #1e293b, transparent 40%);
        min-height: 100vh;
    }

    #page {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    /* Card */
    .login-container {
        width: 100%;
        max-width: 380px;
        padding: 35px;
        border-radius: 16px;
        background: #111827;
        box-shadow: 0 20px 60px rgba(0,0,0,0.6);
        border: 1px solid rgba(255,255,255,0.05);
    }

    .login-heading {
        color: #f9fafb;
        font-size: 22px;
        font-weight: 600;
        margin-bottom: 25px;
        text-align: left;
    }

    /* Inputs */
    .form-control {
        background: #0b1220;
        border: 1px solid #1f2937;
        color: #e5e7eb;
        border-radius: 10px !important;
        padding: 12px 14px;
        transition: all 0.2s ease;
    }

    .form-control::placeholder {
        color: #6b7280;
    }

    .form-control:focus {
        border-color: #6366f1;
        background: #020617;
        box-shadow: 0 0 0 3px rgba(99,102,241,0.25);
    }

    /* Button */
    .btn-primary {
        margin-top: 10px;
        width: 100%;
        border-radius: 10px;
        padding: 12px;
        font-weight: 500;
        background: #6366f1;
        border: none;
        transition: all 0.2s ease;
    }

    .btn-primary:hover {
        background: #4f46e5;
        transform: translateY(-1px);
        box-shadow: 0 8px 20px rgba(99,102,241,0.4);
    }

    /* Secondary button */
    .btn-secondary {
        background: transparent;
        border: 1px solid #1f2937;
        color: #9ca3af;
        border-radius: 8px;
    }

    /* Links */
    a {
        color: #818cf8 !important;
        font-size: 13px;
    }

    a:hover {
        text-decoration: underline;
    }

    /* Divider */
    .login-divider {
        margin: 20px 0;
        border-top: 1px solid #1f2937;
    }

    /* Footer minimal */
    #page-footer {
        display: none;
    }

    /* Subtle entrance animation */
    .login-container {
        animation: slideUp 0.5s ease;
    }

    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translateY(25px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    `;
    document.head.appendChild(style);

    /* Add subtle UX improvements */
    const passwordField = document.getElementById('password');

    if (passwordField) {
        const wrapper = passwordField.parentElement;

        const toggle = document.createElement('span');
        toggle.innerHTML = '👁';
        toggle.style.position = 'absolute';
        toggle.style.right = '15px';
        toggle.style.top = '50%';
        toggle.style.transform = 'translateY(-50%)';
        toggle.style.cursor = 'pointer';
        toggle.style.opacity = '0.6';

        wrapper.style.position = 'relative';
        wrapper.appendChild(toggle);

        toggle.addEventListener('click', () => {
            passwordField.type =
                passwordField.type === 'password' ? 'text' : 'password';
        });
    }
}

applyModernUI();
