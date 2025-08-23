import TechStackUsed from "./TechStackUsed";
import introImg from "../utils/images/introImg.png";
import introImgDark from "../utils/images/introImgDark.png";

export default function AboutContent()
{
    return(
        <div className="py-40 px-10 flex flex-col gap-40 tracking-wider">
            <div className="flex flex-col gap-10">
                <h3 className={`text-4xl font-bold`}>What is VizAlgo ?</h3>
                <p className="text-2xl/relaxed mb-8">VizAlgo is an interactive online platform designed to help students visualize Data Structures and Algorithms (DSA) in an intuitive and engaging way. Instead of just reading theory or coding blindly, VizAlgo brings DSA concepts to life through step-by-step animations and interactive visualizations.</p>
                <div className="flex justify-around flex-wrap gap-10">
                    <img src={introImg} alt="introImg" className="w-[95%] md:w-[45%] rounded-xl"/>
                    <img src={introImgDark} alt="" className="w-[95%] md:w-[45%] rounded-xl"/>
                </div>
            </div>
            <div className="flex flex-col gap-10">
                <h3 className={`text-4xl font-bold`}>Why VizAlgo ?</h3>
                <p className="text-2xl/relaxed">Learning Data Structures and Algorithms (DSA) can be challenging, especially when dealing with abstract concepts and complex problem-solving techniques. That’s where VizAlgo comes in!</p>
                <ol className="flex flex-col text-xl/relaxed pl-8 gap-3">
                    <li><strong>1. Interactive Learning –</strong> Traditional learning methods can sometimes feel overwhelming. VizAlgo makes DSA concepts easier to understand by providing interactive visualizations, helping students grasp topics quickly and effectively.</li>
                    <li><strong>2. Better Retention & Clarity –</strong> Studies show that visual learning enhances memory and improves comprehension. With VizAlgo, students can see how algorithms work in real-time, making it easier to retain and apply concepts.</li>
                    <li><strong>3. Step-by-Step Demonstrations –</strong> Instead of just reading code, VizAlgo walks you through each step of an algorithm, breaking it down into simple and intuitive animations. This bridges the gap between theory and implementation.</li>
                </ol>
                <p className="text-xl/relaxed">With VizAlgo, mastering DSA becomes more than just memorization—it becomes an immersive experience that prepares you for coding interviews, competitive programming, and real-world problem-solving.</p>
            </div>
            <div className="flex flex-col gap-5">
                <h3 className={`text-4xl font-bold`}>How to use VizAlgo ?</h3>
                <p className="text-2xl">Learning with VizAlgo is simple! Just follow these three steps:</p>
                <ol className="flex flex-col text-xl pl-8 gap-3">
                    <li><strong>1️⃣ Go to the Dashboard –</strong> Access the main dashboard of VizAlgo.</li>
                    <li><strong>2️⃣ Select a Data Structure or Algorithm –</strong> Choose the concept you want to visualize.</li>
                    <li><strong>3️⃣ Start Visualizing –</strong> Enter dynamic values and see how the algorithm works in real-time!</li>
                </ol>
                <p className="text-xl">That's it! Start exploring and make your DSA learning journey interactive and fun. 🚀</p>
            </div>
            <div className="flex flex-col gap-5">
                <h3 className={`text-4xl font-bold`}>Tech Stack Used ?</h3>
                <p className="text-2xl mb-8">VizAlgo is built using modern web technologies to ensure a smooth and interactive learning experience:</p>
                <TechStackUsed/>
            </div>
        </div>
    )
}