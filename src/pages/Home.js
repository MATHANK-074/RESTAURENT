import { useRef } from "react";
import restaurantInfo from "../data/restaurantInfo";
import FoodCard from "../components/FoodCard";

function Home() {
  const sliderRef = useRef(null);
  const topChains = restaurantInfo.slice(0, 16);

  const scrollSlider = (direction) => {
    if (!sliderRef.current) return;
    sliderRef.current.scrollBy({ left: direction * 320, behavior: "smooth" });
  };

                                
  return (
    <main className="home-page" id="home">
      <section className="section top-chains">
        <div className="section-header">
          <h2>Top restaurant chains in Noida</h2>
          <div className="slider-controls">
            <button onClick={() => scrollSlider(-1)} aria-label="Previous">
              ‹
            </button>
            <button onClick={() => scrollSlider(1)} aria-label="Next">
              ›
            </button>
          </div>
        </div>

        <div className="chain-slider" ref={sliderRef}>
          {topChains.map((item) => (
            <FoodCard key={item.info.id} restaurant={item.info} variant="slider" />
          ))}
        </div>
      </section>

      <section className="section restaurant-list">
        <h2>Restaurants with online food delivery in Noida</h2>
        <div className="restaurant-grid">
          {restaurantInfo.map((item) => (
            <FoodCard key={item.info.id} restaurant={item.info} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
