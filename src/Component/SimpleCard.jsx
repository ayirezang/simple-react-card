import React, { Component } from "react";
import Title from "./Title";
import Description from "./Description";
import Image from "./Image";

class SimpleCard extends Component {
  render() {
    return (
      <div className=" min-h-screen flex justify-center  items-center gap-[25px] mt-[50px] p-10">
        <Image
          io="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTHFfHHnSAJ0lNuBcWoJERK4BH2XGNTsr1KA&s"
          className="w-[400px] h-[400px] object-cover"
        />

        <div className="flex flex-col  max-w-[350px]">
          <Title title="lorem ipsum" />
          <Description
            Description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free."
            className="tracking-wider leading-7"
          />
        </div>
      </div>
    );
  }
}
export default SimpleCard;
