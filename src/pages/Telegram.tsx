import { Accordion, AccordionItem, Button } from '@nextui-org/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Telegram = () => {
  const [showMore, setShowMore] = useState(false)
  const handleGenerate = () => {
    setShowMore(true)
  }
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Telegram</div>
      <Accordion variant='splitted' selectionMode='multiple' defaultExpandedKeys={['1']}>
        <AccordionItem
          className='rounded bg-foreground-50 dark:bg-foreground-100'
          key='1'
          aria-label='Accordion 1'
          title={<div className='py-2 uppercase text-sm font-medium border-b border-foreground-200'>Account</div>}
        >
          <div className='text-xs'>
            <p>
              <span className='font-medium'>Telegram Chatbot</span> enables you to get up-to-date business information
              by communicating with the chatbot without accessing to the Agency Site. The chatbot runs on Telegram – a
              free, secured, encrypted, and cross-platform instant message application.
            </p>
            <p>To setup the chatbot, please follow the instructions below:</p>
            <p className='font-medium mt-4'>
              1. Download the application on Google Play/App Store, or click Show QR Code and scan the QR code using
              your phone:
            </p>
            <p className='font-medium mt-4'>
              2. Sign up on Telegram using your phone number, and click Generate QR Code
            </p>
            <Button onClick={handleGenerate} color='primary' size='sm' className=' rounded mt-3'>
              Generate QR Code
            </Button>
            {showMore && (
              <>
                <p className='font-medium mt-4'>
                  3. Scan this QR Code using your mobile device to open Telegram Chatbot
                </p>
                <div className='flex mt-3 items-end gap-3'>
                  <div className='bg-foreground-400 size-24'></div>
                  <div>
                    <p>Or click this link:</p>
                    <Link
                      className='hover:underline text-blue-700'
                      to='https://t.me/Elsa9Bot?start=GMsuIuTPCceG65qi9SVGJBSeddo9jK1l'
                      target='_blank'
                    >
                      https://t.me/Elsa9Bot?start=GMsuIuTPCceG65qi9SVGJBSeddo9jK1l
                    </Link>
                  </div>
                </div>
                <p className='mt-3'>
                  Click <strong className='font-medium'>START</strong> on Telegram Chatbot then proceed to the next step
                </p>
                <p className='font-medium mt-4'>
                  4. Enter the OTP sent from Telegram Chatbot to verify your account (OTP will expire within 3 minutes):
                </p>
                <div className='flex gap-3 mt-3'>
                  <input
                    id='idref'
                    type='text'
                    placeholder='OTP'
                    className='rounded bg-background border border-foreground-300 text-xs py-[7px] px-2'
                  />
                  <Button className='!py-0' size='sm' color='primary'>
                    Submit
                  </Button>
                </div>
              </>
            )}
          </div>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Telegram
