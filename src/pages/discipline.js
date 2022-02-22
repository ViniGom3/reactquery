import {
  Box,
  Container,
  ListItem,
  ListItemText,
  Modal,
  Paper,
  Typography,
} from '@mui/material'
import {useState} from 'react'
import loading from '../assets/loading.svg'
import AddDisciplineForm from '../components/addDisciplineForm'
import GroupButton from '../components/groupButtons'
import RemoveDisciplineForm from '../components/removeDisciplineForm'
import {discipline} from '../data'

const loadingCss = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

const diciplineHeader = {
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: 2,
}

const Discipline = () => {
  const [openAddForm, setOpenAddForm] = useState(false)
  const [openRemoveForm, setOpenRemoveForm] = useState(false)

  const {data, isLoading, isError, isSuccess} = discipline.query.findAll({
    options: {
      refetchOnWindowFocus: true,
    },
  })

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
    <>
      <Container maxWidth='sm'>
        <Box sx={diciplineHeader}>
          <Typography variant='h4' component={'h1'}>
            Lista de Disciplinas:
          </Typography>
          <GroupButton
            removeButtonsTitle='Deletar Disciplina'
            addButtonsTitle='Adicionar Disciplina'
            addButton={() => setOpenAddForm(true)}
            removeButton={() => setOpenRemoveForm(true)}
          />
        </Box>

        {isSuccess &&
          data.map((data, key) => {
            return (
              <Paper variant={'outlined'} key={key} sx={{marginBottom: 3}}>
                <ListItem>
                  <ListItemText
                    primary={'Código da Disciplina'}
                    secondary={data.codigo}
                  />
                </ListItem>
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
                  <ListItemText primary={'Nível'} secondary={data.nivel} />
                </ListItem>
              </Paper>
            )
          })}
        <Modal
          open={openAddForm}
          onClose={() => setOpenAddForm(false)}
          isSuccess={() => setOpenAddForm(false)}
        >
          <AddDisciplineForm
            handleSuccess={(isSuccess) => setOpenAddForm(!isSuccess)}
          />
        </Modal>
        <Modal
          open={openRemoveForm}
          onClose={() => setOpenRemoveForm(false)}
          isSuccess={() => setOpenRemoveForm(false)}
        >
          <RemoveDisciplineForm
            handleSuccess={(isSuccess) => setOpenRemoveForm(!isSuccess)}
          />
        </Modal>
      </Container>
    </>
  )
}

export default Discipline
