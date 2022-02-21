import {
  Box,
  Container,
  ListItem,
  ListItemText,
  Paper,  
  Typography,
} from '@mui/material'
import {user} from '../data'
import loading from '../assets/loading.svg'

const loadingCss = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const Student = () => {
  const userquery1 = user.query.findAll({options: {
    refetchOnWindowFocus:true,
    retry: false,
    refetchInterval: 3000,
    staleTime: 1000
  }})

  const userquery2 = user.query.findAll({options: {
    refetchOnWindowFocus:true,
    retry: false
  }})  

  if (userquery1.isLoading) {
    return (
      <Box sx={loadingCss}>
        <img src={loading} alt='loading' />
      </Box>
    )
  }

  if (userquery1.isError) {
    return <Box>Error</Box>
  }

  return (
    <Container maxWidth='sm'>
      <Typography variant='h4' mt={2} mb={2} sx={{alignSelf: 'left'}}>
        Lista de Alunos:
      </Typography>

      {userquery2.isSuccess &&
        userquery1.data.map((data, key) => {
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
