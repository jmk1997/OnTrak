module.exports = {
  User: require('./user'),//Add mysql models here if you have more than one table to interact with in your app.
  Group: require('./groups'),
  Course: require('./courses'),
  Task: require('./task'),
  Comment: require('./comment'),
  LoginHistory: require('./loginHistory')
};