import React from "react";
import do3 from "../../assets/images/do3.jpg";

export const About = () => {
  return (
    <>
      <div className="about">
        <div className="title-about">
          ABOUT
        </div>
      </div>
      <div className="glasses">
        <img src={do3} alt="" />

        <div className="parag-2">
          <h1>OUR STORY</h1>
          <p className="parag-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            A tenetur itaque, quod tempora eum debitis beatae ea illo, odit mollitia <br />
            perspiciatis quis quasi minus voluptatem accusantium officia modi voluptatum. Provident! <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            A tenetur itaque, quod tempora eum debitis beatae ea illo, odit mollitia <br />
            perspiciatis quis quasi minus voluptatem accusantium officia modi voluptatum. Provident!</p>

            <p className="parag-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
            A tenetur itaque, quod tempora eum debitis beatae ea illo, odit mollitia <br />
            perspiciatis quis quasi minus voluptatem accusantium officia modi voluptatum. Provident! <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
        </div>
      </div>

    </>
  );
};
