document.getElementById('registerForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = {
        firstname: document.getElementById('firstname').value,
        lastname: document.getElementById('lastname').value,
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        age: parseInt(document.getElementById('age').value),
        password: document.getElementById('password').value,
        educationLevel: document.getElementById('educationLevel').value,
        gender: document.querySelector('input[name="gender"]:checked').value
    };

    try {
        console.log('Enviando dados:', JSON.stringify(formData));

        const response = await fetch('https://seu-app.vercel.app/api/auth/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Erro ao cadastrar usuário');
        }

        const data = await response.json();
        console.log('Usuário cadastrado com sucesso. Token:', data.token);
        alert('Usuário cadastrado com sucesso');
        window.location.href = 'login.html'; 
    } catch (error) {
        console.error('Erro:', error);
        alert(error.message);
    }
});
