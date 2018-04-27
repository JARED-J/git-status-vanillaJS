// let form = document.getElementById('token-submit');

// form.addEventListener('click', (evt) => {
//     console.log('Submitted!!!!!!!');
// });
let token = '';
let headers = {Authorization: `token ${token}`}


var nameInput = document.getElementById('name');

document.querySelector('form.pure-form').addEventListener('submit', function (e) {

    //prevent the normal submission of the form
    e.preventDefault();

    console.log(nameInput.value);  
    fetch("https://api.github.com/notifications",{headers})
    .then(res => res.data)
    .then(arrayOfNotifications => {
        const notifications = arrayOfNotifications;
        console.log(notifications, 'this is the res.data')
        return notifications;
    })  
});
    

