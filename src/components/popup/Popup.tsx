import React, {FC, useState} from "react"
import {useSelector} from "react-redux"
import {ReturnComponentType} from "types"
import {Theme} from "store/slices/app/types"
import {selectTheme} from "store/selectors"
import {useAppDispatch, useTheme} from "hooks"
import {setTheme} from "store/slices/app"
import {getBackgroundColor} from "utils"
import {Icon20DoorArrowRightOutline, Icon28PaletteOutline} from "@vkontakte/icons"
import {logOut} from "store/asyncActions"
import {PopupPropsType} from "./types"
import {Button, Select} from "components/common"
import style from "./Popup.module.scss"

const themes: Theme[] = [Theme.DEFAULT, Theme.DARK]

export const Popup: FC<PopupPropsType> = ({setIsActivePopup}): ReturnComponentType => {

  const dispatch = useAppDispatch()

  const theme = useSelector(selectTheme)

  const [isHover, setIsHover] = useState(false)

  const isDarkTheme = useTheme(Theme.DARK)

  const onThemeChange = (theme: string): void => {
    dispatch(setTheme(theme as any))
  }

  const onLogOutMouseEnter = (): void => setIsHover(true)

  const onLogOutMouseLeave = (): void => setIsHover(false)

  const onLogOutClick = (): void => {
    dispatch(logOut())
    setIsActivePopup(false)
  }

  return (
    <div className={`${style.popup} ${isDarkTheme && style.popupDark}`}>
      <div className={style.watercolorContainer}>
        <Icon28PaletteOutline className={style.watercolorIcon} width={17} height={17} fill={"#71AAEB"}/>
        Theme: <Select
        options={themes}
        value={theme}
        setValue={onThemeChange}
      />
      </div>
      <Button
        className={style.logOutBtn}
        style={{backgroundColor: getBackgroundColor(isHover, theme, "#F5F6F8", "#333333")}}
        onClick={onLogOutClick}
        onMouseEnter={onLogOutMouseEnter}
        onMouseLeave={onLogOutMouseLeave}
      >
        <Icon20DoorArrowRightOutline className={style.logOutIcon} width={17} height={17} fill={"#71AAEB"}/>
        Log out
      </Button>
    </div>
  )
}
