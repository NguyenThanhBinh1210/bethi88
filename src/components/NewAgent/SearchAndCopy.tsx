import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { EyeFilledIcon, EyeSlashFilledIcon } from '~/pages/MemberInfo/NewAgent'

const SearchAndCopy = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)
  return (
    <div className='rounded-md border border-foreground-300 overflow-hidden'>
      <div className='px-3 py-1.5 italic text-sm bg-foreground-100 border-b border-foreground-300'>
        <span className='text-red-700'>* </span>Note: Settings will be the same as the Source account
      </div>
      <div className='px-3 py-1.5 bg-background pt-3'>
        <div className='border-b border-foreground-300 pb-2'>
          <p className='text font-medium text-blue-700 mb-2'>
            Source Account <span className='text-red-700'>* </span>
          </p>
          <Input
            size='sm'
            variant='bordered'
            className='bg-background text-xs w-full max-w-xs rounded-sm'
            placeholder='Username or First/Last name'
          ></Input>
        </div>
        <p className='text font-medium text-blue-700 mb-2 mt-3'>
          Account Details <span className='text-red-700'>* </span>
        </p>
        <p className='text-xs mb-2'>
          Choose the first available username and the remaining accounts will follow the system's suggestion.
        </p>
        <div className='flex flex-wrap gap-x-6'>
          <div className='w-full md:w-max'>
            <p className='mb-1'>
              Username <span className='text-red-700'>* </span>
            </p>
            <div className='flex items-center gap-2'>
              <div className='flex items-center border rounded overflow-hidden border-foreground-300'>
                <div className='bg-foreground-300 text-sm px-2 py-[5px]'>U4W00</div>
                <select className='text-sm px-2 py-[5px] border-r border-foreground-300'>
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
                <select className='text-sm px-2 py-[5px]'>
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
                className='size-6 text-green-600'
              >
                <path
                  fillRule='evenodd'
                  d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </div>
          <div className='w-full md:w-max'>
            <p className='mb-1'>
              Password <span className='text-red-700'>* </span>
            </p>
            <Input
              variant='bordered'
              size='sm'
              placeholder='Enter your password'
              endContent={
                <button
                  className='focus:outline-none'
                  type='button'
                  onClick={toggleVisibility}
                  aria-label='toggle password visibility'
                >
                  {isVisible ? (
                    <EyeSlashFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                  ) : (
                    <EyeFilledIcon className='text-2xl text-default-400 pointer-events-none' />
                  )}
                </button>
              }
              type={isVisible ? 'text' : 'password'}
              className='max-w-xs'
            />
          </div>
        </div>
        <div className='flex items-center flex-wrap gap-x-6 mt-3 space-y-3 md:space-y-0'>
          <div className='w-full md:w-max'>
            <p className='mb-1'>
              Username <span className='text-red-700'>* </span>
            </p>
            <select className='text-sm px-2 py-[5px] border rounded w-full max-w-24 border-foreground-300'>
              {Array(30)
                .fill(0)
                .map((_, index) => (
                  <option key={index} value={index}>
                    {index}
                  </option>
                ))}
            </select>
          </div>
          <div className='w-full md:w-max'>
            <p className='mb-1'>
              Given Credit per Account <span className='text-red-600'>*</span>
            </p>
            <Input className='max-w-xs' variant='bordered' size='sm' type='number'></Input>
          </div>
          <div className='w-full md:w-max'>
            <p className='mb-1'>
              Max Credit per Member <span className='text-red-600'>*</span>
            </p>
            <Input className='max-w-xs' variant='bordered' size='sm' type='number'></Input>
          </div>
        </div>
        <Button color='primary' className='rounded mt-7' size='sm'>
          Create Account
        </Button>
      </div>
    </div>
  )
}

export default SearchAndCopy
