import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useRequestData(url) {

  const [data, setData] = useState(undefined)
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    setLoading(true)

    axios
      .get(url)
      .then(res=> {
        setLoading(false)
        setData(res.data)
      })
      .catch(err => setLoading(false))
    },
    [url])

  return [data, setData, loading]
}