# Mokkr

Need some mock data?
This tiny ~4kb lib should have you covered for the most basic things.
If you need some bigger guns, there are more mature libs out there :-)

## Setup
```sh
$ npm i mokkr
```


```js
import mokkr from 'mokkr'

const gender = mokkr.maleOrFemale()
const firstName = mokkr.firstName(gender)
const surName = mokkr.surName()
const email = mokkr.email(firstName, surName)
const pass = mokkr.password()

console.log({
  gender,
  firstName,
  surName,
  email,
  pass
})
```

Will generate:
```js
{
  gender: 'male',
  firstName: 'Christian',
  surName: 'Brown',
  email: 'christian_brown@yahoo.com',
  pass: 'T@Ny5zjsTU'
}
```

Cheers,
imlinus
