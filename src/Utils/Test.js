import { useState } from 'react'
import { Checkbox, Stack } from '@chakra-ui/react'

const Test = () => {
  const [allBrands, setAllBrands] = useState([])
  const [allDeviceList, setAllDeviceList] = useState([])

  const [checkedItems, setCheckedItems] = useState([false])
  const allChecked = checkedItems.every(Boolean)
  // const isIndeterminate = checkedItems.some(Boolean) && !allChecked

  const brands = [
    {
      id: 1,
      name: 'Nokia',
      devices: [
        { id: 1234, name: 'X40' },
        { id: 1235, name: 'X42' },
        { id: 1236, name: 'X53' },
        { id: 1237, name: '93' },
        { id: 1238, name: '96 Ultra' },
      ],
    },
    {
      id: 2,
      name: 'Xiaomi',
      devices: [
        { id: 12, name: 'POCO X3' },
        { id: 13, name: '13' },
        { id: 14, name: 'Mi 8T' },
        { id: 15, name: 'Mi 10' },
      ],
    },
    {
      id: 3,
      name: 'Samsung',
      devices: [
        { id: 1, name: 'Galaxy S12' },
        { id: 2, name: 'Galaxy S13' },
        { id: 3, name: 'Galaxy S14' },
        { id: 4, name: 'A32' },
        { id: 5, name: 'J303' },
        { id: 6, name: 'J7' },
      ],
    },
  ]

  // setAllBrands(brands)

  // allBrands.map(
  //   (brand) =>
  //     (setAllDeviceList ([
  //       ...allDeviceList,
  //       ...brand.devices
  //     ]))
  // )

  // console.log(allDeviceList);

  const devices = brands.reduce((acc, brand) => {
    const devices = brand.devices.map((device) => ({
      ...device,
      name: `${brand.name} ${device.name}`,
    }))

    return acc.concat(devices)
  }, [])

  return (
    <>
      <Checkbox
        isChecked={allChecked}
        // isIndeterminate={isIndeterminate}
        onChange={(e) =>
          setCheckedItems([
            e.target.checked,
            e.target.checked,
            e.target.checked,
          ])
        }
      >
        Parent Checkbox
      </Checkbox>
      <Stack pl={6} mt={1} spacing={1}>
        <Checkbox
          isChecked={checkedItems[0]}
          onChange={(e) => setCheckedItems([e.target.checked, checkedItems[1]])}
        >
          Child Checkbox 1
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[1]}
          onChange={(e) => setCheckedItems([checkedItems[0], e.target.checked])}
        >
          Child Checkbox 2
        </Checkbox>
        <Checkbox
          isChecked={checkedItems[2]}
          onChange={(e) =>
            setCheckedItems([
              checkedItems[0],
              checkedItems[1],
              e.target.checked,
            ])
          }
        >
          Child Checkbox 3
        </Checkbox>
      </Stack>
    </>
  )
}

export { Test }

// const allPhones = [1, 5, 6, 7, 3, 4, 8]
// const blackList = [6, 3, 8, 12]

// const result = allPhones.filter((element) => !blackList.includes(element))

// console.log(result)

// const testObject = { a: 'b', c: 'd' }
// Object.keys(testObject).map((key) => console.log(key, testObject[key]))

// // cartItems.includes(item)
// const arr = [1, 5, 6, 8, 4, 3, 9]
// console.log(arr.findIndex(item => item === 8));

const str1 = '32GB/64GB storage'
const str2 = '64GB storage'
const str3 = '3-6GB RAM'

const splitStr = (str) => {
  return str.split(' ')[0].split('/')[0].split('-')[1]
}

console.log(splitStr(str1))
console.log(splitStr(str2))
console.log(splitStr(str3))
