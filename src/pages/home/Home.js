import React from "react";
import do1 from "./../../assets/images/do1.jpg";
import mo1 from "./../../assets/images/mo1.jpg";
import mo2 from "./../../assets/images/mo2.jpg";
import mo3 from "./../../assets/images/mo3.jpg";
import mo4 from "./../../assets/images/mo4.jpg";



export const Home = () => {
  return (
    <>
      <div className="pics1">
        <div className="texto">
          <h1 className="title"> NEW ARRIVALS</h1>
          <div>
            <div className="parag">
              <p className="title1"> NEW COLLECTION</p>
            </div>
            <div className="parag">
              <button className="btn"> SHOP NOW</button>

            </div>
          </div>

        </div>


      </div>
      <div className="photos">
        <div className="pics2">
          <img src={do1} alt="" />
          <h2 className="come"> coming soon </h2>
        </div>



        <div className="pics2">
          <img src={do1} alt="" />
          <h2 className="come"> coming soon </h2>

        </div>
        <div className="pics2">
          <img src={do1} alt="" />
          <h2 className="come"> coming soon </h2>

        </div>

      </div>


      <div>
        <h1 className="title3">
          OUR PRUDUCTS
        </h1>
        <div>
          <ul class="papito  nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li class="nav-item" role="presentation">
              <button class="nav-link bg-transparent text-dark" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">BEST SELLER</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link bg-transparent text-dark" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">NEW</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link bg-transparent text-dark" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">SALE</button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link bg-transparent text-dark" id="pills-old-tab" data-bs-toggle="pill" data-bs-target="#pills-old" type="button" role="tab" aria-controls="pills-old" aria-selected="false">OLD</button>
            </li>

          </ul>
          <div class="tab-content" id="pills-tabContent">
            <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
              <div className="all1">
                <div>
                  <img className="picso" src={mo1} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>57.00 MAD</p>
                </div>
                <div>
                  <img className="picso" src={mo2} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>59.00 MAD</p>
                </div>
                <div>
                  <img className="picso" src={mo3} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>37.00 MAD</p>
                </div>
                <div>
                  <img className="picso" src={mo4} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>667.00 MAD</p>
                </div>

              </div>
            </div>
            <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
              <div className="all1">
                <div>
                  <img className="picso" src={mo1} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>57.00 MAD</p>
                </div>
                <div>
                  <img className="picso" src={mo4} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>59.00 MAD</p>
                </div>
                <div>
                  <img className="picso" src={mo3} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>37.00 MAD</p>
                </div>
                <div>
                  <img className="picso" src={mo2} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>667.00 MAD</p>
                </div>

              </div>
            </div>
            <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
              <div className="all1">
                <div>
                  <img className="picso" src={mo3} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>57.00 MAD</p>
                </div>
                <div>
                  <img className="picso" src={mo1} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>59.00 MAD</p>
                </div>
                <div>
                  <img className="picso" src={mo2} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>37.00 MAD</p>
                </div>
                <div>
                  <img className="picso" src={mo4} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>667.00 MAD</p>
                </div>

              </div>
            </div>
            <div class="tab-pane fade" id="pills-old" role="tabpanel" aria-labelledby="pills-old-tab" tabindex="0">
              <div className="all1">
                <div>
                  <img className="picso" src={mo4} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>57.00 MAD</p>
                </div>
                <div>
                  <img className="picso" src={mo3} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>59.00 MAD</p>
                </div>
                <div>
                  <img className="picso" src={mo2} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>37.00 MAD</p>
                </div>
                <div>
                  <img className="picso" src={mo1} alt="" />
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>667.00 MAD</p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>


      <div className="picso2">

        <div className="texto">
          <p className="title"> THE BEAUTY </p>
          <div>
            <div className="parag">
              <h1 className="title1"> LOOKBOY</h1>
            </div>
            <div className="parag">
              <p className="title2"> SHOP NOW</p>

            </div>
          </div>

        </div>


      </div>

      <div>

      </div>











    </>
  );
};
