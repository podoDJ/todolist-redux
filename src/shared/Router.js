import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Detail from "../Pages/Detail";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":id" element={<Detail/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default Router;