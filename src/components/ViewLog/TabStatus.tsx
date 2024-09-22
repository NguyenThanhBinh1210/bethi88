import FilterController from './FilterController'

const TabStatus = () => {
  return (
    <div>
      <FilterController checkbox='Show all value' dateRange input />
      <div className='w-full overflow-auto text-xs '>
        <table className='table-auto w-full border-collapse mt-4'>
          <thead>
            <tr className='bg-foreground-500 text-white'>
              <th className='py-2 text-center border border-foreground-400'>Action</th>
              <th className='py-2 text-center border border-foreground-400'>Details</th>
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

export default TabStatus
