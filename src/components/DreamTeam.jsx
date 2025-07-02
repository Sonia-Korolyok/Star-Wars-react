import friend1 from "../assets/Images/friend1.jpg";
import friend2 from "../assets/Images/friend2.jpg";
import friend3 from "../assets/Images/friend3.jpg";
import friend4 from "../assets/Images/friend4.jpg";
import friend5 from "../assets/Images/friend5.jpg";
import friend6 from "../assets/Images/friend6.jpg";
import friend7 from "../assets/Images/friend7.jpg";
import friend8 from "../assets/Images/friend8.jpg";
import friend9 from "../assets/Images/friend9.jpg";


const DreamTeam = () => {
    return (
        <section className="float-end row w-50 border rounded-bottom-4 me-0 ms-2">
            <h2 className="text-center">Dream team</h2>
            <img className="col-sm-4 p-1" src={friend1} alt="Friend"/>
            <img className="col-sm-4 p-1" src={friend2} alt="Friend"/>
            <img className="col-sm-4 p-1" src={friend3} alt="Friend"/>
            <img className="col-sm-4 p-1" src={friend4} alt="Friend"/>
            <img className="col-sm-4 p-1" src={friend5} alt="Friend"/>
            <img className="col-sm-4 p-1" src={friend6} alt="Friend"/>
            <img className="bottomLeft col-sm-4 p-1" src={friend7} alt="Friend"/>
            <img className="col-sm-4 p-1" src={friend8} alt="Friend"/>
            <img className="bottomRight col-sm-4 p-1" src={friend9} alt="Friend"/>
        </section>
    );
};


export default DreamTeam;
