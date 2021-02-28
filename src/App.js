
import './App.css';
import Journey from './components/Journey';
import Values from './components/Values';
import WhoWeAre from './components/Whyus';
import Feedback from './components/Feedback'
import CarouselImage from  './components/Carousel'










var values=[{name:"Resilience", details:"We push ourselves beyond our abilities when faced with tough times. When we foresee uncertainty, we address it only with flexibility.",image:"./images/Resiliance.jpeg"},
{name:"Acceptance", details:"Feedback is never taken personally, we break it into positive pieces and strive to work on each and every element even more effectively.",image:"./images/Acceptance.jpg"},
{name:"Ownership", details:"People here don’t work ‘for’ Zomato, they work ‘with’ Zomato. We treat every problem as our own, take accountability and drive the change.",image:"./images/Ownership.jpg"},
{name:"Humility", details:"It’s always ‘us’ over ‘me’. We don’t lose ourselves in pride or confidence during individual successes, but focus on being our simple selves in every which way.",image:"./images/Humility.jpg"},
{name:"Spark", details:"We believe in, stand for and are evangelists of our culture - both, within Zomato and externally with all our stakeholders.",image:"./images/Spark.jpg"},
{name:"Judgement", details:"It’s not our abilities that show who we truly are - it’s our choices. We aim to get these right, at least in the majority of the cases.",image:"./images/Judgement.jpg"}]; 








var feedbacks=[{name:"Akash" ,feedback:" Zomato has a really nice app that is available for iOS and Android as well. It is easy to use, has a lot of filters in order to find food you are craving for. "},
{name:"Ankita",feedback:" The payments work really well with creditcard. Also had to claim once, and their customer service was really fast at processing my refund."},
{name:"Chirag",feedback:"Its fast, easy to use and very satisfying. I love this app as it solves my ordering issues. "},
{name:"Pragati",feedback:"Best part is that you can order food online from your favourite restaurant with ease. you can get special discounts from restaurants. You can select a range of menu easily."},
{name:"Urvashi",feedback:"There are lots of information of restaurants available on its app, you can choose any restaurant to place your order"},
{name:"Venkatesh",feedback:"Zomato is a very easy application to use, its interface is user friendly. The application is very reliable for its delivery. it is a go-to option for whenever you are in no mood to cook food"}]



function App() {
  return (
    <div className="App">
     <h1>About Us</h1>
    
     <WhoWeAre/>
     <Values value={values} />
    
     <CarouselImage/>
   
    
     
    
   
     
     <Journey/>

     <Feedback feedback={feedbacks}/>
    </div>
  
  );
}
export default App;
