import logoGH from '../assets/logoGH.png'
import {Container} from './styles'
import CustomInput from '../components/Input'
import Button from '../components/Button'
import ItemRepo from '../components/ItemRepos'
import { useState } from 'react'
import {api} from '../services/api'

function App() {

const [currentRepo, setCurrentRepo] = useState('');  
const [repos, setRepos] = useState([])

const handleSearchRepo = async () => {
  const {data} = await api.get(`repos/${currentRepo}`)

  if(data.id) {

    const isExist = repos.find(repo => repo.id == data.id)
    if(!isExist){
      setRepos(prev => [...prev, data]);
      setCurrentRepo('')
      return
    }
    alert('Repositório não encontrado')

    }
}

  return (
    <>
    <Container>
      <img src={logoGH} width={72} height={72} alt="github logo"/>
      <CustomInput value={currentRepo} onChange={(e) => setCurrentRepo(e.target.value)}/>
      <Button onClick={handleSearchRepo}/>
      {repos.map(repo => <ItemRepo repo={repo}/>)}
    </Container>
    </>
  )
}

export default App
