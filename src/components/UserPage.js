import {Box, Container, TextField, Typography} from '@mui/material'
import useQueryUser, {defaultValues} from '../data/hooks'
import ReactLoading from 'react-loading'

const loading = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const contentBox = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .MuiTextField-root': {
    marginBottom: 2,
  },
}

const UserPage = () => {
  const {data, isLoading, isError} = useQueryUser({
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
          Meus Dados:
        </Typography>
      <Box sx={contentBox}>
        <TextField
          fullWidth
          size='small'
          disabled
          id='outlined-disabled'
          label='Nome'
          value={data?.name}
        />
        <TextField
          fullWidth
          size='small'
          disabled
          id='outlined-disabled'
          label='nome de usuario'
          value={data?.username}
        />
        <TextField
          fullWidth
          size='small'
          disabled
          id='outlined-disabled'
          label='Email'
          value={data?.email}
        />
        <TextField
          fullWidth
          size='small'
          disabled
          id='outlined-disabled'
          label='rua'
          value={data?.address.street}
        />
        <TextField
          fullWidth
          size='small'
          disabled
          id='outlined-disabled'
          label={'Complemento'}
          value={data?.address.suite}
        />
        <TextField
          fullWidth
          size='small'
          disabled
          id='outlined-disabled'
          label='Cidade'
          value={data?.address.city}
        />
        <TextField
          fullWidth
          size='small'
          disabled
          id='outlined-disabled'
          label='Cep'
          value={data?.address.zipcode}
        />
        <TextField
          fullWidth
          size='small'
          disabled
          id='outlined-disabled'
          label='Celular'
          value={data?.address.phoner}
        />
      </Box>
    </Container>
  )
}

export default UserPage
