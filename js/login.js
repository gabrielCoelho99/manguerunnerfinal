document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const data = {
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };

    fetch('https://seu-app.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        if (data.token) {
            alert('Login bem-sucedido'); 
            window.location.href = 'index.html';
        } else {
            alert(data.message); 
        }
    })
    .catch(error => {
        console.error('Erro:', error);
    });
});
