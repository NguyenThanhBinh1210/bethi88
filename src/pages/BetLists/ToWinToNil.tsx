const ToWinToNil = () => {
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>TO WIN TO NIL</div>
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>#</th>
              <th className='py-2 text-center border border-foreground-400'>Member</th>
              <th className='py-2 text-center border border-foreground-400'>Trans.Time</th>
              <th className='py-2 text-center border border-foreground-400'>Choice</th>
              <th className='py-2 text-center border border-foreground-400'>Odds</th>
              <th className='py-2 text-center border border-foreground-400'>Stake</th>
              <th className='py-2 text-center border border-foreground-400'>Status</th>
              <th className='py-2 text-center border border-foreground-400'>Master PT/ Comm</th>
              <th className='py-2 text-center border border-foreground-400'>Agent PT/ Comm</th>
              <th className='py-2 text-center border border-foreground-400'>Platform</th>
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

export default ToWinToNil
