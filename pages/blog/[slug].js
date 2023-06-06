import React from 'react'
import { useRouter } from 'next/router';
function Slug() {
  const router =useRouter();
  const {slug}=router.query;
  return (
    <div>
      <h1>{slug}</h1>
      <p>
        lorem ipsum dolor sit amet, consectetur adiplorem
      </p>
    </div>
  )
}

export default Slug
