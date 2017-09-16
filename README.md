[![Sponsored](https://img.shields.io/badge/chilicorn-sponsored-brightgreen.svg?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAA4AAAAPCAMAAADjyg5GAAABqlBMVEUAAAAzmTM3pEn%2FSTGhVSY4ZD43STdOXk5lSGAyhz41iz8xkz2HUCWFFhTFFRUzZDvbIB00Zzoyfj9zlHY0ZzmMfY0ydT0zjj92l3qjeR3dNSkoZp4ykEAzjT8ylUBlgj0yiT0ymECkwKjWqAyjuqcghpUykD%2BUQCKoQyAHb%2BgylkAyl0EynkEzmkA0mUA3mj86oUg7oUo8n0k%2FS%2Bw%2Fo0xBnE5BpU9Br0ZKo1ZLmFZOjEhesGljuzllqW50tH14aS14qm17mX9%2Bx4GAgUCEx02JySqOvpSXvI%2BYvp2orqmpzeGrQh%2Bsr6yssa2ttK6v0bKxMBy01bm4zLu5yry7yb29x77BzMPCxsLEzMXFxsXGx8fI3PLJ08vKysrKy8rL2s3MzczOH8LR0dHW19bX19fZ2dna2trc3Nzd3d3d3t3f39%2FgtZTg4ODi4uLj4%2BPlGxLl5eXm5ubnRzPn5%2Bfo6Ojp6enqfmzq6urr6%2Bvt7e3t7u3uDwvugwbu7u7v6Obv8fDz8%2FP09PT2igP29vb4%2BPj6y376%2Bu%2F7%2Bfv9%2Ff39%2Fv3%2BkAH%2FAwf%2FtwD%2F9wCyh1KfAAAAKXRSTlMABQ4VGykqLjVCTVNgdXuHj5Kaq62vt77ExNPX2%2Bju8vX6%2Bvr7%2FP7%2B%2FiiUMfUAAADTSURBVAjXBcFRTsIwHAfgX%2FtvOyjdYDUsRkFjTIwkPvjiOTyX9%2FAIJt7BF570BopEdHOOstHS%2BX0s439RGwnfuB5gSFOZAgDqjQOBivtGkCc7j%2B2e8XNzefWSu%2BsZUD1QfoTq0y6mZsUSvIkRoGYnHu6Yc63pDCjiSNE2kYLdCUAWVmK4zsxzO%2BQQFxNs5b479NHXopkbWX9U3PAwWAVSY%2FpZf1udQ7rfUpQ1CzurDPpwo16Ff2cMWjuFHX9qCV0Y0Ok4Jvh63IABUNnktl%2B6sgP%2BARIxSrT%2FMhLlAAAAAElFTkSuQmCC)](http://spiceprogram.org/oss-sponsorship) [![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

![Logo](logo.svg)

# Budgety

**Budgety** is a tool that helps you control your expenses in order to maintain your desired monthly savings, by spending less. It is also an experiment to test human psychology by displaying the remaining daily budget.

![Example budget](http://i.imgur.com/EyGnyun.png)

From the example above, you start with your fixed monthly income and then subtract the recurring expenses. From what remains (i.e. 2000 - 600 = 1400) you subtract the desired amount you plan on saving. That leaves with you the monthly budget for the rest of your general expenses (groceries, transportation, etc).

From the monthly budget we can derive a **daily budget**.

![daily budget](http://i.imgur.com/Ja6sPLJ.png)

The above formula is the core of the app. By showing the user the remaining daily budget can we influence him on spending less?

## Built With

- React native
- Redux

## FAQ

**Q.** There are billions of money tracking apps, why another one?

**A.** This app is mostly an experiment on human psychology. By showing you a daily budget that sometimes goes red, it forces you into spend less thus saving more.


**Q.** What if I dont spend anything in one day?

**A.** The daily budget will be spread amongst the remaing days.


**Q.** If I receive a money gift do I have to take it into account?

**A.** No. we only care about expenses and maintaining a positive daily budget.


## TODOS (high level tasks or features)

- [x] Beautiful logo
- [ ] Mockup designs
- [x] Setup React + Redux + React Navigation
- [ ] General features
    - [ ] Add expense
    - [ ] Set monthly income
    - [ ] Set monthly fixed expenses (when a new month starts it will use the monthly expenses from last month. User can change)
    - [ ] Amount of money left for the day (and month)
    - [ ] Chart of daily spendings
    - [ ] Settings
        - [ ] Set default currency
        - [ ] Option to anonymously share data (are users managing correctly their budget?)
    - [ ] List transations
        - [ ] Filters (category?, range - week, month, amount)
    - [ ] Stats (how much was saved and spend)
- [ ] Firebase
    - [ ] Analytics

## Supporters

![Chillicorn](https://github.com/futurice/spiceprogram/raw/gh-pages/assets/img/logo/chilicorn_with_text-180.png)

A big thank you to Futurice (and Chillicorn) for supporting this project and many other Open Source projects trough the [Spice Program](https://spiceprogram.org/)


## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/andrepcg/budgety-native/tags). 

## License

This project is licensed under the GPL v3 license - see the [LICENSE](LICENSE) file for details
