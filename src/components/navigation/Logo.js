import { Box, Group, Image, rem } from '@mantine/core'

const NavigationBrand = () => {
  return (
    <Box
      sx={(theme) => ({
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `${rem(1)} solid ${
          theme.colorScheme === 'dark'
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`
      })}
    >
      <Group position="apart">
        <Image
          maw={100}
          mx="auto"
          radius="md"
          src="/static/logo.png"
          alt="EL Logo"
        />
      </Group>
    </Box>
  )
}

export default NavigationBrand
