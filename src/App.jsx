import './App.css';
import Card from './components/Card/Card';
import fblogo from './Assets/fblogo.png'
import post1 from './Assets/images.jpeg'
import post2 from './Assets/post2.webp'
import post3 from './Assets/post3.jpeg'


function App() {
  return (
    <div className="App">
      <Card
        logo={fblogo}
        title="Sharjeel"
        post={post1}
        discription="Lorem ipsum dolor sit amet consectetur adipisicing elit."
      />
      <Card
        logo={fblogo}
        title="Shoukat"
        post={post2}
        discription=" Ad sapiente nisi similique quo veritatis!"
      />
      <Card
        logo={fblogo}
        title="Bilal"
        post={post3}
        discription="Libero, in?
        Dolor, modi enim fugit quam assumenda"
      />
      
    </div>
  );
}

export default App;
