function applyModernUI() {

    const style = document.createElement('style');
    style.innerHTML = `
        body {
            background: linear-gradient(135deg, #667eea, #764ba2);
        }
    `;
    document.head.appendChild(style);
}

applyModernUI();
