import Navbar from 'app/navbar';
import '/app/global.css';

const Contact: React.FC = () => {
    return <div>
      <Navbar />
      <div className="flex justify-center mt-24 staggered-element">
          <img
            src="/group.png"
            alt="Group"
            className="h-auto max-w-2xl rounded-lg shadow-lg"
            width="60%"
          />
        </div>
    </div>;
  };

  
  export default Contact;
  