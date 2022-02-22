import {IconButton, ButtonGroup, Tooltip} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import AddIcon from '@mui/icons-material/Add'

const GroupButton = (props) => (
  <ButtonGroup aria-label='vertical outlined button group'>
    <Tooltip title={props.removeButtonsTitle}>
      <IconButton aria-label='delete' onClick={props.removeButton}>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
    <Tooltip title={props.addButtonsTitle}>
      <IconButton aria-label='adicionar' onClick={props.addButton}>
        <AddIcon />
      </IconButton>
    </Tooltip>
  </ButtonGroup>
)

export default GroupButton
