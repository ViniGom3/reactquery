import React, {useEffect, useState} from 'react'
import {
  Box, 
  TextField,  
  InputAdornment,
  Typography, 
} from '@mui/material'
import {Alert} from '@mui/material'
import {LoadingButton} from '@mui/lab'
import PersonIcon from '@mui/icons-material/Person';
import {discipline} from '../data'


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const AddDisciplineForm = (props) => {
  const [formInput, setFormInput] = useState({})

  const disciplineMutation = discipline.mutation.add()

  const handleSubmit = () => {
    const data = formInput
    console.log(data)
    disciplineMutation.mutate(data)           
  }

  useEffect(() => {
    if(disciplineMutation.isSuccess) props.handleSuccess(true)    
  },[props, disciplineMutation.isSuccess])


  const handleInput = (evt) => {
    const value = {[evt.target.name]: !isNaN(evt.target.value)? Number(evt.target.value) : evt.target.value}
    const newValue = {...formInput, ...value}
    setFormInput({...newValue})
  }

  return (
    
      <Box
        sx={style}
      >
        <Typography variant="h6" component="h2">
            Adicionar Disciplina:
          </Typography>
        <Box component={'form'} noValidate sx={{maxWidth: 260}}>
          {disciplineMutation.isError && (
            <Alert
              severity='error'
              style={{
                fontSize: 10,
                fontWeight: 200,
                padding: 10,
                margin: '10px 0',
              }}
            >
              {disciplineMutation?.error?.response?.data?.response}
            </Alert>
          )}
          
            <TextField
              label='Código'
              type='number'
              name='codigo'
              variant='standard'
              onChange={handleInput}
              margin={'normal'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <PersonIcon />
                  </InputAdornment>
                ),               
              }}
            />         
            <TextField
              label='Nome da Disciplina'
              type='text'
              name='nome'
              variant='standard'
              onChange={handleInput}
              margin={'normal'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <PersonIcon />
                  </InputAdornment>
                ),               
              }}
            />         
            <TextField
              label='Carga Horária'
              type='number'
              name='cargaHoraria'
              variant='standard'
              onChange={handleInput}
              margin={'normal'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <PersonIcon />
                  </InputAdornment>
                ),               
              }}
            />         
            <TextField
              label='Nome do Departamento'
              type='text'
              name='nomeDepartamento'
              variant='standard'
              onChange={handleInput}
              margin={'normal'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <PersonIcon />
                  </InputAdornment>
                ),               
              }}
            />         
            <TextField
              label='Nível'
              type='text'
              name='nivel'
              variant='standard'
              onChange={handleInput}
              margin={'normal'}                       
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <PersonIcon />
                  </InputAdornment>
                )               
              }}
            />         
          <Box display='block' mb={2} mt={2}>
            <LoadingButton
              variant='contained'
              color='info'
              onClick={handleSubmit}
              size={'small'}
              loading={disciplineMutation.isLoading}
            >
              Adicionar
            </LoadingButton>
          </Box>
        </Box>
      </Box>    
  )
}

export default AddDisciplineForm
