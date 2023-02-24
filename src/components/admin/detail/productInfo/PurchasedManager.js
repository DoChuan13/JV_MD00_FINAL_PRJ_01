import React, { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Space, Table, Button } from "antd";

import * as stateConst from "../../../../services/constants/stateConstants";
import {
  productsState,
  usersState,
} from "../../../../services/redux/selectors/selectors";
import { formatCurrency } from "../../../../utils/valueUtils/formatValue";
import * as notifyAction from "../../../../services/redux/actions/notifyActions";
import { useParams } from "react-router-dom";

//import class template
import CenteredModal from "../../../modal/CenteredModal";
import { currencyCode, languageCode } from "../../../../config/valueConfig";
import PaymentModal from "./paymentList/PaymentModal";

export const productManager = createContext();
function PurchasedManager() {
  let params = useParams();
  let prState = useSelector(productsState);
  let usState = useSelector(usersState);
  const [detailList, setDetailList] = useState({ status: false, data: "" });

  let dispatch = useDispatch();

  const [cartOrderList, setCartOrderList] = useState([]);

  const [size] = useState("small");

  useEffect(() => {
    let fullPaymentList = [],
      key = 1;

    if (usState.length !== 0) {
      for (let i = 0; i < usState.length; i++) {
        // console.log(usState[i].purchased);
        if (usState[i].purchased !== undefined) {
          if (usState[i].purchased.length !== 0) {
            for (let j = 0; j < usState[i].purchased.length; j++) {
              fullPaymentList = [
                ...fullPaymentList,
                {
                  ...usState[i].purchased[j],
                  key: key,
                  id: usState[i].id,
                },
              ];
              key++;
            }
          }
        }
      }
      console.log(fullPaymentList);
      let sortedPaymentList;
      if (params.id === "2") {
        sortedPaymentList = fullPaymentList.filter((payment) => {
          return payment.status === "pending";
        });
      } else if (params.id === "3") {
        sortedPaymentList = fullPaymentList.filter((payment) => {
          return payment.status === "completed";
        });
      } else {
        sortedPaymentList = fullPaymentList.filter((payment) => {
          return payment.status === "canceled";
        });
      }
      setCartOrderList(sortedPaymentList);
    }
  }, [prState, usState, params]);

  const showPaymentDetail = (list) => {
    setDetailList({ status: true, data: list });
  };

  const handleAdminAction = (product, action) => {
    if (action === stateConst.CONFIRM_PAYMENT_ACT_TYPE) {
      dispatch(notifyAction.confirmPaymentNoti(product));
    } else if (action === stateConst.CANCEL_PAYMENT_ACT_TYPE) {
      dispatch(notifyAction.cancelPaymentNoti(product));
    }
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
      width: 80,
    },
    // {
    //   title: "Khách hàng",
    //   dataIndex: "userName",
    //   key: "userName",
    // },
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
      render: (data) => {
        return data === "pending" ? (
          <>Chờ xác nhận</>
        ) : data === "completed" ? (
          <>Đã chấp nhận</>
        ) : (
          <>Đã huỷ đơn</>
        );
      },
    },
    {
      title: "Hành động",
      key: "key",
      width: 250,
      render: (data) => {
        return (
          <Space size="small">
            <Button
              type="primary"
              ghost
              size={size}
              onClick={() => {
                showPaymentDetail(data);
              }}
            >
              Chi tiết
            </Button>
            {params.id === "2" ? (
              <>
                <Button
                  type="primary"
                  // ghost
                  size={size}
                  onClick={() => {
                    handleAdminAction(
                      data,
                      stateConst.CONFIRM_PAYMENT_ACT_TYPE
                    );
                  }}
                >
                  Chấp nhận
                </Button>
                <Button
                  type="primary"
                  danger
                  size={size}
                  onClick={() => {
                    handleAdminAction(data, stateConst.CANCEL_PAYMENT_ACT_TYPE);
                  }}
                >
                  Huỷ bỏ
                </Button>
              </>
            ) : (
              <></>
            )}
          </Space>
        );
      },
    },
  ];

  let contextValue = {};

  return (
    <>
      <productManager.Provider value={contextValue}>
        <div className="admin_product_manager">
          <Table
            columns={columns}
            dataSource={cartOrderList}
            // onChange={handleChange}
          />
        </div>
        <PaymentModal detailList={detailList} />
        <CenteredModal />
      </productManager.Provider>
    </>
  );
}
export default PurchasedManager;
