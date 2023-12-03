import { Link } from 'react-router-dom'
import { APP_URLS } from '../../utils/constants'


const LoginFooter = () => {
  const year = new Date().getFullYear()

  return (
    <Flex
      gap="md"
      justify="flex-start"
      align="flex-start"
      direction="row"
      wrap="wrap"
      sx={(theme) => ({
        marginTop: theme.spacing.xl,
        fontSize: theme.spacing.xs
      })}
    >
      &copy; {year} {process.env.REACT_APP_AP_NAME}. We use our own cookies as well as
      third-party cookies on our websites to enhance your experience, analyze
      our traffic, and for security and marketing.{' '}
      <Link to={APP_URLS.COOKIE_POLICY}>Cookie Policy</Link>
      <Flex gap={20}>
        <Anchor href={APP_URLS.LOGIN}>Already registred?</Anchor>
      </Flex>
    </Flex>
  )
}

export default LoginFooter
