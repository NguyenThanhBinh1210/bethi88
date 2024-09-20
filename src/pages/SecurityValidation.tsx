import { Avatar, Button, Checkbox, Input } from '@nextui-org/react'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '~/contexts/app.context'
import { setSecurityFromLS } from '~/utils/auth'

const SecurityValidation = () => {
  const navigate = useNavigate()
  const [showSecurity, setShowSecurity] = useState<boolean>(false)
  const [valueSecurity, setValueSecurity] = useState<string>('')
  const { isSecurity, setSecurity } = useContext(AppContext)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    valueSecurity.length && (setSecurity(!isSecurity), setSecurityFromLS(!isSecurity), navigate(-1))
  }
  return (
    <div className=''>
      <div className='uppercase mb-3 pb-3 text-sm font-medium borber-b'>Security Code Validation</div>
      <div className='grid md:grid-cols-3 '>
        <div className=' flex flex-col items-center bg-white py-5 dark:bg-black dark:bg-opacity-50 p-3 border border-foreground-100'>
          <Avatar isBordered alt='Argentina' className='w-[120px] h-[120px]' src='https://flagcdn.com/ar.svg'></Avatar>
          <form onSubmit={handleSubmit} className='text-sm mt-6 text-start w-full'>
            <p>Hi IBETCOIN</p>
            <p>Please input your security code before proceeding!</p>
            <p className='mt-3 mb-2'>Security Code</p>
            <Input
              labelPlacement='outside'
              label=''
              type={showSecurity ? 'text' : 'password'}
              variant='bordered'
              placeholder=''
              value={valueSecurity}
              onChange={(e) => setValueSecurity(e.target.value)}
            />
            <div>
              <Checkbox checked={showSecurity} onChange={() => setShowSecurity(!showSecurity)} className='mt-1'>
                Show security code
              </Checkbox>
            </div>
            <Button type='submit' className='mt-2' color='primary'>
              Submit
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SecurityValidation
