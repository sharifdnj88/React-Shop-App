import { RouterProvider } from "react-router-dom"
import publicRoute from "./routes/publicRoute"
import { useEffect } from "react"
import { getAllBrands } from "./redux/Shop/actions.js"
import { useDispatch } from "react-redux"


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrands());
  },[dispatch]);

  return (
    <>
      <RouterProvider router={publicRoute} />
    </>
  );
}

export default App;
