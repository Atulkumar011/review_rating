import React from 'react'
import '../styles/reviewpage.css'
import circleStar  from "../assets/circleStar.jpeg";
import  logoImg from "../assets/logo.jpg";
import graffars from "../assets/graffersID.jpg"


const ReviewPage = () => {
  return (
    <>
     <header>
      <div className="logo">
        <img className="starImg" src={circleStar} alt="starImg" />
        <img className="logoImg" src={logoImg} alt="Logo" />
      </div>
      <ul>
        <div className="search-box">
          <input
            className="search-input"
            type="text"
            placeholder="Search something.."
          />
          <button className="search-btn">
            <i
              className="fa-solid fa-magnifying-glass"
              style={{ color: "#7910de" }}
            />
          </button>
        </div>
        <div className="avtar" />
      </ul>
    </header>
    <section>
      <div className="center">
        <div className="company">
          <div className="companyImg">
            <img src={graffars} alt="company" />
          </div>
          <div className="companyInfo">
            <p>Founded 2016</p>
            <h1 style={{ fontSize: "1.5rem" }}>
              GraffersID Web and App Development
            </h1>
            <p>
              <i
                className="fa-solid fa-location-dot"
                style={{ color: "#7910de" }}
              />
              816 Shekhar Central Palasia, Square, Manorama Ganj, Indore,(M.P.)
            </p>
            <div className="starRating">
              <span
                style={{
                  fontWeight: "bolder",
                  color: "black",
                  fontSize: "1.2rem"
                }}
              >
                5
              </span>
              <div className="rate">
                <input type="radio" id="star5" name="rate" defaultValue={5} />
                <label htmlFor="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" defaultValue={4} />
                <label htmlFor="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" defaultValue={3} />
                <label htmlFor="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" defaultValue={2} />
                <label htmlFor="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" defaultValue={1} />
                <label htmlFor="star1" title="text">
                  1 star
                </label>
              </div>
              <span>54 Reviews</span>
            </div>
          </div>
          <div className="btnarea">
            <button className="btn">+ Add Reviews</button>
          </div>
        </div>
        <div className="userReviews">
          <div className="userInfo">
            <div className="avtar1"></div>
            <div className="userName">
              <h1>Khabib Nurmagomedov</h1>
              <p>22/03/122</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                dolore ex tempora illum deleniti molestias perferendis quisquam
                veniam, ad tenetur nam facere velit asperiores, minus laboriosam
                ea! Rem, dignissimos in!Lorem Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Ut enim nesciunt quo rem eos
                sapiente excepturi iure, et aliquid nobis dolor sint accusamus
                repudiandae suscipit! Eum delectus reprehenderit ut animi.
              </p>
            </div>
            <div className="userStar">
              <div className="starRating">
                <div className="rate">
                  <input type="radio" id="star5" name="rate" defaultValue={5} />
                  <label htmlFor="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" defaultValue={4} />
                  <label htmlFor="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" defaultValue={3} />
                  <label htmlFor="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" defaultValue={2} />
                  <label htmlFor="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" defaultValue={1} />
                  <label htmlFor="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="userInfo">
            <div className="avtar2"></div>
            <div className="userName">
              <h1>Islam Makhachev</h1>
              <p>22/03/122</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                dolore ex tempora illum deleniti molestias perferendis quisquam
                veniam, ad tenetur nam facere velit asperiores, minus laboriosam
                ea! Rem, dignissimos in!Lorem Lorem ipsum,
              </p>
            </div>
            <div className="userStar">
              <div className="starRating">
                <div className="rate">
                  <input type="radio" id="star5" name="rate" defaultValue={5} />
                  <label htmlFor="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" defaultValue={4} />
                  <label htmlFor="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" defaultValue={3} />
                  <label htmlFor="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" defaultValue={2} />
                  <label htmlFor="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" defaultValue={1} />
                  <label htmlFor="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="userInfo">
            <div className="avtar3"></div>
            <div className="userName">
              <h1>Khamzat Chimaev</h1>
              <p>22/03/122</p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                dolore ex tempora illum deleniti molestias{" "}
              </p>
            </div>
            <div className="userStar">
              <div className="starRating">
                <div className="rate">
                  <input type="radio" id="star5" name="rate" defaultValue={5} />
                  <label htmlFor="star5" title="text">
                    5 stars
                  </label>
                  <input type="radio" id="star4" name="rate" defaultValue={4} />
                  <label htmlFor="star4" title="text">
                    4 stars
                  </label>
                  <input type="radio" id="star3" name="rate" defaultValue={3} />
                  <label htmlFor="star3" title="text">
                    3 stars
                  </label>
                  <input type="radio" id="star2" name="rate" defaultValue={2} />
                  <label htmlFor="star2" title="text">
                    2 stars
                  </label>
                  <input type="radio" id="star1" name="rate" defaultValue={1} />
                  <label htmlFor="star1" title="text">
                    1 star
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ReviewPage