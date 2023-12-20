import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { GoSun, GoMoon } from 'react-icons/go'
import { setThemeMode, selectThemeMode } from '../store/slices/themeSlice'
import styled from 'styled-components'

const ThemeSwitch = styled.div`
  display: flex;
  width: 50px;
  position: absolute;
  left: 65px;

  @media (max-width: 480px) {
    left: 42px;
  }
`

const CheckboxSlider = styled.div`
  background-color: var(--black);
  position: absolute;
  border-radius: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s ease;
`

const CheckboxKnob = styled.div`
  position: absolute;
  transition: all 0.3s ease;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  left: 0;
  top: -8px;
  background-color: var(--background);
  box-shadow: 2px 0 5px rgba(153, 153, 153, 0.65);

  svg {
    color: var(--grey);
    font-size: 18px;
    position: relative;
    left: 0px;
    top: 3px;
    transition: all 0.3s ease;
  }
`

const CheckboxInput = styled.input`
  display: none;

  &:checked + ${CheckboxSlider} ${CheckboxKnob} {
    left: calc(100% - 23px);
  }
`

const CheckboxWrapper = styled.label`
  display: block;
  width: 45px;
  height: 10px;
  cursor: pointer;
  position: relative;

  & > ${CheckboxInput}:checked + ${CheckboxSlider} {
    background-color: var(--dark);
  }
`

const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const themeMode = useSelector(selectThemeMode)

  const themeHandler = (event, name) => {
    const mode = { ...themeMode, [name]: event.target.checked }
    dispatch(setThemeMode(mode))
    localStorage.setItem('theme', JSON.stringify(mode))
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', themeMode.darkTheme)
    document.body.classList.toggle('light-theme', !themeMode.darkTheme)

    const storedTheme = JSON.parse(localStorage.getItem('theme'))
    if (storedTheme) {
      dispatch(setThemeMode(storedTheme))
    }
  }, [themeMode.darkTheme, themeMode, dispatch])

  return (
    <>
      <ThemeSwitch>
        <CheckboxWrapper>
          <CheckboxInput
            type="checkbox"
            checked={themeMode.darkTheme}
            onChange={(e) => themeHandler(e, 'darkTheme')}
          />
          <CheckboxSlider>
            <CheckboxKnob>
              {themeMode.darkTheme ? <GoMoon /> : <GoSun />}
            </CheckboxKnob>
          </CheckboxSlider>
        </CheckboxWrapper>
      </ThemeSwitch>
    </>
  )
}

export default ThemeSwitcher
