/* eslint-disable @typescript-eslint/no-explicit-any */
import { Autocomplete, AutocompleteItem, DateRangePicker } from '@nextui-org/react'
import { useState } from 'react'
import { animals } from '~/constants/renaral.const'

const Outright = () => {
  const [valueSport, setValueSport] = useState<string>('cat')
  const [valueLeague, setValueLeague] = useState<string>('dog')

  return (
    <div>
      <DateRangePicker
        className='w-max'
        variant='bordered'
        size='sm'
        label='Date'
        labelPlacement='outside-left'
      ></DateRangePicker>
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
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>Time</th>
              <th className='py-2 text-center border border-foreground-400'>Team</th>
              <th className='py-2 text-center border border-foreground-400'>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td
                colSpan={20}
                className='py-2 text-center bg-orange-50 dark:bg-yellow-800  border border-foreground-400'
              >
                <strong>
                  China Open Women Doubles (Wen Mei Li (CHN)/Shu Xian Zhang (CHN) -vs- Yi Jing Li (CHN)/Xu Min Luo
                  (CHN)) - Game 1 Correct Score
                </strong>
              </td>
            </tr>
            <tr>
              <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                <div className='flex flex-col'>
                  <span>09/21/2024</span>
                  <span>01:00:00 PM</span>
                </div>
              </td>
              <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                Wen Mei Li (CHN)/Shu Xian Zhang (CHN)(21 - 13 or Better)
              </td>
              <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                Won
              </td>
            </tr>
            <tr>
              <td
                colSpan={20}
                className='py-2 text-center bg-orange-50 dark:bg-yellow-800  border border-foreground-400'
              >
                <strong>
                  China Open Women Doubles (Wen Mei Li (CHN)/Shu Xian Zhang (CHN) -vs- Yi Jing Li (CHN)/Xu Min Luo
                  (CHN)) - Game 1 Correct Score
                </strong>
              </td>
            </tr>
            <tr>
              <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                <div className='flex flex-col'>
                  <span>09/21/2024</span>
                  <span>01:00:00 PM</span>
                </div>
              </td>
              <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                Wen Mei Li (CHN)/Shu Xian Zhang (CHN)(21 - 13 or Better)
              </td>
              <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                Won
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Outright
