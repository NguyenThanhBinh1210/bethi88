/* eslint-disable @typescript-eslint/no-explicit-any */
import { Popover, Checkbox, CheckboxGroup } from '@nextui-org/react'
import { Button, PopoverContent, PopoverTrigger } from '@nextui-org/react'
import { useEffect, useState } from 'react'

const optionsList = [
  {
    label: 'Option 1',
    value: 'option1',
    children: [
      { label: 'Sub-option 1.1', value: 'suboption1.1' },
      { label: 'Sub-option 1.2', value: 'suboption1.2' }
    ]
  },
  {
    label: 'Option 2',
    value: 'option2',
    children: [
      { label: 'Sub-option 2.1', value: 'suboption2.1' },
      { label: 'Sub-option 2.2', value: 'suboption2.2' }
    ]
  },
  {
    label: 'Option 3',
    value: 'option3',
    children: [] // Có thể có hoặc không có children
  }
]
const SelectChecked = () => {
  const [selectedOptions, setSelectedOptions] = useState<any>([])
  const [selectAll, setSelectAll] = useState<boolean>(false)
  const handleOptionChange = (values: any) => {
    setSelectedOptions(values)
  }

  const renderOptions = (options: any) => {
    return options.map((option: any) => (
      <div key={option.value} className=''>
        <Checkbox size='sm' value={option.value}>
          {option.label}
        </Checkbox>
        {option.children && option.children.length > 0 && <div className='ml-4'>{renderOptions(option.children)}</div>}
      </div>
    ))
  }
  const getAllValues = (options: any) => {
    let values: any = []
    options.forEach((option: any) => {
      values.push(option.value)
      if (option.children) {
        values = values.concat(getAllValues(option.children))
      }
    })
    return values
  }
  const allValues = getAllValues(optionsList)
  const handleSelectAllChange = () => {
    if (selectAll) {
      setSelectedOptions([])
    } else {
      setSelectedOptions(allValues)
    }
    setSelectAll(!selectAll)
  }
  useEffect(() => {
    if (selectedOptions.length === allValues.length) {
      setSelectAll(true)
    } else {
      setSelectAll(false)
    }
  }, [selectedOptions])
  return (
    <Popover>
      <PopoverTrigger>
        <Button className='rounded-none bg-foreground-50 border-foreground-200 border'>
          <div className='flex justify-between gap-x-3 items-center'>
            {selectedOptions.length === allValues.length
              ? `All Product (${allValues.length})`
              : selectedOptions.length > 0
                ? `${selectedOptions.length} selected`
                : 'Select options'}
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='size-3'>
              <path
                fillRule='evenodd'
                d='M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z'
                clipRule='evenodd'
              />
            </svg>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className='rounded-none items-start'>
        <Checkbox size='sm' className='' isSelected={selectAll} onChange={handleSelectAllChange}>
          Select All
        </Checkbox>

        <CheckboxGroup value={selectedOptions} onChange={handleOptionChange}>
          {renderOptions(optionsList)}
        </CheckboxGroup>
      </PopoverContent>
    </Popover>
  )
}

export default SelectChecked
