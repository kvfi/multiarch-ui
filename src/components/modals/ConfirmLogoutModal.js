import { Button, Modal } from '@mantine/core'
import { useTimeout } from '@mantine/hooks'
import { useNavigate } from 'react-router-dom'
import { APP_URLS } from '../../utils/constants'

const ConfirmLogoutModel = (isOpen) => {
  const navigate = useNavigate()
  const { redirectNow } = useTimeout(() => navigate(APP_URLS.LOGIN), 2000)
  
  const handleConfirm = () => {
    alert('ok')
    redirectNow()
  }
  return (
    <Modal opened={isOpen} onClose={close} title="Are you sure to logout?">
      <Button onClick={handleConfirm} />
    </Modal>
  )
}

export default ConfirmLogoutModel
