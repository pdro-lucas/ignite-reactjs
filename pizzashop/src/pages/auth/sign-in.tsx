import { Helmet } from 'react-helmet-async'

export function SignIn() {
  return (
    <div>
      <Helmet title="Login" />

      <h1>Sign In</h1>
      <p>
        This is the sign in page. You can see that it is loaded in the{' '}
        <code>src/pages/auth/sign-in.tsx</code> file.
      </p>
    </div>
  )
}
