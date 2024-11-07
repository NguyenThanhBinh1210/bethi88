/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, AutocompleteItem, DatePicker } from '@nextui-org/react'
import { Fragment, useState } from 'react'
import { animals } from '~/constants/renaral.const'

const Normal = () => {
  const [valueSport, setValueSport] = useState<string>('cat')
  const [valueLeague, setValueLeague] = useState<string>('dog')

  return (
    <div>
      <DatePicker
        className='max-w-36 '
        variant='bordered'
        size='sm'
        label='Date'
        labelPlacement='outside-left'
      ></DatePicker>
      <p className='mt-3 text-xs'>
        <span className='text-red-600'>*</span>You can view the report data from 09/13/2024.
      </p>
      <div className='flex flex-wrap gap-2 md:gap-6 mt-3'>
        <Autocomplete
          size='sm'
          labelPlacement={'outside-left'}
          label='Sport'
          variant='bordered'
          selectedKey={valueSport}
          onSelectionChange={(value: any) => setValueSport(value)}
          defaultItems={animals}
          className='max-w-[240px]'
        >
          {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>
        <Autocomplete
          size='sm'
          labelPlacement={'outside-left'}
          label='League'
          variant='bordered'
          className='max-w-[340px]'
          selectedKey={valueLeague}
          onSelectionChange={(value: any) => setValueLeague(value)}
          defaultItems={animals}
        >
          {(item) => <AutocompleteItem key={item.value}>{item.label}</AutocompleteItem>}
        </Autocomplete>
      </div>
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground/90 text-white'>
              <th className='py-2 text-center border border-foreground-400'>Kick Off. Time</th>
              <th className='py-2 text-center border border-foreground-400'>Match</th>
              <th className='py-2 text-center border border-foreground-400'>1Q</th>
              <th className='py-2 text-center border border-foreground-400'>2Q</th>
              <th className='py-2 text-center border border-foreground-400'>3Q</th>
              <th className='py-2 text-center border border-foreground-400'>4Q</th>
              <th className='py-2 text-center border border-foreground-400'>OT</th>
              <th className='py-2 text-center border border-foreground-400'>HT Score</th>
              <th className='py-2 text-center border border-foreground-400'>Final Score</th>
              <th className='py-2 text-center border border-foreground-400'>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={20}
                className='py-2 text-center bg-foreground/10 dark:bg-foreground/20 border border-foreground-400'
              >
                <strong>NCAA Football</strong>
              </td>
            </tr>
            {Array(20)
              .fill(0)
              .map((_, index) => (
                <Fragment key={index}>
                  <tr className='bg-background'>
                    <td rowSpan={2} className={`py-2 text-center border border-foreground-400`}>
                      <div className='flex flex-col'>
                        <span>09/21/2024</span>
                        <span>01:00:00 PM</span>
                      </div>
                    </td>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      <span className='font-medium text-blue-800 dark:text-blue-500'>Central Michigan Chippewas</span>
                    </td>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      0
                    </td>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      23
                    </td>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      0
                    </td>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      14
                    </td>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      -
                    </td>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      23
                    </td>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      <span className='text-red-600'>37</span>
                    </td>
                    <td rowSpan={2} className={`py-2 text-center border border-foreground-400`}>
                      Completed
                    </td>
                  </tr>
                  <tr className='bg-foreground/5 dark:bg-foreground/10'>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      <span className='font-medium text-red-500'>Ball State Cardinals</span>
                    </td>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      0
                    </td>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      23
                    </td>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      0
                    </td>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      14
                    </td>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      -
                    </td>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      23
                    </td>
                    <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                      <span className='text-red-600'>37</span>
                    </td>
                  </tr>
                </Fragment>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Normal
