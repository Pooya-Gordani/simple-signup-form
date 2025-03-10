document.getElementById('check').addEventListener('change', function() {
    document.getElementById('btn-sign-up').disabled = !this.checked;
});