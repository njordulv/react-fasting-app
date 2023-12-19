import styled from 'styled-components'

const Payments = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 50px;
  margin: 30px 0;
  min-height: auto;
  color: var(--transparent);
`

const PaymentCards = ({
  LiaCcVisa,
  LiaCcMastercard,
  LiaCcAmex,
  LiaCcDiscover,
}) => {
  return (
    <Payments>
      <LiaCcVisa />
      <LiaCcMastercard />
      <LiaCcAmex />
      <LiaCcDiscover />
    </Payments>
  )
}

export default PaymentCards
