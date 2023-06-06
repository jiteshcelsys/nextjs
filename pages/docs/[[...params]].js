import { useRouter } from "next/router";
function Document() {
  const router = useRouter();
  const { params = [] } = router.query;//to make sure that the output should be in an array.
  console.log(params);
  if (params.length === 2) {
    return (
      <h1>
        viewing page feature {params[0]} and chapter {params[1]}
      </h1>
    );
  } else if (params.length === 1) {
    return <h1>page feature is {params[0]}</h1>;
  }
  return <h1>Document Home Page</h1>;
}
export default Document;
