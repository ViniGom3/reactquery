import {IconButton, ButtonGroup} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

const GroupButtons = (props) => (
  <ButtonGroup
    orientation='vertical'
    aria-label='vertical outlined button group'
  >
    <IconButton aria-label='delete' onClick={props.removeButton}>
      <DeleteIcon />
    </IconButton>
    <IconButton aria-label='adicionar' onClick={props.addButton}>
      <AddIcon />
    </IconButton>
  </ButtonGroup>
)

export default GroupButtons
