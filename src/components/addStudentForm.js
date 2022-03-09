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
import {user} from '../data'
import { useQueryClient } from 'react-query'


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

const StudentForm = (props) => {
  const [formInput, setFormInput] = useState({
    matricula: '',
  })

  const queryClient = useQueryClient()
  
  const studentMutation = user.mutation.add({onSuccess: (result) =>   
    queryClient.setQueryData('allUsers', (oldData) => oldData, result))
  })

  const handleSubmit = () => {
    const data = formInput    
    studentMutation.mutate(data)           
  }

  useEffect(() => {
    if(studentMutation.isSuccess) props.handleSuccess(true)    
  },[props, studentMutation.isSuccess])

  const handleInput = (evt) => {
    const value = {[evt.target.name]: !isNaN(evt.target.value)? Number(evt.target.value) : evt.target.value}
    const newValue = {...formInput, ...value}
    setFormInput({...newValue})
  }

  return (
    
      <Box
        sx={style}
      >
        <Typography  variant="h6" component="h2">
            Adicionar Aluno:
          </Typography>
        <Box component={'form'} noValidate sx={{maxWidth: 260}}>
          {studentMutation.isError && (
            <Alert
              severity='error'
              style={{
                fontSize: 10,
                fontWeight: 200,
                padding: 10,
                margin: '10px 0',
              }}
            >
              {studentMutation?.error?.response?.data?.response}
            </Alert>
          )}
          
            <TextField
              label='N° da Matricula'
              type='number'
              name='matricula'
              variant='standard'
              onChange={handleInput}
              margin={'normal'}
              InputProps={{
                startAdornment: (
                  <InputAdornment position='start'>
                    <PersonIcon />
                  </InputAdornment>
                ),
                autoComplete: 'new-password',
              }}
            />         
          <Box display='block' mb={2} mt={2}>
            <LoadingButton
              variant='contained'
              color='info'
              onClick={handleSubmit}
              size={'small'}
              loading={studentMutation.isLoading}
            >
              Adicionar
            </LoadingButton>
          </Box>
        </Box>
      </Box>    
  )
}

export default StudentForm
