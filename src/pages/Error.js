import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  //   console.log(err);
  return (
    <div className="error-container">
      <>
        <h1>Opps Something went wrong !</h1>
        <h4>
          {err.status} : {err.statusText}
        </h4>
      </>
    </div>
  );
};

export default Error;
