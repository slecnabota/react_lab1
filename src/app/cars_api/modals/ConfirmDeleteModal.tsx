'use client'

import { Dialog, DialogActions, DialogContent, DialogTitle, Button } from '@mui/material'

export default function ConfirmDeleteModal({ open, onClose, onConfirm, text }: any) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirm delete</DialogTitle>
      <DialogContent>{text}</DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button color="error" onClick={onConfirm}>
          Delete
        </Button>
      </DialogActions>
    </Dialog>
  )
}
