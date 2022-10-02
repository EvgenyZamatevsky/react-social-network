import { ChangeEvent } from 'react'

export type RadioPropsType = {
  className?: string
  options: string[]
  name: string
  value: string
  isDarkTheme: boolean
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  setValue?: (option: string) => void
  setIndex?: (index: number) => void
}
