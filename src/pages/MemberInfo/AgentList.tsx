/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Checkbox,
  Input,
  Listbox,
  ListboxItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow
} from '@nextui-org/react'
import { useState } from 'react'
import { animals } from '~/constants/renaral.const'

const AgentList = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['text']))

  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Agent List</div>
      <div className='flex flex-wrap gap-4 mb-4 flex-row'>
        <div>
          <Input
            label='Username'
            labelPlacement='outside-left'
            size='sm'
            variant='bordered'
            id='username'
            type='text'
            placeholder='Search by username'
          />
        </div>
        <div>
          <Select
            className='flex items-center min-w-[200px]'
            size='sm'
            variant='bordered'
            labelPlacement={'outside-left'}
            label='Status'
            placeholder='Status'
          >
            {animals.map((animal) => (
              <SelectItem key={animal.value}>{animal.label}</SelectItem>
            ))}
          </Select>
        </div>
        <div>
          <Select
            className='flex items-center min-w-[240px] w-max'
            size='sm'
            variant='bordered'
            labelPlacement={'outside-left'}
            label={<p className='text-xs w-20'>Double Comm</p>}
            placeholder='Double Comm'
          >
            {animals.map((animal) => (
              <SelectItem key={animal.value}>{animal.label}</SelectItem>
            ))}
          </Select>
        </div>
        <Button color='primary' size='sm'>
          Submit
        </Button>
      </div>
      <Table aria-label='Example static collection table'>
        <TableHeader>
          {Array(14)
            .fill(0)
            .map((_, index) => (
              <TableColumn key={index} hidden>
                NAME
              </TableColumn>
            ))}
        </TableHeader>
        <TableBody className='bg-foreground-50'>
          <TableRow key={'34'} className='bg-foreground-50 dark:bg-foreground-200 table-row-style1'>
            <TableCell rowSpan={2}>No.</TableCell>
            <TableCell rowSpan={2}>
              <Checkbox size='sm'></Checkbox>
            </TableCell>
            <TableCell rowSpan={2}>
              <Button variant='light' isIconOnly size='sm'>
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
                    d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                  />
                </svg>
              </Button>
            </TableCell>
            <TableCell rowSpan={2}>Username</TableCell>
            <TableCell rowSpan={2} className='text-center'>
              Status
            </TableCell>
            <TableCell rowSpan={2} className='text-center'>
              Statement
            </TableCell>
            <TableCell rowSpan={2} className='min-w-[150px] text-center'>
              First & Last Name
            </TableCell>
            <TableCell colSpan={0} hidden>
              Active
            </TableCell>
            <TableCell colSpan={0} hidden>
              Active
            </TableCell>
            <TableCell colSpan={0} hidden>
              Active
            </TableCell>
            <TableCell colSpan={0} hidden>
              Active
            </TableCell>
            <TableCell colSpan={0} hidden>
              Active
            </TableCell>
            <TableCell colSpan={6} className='text-center'>
              Commission
            </TableCell>
            <TableCell rowSpan={2} className='min-w-[100px] text-center'>
              Login IP
            </TableCell>
          </TableRow>
          <TableRow key={'453'} className='bg-foreground-50 dark:bg-foreground-200 table-row-style1'>
            <TableCell hidden>CEO</TableCell>
            <TableCell hidden>Active</TableCell>
            <TableCell hidden>Active</TableCell>
            <TableCell hidden>Active</TableCell>
            <TableCell hidden>Active</TableCell>
            <TableCell hidden>Active</TableCell>
            <TableCell hidden>Active</TableCell>
            <TableCell className='bg-foreground-300  rounded-l-md'>Group A</TableCell>
            <TableCell className='bg-foreground-300 '>Group B</TableCell>
            <TableCell className='bg-foreground-300 '>Group C</TableCell>
            <TableCell className='bg-foreground-300 '>Group D</TableCell>
            <TableCell className='bg-foreground-300 '>1X2</TableCell>
            <TableCell className='bg-foreground-300  rounded-r-md'>Other</TableCell>
            <TableCell hidden>Active</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>
              <Checkbox size='sm'></Checkbox>
            </TableCell>
            <TableCell>
              <Button variant='light' isIconOnly size='sm'>
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
                    d='m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10'
                  />
                </svg>
              </Button>
            </TableCell>
            <TableCell>
              <div>
                <p className='text-blue-500 text-sm '>U4W0012</p>
                <p className='text-foreground-500 text-xs'>Catalina</p>
              </div>
            </TableCell>
            <TableCell>
              <Popover>
                <PopoverTrigger>
                  <Button className='text-blue-500' variant='light' size='sm'>
                    Open
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <Listbox
                    className='p-0'
                    aria-label='Multiple selection example'
                    variant='flat'
                    disallowEmptySelection
                    selectionMode='multiple'
                    selectedKeys={selectedKeys}
                    onSelectionChange={(e: any) => setSelectedKeys(e)}
                  >
                    <ListboxItem key='text'> Suspended</ListboxItem>
                    <ListboxItem key='number'>Closed</ListboxItem>
                    <ListboxItem key='date'>Allow Outright</ListboxItem>
                    <ListboxItem key='single_date'>Double Comm</ListboxItem>
                  </Listbox>
                </PopoverContent>
              </Popover>
            </TableCell>
            <TableCell className='text-center'>
              <Button variant='light' isIconOnly size='sm'>
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
                    d='M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'
                  />
                </svg>
              </Button>
            </TableCell>
            <TableCell className='text-center'>Nguyen Binh</TableCell>
            <TableCell className='  '>0.0025</TableCell>
            <TableCell className=' '>0.005</TableCell>
            <TableCell className=' '>0.0075</TableCell>
            <TableCell className=' '>0.01</TableCell>
            <TableCell className=' '>0.0025</TableCell>
            <TableCell className='  '>0.01</TableCell>
            <TableCell>
              <div className='text-blue-600 cursor-pointer hover:text-danger-500'>171.252.128.18</div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

export default AgentList
