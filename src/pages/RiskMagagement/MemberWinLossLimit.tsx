const MemberWinLossLimit = () => {
  return (
    <div>
      <div className='mb-4 pb-3 border-b border-foreground-200 uppercase font-medium'>Member Win/Loss Limit</div>

      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>No.</th>
              <th className='py-2 text-center border border-foreground-400'>Status</th>
              <th className='py-2 text-center border border-foreground-400'>Username</th>
              <th className='py-2 text-center border border-foreground-400'>First Name</th>
              <th className='py-2 text-center border border-foreground-400'>Last Name</th>
              <th className='py-2 text-center border border-foreground-400'>Credit</th>
              <th className='py-2 text-center border border-foreground-400'>Balance</th>
              <th className='py-2 text-center border border-foreground-400'>Auto Daily Reset Limit</th>
              <th className='py-2 text-center border border-foreground-400'>Current Win Loss Amount</th>
              <th className='py-2 text-center border border-foreground-400'>Maximum Win (on given credit)</th>
              <th className='py-2 text-center border border-foreground-400'>Current Win Limit (%)</th>
              <th className='py-2 text-center border border-foreground-400'>Maximum Loss</th>
              <th className='py-2 text-center border border-foreground-400'>Current Loss Limit (%)</th>
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

export default MemberWinLossLimit
