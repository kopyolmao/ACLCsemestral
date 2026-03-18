function applyModernUI() {
    const style = document.createElement('style');
    style.innerHTML = `

    /* Import modern font */
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

    * {
        font-family: 'Poppins', sans-serif;
        box-sizing: border-box;
    }

    body {
        background: linear-gradient(135deg, #667eea, #764ba2);
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* Center login container */
    #page {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
    }

    .login-container {
        background: rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border-radius: 20px;
        padding: 40px;
        width: 100%;
        max-width: 400px;
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
        border: 1px solid rgba(255, 255, 255, 0.2);
        animation: fadeIn 0.8s ease-in-out;
    }

    .login-heading {
        color: #fff;
        text-align: center;
        font-weight: 600;
        margin-bottom: 25px;
    }

    /* Inputs */
    .form-control {
        border-radius: 12px !important;
        border: none;
        padding: 14px;
        margin-bottom: 15px;
        background: rgba(255, 255, 255, 0.2);
        color: #fff;
        transition: 0.3s;
    }

    .form-control::placeholder {
        color: rgba(255,255,255,0.7);
    }

    .form-control:focus {
        background: rgba(255, 255, 255, 0.3);
        outline: none;
        box-shadow: 0 0 0 2px rgba(255,255,255,0.3);
    }

    /* Button */
    .btn-primary {
        width: 100%;
        border-radius: 12px;
        padding: 12px;
        font-weight: 500;
        border: none;
        background: linear-gradient(135deg, #ff7eb3, #ff758c);
        transition: 0.3s;
    }

    .btn-primary:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(0,0,0,0.3);
    }

    /* Secondary button */
    .btn-secondary {
        border-radius: 10px;
        background: rgba(255,255,255,0.2);
        border: none;
        color: #fff;
    }

    /* Links */
    a {
        color: #fff !important;
        text-decoration: none;
        opacity: 0.85;
        transition: 0.3s;
    }

    a:hover {
        opacity: 1;
        text-decoration: underline;
    }

    /* Divider */
    .login-divider {
        height: 1px;
        background: rgba(255,255,255,0.3);
        margin: 20px 0;
    }

    /* Footer hide or soften */
    #page-footer {
        opacity: 0.7;
        font-size: 12px;
    }

    /* Animation */
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    `;
    document.head.appendChild(style);
}

applyModernUI();
