# 🎲 Mokkr

### Summary

- :tada: 0 dependencies, `~4kb`
- :innocent: Minimal API

### About

Need some mock data?

This tiny ~4kb lib should have you covered for the most basic things.

If you need some bigger guns, there are more mature libs out there :-)

## Setup
```sh
$ npm i mokkr
```


```js
import mokkr from 'mokkr'

const random = mokkr.random()

console.log(random)
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

### API
```js
const gender = mokkr.maleOrFemale()
const firstName = mokkr.firstName(gender)
const surName = mokkr.surName()
const email = mokkr.email(firstName, surName)
const pass = mokkr.password()

// or if you want em' all
const random = mokkr.random()
```

### MIT License

Licensed under the [MIT License](https://github.com/imlinus/Lestr/blob/master/LICENSE)


##### Cheers