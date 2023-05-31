import React from 'react';
import './App.css';
import { MyComponent } from './components/MyComponent';


function App() {
  const users = [
    {
      Name:"sreerag",
      age:24,
      img:"https://img.freepik.com/free-photo/portrait-young-indian-top-manager-t-shirt-tie-crossed-arms-smiling-white-isolated-wall_496169-1513.jpg?size=626&ext=jpg",
      link:"www.google.com"
      
    },
    {
      Name:"baby",
      age:28,
      img:"https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?size=626&ext=jpg",
      link:"www.baby.com"
    },
    {
      Name:"tony",
      age:44,
      img:"https://img.freepik.com/free-photo/portrait-smiling-young-man-eyewear_171337-4842.jpg?size=626&ext=jpg",
      link:"www.tonyworls.com",
    },
    {
      Name:"jamila",
      age:40,
      img:"https://img.freepik.com/premium-photo/young-indian-woman-isolated-white_1368-124840.jpg?size=626&ext=jpg&ga=GA1.1.238568620.1685539104&semt=sph",
      link:"www.jamila.com"
    },
    {
      Name:"fahad",
      age:13,
      img:"https://img.freepik.com/free-photo/indian-man-smiling-cheerful-expression-closeup-portrait_53876-129387.jpg?size=626&ext=jpg&ga=GA1.1.238568620.1685539104&semt=sph",
      link:"www.fahad.com"
    },
    {
      Name:"kiran",
      age:39,
      img:"https://img.freepik.com/free-photo/portrait-successful-man-having-stubble-posing-with-broad-smile-keeping-arms-folded_171337-1267.jpg?size=626&ext=jpg&ga=GA1.2.238568620.1685539104&semt=sph",
      link:"www.kiran.com"
    },
    {
      Name:"charlie",
      age:77,
      img:"https://img.freepik.com/free-photo/image-confident-caucasian-man-smiling-pleased-holding-hands-crossed-chest-looking-satisfied-standing-yellow-background_1258-40778.jpg?size=626&ext=jpg&ga=GA1.1.238568620.1685539104&semt=sph",
      link:"www.charlie.in"
    },
    {
      Name:"salman",
      age:44,
      img:"https://img.freepik.com/free-photo/mand-holding-cup_1258-340.jpg?size=626&ext=jpg&ga=GA1.2.238568620.1685539104&semt=sph",
      link:"www.salman.org"
    },
    {
      Name:"jamal",
      age:45,
      img:"https://img.freepik.com/free-photo/confident-attractive-caucasian-guy-beige-pullon-smiling-broadly-while-standing-against-gray_176420-44508.jpg?size=626&ext=jpg&ga=GA1.1.238568620.1685539104&semt=sph",
      link:"www.jamal.in"
    },
    {
      Name:"babu",
      age:27,
      img:"https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?size=626&ext=jpg&ga=GA1.1.238568620.1685539104&semt=sph",
      link:"www.babu.in"
    },
   ]
  return (
    <div className="App">
       <MyComponent users={users} />
     

    </div>
  );
}

export default App;
