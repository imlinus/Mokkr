export const firstNameFemales = [
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
]

export const firstNameMales = [
  'Jacob', 'Michael', 'Matthew', 'Joshua', 'Christopher', 'Nicholas',
  'Andrew', 'Joseph', 'Daniel', 'Tyler', 'William', 'Brandon',
  'Ryan', 'John', 'Zachary', 'David', 'Anthony', 'James', 'Justin',
  'Alexander', 'Jonathan', 'Christian', 'Austin', 'Dylan', 'Ethan',
  'Benjamin', 'Noah', 'Samuel', 'Robert', 'Nathan', 'Cameron',
  'Kevin', 'Thomas', 'Jose', 'Hunter', 'Jordan', 'Kyle', 'Caleb',
  'Jason', 'Logan', 'Aaron', 'Eric', 'Brian', 'Gabriel', 'Adam', 'Jack'
]

export const surNames = [
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
]

export const maleOrFemale = () => {
  var random = Math.floor(Math.random() * 10)

  if (random > 5) {
    return 'male'
  } else {
    return 'female'
  }
}
