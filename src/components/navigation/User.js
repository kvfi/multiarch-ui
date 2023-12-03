import {
  Avatar,
  Box,
  Group,
  LoadingOverlay,
  rem,
  Text,
  UnstyledButton,
  useMantineTheme
} from '@mantine/core'
import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import { useGetUserInfoQuery } from '../../services/auth'
import { getDiscordAvatarUrl } from '../../utils/discord'

const User = () => {
  const theme = useMantineTheme()
  const { data: userInfo, isLoading: userInfoIsLoading } = useGetUserInfoQuery()

  if (userInfoIsLoading) {
    return <LoadingOverlay />
  }

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `${rem(1)} solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`
      }}
    >
      <UnstyledButton
        sx={{
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
        }}
      >
        <Group>
          <Avatar
            src={getDiscordAvatarUrl(
              userInfo.attributes.discord_id,
              userInfo.attributes.discord_avatar
            )}
            radius="xl"
          />
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              {userInfo.username}
            </Text>
            <Text color="dimmed" size="xs">
              {userInfo.email}
            </Text>
          </Box>

          {theme.dir === 'ltr' ? (
            <IconChevronRight size={rem(18)} />
          ) : (
            <IconChevronLeft size={rem(18)} />
          )}
        </Group>
      </UnstyledButton>
    </Box>
  )
}

export default User
