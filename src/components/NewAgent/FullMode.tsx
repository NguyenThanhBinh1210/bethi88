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
import { useState } from 'react'
import { animals } from '~/constants/renaral.const'
import { EyeFilledIcon, EyeSlashFilledIcon } from '~/pages/MemberInfo/NewAgent'
import InputMinMax from '../InputMinMax'

const FullMode = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => setIsVisible(!isVisible)

  const [value, setValue] = useState<string>('cat')

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <Button className='font-medium rounded mb-5 ml-2' size='sm' color='primary'>
        Create Account
      </Button>

      <Accordion variant='splitted' selectionMode='multiple' defaultExpandedKeys={['1', '2', '3', '4', '5']}>
        <AccordionItem
          className='rounded bg-foreground-50 dark:bg-foreground-100'
          key='1'
          aria-label='Accordion 1'
          title={
            <div className='py-2 uppercase text-sm font-medium border-b border-foreground-200'>General Information</div>
          }
        >
          <div>
            <p className='font-medium text-sm mb-2'>Account Details</p>
            <div className='flex flex-wrap gap-x-6 '>
              <div className='w-full md:w-max'>
                <p className='mb-1 text-sm'>
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
                <p className='mb-1 text-sm'>
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
              <div className='w-full md:w-max flex items-center gap-x-2'>
                <Input
                  variant='bordered'
                  size='sm'
                  label={
                    <p className=' text-sm'>
                      Agent Max Credit <span className='text-red-700'>* </span>
                    </p>
                  }
                  labelPlacement='outside'
                  placeholder=' '
                  description={
                    <div className='text-xs'>
                      Min: <span className='font-medium text-foreground'>0</span> - Max:{' '}
                      <span className='font-medium text-foreground'>0</span>
                    </div>
                  }
                  className='max-w-xs'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='size-6 text-green-600 inline-block'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='w-full md:w-max flex items-center gap-x-2'>
                <Input
                  variant='bordered'
                  size='sm'
                  label={
                    <p className=' text-sm'>
                      Member Max Credit <span className='text-red-700'>* </span>
                    </p>
                  }
                  labelPlacement='outside'
                  placeholder=' '
                  description={
                    <div className='text-xs'>
                      Min: <span className='font-medium text-foreground'>0</span> - Max:{' '}
                      <span className='font-medium text-foreground'>0</span>
                    </div>
                  }
                  className='max-w-xs'
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='size-6 text-green-600 inline-block'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </div>

            <p className='font-medium text-sm mb-3'>User Information</p>

            <div className='flex flex-wrap gap-3 mb-4'>
              <Input
                variant='bordered'
                size='sm'
                label={<p className=' text-sm'>First Name</p>}
                placeholder=' '
                labelPlacement='outside'
                className='max-w-xs md:max-w-52'
              />
              <Input
                variant='bordered'
                size='sm'
                label={<p className=' text-sm'>Last Name</p>}
                placeholder=' '
                labelPlacement='outside'
                className='max-w-xs md:max-w-52'
              />
              <Input
                variant='bordered'
                size='sm'
                label={<p className=' text-sm'>Phone</p>}
                placeholder=' '
                labelPlacement='outside'
                className='max-w-xs md:max-w-52'
              />
              <Input
                variant='bordered'
                size='sm'
                label={<p className=' text-sm'>Mobile Phone</p>}
                placeholder=' '
                labelPlacement='outside'
                className='max-w-xs md:max-w-52'
              />
              <Input
                variant='bordered'
                size='sm'
                label={<p className=' text-sm'>Fax</p>}
                placeholder=' '
                labelPlacement='outside'
                className='max-w-xs md:max-w-52'
              />
            </div>
          </div>
        </AccordionItem>
        <AccordionItem
          className='rounded bg-foreground-50 dark:bg-foreground-100'
          key='2'
          aria-label='Accordion 2'
          title={<div className='py-2 uppercase text-sm font-medium border-b border-foreground-200'>Commission</div>}
        >
          <div className='flex flex-wrap gap-3 gap-x-4 pt-3'>
            <Select
              label={<p className=' text-sm'>Group A</p>}
              className='max-w-xs md:max-w-40'
              size='sm'
              variant='bordered'
              labelPlacement='outside'
              placeholder=' '
              selectedKeys={[value]}
              onChange={handleSelectionChange}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.value}>{animal.label}</SelectItem>
              ))}
            </Select>
            <Select
              label={<p className=' text-sm'>Group B</p>}
              className='max-w-xs md:max-w-40'
              size='sm'
              variant='bordered'
              labelPlacement='outside'
              placeholder=' '
              selectedKeys={[value]}
              onChange={handleSelectionChange}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.value}>{animal.label}</SelectItem>
              ))}
            </Select>
            <Select
              label={<p className=' text-sm'>Group C</p>}
              className='max-w-xs md:max-w-40'
              size='sm'
              variant='bordered'
              labelPlacement='outside'
              placeholder=' '
              selectedKeys={[value]}
              onChange={handleSelectionChange}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.value}>{animal.label}</SelectItem>
              ))}
            </Select>
            <Select
              label={<p className=' text-sm'>Group D</p>}
              className='max-w-xs md:max-w-40'
              size='sm'
              variant='bordered'
              labelPlacement='outside'
              placeholder=' '
              selectedKeys={[value]}
              onChange={handleSelectionChange}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.value}>{animal.label}</SelectItem>
              ))}
            </Select>
            <Select
              label={<p className=' text-sm'>1x2 Comm</p>}
              className='max-w-xs md:max-w-40'
              size='sm'
              variant='bordered'
              labelPlacement='outside'
              placeholder=' '
              selectedKeys={[value]}
              onChange={handleSelectionChange}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.value}>{animal.label}</SelectItem>
              ))}
            </Select>
            <Select
              label={<p className=' text-sm'>Others Comm</p>}
              className='max-w-xs md:max-w-40'
              size='sm'
              variant='bordered'
              labelPlacement='outside'
              placeholder=' '
              selectedKeys={[value]}
              onChange={handleSelectionChange}
            >
              {animals.map((animal) => (
                <SelectItem key={animal.value}>{animal.label}</SelectItem>
              ))}
            </Select>
          </div>
        </AccordionItem>
        <AccordionItem
          className='rounded bg-foreground-50 dark:bg-foreground-100'
          key='2'
          aria-label='Accordion 2'
          title={
            <div className='py-2 uppercase text-sm font-medium border-b border-foreground-200'>General Information</div>
          }
        >
          <div className='w-full overflow-auto text-xs '>
            <Table className='table-style' isHeaderSticky isStriped aria-label='Example static collection table'>
              <TableHeader>
                <TableColumn className='w-1/5 px-16 text-center text-foreground'> </TableColumn>
                <TableColumn className='w-1/5 px-16 text-center text-foreground'>Min Bet</TableColumn>
                <TableColumn className='w-1/5 px-16 text-center text-foreground'>Max Bet</TableColumn>
                <TableColumn className='w-1/5 px-16 text-center text-foreground'>Max Per Match</TableColumn>
                <TableColumn className='w-1/5 px-16 text-center text-foreground'>Max Payout Per Match</TableColumn>
              </TableHeader>

              <TableBody>
                <TableRow key='1'>
                  <TableCell>Soccer</TableCell>
                  <TableCell>
                    <InputMinMax type='Min Bet' defaultValue={3} isMin />
                  </TableCell>
                  <TableCell>
                    <InputMinMax type='Max Bet' defaultValue={30000} />
                  </TableCell>
                  <TableCell>
                    <InputMinMax type='Max Per Match' defaultValue={60000} />
                  </TableCell>
                  <TableCell>
                    <InputMinMax
                      type='Max Per Match
Max Payout Per Match'
                      defaultValue={500000}
                    />
                  </TableCell>
                </TableRow>
                <TableRow key='2'>
                  <TableCell>Saba Soccer</TableCell>
                  <TableCell>
                    <InputMinMax type='Min Bet' defaultValue={3} isMin />
                  </TableCell>
                  <TableCell>
                    <InputMinMax type='Max Bet' defaultValue={30000} />
                  </TableCell>
                  <TableCell>
                    <InputMinMax type='Max Per Match' defaultValue={60000} />
                  </TableCell>
                  <TableCell>
                    <InputMinMax
                      type='Max Per Match
Max Payout Per Match'
                      defaultValue={500000}
                    />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionItem>
        <AccordionItem
          className='rounded bg-foreground-50 dark:bg-foreground-100'
          key='4'
          aria-label='Accordion 4'
          title={
            <div className='py-2 uppercase text-sm font-medium border-b border-foreground-200'>
              Parlay Max Payout per Bet
            </div>
          }
        >
          <div className='w-full overflow-auto text-xs '>
            <Table className='table-style' isHeaderSticky isStriped aria-label='Example static collection table'>
              <TableHeader>
                <TableColumn className='w-1/5 px-16 text-center text-foreground'> </TableColumn>
                <TableColumn className='w-1/5 px-16 text-center text-foreground'>Single Match Parlay</TableColumn>
                <TableColumn className='w-1/5 px-16 text-center text-foreground'>Combo 2</TableColumn>
                <TableColumn className='w-1/5 px-16 text-center text-foreground'>Combo 3-5</TableColumn>
                <TableColumn className='w-1/5 px-16 text-center text-foreground'>Combo 6+ & System Parlay</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key='1'>
                  <TableCell>Soccer Parlay</TableCell>
                  <TableCell>
                    <InputMinMax type='Single Match Parlay' defaultValue={3} />
                  </TableCell>
                  <TableCell>
                    <InputMinMax type='Combo 2' defaultValue={30000} />
                  </TableCell>
                  <TableCell>
                    <InputMinMax type='Combo 3-5' defaultValue={60000} />
                  </TableCell>
                  <TableCell>
                    <InputMinMax type='Combo 6+ & System Parlay' defaultValue={500000} />
                  </TableCell>
                </TableRow>
                <TableRow key='2'>
                  <TableCell>Mix Sports Parlay</TableCell>
                  <TableCell>
                    <InputMinMax type='Single Match Parlay' defaultValue={3} />
                  </TableCell>
                  <TableCell>
                    <InputMinMax type='Combo 2' defaultValue={30000} />
                  </TableCell>
                  <TableCell>
                    <InputMinMax type='Combo 3-5' defaultValue={60000} />
                  </TableCell>
                  <TableCell>
                    <InputMinMax type='Combo 6+ & System Parlay' defaultValue={500000} />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionItem>
        <AccordionItem
          className='rounded bg-foreground-50 dark:bg-foreground-100'
          key='5'
          aria-label='Accordion 5'
          title={
            <div className='py-2 uppercase text-sm font-medium border-b border-foreground-200'>Position Taking </div>
          }
        >
          <div className='w-full overflow-auto text-xs '>
            <Table className='table-style' isHeaderSticky aria-label='Example static collection table'>
              <TableHeader>
                <TableColumn className='w-1/5 px-16 text-center text-foreground'> </TableColumn>
                <TableColumn className='w-1/5 px-16 text-center text-foreground'>Master PT</TableColumn>
                <TableColumn className='w-1/5 px-16 text-center text-foreground'>Is Auto</TableColumn>
                <TableColumn className='w-1/5 px-16 text-center text-foreground'>Agent Max PT</TableColumn>
                <TableColumn className='w-1/5 px-16 text-center text-foreground'>Agent Min PT</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow className='bg-foreground-50 dark:bg-foreground-200 table-row-style1' key='1'>
                  <TableCell>Non Live</TableCell>
                  <TableCell> </TableCell>
                  <TableCell> </TableCell>
                  <TableCell> </TableCell>
                  <TableCell> </TableCell>
                </TableRow>
                <TableRow key='1'>
                  <TableCell>2-way Market</TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className='flex justify-center'>
                      <Checkbox size='sm'></Checkbox>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                </TableRow>
                <TableRow key='2'>
                  <TableCell>3-way Market</TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className='flex justify-center'>
                      <Checkbox size='sm'></Checkbox>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                </TableRow>
                <TableRow key='3'>
                  <TableCell>Others</TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className='flex justify-center'>
                      <Checkbox size='sm'></Checkbox>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                </TableRow>
                <TableRow className='bg-foreground-50 dark:bg-foreground-200 table-row-style1' key='1'>
                  <TableCell>Live</TableCell>
                  <TableCell> </TableCell>
                  <TableCell> </TableCell>
                  <TableCell> </TableCell>
                  <TableCell> </TableCell>
                </TableRow>
                <TableRow key='4'>
                  <TableCell>2-way Market</TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className='flex justify-center'>
                      <Checkbox size='sm'></Checkbox>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                </TableRow>
                <TableRow key='5'>
                  <TableCell>3-way Market</TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className='flex justify-center'>
                      <Checkbox size='sm'></Checkbox>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                </TableRow>
                <TableRow key='6'>
                  <TableCell>Others</TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className='flex justify-center'>
                      <Checkbox size='sm'></Checkbox>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                </TableRow>
                <TableRow className='bg-foreground-50 dark:bg-foreground-200 table-row-style1' key='1'>
                  <TableCell>Parlay & Outright</TableCell>
                  <TableCell> </TableCell>
                  <TableCell> </TableCell>
                  <TableCell> </TableCell>
                  <TableCell> </TableCell>
                </TableRow>
                <TableRow key='7'>
                  <TableCell>Parlay & Outright</TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <div className='flex justify-center'>
                      <Checkbox size='sm'></Checkbox>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Select
                      size='sm'
                      defaultSelectedKeys={['cat']}
                      variant='bordered'
                      className='max-w-40 mx-auto !rounded bg-background'
                    >
                      {animals.map((animal) => (
                        <SelectItem key={animal.value}>{animal.label}</SelectItem>
                      ))}
                    </Select>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </AccordionItem>
      </Accordion>
      <Button className='font-medium rounded mt-5 ml-2' size='sm' color='primary'>
        Create Account
      </Button>
    </div>
  )
}

export default FullMode
