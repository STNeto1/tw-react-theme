import { ButtonHTMLAttributes, DetailedHTMLProps, useEffect } from 'react'
import { useTheme } from './store/theme'

export default function App() {
  const selectedTheme = useTheme((state) => state.selected)
  const theme = useTheme((state) => state.current)
  const changeTheme = useTheme((state) => state.changeTheme)

  useEffect(() => {
    document.documentElement.style.setProperty('--color-primary', theme.primary)
    document.documentElement.style.setProperty(
      '--color-secondary',
      theme.secondary
    )
  }, [theme])

  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gray-200">
      <div className="p-10 shadow bg-white flex flex-col gap-4 items-center justify-center">
        <span>Current theme: {selectedTheme}</span>

        <div className="flex items-center gap-2">
          <Button onClick={() => changeTheme('theme1')}>Theme 1</Button>
          <Button onClick={() => changeTheme('theme2')}>Theme 2</Button>
          <Button onClick={() => changeTheme('theme3')}>Theme 3</Button>
        </div>

        <div className="flex flex-col gap-2 items-center justify-center">
          <span className="text-3xl text-primary">Main text</span>
          <span className="text-3xl text-secondary">Secondary text</span>
        </div>
      </div>
    </main>
  )
}

const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      className="mx-1 my-2 rounded bg-indigo-700 px-4 py-2 text-sm text-white transition duration-150 ease-in-out hover:bg-indigo-600"
      {...props}
    />
  )
}
