import cookie from 'js-cookie'

const getThemeFromCookie = (handleTheme: any) => {
  return () => {
    if (process.browser) {
      const theme: string | undefined = cookie.get('nextjs-form-theme')

      if (theme === 'light' || theme === 'dark') {
        handleTheme(theme);
      } else {
        cookie.set('nextjs-form-theme', 'dark')
      }
    }
  }
}

export default getThemeFromCookie;
