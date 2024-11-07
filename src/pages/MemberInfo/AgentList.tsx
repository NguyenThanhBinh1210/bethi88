/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Input,
  Listbox,
  ListboxItem,
  Pagination,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectItem,
  Spinner
} from '@nextui-org/react'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { getAccount } from '~/apis/user.api'
import { animals } from '~/constants/renaral.const'

const AgentList = () => {
  const [selectedKeys, setSelectedKeys] = useState(new Set(['text']))
  const [accountRes, setAccountRes] = useState<any>()
  const { data, isSuccess, isLoading, isFetching } = useQuery({
    queryKey: ['account'],
    queryFn: () => {
      return getAccount()
    },
    enabled: true,
    refetchOnWindowFocus: false,
    staleTime: 24000
  })
  useEffect(() => {
    if (isSuccess && data) {
      setAccountRes(data?.data.data) // Cập nhật account khi fetch thành công
    }
  }, [data, isSuccess])

  const createAccount = useMutation({
    mutationFn: (params: { limit?: number; page: number }) => getAccount(params),
    onSuccess: (data) => {
      setAccountRes(data?.data.data)
    }
  })
  const handleChangePage = (page: number) => {
    createAccount.mutate({ page: page })
  }
  if (isLoading) return <p>Đang tải dữ liệu lần đầu...</p>;
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
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-300 '>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                No
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                <input type='checkbox' />
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
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
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                Username
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                Status
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                Statement
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                First & Last Name
              </th>

              <th colSpan={6} className='py-2 text-center px-3 border border-foreground-400'>
                Commission
              </th>
              <th rowSpan={2} colSpan={1} className='py-2 text-center px-3 border border-foreground-400'>
                Login IP
              </th>
            </tr>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center px-3 border border-foreground-400'>Group A</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Group B</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Group C</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Group D</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>1X2</th>
              <th className='py-2 text-center px-3 border border-foreground-400'>Other</th>
            </tr>
          </thead>
          <tbody>
            {isFetching && (
              <Spinner color="primary" />
            )}
            {accountRes?.results.map((item: any, index: number) => (
              <tr key={item._id} className='bg-foreground/5 dark:bg-foreground/10'>
                <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                  <span className=''>{accountRes?.limit * (accountRes?.page - 1) + index + 1}</span>
                </td>
                <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                  <input type='checkbox' name='' id='' />
                </td>
                <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
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
                </td>
                <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                  <div>
                    <p className='text-blue-500 text-sm '>{item.username}</p>
                    <p className='text-foreground-500 text-xs'>-</p>
                  </div>
                </td>
                <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
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
                </td>
                <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
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
                </td>
                <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                  {item.fullName}
                </td>
                <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                  0.0025
                </td>
                <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                  0.0025
                </td>
                <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                  0.0025
                </td>
                <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                  0.0025
                </td>
                <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                  0.0025
                </td>
                <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                  0.0025
                </td>
                <td rowSpan={1} className={`py-2 text-center border border-foreground-400`}>
                  <div className='text-blue-600 cursor-pointer hover:text-danger-500'>171.252.128.18</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='flex items-center justify-center mt-5'>
        <Pagination isCompact showControls total={accountRes?.totalPages} onChange={handleChangePage} initialPage={1} />
      </div>
    </div>
  )
}

export default AgentList
