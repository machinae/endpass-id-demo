// Client ID of application from https://vault.endpass.com
const CLIENT_ID = '27904536-cc53-44ce-8125-7e7dc167c0dc';

const scopes = [
  // see user's email
  'user:email:read',
  // Get verification status of user's documents
  'documents:status:read'
];

const connect = new EndpassConnect({
    oauthClientId: CLIENT_ID,
    plugins: [EndpassOauthPlugin],
    scopes,
});

document.addEventListener('DOMContentLoaded', () => {
  // Trigger login flow on click of login button
  document.querySelector('#login-button').addEventListener('click', () => {
    connect.request('/user').then(user => {
      document.querySelector('#user-email').innerText = user.email;
      console.log(user);
    }).catch(err => {
      console.log(err);
    });
  });
});
