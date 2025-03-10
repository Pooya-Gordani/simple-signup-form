var sign_up_form = document.sign_up_form;
var input_first_name = document.sign_up_form.input_first_name;
var input_last_name = document.sign_up_form.input_last_name;
var input_email_address = document.sign_up_form.input_email_address;
var input_phone_number = document.sign_up_form.input_phone_number;
var input_password = document.sign_up_form.input_password;
var input_retype_password = document.sign_up_form.input_retype_password;
var password_match_status = document.querySelector('.password_match_status');
console.log(password_match_status);


console.log(input_last_name);

sign_up_form.addEventListener('submit', function(event){
    event.preventDefault();
    validateInputsForm(input_first_name);
    validateInputsForm(input_last_name);
    validateInputsForm(input_email_address);
    validateInputsForm(input_phone_number);
    validateInputsForm(input_password);
    validateInputsForm(input_retype_password);
    return false;
})

function validateInputsForm(inputName){
    if(inputName.value.trim() == ''){
        inputName.classList.add('is-invalid');
    }
    else if(inputName.value){
        inputName.classList.remove('is-invalid');
        inputName.classList.add('is-valid');
    }

    if(input_password.value !== input_retype_password.value){
        console.log("passowrds are not the same!!");
        input_password.classList.add('is-invalid');
        input_retype_password.classList.add('is-invalid');
        password_match_status.classList.remove('visually-hidden');
    }
    else{
        console.log("Everthing Ok!");
        input_password.classList.remove('is-valid');
        input_retype_password.classList.remove('is-valid');
        password_match_status.classList.add('visually-hidden');
    }
}

const checkBox_agree_to_terms = document.getElementById('check');

checkBox_agree_to_terms.addEventListener('change', function() {
    document.getElementById('btn-sign-up').disabled = !this.checked;
});
