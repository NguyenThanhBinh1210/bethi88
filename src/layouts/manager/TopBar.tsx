// import { Avatar, IconButton } from '@material-tailwind/react'
// import { Popover, PopoverHandler, PopoverContent } from '@material-tailwind/react'
import {
  Badge,
  Button,
  ModalBody,
  ModalFooter,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
  useDisclosure
} from '@nextui-org/react'
import { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import BaseModal from '~/components/modals/BaseModal'
import { AppContext } from '~/contexts/app.context'
import { Profile } from '~/types/auth.type'
import { clearLS, setDarkModeFromLS, setProfileFromLS } from '~/utils/auth'

const TopBar = ({ onShow }: { onShow: () => void }) => {
  const { isDark, setDark, isSecurity } = useContext(AppContext)
  const navigate = useNavigate()
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [isInvisible] = useState<boolean>(false)
  const handleLogout = () => {
    clearLS()
    setProfileFromLS({} as Profile)
    alert('Logout successfully')
    window.location.href = '/login'

  }
  return (
    <>
      <header style={{ zIndex: 19 }} className='sticky top-0 !transition-all duration-500 bg-white dark:bg-black'>
        <div className='py-1 px-3 border-b border-foreground-100  left-0 flex justify-between '>
          <div className='flex items-center gap-x-2'>
            <Button isIconOnly variant='light' onClick={onShow}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5' />
              </svg>
            </Button>
          </div>
          <div className='flex items-center gap-x-1  '>
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
            <Button onPress={onOpen} isIconOnly variant='light'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
                <path d='M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z' />
              </svg>
            </Button>
            <div className=' items-center gap-x-1 text-sm hidden md:flex'>
              <Button isIconOnly variant='light'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='size-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
                  />
                </svg>
              </Button>
              <p>0:54:07 AM Sep 20, 2024 GMT-4</p>
            </div>
            <Link to={'/notification'}>
              <Button isIconOnly variant='light'>
                <Badge color='danger' content={5} isInvisible={isInvisible} shape='circle'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-6'>
                    <path
                      fillRule='evenodd'
                      d='M5.25 9a6.75 6.75 0 0 1 13.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 0 1-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 1 1-7.48 0 24.585 24.585 0 0 1-4.831-1.244.75.75 0 0 1-.298-1.205A8.217 8.217 0 0 0 5.25 9.75V9Zm4.502 8.9a2.25 2.25 0 1 0 4.496 0 25.057 25.057 0 0 1-4.496 0Z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Badge>
              </Button>
            </Link>

            <Popover placement='bottom-end'>
              <PopoverTrigger>
                <Button isIconOnly variant='light'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-6'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
                    />
                  </svg>
                </Button>
              </PopoverTrigger>
              <PopoverContent className='p-1  '>
                <ul className='w-[220px] '>
                  <li>
                    <button
                      className='flex w-full items-center hover:bg-foreground-400 rounded-lg py-2 px-3 transition-all hover:text-white gap-x-2 text-[13px]'
                      onClick={() => {
                        isSecurity
                          ? navigate('/profile', {
                            state: {
                              tabValue: 'profile-settings'
                            }
                          })
                          : navigate('/security-code')
                      }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='size-4'
                      >
                        <path
                          fillRule='evenodd'
                          d='M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      Profile Settings
                    </button>
                  </li>
                  <li>
                    <button
                      className='flex w-full items-center hover:bg-foreground-400 rounded-lg py-2 px-3 transition-all hover:text-white gap-x-2 text-[13px]'
                      onClick={() => {
                        isSecurity
                          ? navigate('/profile', {
                            state: {
                              tabValue: 'password'
                            }
                          })
                          : navigate('/security-code')
                      }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='size-4'
                      >
                        <path
                          fillRule='evenodd'
                          d='M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      Password
                    </button>
                  </li>
                  <li>
                    <button
                      className='flex w-full items-center hover:bg-foreground-400 rounded-lg py-2 px-3 transition-all hover:text-white gap-x-2 text-[13px]'
                      onClick={() => {
                        isSecurity
                          ? navigate('/profile', {
                            state: {
                              tabValue: 'security-code'
                            }
                          })
                          : navigate('/security-code')
                      }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='size-4'
                      >
                        <path
                          fillRule='evenodd'
                          d='M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      Security Code
                    </button>
                  </li>
                  <li>
                    <button
                      className='flex w-full items-center hover:bg-foreground-400 rounded-lg py-2 px-3 transition-all hover:text-white gap-x-2 text-[13px]'
                      onClick={() => {
                        isSecurity
                          ? navigate('/profile', {
                            state: {
                              tabValue: 'otp'
                            }
                          })
                          : navigate('/security-code')
                      }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='size-4'
                      >
                        <path
                          fillRule='evenodd'
                          d='M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      OTP
                    </button>
                  </li>
                  <li>
                    <Link
                      className='flex items-center hover:bg-foreground-400 rounded-lg py-2 px-3 transition-all hover:text-white gap-x-2 text-[13px]'
                      to={'/'}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='size-4'
                      >
                        <path
                          fillRule='evenodd'
                          d='M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      API
                    </Link>
                  </li>
                  <li>
                    <button
                      className='flex w-full items-center hover:bg-foreground-400 rounded-lg py-2 px-3 transition-all hover:text-white gap-x-2 text-[13px]'
                      onClick={() => {
                        isSecurity
                          ? navigate('/profile', {
                            state: {
                              tabValue: 'protection-code'
                            }
                          })
                          : navigate('/security-code')
                      }}
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='currentColor'
                        className='size-4'
                      >
                        <path
                          fillRule='evenodd'
                          d='M15.75 1.5a6.75 6.75 0 0 0-6.651 7.906c.067.39-.032.717-.221.906l-6.5 6.499a3 3 0 0 0-.878 2.121v2.818c0 .414.336.75.75.75H6a.75.75 0 0 0 .75-.75v-1.5h1.5A.75.75 0 0 0 9 19.5V18h1.5a.75.75 0 0 0 .53-.22l2.658-2.658c.19-.189.517-.288.906-.22A6.75 6.75 0 1 0 15.75 1.5Zm0 3a.75.75 0 0 0 0 1.5A2.25 2.25 0 0 1 18 8.25a.75.75 0 0 0 1.5 0 3.75 3.75 0 0 0-3.75-3.75Z'
                          clipRule='evenodd'
                        />
                      </svg>
                      Protection Code
                    </button>
                  </li>
                </ul>
              </PopoverContent>
            </Popover>
            <Button isIconOnly variant='light' onClick={handleLogout}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='size-6 rotate-180'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15'
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className='py-1 px-3 border-b border-foreground-100   left-0 flex justify-between '>
          <Link className='w-max flex justify-center ' to={'/'}>
            <Button isIconOnly variant='light'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='size-4 text-foreground'
              >
                <path d='M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z' />
                <path d='m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z' />
              </svg>
            </Button>
          </Link>
          <div className='flex-1 text-red-600 text-xs flex items-center'>
            <marquee>
              Company recently found a lot of agent’s downlines involved in different type of abnormal bet, fraud
              (Hedging group betting, arbitrage betting, use mechanical betting, or any action will effect company
              normal operating etc ). Hereby to inform all agents that if company discovers and determines any abnormal
              bets on its members, Company will delete the tickets regardless of the settled bets before the company
              settlement time without any notification. Company will not take any responsibility on the losses caused
              after the ticket is deleted. Please pass this information to downlines, thank you for your cooperation.
            </marquee>
          </div>
        </div>
      </header>
      <BaseModal isOpen={isOpen} onOpenChange={onOpenChange} title='Help us improve'>
        <ModalBody className=''>
          <Textarea
            labelPlacement='outside'
            label="We'd love to hear from you. How are we doing?"
            variant='bordered'
            placeholder='What functions can be improved? What functions are lacking?'
            disableAnimation
            disableAutosize
            className='w-full '
            classNames={{
              input: 'resize-y min-h-[40px]'
            }}
          />
        </ModalBody>
        <ModalFooter>
          <Button variant='light' onClick={onOpenChange}>
            Later
          </Button>
          <Button color='primary' onClick={onOpenChange}>
            Submit
          </Button>
        </ModalFooter>
      </BaseModal>
    </>
  )
}

export default TopBar
