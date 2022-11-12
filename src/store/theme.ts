import create from 'zustand'

type Theme = 'theme1' | 'theme2' | 'theme3'

type Color = {
  primary: string
  secondary: string
}

export const themes: Record<Theme, Color> = {
  theme1: {
    primary: 'red',
    secondary: 'blue'
  },
  theme2: {
    primary: 'blue',
    secondary: 'red'
  },
  theme3: {
    primary: 'green',
    secondary: 'purple'
  }
}

interface ThemeStore {
  selected: Theme
  current: Color
  changeTheme: (theme: Theme) => void
}

export const useTheme = create<ThemeStore>()((set) => ({
  selected: 'theme1',
  current: themes.theme1,
  changeTheme: (theme) => set({ selected: theme, current: themes[theme] })
}))
