import {Box, Container, TextField, Typography} from '@mui/material'
import ReactLoading from 'react-loading'
import {user} from '../data'

const loading = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const Student = () => {
  const {data, isLoading, isError, isSuccess} = user.query.findAll({
    options: {staleTime: 0},
  })

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
    <Container maxWidth='xs'>
      <Typography variant='h4' mt={10} mb={2} sx={{alignSelf: 'left'}}>
        Lista de Alunos:
      </Typography>

      {isSuccess &&
        data.map((data, key) => {
          return (
            <div key={key}>
              <TextField
                fullWidth
                size='small'
                disabled
                id='outlined-disabled'
                label='Matricula'
                value={data.matricula}
              />
              <TextField
                fullWidth
                size='small'
                disabled
                id='outlined-disabled'
                label='Status do Aluno'
                value={data.status}
              />
              <TextField
                fullWidth
                size='small'
                disabled
                id='outlined-disabled'
                label='Data de Inscrição'
                value={data.createdAt}
              />
              <TextField
                fullWidth
                size='small'
                disabled
                id='outlined-disabled'
                label='Codigo do Curso'
                value={data?.cursoId}
              />
            </div>
          )
        })}
    </Container>
  )
}

export default Student
