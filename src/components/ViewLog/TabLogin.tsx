import FilterController from './FilterController'

const TabLogin = () => {
  return (
    <div>
      <FilterController checkbox='Show all value' dateRange input />
      <p className='text-xs mt-3'>
        <span className='text-red-600 '>* </span>The member Login Log is not available.
      </p>
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>Action</th>
              <th className='py-2 text-center border border-foreground-400'>Details</th>
              <th className='py-2 text-center border border-foreground-400'>Domain</th>
              <th className='py-2 text-center border border-foreground-400'>Browser</th>
              <th className='py-2 text-center border border-foreground-400'>IP/Country</th>
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

export default TabLogin
