import { Button, Checkbox, Input } from '@nextui-org/react'
import { useContext, useState } from 'react'
import { AppContext } from '~/contexts/app.context'
import { setDarkModeFromLS } from '~/utils/auth'
const Login = () => {
  const { isDark, setDark } = useContext(AppContext)
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div className='w-full h-screen flex items-center justify-center px-5'>
      <form className='border w-full max-w-md border-foreground-300 rounded-md p-4 bg-background dark:bg-foreground-100'>
        <div className='flex justify-end'>
          <Button
            isIconOnly
            variant='light'
            onClick={() => {
              setDarkModeFromLS(!isDark)
              setDark(!isDark)
            }}
          >
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
              <path d='M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z' />
            </svg>
          </Button>
        </div>
        <h1 className='text-2xl text-center'>Login</h1>
        <Input className='mb-4' variant='underlined' placeholder='Username' autoFocus></Input>
        <Input
          className='mb-4'
          variant='underlined'
          placeholder='Password'
          type={showPassword ? 'text' : 'password'}
          autoFocus
        ></Input>
        <div>
          <Checkbox checked={showPassword} onChange={() => setShowPassword(!showPassword)} color='default'>
            <div className='text-sm'>Show password</div>
          </Checkbox>
        </div>
        <Button color='primary' className='w-full mt-5 uppercase rounded-none bg-foreground-400 font-medium'>
          Login
        </Button>
      </form>
    </div>
  )
}

export default Login
