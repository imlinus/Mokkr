import { random } from './utils/random'
import { slug } from './utils/slug'
import { femaleNames, maleNames, surNames, maleOrFemale } from './data/names'
import { glues, emails } from './data/internet'
import { password } from './data/password'

const mokkr = {
  firstName: (gender) => {
    if (gender === 'female') return random(femaleNames)
    else if (gender === 'male') return random(maleNames)
  },

  surName: () => random(surNames),

  maleOrFemale: () => maleOrFemale(),

  email: (firstName, surName) => {
    const name = slug(firstName)
    const surname = slug(surName)
    const email = name + random(glues) + surname + '@' + random(emails)

    return email
  },

  password: (len = 10) => password(len),

  random: () => {
    const gender = mokkr.maleOrFemale()
    const firstName = mokkr.firstName(gender)
    const surName = mokkr.surName()
    const email = mokkr.email(firstName, surName)
    const pass = mokkr.password()

    return {
      gender,
      firstName,
      surName,
      email,
      pass
    }
  }
}

export default mokkr
