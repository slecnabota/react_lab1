'use client'

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  Typography,
} from '@mui/material'

type Props = {
  open: boolean
  onClose: () => void
  onConfirm: () => void
  itemName: string
}

export default function ConfirmDeleteModal({ open, onClose, onConfirm, itemName }: Props) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm delete</DialogTitle>

      <DialogContent>
        <Typography>Do you really want to delete &#39;{itemName}&#39;?</Typography>
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="error" variant="contained" onClick={onConfirm}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}
