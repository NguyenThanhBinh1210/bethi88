import { Autocomplete, AutocompleteItem, Button, Select, SelectItem, Selection } from '@nextui-org/react'
import { Fragment, useState } from 'react'
import CountDownController from '~/components/CountDownController'
import { animals } from '~/constants/renaral.const'

const Soccer = () => {
  const [valuesEvent, setValuesEvent] = useState<Selection>(new Set(['cat', 'dog']))

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValuesEvent(new Set(e.target.value.split(',')))
  }
  return (
    <div>
      <div className='flex items-center gap-4 flex-wrap'>
        <Autocomplete
          size='sm'
          labelPlacement={'outside-left'}
          label='League'
          variant='bordered'
          placeholder='Search league'
          className='max-w-[240px]'
        >
          {animals.map((animal) => (
            <AutocompleteItem key={animal.value} value={animal.value}>
              {animal.label}
            </AutocompleteItem>
          ))}
        </Autocomplete>
        <Select
          size='sm'
          label='Event'
          variant='bordered'
          labelPlacement={'outside-left'}
          placeholder='Select event'
          selectionMode='multiple'
          className='max-w-[240px] items-center'
          selectedKeys={valuesEvent}
          onChange={handleSelectionChange}
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value}>{animal.label}</SelectItem>
          ))}
        </Select>
        <Button size='sm' className='rounded ml-10' color='primary'>
          Submit
        </Button>
        <CountDownController />
      </div>
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>Time</th>
              <th className='py-2 text-center border border-foreground-400'>Event</th>
              <th className='py-2 text-center border border-foreground-400'>Bet Type</th>
              <th className='py-2 text-center border border-foreground-400'>Bet Count</th>
              <th className='py-2 text-center border border-foreground-400'>Turnover</th>
              <th colSpan={5} className='py-2 text-center border border-foreground-400'>
                Forecast Win/Loss
              </th>
            </tr>
          </thead>
          <tbody className='bg-background dark:bg-foreground-100'>
            {Array(10)
              .fill(0)
              .map((_, index) => (
                <Fragment key={index}>
                  <tr>
                    <td rowSpan={13} className='py-1.5 text-center  border border-foreground-400'>
                      <p className='font-medium'>10/02</p>
                      <p className='font-medium'>12:45AM</p>
                    </td>
                    <td rowSpan={13} className='py-1.5 text-center  border border-foreground-400'>
                      <p className='font-medium text-red-600'>VfB Stuttgart</p>
                      <p className='font-medium'>Sparta Praha</p>
                    </td>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      HDP
                    </td>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0
                    </td>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0.00
                    </td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>3</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>2</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>1</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>0</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>-1</td>
                  </tr>
                  <tr>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      OU
                    </td>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0
                    </td>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0.00
                    </td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>5</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>4</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>3</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>2</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>1</td>
                  </tr>
                  <tr>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      FT. 1X2
                    </td>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0
                    </td>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0.00
                    </td>
                    <td colSpan={2} className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>
                      1
                    </td>
                    <td colSpan={1} className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>
                      x
                    </td>
                    <td colSpan={2} className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>
                      2
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0.00
                    </td>
                    <td colSpan={1} className='py-1.5 text-center  border border-foreground-400'>
                      0.00
                    </td>
                    <td colSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0.00
                    </td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      1H HDP
                    </td>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0
                    </td>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0.00
                    </td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>2</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>1</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>0</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>-1</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>-2</td>
                  </tr>
                  <tr>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      1H OU
                    </td>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0
                    </td>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0.00
                    </td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>4</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>3</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>2</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>1</td>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>0</td>
                  </tr>
                  <tr>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                  </tr>
                  <tr>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      1H 1X2
                    </td>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0
                    </td>
                    <td rowSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0.00
                    </td>
                    <td colSpan={2} className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>
                      1
                    </td>
                    <td colSpan={1} className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>
                      x
                    </td>
                    <td colSpan={2} className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>
                      2
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0.00
                    </td>
                    <td colSpan={1} className='py-1.5 text-center  border border-foreground-400'>
                      0.00
                    </td>
                    <td colSpan={2} className='py-1.5 text-center  border border-foreground-400'>
                      0.00
                    </td>
                  </tr>
                  <tr>
                    <td className='py-1.5 text-center  border border-foreground-400 bg-foreground-200'>Total</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0</td>
                    <td className='py-1.5 text-center  border border-foreground-400'>0.00</td>
                    <td colSpan={5} className='py-1.5 text-center  border border-foreground-400'></td>
                  </tr>
                </Fragment>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Soccer
