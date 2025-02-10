import {
  Accordion,
  AccordionItem,
  Button,
  Checkbox,
  Input,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react'
import { useContext, useState } from 'react'
import { animals } from '~/constants/renaral.const'
import { EyeFilledIcon, EyeSlashFilledIcon } from '~/pages/MemberInfo/NewAgent'
import InputMinMax from '../InputMinMax'
import { AppContext } from '~/contexts/app.context'
import { useMutation } from '@tanstack/react-query'
import { createUser } from '~/apis/user.api'

const LiteMode = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { profile } = useContext(AppContext)
  const toggleVisibility = () => setIsVisible(!isVisible)
  const [value, setValue] = useState<string>('cat')
  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }

  const [usernameEnd1, setUsernameEnd1] = useState('0')
  const [usernameEnd2, setUsernameEnd2] = useState('0')

  const [formState, setFormState] = useState({
    username: (profile?.role === 1 ? 'U4W' : profile?.username) + usernameEnd1 + usernameEnd2,
    password: '',
    firstName: '',
    lastName: '',
    mobile: '',
    email: ''
  })
  const handleChangeAtMaxIndex = (value: string) => {
    const username = formState.username
    const maxLengthIndex = username.length - 2

    const updatedStr = username.slice(0, maxLengthIndex) + value + username.slice(maxLengthIndex + 1)

    setUsernameEnd1(value)
    setFormState((prevState) => ({
      ...prevState,
      username: updatedStr
    }))
  }
  const handleChangeMaxIndex = (value: string) => {
    const username = formState.username
    const maxLengthIndex = username.length - 1

    const updatedStr = username.slice(0, maxLengthIndex) + value + username.slice(maxLengthIndex + 1)
    setUsernameEnd2(value)
    setFormState((prevState) => ({
      ...prevState,
      username: updatedStr
    }))
  }

  const onChangeValue = (key: keyof typeof formState, value: string) => {
    setFormState((prevState) => ({
      ...prevState,
      [key]: value
    }))
  }

  const createAccount = useMutation({
    mutationFn: (body: {
      username: string
      password: string
      fullName: string
      email: string
      mobile: string
      walletBalance?: number
    }) => createUser(body),
    onSuccess: () => {
      alert('Create Account successfully')
    },
    onError: () => {
      alert('Create Account failed')
    }
  })
  const handleSubmit = () => {
    const newUser = {
      username: formState.username,
      password: formState.password,
      mobile: formState.mobile,
      walletBalance: 0,
      email: formState.email,
      fullName: formState.firstName + formState.lastName
    }
    createAccount.mutate(newUser)
  }

  // Add new state for active tab
  const [activeTab, setActiveTab] = useState('SPORTSBOOK')

  return (
    <div>
      <Button onClick={handleSubmit} className='font-medium rounded mb-5 ml-2' size='sm' color='primary'>
        Create Account
      </Button>

      <Accordion variant='splitted' selectionMode='multiple' defaultExpandedKeys={['1', '2', '3', '4', '5']}>
        <AccordionItem
          className='rounded bg-slate-100'
          key='1'
          aria-label='Accordion 1'
          title={
            <div className='py-2 uppercase text-sm font-medium'>GENERAL INFORMATION</div>
          }
        >
          <div className='p-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
              {/* Username Field */}
              <div>
                <p className='mb-1 text-sm'>
                  Username <span className='text-red-700'>*</span>
                </p>
                <div className='flex items-center gap-2'>
                  <div className='flex items-center border rounded overflow-hidden border-foreground-300'>
                    <div className='bg-gray-200 text-sm px-2 py-[5px]'>
                      {profile?.role === 1 ? 'KW5M07' : profile?.username}
                    </div>
                    <select
                      onChange={(e) => handleChangeAtMaxIndex(e.target.value)}
                      value={usernameEnd1}
                      className='text-sm px-2 py-[5px] border-r border-foreground-300 bg-background text-foreground'
                    >
                      <option value='0'>0</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='a'>a</option>
                      <option value='b'>b</option>
                      <option value='c'>c</option>
                      <option value='d'>d</option>
                      <option value='e'>e</option>
                      <option value='f'>f</option>
                      <option value='g'>g</option>
                      <option value='h'>h</option>
                      <option value='i'>i</option>
                      <option value='j'>j</option>
                      <option value='k'>k</option>
                      <option value='l'>l</option>
                      <option value='m'>m</option>
                      <option value='n'>n</option>
                      <option value='o'>o</option>
                      <option value='p'>p</option>
                      <option value='q'>q</option>
                      <option value='r'>r</option>
                      <option value='s'>s</option>
                      <option value='t'>t</option>
                      <option value='u'>u</option>
                      <option value='v'>v</option>
                      <option value='w'>w</option>
                      <option value='x'>x</option>
                      <option value='y'>y</option>
                      <option value='z'>z</option>
                    </select>
                    <select
                      onChange={(e) => handleChangeMaxIndex(e.target.value)}
                      value={usernameEnd2}
                      className='text-sm px-2 py-[5px] bg-background text-foreground'
                    >
                      <option value='0'>0</option>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                      <option value='6'>6</option>
                      <option value='7'>7</option>
                      <option value='8'>8</option>
                      <option value='9'>9</option>
                      <option value='a'>a</option>
                      <option value='b'>b</option>
                      <option value='c'>c</option>
                      <option value='d'>d</option>
                      <option value='e'>e</option>
                      <option value='f'>f</option>
                      <option value='g'>g</option>
                      <option value='h'>h</option>
                      <option value='i'>i</option>
                      <option value='j'>j</option>
                      <option value='k'>k</option>
                      <option value='l'>l</option>
                      <option value='m'>m</option>
                      <option value='n'>n</option>
                      <option value='o'>o</option>
                      <option value='p'>p</option>
                      <option value='q'>q</option>
                      <option value='r'>r</option>
                      <option value='s'>s</option>
                      <option value='t'>t</option>
                      <option value='u'>u</option>
                      <option value='v'>v</option>
                      <option value='w'>w</option>
                      <option value='x'>x</option>
                      <option value='y'>y</option>
                      <option value='z'>z</option>
                    </select>
                  </div>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='size-5 text-success'
                  >
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
              </div>

              {/* Password Field */}
              <div>
                <div className='flex items-center gap-1'>
                  <p className='mb-1 text-sm'>
                    Password <span className='text-red-700'>*</span>
                  </p>
                  <button className='text-primary'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                  </button>
                </div>
                <Input
                  variant='bordered'
                  size='sm'
                  placeholder='Enter your password'
                  value={formState.password}
                  onChange={(e) => onChangeValue('password', e.target.value)}
                  endContent={
                    <button
                      className='focus:outline-none'
                      type='button'
                      onClick={toggleVisibility}
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className='text-xl text-default-400 pointer-events-none' />
                      ) : (
                        <EyeFilledIcon className='text-xl text-default-400 pointer-events-none' />
                      )}
                    </button>
                  }
                  type={isVisible ? 'text' : 'password'}
                  className='w-full'
                />
              </div>

              {/* First Name Field */}
              <div>
                <p className='mb-1 text-sm'>First Name</p>
                <Input
                  variant='bordered'
                  size='sm'
                  value={formState.firstName}
                  onChange={(e) => onChangeValue('firstName', e.target.value)}
                  placeholder=' '
                  className='w-full'
                />
              </div>

              {/* Last Name Field */}
              <div>
                <p className='mb-1 text-sm'>Last Name</p>
                <Input
                  variant='bordered'
                  size='sm'
                  value={formState.lastName}
                  onChange={(e) => onChangeValue('lastName', e.target.value)}
                  placeholder=' '
                  className='w-full'
                />
              </div>

              {/* Agent Max Credit Field */}
              <div>
                <p className='mb-1 text-sm'>
                  Agent Max Credit <span className='text-red-700'>*</span>
                </p>
                <div className='flex items-center gap-2'>
                  <Input
                    variant='bordered'
                    size='sm'
                    placeholder='0'
                    className='w-full'
                  />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='size-5 text-success'
                  >
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='text-xs text-gray-500 mt-1'>Min: 0 - Max: 0</p>
              </div>

              {/* Phone Field */}
              <div>
                <p className='mb-1 text-sm'>Phone</p>
                <Input
                  variant='bordered'
                  size='sm'
                  placeholder=' '
                  className='w-full'
                />
              </div>

              {/* Mobile Phone Field */}
              <div>
                <p className='mb-1 text-sm'>Mobile Phone</p>
                <Input
                  variant='bordered'
                  size='sm'
                  value={formState.mobile}
                  onChange={(e) => onChangeValue('mobile', e.target.value)}
                  placeholder=' '
                  className='w-full'
                />
              </div>

              {/* Fax Field */}
              <div>
                <p className='mb-1 text-sm'>Fax</p>
                <Input
                  variant='bordered'
                  size='sm'
                  placeholder=' '
                  className='w-full'
                />
              </div>

              {/* Member Max Credit Field */}
              <div>
                <p className='mb-1 text-sm'>
                  Member Max Credit <span className='text-red-700'>*</span>
                </p>
                <div className='flex items-center gap-2'>
                  <Input
                    variant='bordered'
                    size='sm'
                    placeholder='0'
                    className='w-full'
                  />
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='size-5 text-success'
                  >
                    <path
                      fillRule='evenodd'
                      d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <p className='text-xs text-gray-500 mt-1'>Min: 0 - Max: 0</p>
              </div>

            </div>
          </div>
        </AccordionItem>

        {/* Add new tab section */}
        <AccordionItem
          className='rounded bg-slate-100 mt-4'
          key='2'
          aria-label='Accordion 2'
          title={
            <div className='py-2 uppercase text-sm font-medium'>GAME SETTINGS</div>
          }
        >
          <div className='flex gap-2 mb-4'>
            <Button
              className={`${activeTab === 'SPORTSBOOK' ? 'bg-primary text-white' : 'bg-gray-100'}`}
              onClick={() => setActiveTab('SPORTSBOOK')}
            >
              SPORTSBOOK
            </Button>
            <Button
              className={`${activeTab === 'RNG GAMES' ? 'bg-primary text-white' : 'bg-gray-100'}`}
              onClick={() => setActiveTab('RNG GAMES')}
            >
              RNG GAMES
            </Button>
            <Button
              className={`${activeTab === 'LIVE & RNG CASINO' ? 'bg-primary text-white' : 'bg-gray-100'}`}
              onClick={() => setActiveTab('LIVE & RNG CASINO')}
            >
              LIVE & RNG CASINO
            </Button>
            <Button isIconOnly size="sm">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </Button>
          </div>

          {/* Tab content can be added here based on activeTab */}
          <div className='p-4'>
            {activeTab === 'SPORTSBOOK' && (
              <div>Sportsbook Content</div>
            )}
            {activeTab === 'RNG GAMES' && (
              <div>RNG Games Content</div>
            )}
            {activeTab === 'LIVE & RNG CASINO' && (
              <div>Live & RNG Casino Content</div>
            )}
          </div>
        </AccordionItem>
      </Accordion>
      <Button className='font-medium rounded mt-5 ml-2' size='sm' color='primary'>
        Create Account
      </Button>
    </div>
  )
}

export default LiteMode
