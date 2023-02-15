import useFetching from '../hooks/useFetching'

const Compare = () => {
  const [devices] = useFetching(async () => {
    let formdata = new FormData()

    formdata.append('route', 'compare')
    formdata.append('device_id', '11089,10237')

    var requestOptions = {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    }

    fetch(
      'https://script.google.com/macros/s/AKfycbxNu27V2Y2LuKUIQMK8lX1y0joB6YmG6hUwB1fNeVbgzEh22TcDGrOak03Fk3uBHmz-/exec',
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log('error', error))
  })
  console.log('devices', devices)
  return <div></div>
}

export { Compare }
