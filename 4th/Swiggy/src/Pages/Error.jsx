const { useRouteError } = require("react-router-dom");

const Error = () => {

  const err = useRouteError();
  console.log(err);
  return (
    <div>Custom Error</div>
  )
}

export default Error;