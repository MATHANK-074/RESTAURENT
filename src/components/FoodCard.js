const images = require.context("../assets/images", false, /\.(png|jpe?g|avif|svg)$/);

function getLocalImage(imageId) {
  if (!imageId) return null;
  const candidates = [];

  if (imageId.includes(".")) {
    candidates.push(imageId);
  } else {
    candidates.push(`${imageId}.avif`, `${imageId}.jpeg`, `${imageId}.jpg`, `${imageId}.png`);
  }

  for (const filename of candidates) {
    try {
      return images(`./${filename}`);
    } catch (error) {
      continue;
    }
  }
  return null;
}

function getImageSrc(restaurant) {
  const candidates = [restaurant.cloudinaryImageId, restaurant.imageId, restaurant.imgName];
  for (const id of candidates) {
    const local = getLocalImage(id);
    if (local) return local;
  }

  const placeholder = getLocalImage("image.png") || getLocalImage("Cart_empty.png");
  return placeholder || "https://via.placeholder.com/400x300?text=Image";
}

function FoodCard({ restaurant, variant }) {
  const imageUrl = getImageSrc(restaurant);
  const cuisines = Array.isArray(restaurant.cuisines)
    ? restaurant.cuisines.join(", ")
    : restaurant.cuisines || "Restaurant";
  const rating = restaurant.avgRatingString ?? restaurant.avgRating ?? restaurant.rating ?? "N/A";
  const deliveryTime =
    restaurant.deliveryTime ||
    restaurant.deliveryMinutes ||
    restaurant.sla?.deliveryTime ||
    restaurant.sla?.minDeliveryTime ||
    restaurant.sla?.serviceability?.deliveryTime ||
    null;
  const deliveryText = deliveryTime ? `${deliveryTime} mins` : "30 mins";
  const ratingText = rating !== "N/A" ? `${rating} Rating` : "Unrated";

  if (variant === "slider") {
    return (
      <article className="chain-card">
        <img src={imageUrl} alt={restaurant.name} />
        <div className="card-caption">{restaurant.name}</div>
      </article>
    );
  }

  return (
    <article className="restaurant-card">
      <img src={imageUrl} alt={restaurant.name} />
      <div className="card-content">
        <div>
          <h3>{restaurant.name}</h3>
          <p className="cuisines">{cuisines}</p>
        </div>
        <p className="cost">{restaurant.costForTwo || "₹250 for two"}</p>
        <div className="restaurant-footer">
          <div className="rating-chip">
            <span className="rating-value">{rating}</span>
            <span className="rating-label">Rating</span>
          </div>
          <span className="delivery">{deliveryText}</span>
        </div>
      </div>
    </article>
  );
}

export default FoodCard;
