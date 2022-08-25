import Footer from './components/Footer';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

function App() {
  return (
    <>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route exact path="/" element={<HomeScreen/>} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart" >
              <Route index element={<CartScreen />}/>
              <Route path=":id" element={<CartScreen/>} />
            </Route>
            <Route path="*" element={<h4>There's nothing here!</h4> }></Route>
          </Routes>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
