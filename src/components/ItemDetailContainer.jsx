import { useParams } from "react-router-dom"
import ItemDetail from './ItemDetail'
import { mFetch } from "./mFetch"
import { useEffect, useState } from "react"


export const ItemDetailContainer = () => {

  const [product, setProduct] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const {id} = useParams()
  

  useEffect(() => {

    mFetch(id)
      .then(resp => setProduct(resp))
       .catch(err => console.log(err))
      .finally(() => setIsLoading(false))
  }, [])

  

  return (
    <div>
      {isLoading ?
        <h3>Cargando...</h3>
      :
        <ItemDetail producto={product}/>
      }
    </div>
  )
}


export default ItemDetailContainer