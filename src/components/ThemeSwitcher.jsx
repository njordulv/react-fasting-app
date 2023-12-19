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
`

const CheckboxSlider = styled.div`
  background-color: var(--background);
  position: absolute;
  border-radius: 100px;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
`

const CheckboxKnob = styled.div`
  position: absolute;
  -webkit-transition: all 300ms ease;
  transition: all 300ms ease;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  left: 0;
  top: 0;
  background-color: #fff;
  -webkit-box-shadow: 0 2px 6px rgba(153, 153, 153, 0.75);
  box-shadow: 0 2px 6px rgba(153, 153, 153, 0.75);

  svg {
    color: #222;
    font-size: 18px;
    position: relative;
    left: 0px;
    top: 3px;
    transition: all 0.4s ease;
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
  height: 25px;
  cursor: pointer;
  position: relative;

  & > ${CheckboxInput}:checked + ${CheckboxSlider} {
    background-color: var(--purple);
  }
`

const ThemeSwitcher = () => {
  const dispatch = useDispatch()
  const themeMode = useSelector(selectThemeMode)

  const themeHandler = (event, name) => {
    dispatch(setThemeMode({ ...themeMode, [name]: event.target.checked }))
  }

  useEffect(() => {
    document.body.classList.toggle('dark-theme', themeMode.darkTheme)
    document.body.classList.toggle('light-theme', !themeMode.darkTheme)
  }, [themeMode.darkTheme])

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