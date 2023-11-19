import logoGH from '../assets/logoGH.png'
import {Container} from './styles'
import CustomInput from '../components/Input'

function App() {

  return (
    <>
    <Container>
      <img src={logoGH} width={72} height={72} alt="github logo"/>
      <CustomInput />
    </Container>

    </>
  )
}

export default App
