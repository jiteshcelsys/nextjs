import Link from 'next/link';

function FirstBlog(){
  
  return (
    <>
    <div className='centerBlog'>
    <Link href={'/blog/Next.js'} className='LinkStyle'>  Next.js
    </Link>
    <Link href={'/blog/java'} className='LinkStyle'>  java
    </Link>
    <Link href={'/blog/javascript'} className='LinkStyle'>  javascript
    </Link>
    <Link href={'/blog/React'} className='LinkStyle'>  React.js
    </Link>
    </div>

    </>

  )

}
export default FirstBlog