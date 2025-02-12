import { useParams } from "react-router"

const Shop = () => {
    const {product_name} = useParams()

  return (
    <div>
      {product_name}
    </div>
  )
}

export default Shop
