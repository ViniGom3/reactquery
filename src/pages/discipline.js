import {
  Box,
  Container,
  ListItem,
  ListItemText,
  Paper,  
  Typography,
} from '@mui/material'
import loading from '../assets/loading.svg'
import GroupButtons from '../components/groupButtons'
import {discipline} from '../data'

const loadingCss = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const disciplineCss = {
  display: 'flex',
  justifyContent: ''
}

const Discipline = () => {
  const {data, isLoading, isError, isSuccess} = discipline.query.findAll({options: {
    refetchOnWindowFocus:true,    
  }})

  if (isLoading) {
    return (
      <Box sx={loadingCss}>
        <img src={loading} alt='loading' />
      </Box>
    )
  }

  if (isError) {
    return <Box>Error</Box>
  }

  return (
    <Container maxWidth='sm'>
       <Box sx={disciplineCss}>
          <GroupButtons />
        </Box>
      <Typography variant='h4' mt={2} mb={2} sx={{alignSelf: 'left'}}>
        Lista de Diciplinas:
      </Typography>

      {isSuccess &&
        data.map((data, key) => {
          return (            
            <Paper variant={'outlined'} key={key} sx={{marginBottom:3}}>
              <ListItem>
                <ListItemText
                  primary={'Nome da Disciplina'}
                  secondary={data.nome}
                />
              </ListItem>              
              <ListItem>
                <ListItemText
                  primary={'Carga Horária'}
                  secondary={data.cargaHoraria}
                />
              </ListItem>              
              <ListItem>
                <ListItemText
                  primary={'Departamento'}
                  secondary={data.nomeDepartamento}
                />
              </ListItem>              
              <ListItem>
                <ListItemText
                  primary={'Nível'}
                  secondary={data.nivel}
                />
              </ListItem>
            </Paper>
          )
        })}
    </Container>
  )
}

export default Discipline
