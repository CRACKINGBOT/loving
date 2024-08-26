// script.js

document.getElementById('revealMessage').addEventListener('click', function() {
    const secretMessage = document.getElementById('secretMessage');
    if (secretMessage.classList.contains('hidden')) {
        secretMessage.classList.remove('hidden');
    } else {
        secretMessage.classList.add('hidden');
    }
});
