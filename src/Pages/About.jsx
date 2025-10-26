import React from "react";
import Title from "../Components/Title";
import AboutImg from "../assets/about/About.jpg";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={AboutImg} alt="" className="w-full md:max-w-[450px]" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-400">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quos
            reiciendis accusamus odio, nostrum minima, distinctio excepturi ut
            deleniti perferendis fugiat dolorem magnam assumenda dolorum. Cum
            aut officiis deserunt fugiat.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            facilis ullam tempora itaque, quaerat eaque porro voluptate maiores
            temporibus repellendus minima magnam. Porro, expedita aliquid.
            Deserunt impedit consequuntur ex iure.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            eveniet voluptatem illum voluptas repellat tenetur consequuntur aut
            unde amet quis iusto saepe eligendi repudiandae adipisci velit ut
            minus rem assumenda?
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US."} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-28">
        <div className="bg-gray-100 px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5 ">
          <b className="">Quality Assurance:</b>
          <p className="text-gray-600" >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            eligendi pariatur, veniam a soluta dolores ullam enim labore, amet
            numquam, culpa accusamus recusandae ut excepturi aliquam velit
            exercitationem id magni!
          </p>
        </div>
        <div className="bg-gray-100 px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5">
          <b className="">Convenience:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            eligendi pariatur, veniam a soluta dolores ullam enim labore, amet
            numquam, culpa accusamus recusandae ut excepturi aliquam velit
            exercitationem id magni!
          </p>
        </div>
        <div className="bg-gray-100 px-10 md:px-16 py-8 sm:py-10 flex flex-col gap-5">
          <b className="">Exceptional Customer Service:</b>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
            eligendi pariatur, veniam a soluta dolores ullam enim labore, amet
            numquam, culpa accusamus recusandae ut excepturi aliquam velit
            exercitationem id magni!
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
