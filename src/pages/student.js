import {
  Box,
  Container,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  Paper,
  Typography,
} from '@mui/material'
import {user} from '../data'
import loading from '../assets/loading.svg'
import GroupButton from '../components/groupButtons'
import KeyIcon from '@mui/icons-material/Key'
import AutorenewIcon from '@mui/icons-material/Autorenew'
import EventIcon from '@mui/icons-material/Event'
import QrCode2Icon from '@mui/icons-material/QrCode2'
import StudentForm from '../components/addStudentForm'
import {useState} from 'react'
import RemoveStudentForm from '../components/removeStudentForm'

const loadingCss = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const StudentHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 2,
}

const listBox = {
  display: 'flex',
}

const Student = () => {
  const [openAddForm, setOpenAddForm] = useState(false)
  const [openRemoveForm, setOpenRemoveForm] = useState(false)
  const userquery1 = user.query.findAll({
    options: {
      refetchOnWindowFocus: true,
      retry: false,
      // refetchInterval: 10000,
      staleTime: 10000,
    },
  })

  const userquery2 = user.query.findAll({
    options: {
      refetchOnWindowFocus: true,
      retry: false,
    },
  })

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
    <>
      <Container maxWidth='md'>
        <Box sx={StudentHeader}>
          <Typography variant='h4' component={'h1'}>Lista de Alunos:</Typography>
          <GroupButton
            removeButtonsTitle='Deletar Aluno'
            addButtonsTitle='Adicionar Aluno'
            addButton={() => setOpenAddForm(true)}
            removeButton={() => setOpenRemoveForm(true)}
          />
        </Box>

        {userquery2.isSuccess &&
          userquery1.data.map((data, key) => {
            return (
              <Paper
                variant={'outlined'}
                key={key}
                sx={{marginBottom: 3, borderRadius: 2}}
              >
                <Box sx={listBox}>
                  <ListItem>
                    <ListItemIcon>
                      <KeyIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={'Matricula'}
                      secondary={data.matricula}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AutorenewIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={'Status do Aluno'}
                      secondary={data.status}
                    />
                  </ListItem>
                </Box>
                <Box sx={listBox}>
                  <ListItem>
                    <ListItemIcon>
                      <EventIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={'Data de Inscrição'}
                      secondary={data.createdAt}
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <QrCode2Icon />
                    </ListItemIcon>
                    <ListItemText
                      primary={'Codigo do Curso'}
                      secondary={data.cursoId}
                    />
                  </ListItem>
                </Box>
              </Paper>
            )
          })}
      <Modal
        open={openAddForm}
        onClose={() => setOpenAddForm(false)}
        isSuccess={() => setOpenAddForm(false)}        
      >
        <StudentForm handleSuccess={(isSuccess) => setOpenAddForm(!isSuccess)}  />
      </Modal>
      <Modal
        open={openRemoveForm}
        onClose={() => setOpenRemoveForm(false)}
              
      >
        <RemoveStudentForm handleSuccess={(isSuccess) => setOpenRemoveForm(!isSuccess)}/>
      </Modal>
      </Container>
    </>
  )
}

export default Student
