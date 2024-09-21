import CountDownController from '~/components/CountDownController'

const HTFT = () => {
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>HT/FT</div>
      <CountDownController />
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>#</th>
              <th className='py-2 text-center border border-foreground-400'>Home</th>
              <th className='py-2 text-center border border-foreground-400'>Away</th>
              <th className='py-2 text-center border border-foreground-400'>HH</th>
              <th className='py-2 text-center border border-foreground-400'>HD</th>
              <th className='py-2 text-center border border-foreground-400'>HA</th>
              <th className='py-2 text-center border border-foreground-400'>DH</th>
              <th className='py-2 text-center border border-foreground-400'>DD</th>
              <th className='py-2 text-center border border-foreground-400'>DA</th>
              <th className='py-2 text-center border border-foreground-400'>AH</th>
              <th className='py-2 text-center border border-foreground-400'>AD</th>
              <th className='py-2 text-center border border-foreground-400'>AA</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={20} className='py-4 text-center bg-foreground-100  border border-foreground-400'>
                No information is available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default HTFT
