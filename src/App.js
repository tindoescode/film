import Header from './components/Header'
import Footer from './components/Footer'
import MainContext from './components/MainContext';

//https://api.themoviedb.org/3/trending/movie/day?api_key=fa6d1ea2ff1e91e540e452e48a8cf3f9
function App() {
  return (
    <main>
      <Header />
      <MainContext />
      <Footer />
    </main>
  );
}

export default App;
