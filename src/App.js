import './App.scss';
import CollectionCard from './components/Collection/CollectionCard';
import Header from './components/Header/Header';
import img from './assets/5.jpg'
function App() {
  return (
    <div className="App">
      <Header />
      <CollectionCard
        id={0}
        name={'Bandana Punk'}
        traits={[{value:7}]} 
          image={img}
          />
    </div>
  );
}

export default App;
