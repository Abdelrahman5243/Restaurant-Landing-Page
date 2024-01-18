import React from 'react';
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {

  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Select from a variety of fresh, flavorful dishes tailored to your taste.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Set your meal delivery schedule to daily, weekly, or monthly.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Enjoy prompt delivery of your freshly prepared meals",
    },
  ];
  return (
    <div className="work-section-wrapper" id="Works">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Discover the simplicity of gourmet home cooking. Select your desired dishes, set your delivery frequency, and relish in swift,
        steaming deliveries right to your doorstep.        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img loading="lazy" src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
