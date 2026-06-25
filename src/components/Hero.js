function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Delicious Food Delivered To Your Door</h1>

        <p>
          Fresh ingredients, amazing taste, and fast delivery.
        </p>

        <button>Order Now</button>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591"
          alt="Pizza"
        />
      </div>
    </section>
  );
}

export default Hero;