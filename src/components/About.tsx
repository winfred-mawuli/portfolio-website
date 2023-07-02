import {description, name, profession} from "../constants/app_constanst";
import picture from "./mypicture.jpg"

export const About = () => {

    return (

        <div className="flex mt-40 justify-around gap-10 w-auto m-20 items-center">
            <div className="w-1/2 ">
                <h1 className="bg-red-500 py-2 px-0 w-36 text-center rounded opacity-80 hover:scale-110 transition-all cursor-pointer hover:-rotate-45">Welcome! I'M</h1>
                <h1 className="font-semibold text-5xl">{name}</h1>
                <h4 className="mt-5 font-medium text-2xl">{profession}</h4>
                <p className="mt-5">{description}</p>
            </div>

            <div className="w-1/2 h-auto">
                <div className="text-4xl flex items-center justify-center">
                    <img className="w-fit h-[400px] hover:scale-110 transition-all" src={picture} alt="profile-image"/>
                </div>
            </div>

        </div>
    );
};
