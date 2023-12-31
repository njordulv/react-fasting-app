import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'
import { setThemeMode, selectThemeMode } from '../store/slices/themeSlice'
import styled from 'styled-components'

const ThemeSwitch = styled.div`
  position: absolute;
  display: flex;
  width: 25px;
  left: 65px;

  @media (max-width: 480px) {
    left: 42px;
  }
`

const CheckboxSlider = styled.div`
  width: 100%;
  height: 100%;
`

const CheckboxKnob = styled.div`
  position: absolute;
  width: 25px;
  height: 25px;
  z-index: 1;

  svg {
    position: relative;
    transition: all 0.3s ease;
    color: var(--color);
    font-size: 22px;
    top: 1px;
  }

  &:after {
    content: attr(aria-label);
    position: absolute;
    align-items: center;
    justify-content: center;
    left: -26px;
    width: 70px;
    background: var(--dark);
    color: var(--white);
    font-size: 11px;
    line-height: 16px;
    padding: 2px 5px;
    border-radius: 3px;
    top: 37px;
    opacity: 0;
    pointer-events: none;
    visibillity: hidden;
    transform: scale(0.95);
    transition: all 0.3s ease;
  }

  &:hover {
    &:after {
      top: 34px;
      opacity: 1;
      pointer-events: all;
      visibillity: visible;
      transform: scale(1);
    }

    svg {
      color: var(--blue);
    }
  }
`

const CheckboxInput = styled.input`
  display: none;
`

const CheckboxWrapper = styled.label`
  display: block;
  width: 25px;
  height: 25px;
  cursor: pointer;
  position: relative;
`

const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const themeMode = useSelector(selectThemeMode)
  const { darkTheme } = themeMode

  const themeHandler = (event, name) => {
    const mode = { ...themeMode, [name]: event.target.checked }
    dispatch(setThemeMode(mode))
    localStorage.setItem('theme', JSON.stringify(mode))
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', darkTheme)
    document.body.classList.toggle('light-theme', !darkTheme)

    const storedTheme = JSON.parse(localStorage.getItem('theme'))
    if (storedTheme) {
      dispatch(setThemeMode(storedTheme))
    }
  }, [darkTheme, dispatch])

  return (
    <>
      <ThemeSwitch>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={darkTheme}
            onChange={(e) => themeHandler(e, 'darkTheme')}
          />
          <CheckboxSlider>
            <CheckboxKnob aria-label="Switch theme">
              {darkTheme ? <IoMoonSharp /> : <IoSunnyOutline />}
            </CheckboxKnob>
          </CheckboxSlider>
        </CheckboxWrapper>
      </ThemeSwitch>
    </>
  )
}

export default ThemeSwitcher
