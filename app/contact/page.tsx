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
            width="40%"
          />
        </div>
      
        {/* Statistics Section */}
        <section className="mt-6 text-center max-w-4xl mx-auto staggered-element">
          <h2 className="text-3xl font-semibold mb-4">Reach Out</h2>
          <p className="text-lg">
          Sumedh: kotrannavar25s@ncssm.edu<br></br>
          Richard shan26r@ncssm.edu<br></br>
          Tejjas kaul25t@ncssm.edu
          </p>
        </section>

    </div>;
  };

  
  export default Contact;
  