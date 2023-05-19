import React from "react";

const ProductList = ({ data }) => {
  const delItemsFromCart = (index) => {
    // Function implementation
  };

  let value = 0;
  let discount = 0;

  return (
    <div id="main-card">
      {data.map((el, i) => {
        let count = 1;
        el.qty = 1;
        console.log(el);

        value += el.price;
        discount += el.cutPrice;
        console.log(value, discount);

        const handleMinusClick = (index) => {
          count--;
          el.qty--;
          if (count === 0 && el.qty === 0) {
            delItemsFromCart(index);
            // Remove the item
          }
          // Rest of the logic for minus click
        };

        const handlePlusClick = () => {
          count++;
          el.qty++;
          // Rest of the logic for plus click
        };

        const handleWishClick = (index) => {
          el.qty = 0;
          delItemsFromCart(index);
          // Rest of the logic for wish click
        };

        return (
          <div key={i} className="item">
            {/* Box A */}
            <div className="div1A">
              <img className="pics" src={el.img} alt={el.name} />
            </div>

            {/* Box B */}
            <div className="div1B">
              <div>{`${el.name} - ${el.brand}`}</div>
              <div>36 Month's Warranty, 100% Genuine</div>
              <div>Delivery by Thur 18th Nov.</div>
            </div>

            {/* Box C */}
            <div className="div1C">
              <div className="divUP">
                <div onClick={() => handleMinusClick(i)}>-</div>
                <div>{count}</div>
                <div onClick={handlePlusClick}>+</div>
              </div>
              <div>{`₹ ${el.cutPrice}`}</div>
              <div>{`₹ ${el.price}`}</div>
            </div>

            {/* Box D */}
            <div className="div1D">
              <img
                className="del"
                src="https://cdn-icons-png.flaticon.com/128/1632/1632602.png"
                onClick={() => handleWishClick(i)}
                alt="Delete"
              />
              <img
                className="del"
                src="https://icon-library.com/images/wish-list-icon/wish-list-icon-1.jpg"
                onClick={() => {
                  // Toggle wish list icon
                }}
                alt="Wish"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
