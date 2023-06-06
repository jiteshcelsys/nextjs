import { useRouter } from 'next/router';
function ProductId(){
  const router = useRouter();
  console.log(router)
  const productID = router.query.productId;
  return(
    <>
    <h1>This is the product {productID}</h1>
    
    
    
    </>
  )

}
export default ProductId
