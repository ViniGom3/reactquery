import {
  Box,
  Container,
  ListItem,
  ListItemText,
  Paper,  
  Typography,
} from '@mui/material'
import ReactLoading from 'react-loading'
import {discipline} from '../data'

const loading = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const Discipline = () => {
  const {data, isLoading, isError, isSuccess} = discipline.query.findAll({options: {
    refetchOnWindowFocus:true
  }})

  if (isLoading) {
    return (
      <Box sx={loading}>
        <ReactLoading type='bubbles' height={667} width={375} />
      </Box>
    )
  }

  if (isError) {
    return <Box>Error</Box>
  }

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' mt={2} mb={2} sx={{alignSelf: 'left'}}>
        Lista de Diciplinas:
      </Typography>

      {isSuccess &&
        data.map((data, key) => {
          return (            
            <Paper variant={'outlined'} key={key} sx={{marginBottom:3}}>
              <ListItem>
                <ListItemText
                  primary={'Nome da Diciplina'}
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
