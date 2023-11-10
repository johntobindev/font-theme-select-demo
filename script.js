document.addEventListener('DOMContentLoaded', () => {
  /**
   * FONT SELECT
   */
  const fontSelectElem = document.getElementById('font-select')

  // Add appropriate class depending on selected value
  // Remove classes for non-selected values
  const changeFont = () => {
    const selectedFont = fontSelectElem.value

    switch (selectedFont) {
      case 'roboto':
        document.body.classList.remove('is-ubuntu')
        document.body.classList.add('is-roboto')
        break

      case 'ubuntu':
        document.body.classList.remove('is-roboto')
        document.body.classList.add('is-ubuntu')
        break
    }
  }

  // Run once on load to set whatever is initially selected
  changeFont()
  // Run when change detected
  fontSelectElem.onchange = event => changeFont()

  /**
   * THEME SELECT
   */
  const themeSelectElem = document.getElementById('theme-select')

  // Add appropriate class depending on selected value
  // Remove classes for non-selected values
  const changeTheme = () => {
    const selectedTheme = themeSelectElem.value

    switch (selectedTheme) {
      case 'light':
        document.body.classList.remove('is-dark')
        document.body.classList.add('is-light')
        break

      case 'dark':
        document.body.classList.remove('is-light')
        document.body.classList.add('is-dark')
        break
    }
  }

  // Run once on load to set whatever is initially selected
  changeTheme()
  // Run when change detected
  themeSelectElem.onchange = event => changeTheme()
})