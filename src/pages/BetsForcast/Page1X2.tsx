import CountDownController from '~/components/CountDownController'

const Page1X2 = () => {
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>1X2</div>
      <CountDownController />
      <div className='w-full max-w-3xl text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>Team</th>
              <th className='py-2 text-center border border-foreground-400'>1X2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={3} className='py-4 text-center bg-foreground-100  border border-foreground-400'>
                No information is available
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Page1X2
