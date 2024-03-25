document.addEventListener('DOMContentLoaded', () => {
  const countries = [
    { date: 'Argentina' },
    { date: 'Bolivia' },
    { date: 'chile' },
    { date: 'Mexico' },
    { date: 'Jamon' },
    { date: 'Perro' },
    { date: 'Gato' },
    { date: 'Ballena' },
    { date: 'España' }
  ]

  const serchInput = document.getElementById('searchInput')
  const resultList = document.getElementById('resultList')

  const handleSearch = () => {
    const searchIterm = serchInput.value.toLowerCase()
    const filteredCountries = countries.filter((country) =>
      country.date.toLowerCase().startsWith(searchIterm)
    )

    resultList.innerHTML = ''

    filteredCountries.forEach((country) => {
      const li = document.createElement('li')
      li.textContent = country.date
      resultList.append(li)
    })
  }

  serchInput.addEventListener('input', handleSearch)
})
