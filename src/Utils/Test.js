import {useState} from 'react';

const Test = () => {
  const [allBrands, setAllBrands] = useState([])
  const [allDeviceList, setAllDeviceList] = useState([])   

  const brands = [
    {
      id: 1,
      name: "Nokia",
      devices: [
        { id: 1234, name: "X40" },
        { id: 1235, name: "X42" },
        { id: 1236, name: "X53" },
        { id: 1237, name: "93" },
        { id: 1238, name: "96 Ultra" }
      ]
    },
    {
      id: 2,
      name: "Xiaomi",
      devices: [
        { id: 12, name: "POCO X3" },
        { id: 13, name: "13" },
        { id: 14, name: "Mi 8T" },
        { id: 15, name: "Mi 10" }
      ]
    },
    {
      id: 3,
      name: "Samsung",
      devices: [
        { id: 1, name: "Galaxy S12" },
        { id: 2, name: "Galaxy S13" },
        { id: 3, name: "Galaxy S14" },
        { id: 4, name: "A32" },
        { id: 5, name: "J303" },
        { id: 6, name: "J7" }
      ]
    }
  ];
  
  setAllBrands(brands) 

  allBrands.map(
    (brand) =>
      (setAllDeviceList ([
        ...allDeviceList,
        ...brand.devices
      ]))
  )

  console.log(allDeviceList);

  // const devices = brands.reduce((acc, brand) => {
  //   const devices = brand.devices.map((device) => ({
  //     ...device,
  //     name: `${brand.name} ${device.name}`
  //   }));
  
  //   return acc.concat(devices);
  // }, []);
  
  // console.log(devices);
  
  return (
    <div>
      
    </div>
  );
};

export default Test;