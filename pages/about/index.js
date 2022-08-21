import { AiOutlineInstagram } from "react-icons/ai";
import { ImPinterest2 } from "react-icons/im";
import { RiFacebookCircleLine } from "react-icons/ri";
import pic4 from "/assets/images/pic4.jpg";
import pic5 from "/assets/images/pic5.jpg";
import pic6 from "/assets/images/pic6.jpg";
import pic7 from "/assets/images/pic7.jpg";
import pic8 from "/assets/images/pic8.jpg";
import team1 from "/assets/images/team1.jpg";
import team2 from "/assets/images/team2.jpg";
import team3 from "/assets/images/team3.jpg";
import Base from "/components/base";
import Button from "/components/button";

const AboutPage = () => {
  return (
    <Base>
      <div className="flex flex-col gap-y-32 text-lg">
        <div className="flex flex-row justify-evenly items-baseline gap-x-20 ">
          <div className="flex flex-col mt-16 gap-y-8">
            <h1 className="text-5xl text-title font-medium">
              Boomi Restaurant
            </h1>
            <p>
              4th floor , Melal Boutique Mall
              <br /> Bosnia and Herzegovina St , Fereshte Ave , Tehran
            </p>
          </div>
          <p className="self-senter">
            Every day from 12-23 <br /> lunch : 12-16 <br /> dinner : 19-23{" "}
            <br /> cafe: 16-19
          </p>
          <div className="flex flex-col gap-y-2 ">
            Follow us On
            <div className="flex flex-row text-3xl gap-x-1">
              <AiOutlineInstagram /> <ImPinterest2 /> <RiFacebookCircleLine />
            </div>
            <p>Tel : 09563457</p>
          </div>
          <div className="flex flex-col gap-y-2">
            <Button href="/reservation" content="Book" />
            <Button href="/order" content="Order" />
          </div>
        </div>

        <div className="flex flex-row gap-x-0 mx-auto ">
          <div className="bg-pink-100 w-60 h-32 flex flex-col justify-around self-center shadow-md">
            <p className="text-center font-medium ">
              Enjoy your coffee<br />in Our cafe !
            </p>
            <div className="bg-title w-32 h-4 -ml-5 shadow-md" />
          </div>
          <img src={pic5.src} className="h-56 rounded-l-md" />
          <img src={pic6.src} className="h-56" />
          <img src={pic7.src} className="h-56 " />
          <img src={pic8.src} className="h-56 rounded-r-md" />
        </div>

        <div className="flex flex-row gap-x-4 mx-auto">
          <div className="flex flex-col justify-around">
            <img src={team2.src} className="h-48 " />
            <div className="flex flex-row justify-between">
              <div className="bg-pink-100 w-40 p-2 shadow-md self-center">
                <p className="font-medium">Pastry part</p>
                <p className="text-justify">
                  Our chefs making unforgettable Sauce.
                </p>
              </div>
              <div className="bg-title w-2.5 h-32" />
            </div>
          </div>

          <div className="flex flex-col justify-around">
            <img src={team3.src} className="h-48 " />
            <div className="flex flex-row justify-between">
              <div className="bg-pink-100 w-40 p-2 shadow-md self-center">
                <p className="font-medium">Roast part</p>
                <p className="text-justify">
                  Our chefs making nice dishes with fresh meat.
                </p>
              </div>
              <div className="bg-title w-2.5 h-32" />
            </div>
          </div>

          <div className="flex flex-col gap-y-10 shadow-md items-center p-6 z-0">
            <img src={team1.src} className="h-52" />
            <p className="text-base font-medium text-justify w-52 ">
              Head Chef : John Brown Vegetable Chef : Marshal Sand Pantry Chef :
              Stive Mac Roast Chef : Andrew Jason Sauce chef : Jame Staurt
              Pastry Chef : Martin King
            </p>
          </div>

          <div className="flex flex-col justify-center gap-y-3 mt-10">
            <p>Meet our kitchen team .</p>
            <div className="relative right-28 bg-title w-80 h-3 z-10 shadow-sm" />
          </div>
        </div>
      </div>
    </Base>
  );
};
export default AboutPage;
