import { random } from './utils/random'
import { slug } from './utils/slug'
import { firstNameFemales, firstNameMales, surNames, maleOrFemale } from './data/names'
import { glues, emails } from './data/internet'
import { password } from './data/password'

const mokkr = {
  firstName: (gender) => {
    if (gender === 'female') {
      return random(firstNameFemales)
    } else if (gender === 'male') {
      return random(firstNameMales)
    }
  },

  surName: () => {
    return random(surNames)
  },

  maleOrFemale: () => {
    return maleOrFemale()
  },

  email: (firstName, surName) => {
    const name = slug(firstName)
    const surname = slug(surName)
    const email = name + random(glues) + surname + '@' + random(emails)

    return email
  },

  password: (len = 10) => {
    return password(len)
  }
}

export default mokkr
