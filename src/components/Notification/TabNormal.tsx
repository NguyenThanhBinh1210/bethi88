/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, DatePicker, Pagination } from '@nextui-org/react'
import { useCallback, useMemo, useState } from 'react'
import { DateValue, parseDate } from '@internationalized/date'
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from '@nextui-org/react'

const TabNormal = () => {
  const [valueFrom, setValueFrom] = useState<DateValue>(parseDate('2024-09-17'))
  const [valueTo, setValueTo] = useState<DateValue>(parseDate('2024-09-20'))
  const [rowsPerPage, setRowsPerPage] = useState<number>(10)
  const notification = Array(200).fill(0)
  const [page, setPage] = useState<number>(1)
  const pages = Math.ceil(notification.length / rowsPerPage)
  const onRowsPerPageChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value))
    setPage(1)
  }, [])

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage
    const end = start + rowsPerPage

    return notification.slice(start, end)
  }, [notification, page, rowsPerPage])
  const bottomContent = useMemo(() => {
    return (
      <div className='py-2 px-2 flex justify-between items-center'>
        <Pagination
          showControls
          classNames={{
            cursor: 'bg-foreground text-background'
          }}
          color='default'
          page={page}
          total={pages}
          variant='light'
          onChange={setPage}
        />
      </div>
    )
  }, [page, pages])

  return (
    <div>
      <div className='flex gap-5 flex-wrap'>
        <DatePicker
          size='sm'
          variant='bordered'
          label={'From'}
          className='max-w-[200px]'
          labelPlacement={'outside-left'}
          value={valueFrom}
          onChange={setValueFrom}
        />
        <DatePicker
          size='sm'
          variant='bordered'
          label={'To'}
          className='max-w-[200px]'
          labelPlacement={'outside-left'}
          value={valueTo}
          onChange={setValueTo}
        />
        <Button className='rounded' size='sm' color='primary'>
          Submit
        </Button>
      </div>
      <Table className='mt-4' isHeaderSticky isStriped aria-label='table'>
        <TableHeader>
          <TableColumn className='w-[50px]'>#</TableColumn>
          <TableColumn className='text-center'>Message</TableColumn>
        </TableHeader>
        {notification.length === 0 ? (
          <TableBody emptyContent={'No information is available'}>{[]}</TableBody>
        ) : (
          <TableBody>
            {items.map((_: any, index: any) => (
              <TableRow key={index + 1}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <div className='space-y-1'>
                    <div className='flex gap-3 text-xs'>
                      <p className='italic'>9/20/2024 10:31:31 AM</p>
                      <p className='text-orange-900'>1976048</p>
                    </div>
                    <div className='text-xs'>
                      Attn:[Basketball] The match between "Elitzur Yavne -vs- Hapoel Bnei Kfar Kasem" [Club Friendly -
                      20/9] has been suspended after 3rd Quarter, all bets taken are considered REFUNDED (Except 1st,
                      2nd, 3rd Quarter, 1st half and those products which have been determined the win loss). Parlay
                      counted as one(1). Thank you!
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
      <div className='flex items-center gap-4 mt-4'>
        <label className='flex items-center text-default-400 text-small'>
          <select
            className='bg-transparent px-2 py-1.5 border outline-none text-default-400 text-small'
            onChange={onRowsPerPageChange}
          >
            <option value='10'>10</option>
            <option value='50'>50</option>
            <option value='100'>100</option>
            <option value='200'>200</option>
          </select>
        </label>
        <div>{bottomContent}</div>
      </div>
    </div>
  )
}

export default TabNormal
