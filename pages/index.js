import { useRouter } from 'next/router';
import Link from 'next/link';




function Home(){
  const router = useRouter();
  return(
    <>
   <div className='HomeBlog'>
   <h1 >This is the HomePage-Blog</h1>
  <div className='contentHome'>
    
  </div>
   </div>
    {/* <button type ='button' onClick={()=> router.push('/product')}>product using button</button>
    <Link href="/product"  >product using link tag</Link> */}
    
    
    </>
  )
}
export default Home