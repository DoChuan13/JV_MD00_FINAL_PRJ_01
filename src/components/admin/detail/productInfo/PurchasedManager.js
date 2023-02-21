import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Table, Button } from "antd";

import RightBarProductInfo from "./RightBarProductInfo";
import * as stateConst from "../../../../services/constants/stateConstants";
import {
  productsState,
  usersState,
} from "../../../../services/redux/selectors/selectors";
import { formatCurrency } from "../../../../utils/valueUtils/formatValue";
// import * as picture from "../../../../assets/images/images";
// import * as valueConfig from "../../../../config/valueConfig";
import * as notifyAction from "../../../../services/redux/actions/notifyActions";
import { useParams } from "react-router-dom";

//import class template
import Product from "../../../../services/class/products/Product";
import CenteredModal from "../../../modal/CenteredModal";
import { currencyCode, languageCode } from "../../../../config/valueConfig";

export const productManager = createContext();
function PurchasedManager() {
  let params = useParams();
  let prState = useSelector(productsState);
  let usState = useSelector(usersState);

  let dispatch = useDispatch();

  const [cartOrderList, setCartOrderList] = useState([]);
  const [showDrawer, setShowDrawer] = useState({
    data: "",
    show: false,
    viewSt: true,
  });

  const [size] = useState("small");
  // const [filteredInfo, setFilteredInfo] = useState({});
  // const [sortedInfo, setSortedInfo] = useState({});

  useEffect(() => {
    // let renderValue = prState.map((value) => {
    //   return { ...value, key: value.id };
    // });
    // let finalValue;
    // if (params.detail === "product_detail") {
    //   if (params.id === "2") {
    //     finalValue = renderValue.filter((value) => {
    //       return value.status === false;
    //     });
    //   } else if (params.id === "3") {
    //     finalValue = renderValue.filter((value) => {
    //       return value.status === "admin";
    //     });
    //   }
    // }
    // setCartOrderList(finalValue);
    let paymentList = [],
      key = 0;

    let allOrderedList;
    if (usState.length !== 0) {
      for (let i = 0; i < usState.length; i++) {
        if (usState[i].purchased.length !== 0) {
          for (let j = 0; j < usState[i].purchased.length; j++) {
            console.log(usState[i].purchased);
            paymentList = [
              ...paymentList,
              {
                key: key,
                id: usState[i].id,
                userName: usState[i].userName,
                orderCode: usState[i].purchased[j].orderCode,
                orderDate: usState[i].purchased[j].orderDate,
                totalAmount: usState[i].purchased[j].totalAmount,
                paymentCart: usState[i].purchased[j].paymentCart,
                status: usState[i].purchased[j].status,
              },
            ];
            key++;
          }
        }
      }
      allOrderedList = paymentList;
      setCartOrderList(allOrderedList);
    }
  }, [prState, usState, params]);
  console.log(cartOrderList);

  const handleAdminAction = (product, action) => {
    let viewSt = true;
    if (
      action === stateConst.VIEW_PROD_ACT_TYPE ||
      action === stateConst.EDIT_PRD_ACT_TYPE
    ) {
      if (action === stateConst.EDIT_PRD_ACT_TYPE) {
        viewSt = false;
      }
      setShowDrawer({ data: product, show: true, viewSt: viewSt, new: false });
    }
    if (action === stateConst.DELETE_PROD_ACT_TYPE) {
      console.log(product, action);
      dispatch(notifyAction.deleteProduct(product));
    }

    if (action === stateConst.ADD_PROD_ACT_TYPE) {
      let id;
      if (prState.length === 0) {
        id = 1;
      } else {
        id = prState[prState.length - 1].id + 1;
      }
      let blankData = new Product(id);
      setShowDrawer({ data: blankData, show: true, viewSt: false, new: true });
    }
  };

  const toggleDrawer = (status) => {
    setShowDrawer({ data: "", view: status, viewSt: true });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
    },
    {
      title: "Khách hàng",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "Mã đơn hàng",
      dataIndex: "orderCode",
      key: "orderCode",
    },
    {
      title: "Tổng tiền",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (data) => {
        return <>{formatCurrency(data, languageCode, currencyCode)}</>;
      },
    },
    {
      title: "Trạng thái",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Hành động",
      key: "key",
      render: (data) => {
        return (
          <Space size="small">
            <Button type="primary" ghost size={size}>
              Chi tiết
            </Button>
            <Button
              type="primary"
              // ghost
              size={size}
            >
              Chấp nhận
            </Button>
            <Button type="primary" danger size={size}>
              Huỷ bỏ
            </Button>
          </Space>
        );
      },
    },
  ];

  let contextValue = {
    drawer: showDrawer,
    toggleDrawer: toggleDrawer,
  };

  let elementDrawer = !showDrawer.show ? <></> : <RightBarProductInfo />;

  return (
    <>
      <productManager.Provider value={contextValue}>
        <div className="admin_product_manager">
          <Table
            columns={columns}
            dataSource={cartOrderList}
            // onChange={handleChange}
          />
          {elementDrawer}
        </div>
        <CenteredModal />
      </productManager.Provider>
    </>
  );
}
export default PurchasedManager;
