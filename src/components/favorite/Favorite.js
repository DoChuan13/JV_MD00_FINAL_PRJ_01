import React from "react";
import { useSelector } from "react-redux";
import { usersState } from "../../services/redux/selectors/selectors";
import { checkLoginStatus } from "../../utils/functions/commonFunctions";
import ProductItem from "../products/ProductItem";
import SideToastify from "../toast/SideToastify";

function Favorite() {
  let usState = useSelector(usersState);
  let loginStatus = checkLoginStatus();
  let currentUser = usState.find((user) => {
    return user.id === loginStatus.id;
  });
  let favoriteElement = currentUser.favorite.map((product) => {
    return <ProductItem key={product.id} product={product} />;
  });
  return (
    <>
      <div className="favorite_section">
        <div className="favorite_title">Danh sách yêu thích</div>
        <div className="favorite_section_2 layout_padding row">
          {favoriteElement}
        </div>
      </div>
      <SideToastify />
    </>
  );
}

export default Favorite;
