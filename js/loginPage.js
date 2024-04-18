function functionfocuse(){
    let userName = document.getElementById('userName')
    let password = document.getElementById('password')
    if(userName.value !== '' && password.value !== ''){
        userName.value = '';
        password.value = '';
        alert('Success');
    }
    else{
        alert('Enter your information :');
    }
}