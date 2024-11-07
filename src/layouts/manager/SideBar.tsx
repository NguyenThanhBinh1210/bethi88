/* eslint-disable @typescript-eslint/no-explicit-any */

import { Accordion, AccordionItem, Avatar, Button, Input } from '@nextui-org/react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { menuCMS } from '~/constants/renaral.const'
import { Tabs, Tab } from '@nextui-org/react'
import { useContext, memo, useState, useEffect } from 'react'
import { AppContext } from '~/contexts/app.context'

const SideBar = memo(({ isShow }: { isShow: boolean }) => {
  const { isSecurity, profile } = useContext(AppContext)
  const location = useLocation().pathname
  const navigate = useNavigate()
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(() => {
    const saved = localStorage.getItem('openAccordions')
    return new Set(saved ? JSON.parse(saved) : [])
  })

  useEffect(() => {
    localStorage.setItem('openAccordions', JSON.stringify(Array.from(openAccordions)))
  }, [openAccordions])

  return (
    <div
      style={{ zIndex: 21 }}
      className={`${isShow ? '' : ' overflow-hidden  opacity-0 invisible -translate-x-full '
        }  no-scrollbar border-r border-foreground-100 fixed  left-0 overflow-auto h-screen  transition-all  `}
    >
      <div className={`w-[264px] py-4 h-full bg-background  overflow-hidden transition-all `}>
        <div className='px-2 flex py-2 gap-x-4 items-center'>
          <Link to={'/profile'}>
            <Avatar className='flex-shrink-0' isBordered src='https://i.pravatar.cc/150?u=a042581f4e29026024d' />
          </Link>
          <div className=' uppercase'>
            <p className='text-xs'> {profile?.username}</p>
            <p className='text-xs'>IBETCOIN</p>
            <p className='text-xs'>OTP: Disabled</p>
          </div>
        </div>
        <div className=' flex w-full flex-col pt-3 overflow-y-auto h-[100%] no-scrollbar'>
          <Tabs aria-label='Options'>
            <Tab key='main' title='MAIN MENU' className='font-medium text-[13px] '>
              <div>
                {menuCMS.map((item, index) => (
                  <div key={index}>
                    {item.path ? (
                      <Link to={`/${item.path}`} className='flex px-2 rounded  justify-between items-center  py-2.5'>
                        <div className='flex items-center gap-x-1.5'>
                          {item.icon}
                          <p className='text-sm uppercase'>{item.title}</p>
                        </div>
                        {item.title === 'Đơn hàng' && (
                          <div className='text-white font-normal text-xs bg-black  w-5 h-5 rounded flex items-center justify-center'>
                            5
                          </div>
                        )}
                      </Link>
                    ) : (
                      <Accordion
                        className='!px-0'
                        selectedKeys={openAccordions}
                        onSelectionChange={(keys) => setOpenAccordions(keys as Set<string>)}
                      >
                        <AccordionItem
                          key={item.title}
                          aria-label={item.title}
                          className='!py-2 rounded px-2'
                          title={<div className='text-sm uppercase'>{item.title}</div>}
                          startContent={item.icon}
                        >
                          <div className='space-y-2 pl-5'>
                            {item.subMenu?.map((itemx, indexx) => (
                              <Link
                                className={`${location === itemx.path && 'text-blue-500'} block hover:text-foreground-500`}
                                key={indexx}
                                to={itemx.path}
                              >
                                {itemx.title}
                              </Link>
                            ))}
                          </div>
                        </AccordionItem>
                      </Accordion>
                    )}
                  </div>
                ))}
                <Button
                  variant='light'
                  onClick={() => navigate('/telegram')}
                  className='flex px-2 w-full text-blue-600 gap-1.5 justify-start font-medium items-center  py-2.5'
                >
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-4'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
                    />
                  </svg>
                  CHATBOT
                </Button>
              </div>
              <div className='mt-2 border-t-foreground-200 border-t space-y-2 py-2'>
                <Button
                  onClick={() => {
                    isSecurity
                      ? navigate('/profile', {
                        state: {
                          tabValue: 'otp'
                        }
                      })
                      : navigate('/security-code')
                  }}
                  variant='light'
                  className='flex px-2 uppercase font-medium w-full gap-1.5 justify-start items-center  py-2.5'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-4 text-foreground'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z'
                    />
                  </svg>
                  SECURITY
                </Button>
                <Button
                  onClick={() => {
                    navigate('/available-domains')
                  }}
                  variant='light'
                  className='flex px-2 uppercase font-medium w-full gap-1.5 justify-start items-center  py-2.5'
                >
                  {' '}
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='size-4 text-foreground'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='m18.375 12.739-7.693 7.693a4.5 4.5 0 0 1-6.364-6.364l10.94-10.94A3 3 0 1 1 19.5 7.372L8.552 18.32m.009-.01-.01.01m5.699-9.941-7.81 7.81a1.5 1.5 0 0 0 2.112 2.13'
                    />
                  </svg>
                  Available Domains
                </Button>
              </div>
            </Tab>
            <Tab key='account' title='ACCOUNT INFO' className='font-medium text-[13px]'>
              <Input
                isClearable
                radius='lg'
                className='text-xs'
                labelPlacement='outside'
                placeholder='Username or First/Last Name'
                startContent={
                  <SearchIcon className='text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0' />
                }
              />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  )
})

export const SearchIcon = memo((props: any) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height='1em'
    role='presentation'
    viewBox='0 0 24 24'
    width='1em'
    {...props}
  >
    <path
      d='M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='2'
    />
    <path d='M22 22L20 20' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' />
  </svg>
))

SearchIcon.displayName = 'SearchIcon'
SideBar.displayName = 'SideBar'

export default SideBar
