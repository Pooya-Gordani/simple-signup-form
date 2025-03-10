const checkBox_agree_to_terms = document.getElementById('check');
checkBox_agree_to_terms.addEventListener('change', function() {
    document.getElementById('btn-sign-up').disabled = !this.checked;
});