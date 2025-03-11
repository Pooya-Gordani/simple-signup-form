var sign_up_form = document.sign_up_form;
var input_first_name = document.sign_up_form.input_first_name;
var input_last_name = document.sign_up_form.input_last_name;
var input_email_address = document.sign_up_form.input_email_address;
var input_phone_number = document.sign_up_form.input_phone_number;
var input_password = document.sign_up_form.input_password;
var input_retype_password = document.sign_up_form.input_retype_password;
var password_match_status = document.querySelector('.password_match_status');
const alert_container = document.querySelector('.alert-container');
var alert_success = document.querySelector('.alert-success');
const alert_box = 
`
<div class="alert alert-success alert-dismissible fade show" id="alert">
    <svg class="me-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check-circle-fill" viewBox="0 0 16 16">
    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
    </svg>
    Form submited successfully!
    <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>
`;
console.log(alert_success);


sign_up_form.addEventListener('submit', function(event){
    event.preventDefault();
    validateInputsForm(input_first_name);
    validateInputsForm(input_last_name);
    validateInputsForm(input_email_address);
    validateInputsForm(input_phone_number);
    validateInputsForm(input_password);
    validateInputsForm(input_retype_password);

    // Check if all fields are valid
    if (areAllFieldsValid()) {
        // alert_success.classList.remove('visually-hidden');
        document.querySelector('.alert-container').innerHTML = alert_box;
    }

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
        input_password.classList.add('is-invalid');
        input_retype_password.classList.add('is-invalid');
        password_match_status.classList.remove('visually-hidden');
    }
    else{
        password_match_status.classList.add('visually-hidden');
    }

    setTimeout(() => {
        const alertElement = alert_container.querySelector('.alert');
        if (alertElement) {
            alertElement.classList.remove('show'); // Fade out the alert
            alertElement.classList.add('fade'); // Ensure fade animation
            setTimeout(() => {
                alertElement.remove(); // Remove the alert from the DOM after fading out
            }, 150); // Wait for the fade animation to complete
        }
    }, 3000); // 3 seconds delay
}

const checkBox_agree_to_terms = document.getElementById('check');

checkBox_agree_to_terms.addEventListener('change', function() {
    document.getElementById('btn-sign-up').disabled = !this.checked;
});


// To check if all fields are valid
function areAllFieldsValid() {
    const inputs = [input_first_name, input_last_name, input_email_address, input_phone_number, input_password, input_retype_password];
    return inputs.every(input => input.classList.contains('is-valid')) && input_password.value === input_retype_password.value;
}