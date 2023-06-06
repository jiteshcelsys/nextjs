import React from 'react';
import { useRouter } from 'next/router';

function ReviewId() {
  const router = useRouter();
  const {productId,reviewId} = router.query;
  return (
    <>
      <h1>this is the product details {productId} and the review = {reviewId}</h1>
    </>
  )
}

export default ReviewId
