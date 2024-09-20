import { Accordion, AccordionItem, Select, SelectItem, Avatar, Button } from '@nextui-org/react'

const TabProfileSetting = () => {
  return (
    <Accordion variant='splitted' selectionMode='multiple' defaultExpandedKeys={['1', '2']}>
      <AccordionItem
        className='rounded bg-foreground-50 dark:bg-foreground-100'
        key='1'
        aria-label='Accordion 1'
        title={
          <div className='py-2 uppercase text-sm font-medium border-b border-foreground-200'>Display Language</div>
        }
      >
        <div className='text-sm'>
          <p>Choose your preferred language for displaying pages.</p>
          <div className='flex gap-2 items-end'>
            <Select
              labelPlacement='outside'
              className='max-w-xs mt-3'
              label=''
              placeholder='Please select display language'
            >
              <SelectItem
                key='argentina'
                startContent={<Avatar alt='Argentina' className='w-6 h-6' src='https://flagcdn.com/ar.svg' />}
              >
                Argentina
              </SelectItem>
              <SelectItem
                key='venezuela'
                startContent={<Avatar alt='Venezuela' className='w-6 h-6' src='https://flagcdn.com/ve.svg' />}
              >
                Venezuela
              </SelectItem>
              <SelectItem
                key='brazil'
                startContent={<Avatar alt='Brazil' className='w-6 h-6' src='https://flagcdn.com/br.svg' />}
              >
                Brazil
              </SelectItem>
              <SelectItem
                key='switzerland'
                startContent={<Avatar alt='Switzerland' className='w-6 h-6' src='https://flagcdn.com/ch.svg' />}
              >
                Switzerland
              </SelectItem>
              <SelectItem
                key='germany'
                startContent={<Avatar alt='Germany' className='w-6 h-6' src='https://flagcdn.com/de.svg' />}
              >
                Germany
              </SelectItem>
              <SelectItem
                key='spain'
                startContent={<Avatar alt='Spain' className='w-6 h-6' src='https://flagcdn.com/es.svg' />}
              >
                Spain
              </SelectItem>
              <SelectItem
                key='france'
                startContent={<Avatar alt='France' className='w-6 h-6' src='https://flagcdn.com/fr.svg' />}
              >
                France
              </SelectItem>
              <SelectItem
                key='italy'
                startContent={<Avatar alt='Italy' className='w-6 h-6' src='https://flagcdn.com/it.svg' />}
              >
                Italy
              </SelectItem>
              <SelectItem
                key='mexico'
                startContent={<Avatar alt='Mexico' className='w-6 h-6' src='https://flagcdn.com/mx.svg' />}
              >
                Mexico
              </SelectItem>
            </Select>
            <Button color='primary'>Submit</Button>
          </div>
        </div>
      </AccordionItem>
      <AccordionItem
        className='rounded bg-foreground-50 dark:bg-foreground-100'
        key='2'
        aria-label='Accordion 2'
        title={<div className='py-2 uppercase text-sm font-medium border-b border-foreground-200'>Profile Picture</div>}
      >
        <div className='text-sm'>
          <div className='flex items-center gap-4 p-2'>
            <Avatar
              isBordered
              alt='Argentina'
              className='w-[160px] h-[160px]'
              src='https://flagcdn.com/ar.svg'
            ></Avatar>
            <Button variant='bordered' className='rounded'>
              Upload from your device
            </Button>
          </div>
          <div className='flex gap-3 mt-4'>
            <Button className='rounded' color='primary'>
              Submit
            </Button>
            <Button className='rounded' color='warning'>
              Reset
            </Button>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  )
}

export default TabProfileSetting
