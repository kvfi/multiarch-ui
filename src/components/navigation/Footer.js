import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core'
import { IconLogout } from '@tabler/icons-react'
import { useNavigate } from 'react-router-dom'

const FooterLink = ({ icon, color, label }) => {
  const navigate = useNavigate()

  const logout = () => {
    window.sessionStorage.clear()
    navigate(0)
  }

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color:
          theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[6]
              : theme.colors.gray[0]
        }
      })}
      onClick={() => logout()}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>

        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  )
}

const Footer = () => {
  return (
    <>
      <FooterLink icon={<IconLogout />} color="red" label="Logout" />
    </>
  )
}

export default Footer
