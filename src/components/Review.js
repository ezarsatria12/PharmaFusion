import React, { useState, useEffect } from 'react';
import '../../src/components/Review';
import Header from "../components/Header";
import Footer from "../components/Footer"; // Jika ada CSS global

function Review({ reviews }) {
  const [filteredReviews, setFilteredReviews] = useState(reviews || []); // Fallback ke array kosong jika reviews undefined
  const [searchQuery, setSearchQuery] = useState('');

  // Fungsi untuk mencari ulasan berdasarkan kata kunci
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    const filtered = reviews.filter(review =>
      review.text.toLowerCase().includes(query)
    );
    setFilteredReviews(filtered);
  };

  // Fungsi untuk menggambar bintang
  const renderStars = (rating) => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          style={{
            color: i <= rating ? 'gold' : 'gray', // Warna bintang terisi gold, sisanya gray
            fontSize: '20px',
            marginRight: '2px',
          }}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  useEffect(() => {
    // Update filteredReviews jika reviews berubah
    setFilteredReviews(reviews || []);
  }, [reviews]);

  return (
    <div>
      <Header />
      <input
        type="text"
        placeholder="Cari ulasan"
        value={searchQuery}
        onChange={(event) => {
          setSearchQuery(event.target.value); // Update search query
          handleSearch(event); // Perform the search
        }}
      />
      <ul>
        {filteredReviews.length === 0 ? (
          <p>Tidak ada ulasan ditemukan</p>
        ) : (
          filteredReviews.map(review => (
            <li key={review.id} className="review">
              <h4>{review.user}</h4>
              <div>{renderStars(review.rating)}</div>
              <p>{review.text}</p>
              <p>Ditulis pada: {review.date}</p>
            </li>
          ))
        )}
      </ul>
      <Footer/>
    </div>
  );
}

export default Review;
