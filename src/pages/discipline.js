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

const Student = () => {
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
        Lista de Alunos:
      </Typography>

      {isSuccess &&
        data.map((data, key) => {
          return (            
            <Paper variant={'outlined'} key={key} sx={{marginBottom:3}}>
              <ListItem>
                <ListItemText
                  primary={'Matricula'}
                  secondary={data.matricula}
                />
              </ListItem>              
              <ListItem>
                <ListItemText
                  primary={'Status do Aluno'}
                  secondary={data.status}
                />
              </ListItem>              
              <ListItem>
                <ListItemText
                  primary={'Data de Inscrição'}
                  secondary={data.createdAt}
                />
              </ListItem>              
              <ListItem>
                <ListItemText
                  primary={'Codigo do Curso'}
                  secondary={data.cursoId}
                />
              </ListItem>
            </Paper>
          )
        })}
    </Container>
  )
}

export default Student
