'use strict';

var random = function (items) {
  return items[Math.floor(Math.random() * items.length)]
};

var slug = function (str) {
  return str.toLowerCase()
};

var femaleNames = [
  'Emily', 'Hannah', 'Madison', 'Ashley', 'Sarah', 'Alexis',
  'Samantha', 'Jessica', 'Elizabeth', 'Taylor', 'Lauren', 'Alyssa',
  'Kayla', 'Abigail', 'Brianna', 'Olivia', 'Emma', 'Megan', 'Grace',
  'Victoria', 'Rachel', 'Anna', 'Sydney', 'Destiny', 'Morgan',
  'Jennifer', 'Jasmine', 'Haley', 'Julia', 'Kaitlyn', 'Nicole',
  'Amanda', 'Katherine', 'Natalie', 'Hailey', 'Alexandra', 'Savannah',
  'Chloe', 'Rebecca', 'Stephanie', 'Maria', 'Sophia', 'Mackenzie', 'Allison',
  'Isabella', 'Amber', 'Mary', 'Danielle', 'Gabrielle', 'Jordan', 'Brooke',
  'Michelle', 'Sierra', 'Katelyn', 'Andrea', 'Madeline', 'Sara', 'Kimberly',
  'Courtney', 'Erin', 'Brittany', 'Vanessa', 'Jenna', 'Jacqueline',
  'Caroline', 'Faith', 'Makayla', 'Bailey', 'Paige', 'Shelby', 'Melissa',
  'Kaylee', 'Christina', 'Trinity', 'Mariah', 'Caitlin', 'Autumn',
  'Marissa', 'Breanna', 'Angela', 'Catherine', 'Zoe', 'Briana',
  'Jada', 'Laura', 'Claire', 'Alexa', 'Kelsey', 'Kathryn', 'Leslie',
  'Alexandria', 'Sabrina', 'Mia', 'Isabel', 'Molly', 'Leah'
];

var maleNames = [
  'Jacob', 'Michael', 'Matthew', 'Joshua', 'Christopher', 'Nicholas',
  'Andrew', 'Joseph', 'Daniel', 'Tyler', 'William', 'Brandon',
  'Ryan', 'John', 'Zachary', 'David', 'Anthony', 'James', 'Justin',
  'Alexander', 'Jonathan', 'Christian', 'Austin', 'Dylan', 'Ethan',
  'Benjamin', 'Noah', 'Samuel', 'Robert', 'Nathan', 'Cameron',
  'Kevin', 'Thomas', 'Jose', 'Hunter', 'Jordan', 'Kyle', 'Caleb',
  'Jason', 'Logan', 'Aaron', 'Eric', 'Brian', 'Gabriel', 'Adam', 'Jack'
];

var surNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Miller', 'Davis',
  'Garcia', 'Rodriguez', 'Wilson', 'Russell', 'Anderson', 'Taylor',
  'Thomas', 'Hernandez', 'Moore', 'Martin', 'Jackson', 'Thompson',
  'White', 'Lopez', 'Lee', 'Gonzalez', 'Harris', 'Clark', 'Lewis',
  'Robinson', 'Walker', 'Perez', 'Hall', 'Young', 'Allen', 'Sanchez',
  'Wright', 'King', 'Scott', 'Green', 'Baker', 'Adams', 'Nelson',
  'Hill', 'Ramirez', 'Campbell', 'Mitchell', 'Roberts', 'Carter',
  'Phillips', 'Evans', 'Turner', 'Torres', 'Parker', 'Collins',
  'Edwards', 'Stewart', 'Flores', 'Morris', 'Nguyen', 'Murphy',
  'Rivera', 'Cook', 'Rogers', 'Morgan', 'Peterson', 'Cooper',
  'Reed', 'Bailey', 'Bell', 'Gomez', 'Kelly', 'Howard', 'Ward',
  'Cox', 'Diaz', 'Richardson', 'Wood', 'Watson', 'Brooks',
  'Gray', 'James', 'Reyes', 'Cruz', 'Hughes', 'Price', 'Myers',
  'Long', 'Foster', 'Sanders', 'Ross', 'Morales', 'Sullivan'
];

var maleOrFemale = function () {
  var random = Math.floor(Math.random() * 10);

  if (random > 5) {
    return 'male'
  } else {
    return 'female'
  }
};

var glues = [
  '.',
  '-',
  '_',
  ''
];

var emails = [
  'gmail.com',
  'googlemail.com',
  'yahoo.com',
  'hotmail.com',
  'mail.com',
  'msn.com',
  'outlook.com',
  'facebook.com',
  'protonmail.com',
  'icloud.com'
];

var password = function (len) {
  if ( len === void 0 ) len = 10;

  var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#?!@';
  var length = charset.length;
  var password = '';

  for (var i = 0; i < len; i++) {
    password += charset.charAt(Math.floor(Math.random() * length));
  }

  return password
};

var mokkr = {
  firstName: function (gender) {
    if (gender === 'female') { return random(femaleNames) }
    else if (gender === 'male') { return random(maleNames) }
  },

  surName: function () { return random(surNames); },

  maleOrFemale: function () { return maleOrFemale(); },

  email: function (firstName, surName) {
    var name = slug(firstName);
    var surname = slug(surName);
    var email = name + random(glues) + surname + '@' + random(emails);

    return email
  },

  password: function (len) {
    if ( len === void 0 ) len = 10;

    return password(len);
},

  random: function () {
    var gender = mokkr.maleOrFemale();
    var firstName = mokkr.firstName(gender);
    var surName = mokkr.surName();
    var email = mokkr.email(firstName, surName);
    var pass = mokkr.password();

    return {
      gender: gender,
      firstName: firstName,
      surName: surName,
      email: email,
      pass: pass
    }
  }
};

module.exports = mokkr;
