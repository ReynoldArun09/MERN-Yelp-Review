import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactTimeAgo from "react-time-ago";
import AddReview from "../components/AddReview";

export default function RestaurantDetail() {
  const [restaurant, setRestaurant] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const fetchRestaurant = async () => {
    try {
      setLoading(true);
      const response = await axios.get(import.meta.env.VITE_BACKEND_URL + `/${id}`);
      setRestaurant(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  if (loading) {
    return (
      <>
        <button className="btn btn-primary" type="button" disabled>
          <span
            className="spinner-grow spinner-grow-sm"
            role="status"
            aria-hidden="true"
          />
          Loading...
        </button>
      </>
    );
  }

  return (
    <section className="my-5">
      <AddReview />
      {restaurant && (
        <div className="container mx-auto">
          <div className="row">
            <h1 className="mt-5">All Reviews</h1>
            {restaurant?.reviews?.length > 0 ? (
              restaurant?.reviews?.map((review) => (
                <div
                  className="card mt-5 mx-3"
                  style={{ width: "18rem" }}
                  key={review._id}
                >
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">
                      {review?.username}
                    </h5>
                    <p className="card-text">{review?.comment}</p>
                    <a href="#" className="btn btn-secondary">
                      <ReactTimeAgo
                        date={Date.parse(review?.createdDate)}
                        locale="en-US"
                      />
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div>
                <h1>No Reviews for this restaurant</h1>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
