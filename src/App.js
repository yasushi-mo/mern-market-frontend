import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Login } from "./pages/user/Login";
import { Register } from "./pages/user/Register";
import { ReadAllItems } from "./pages/item/ReadAllItems";
import { ReadSingleItem } from "./pages/item/ReadSingleItem";
import { CreateItem } from "./pages//item/CreateItem";
import { UpdateItem } from "./pages/item/UpdateItem";
import { DeleteItem } from "./pages/item/DeleteItem";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="container">
          <Header />
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
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
