import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/user/Login";
import { Register } from "./pages/user/Register";
import { ReadAllItems } from "./pages/item/ReadAllItems";
import { ReadSingleItem } from "./pages/item/ReadSingleItem";
import { CreateItem } from "./pages//item/CreateItem";
import { UpdateItem } from "./pages/item/UpdateItem";
import { DeleteItem } from "./pages/item/DeleteItem";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* User functions */}
        <Route path="/user/register" element={<Register />} />
        <Route path="/user/login" element={<Login />} />
        {/* Item functions */}
        <Route path="/" element={<ReadAllItems />} />
        <Route path="/item/:id" element={<ReadSingleItem />} />
        <Route path="/item/create" element={<CreateItem />} />
        <Route path="/item/update/:id" element={<UpdateItem />} />
        <Route path="/item/delete/:id" element={<DeleteItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
