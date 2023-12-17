import { useNavigate } from 'react-router'
import styled from 'styled-components'
import { VscChromeClose } from 'react-icons/vsc'

const FinalStep = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--black);
  padding: 50px 20px;
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  background-size: 200% 200%;
  animation: animateGlow 1.25s linear infinite;
  z-index: 9;

  &::after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    z-index: -2;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    transform: scale(0.96) translateZ(0);
    filter: blur(20px);
    background: linear-gradient(
      to left,
      var(--pink),
      var(--green),
      var(--blue),
      var(--purple)
    );
    background-size: 200% 200%;
    animation: animateGlow 3s linear infinite;
  }

  &::before {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    z-index: -1;
    background: var(--black);
  }

  span {
    color: var(--green);
  }
`

const CloseButton = styled.button`
  position: absolute;
  right: 20px;
  top: 20px;
  color: var(--pink);
  font-size: 22px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: var(--color);
  }
`

const Final = ({ setPopup, emailValue }) => {
  const navigate = useNavigate()

  const closePopupHandler = () => {
    setPopup(false)
    navigate('/')
  }

  return (
    <FinalStep>
      <h2>Your Order is Confirmed</h2>
      <h3>
        Thank you for choosing <br />
        React Fasting App!
      </h3>
      <h5>
        An email to <span>{emailValue}</span> was sent with your personalized
        code to register on our platform.
      </h5>
      <CloseButton onClick={closePopupHandler}>
        <VscChromeClose />
      </CloseButton>
    </FinalStep>
  )
}

export default Final
