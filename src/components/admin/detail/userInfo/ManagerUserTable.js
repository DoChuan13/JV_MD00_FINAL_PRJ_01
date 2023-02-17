import React, { createContext, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { usersState } from "../../../../services/redux/selectors/selectors";
import { Space, Table, Button } from "antd";
import RightBarUserInfo from "./RightBarUserInfo";
import * as stateConst from "../../../../services/constants/stateConstants";
import * as notifyAction from "../../../../services/redux/actions/notifyActions";
import CenteredModal from "../../../modal/CenteredModal";
import { useParams } from "react-router-dom";

// const { Column } = Table;

export const userManager = createContext();
function ManagerUserTable() {
  let params = useParams();
  // console.log("Parasm", params);

  let usState = useSelector(usersState);
  let dispatch = useDispatch();

  const [usersList, setUsersList] = useState([]);
  const [showDrawer, setShowDrawer] = useState({
    data: "",
    show: false,
    viewSt: true,
  });

  const [size] = useState("small");
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});

  useEffect(() => {
    let renderValue = usState.map((value) => {
      return { ...value, key: value.id };
    });
    let finalValue;
    if (params.detail === "user_detail") {
      if (params.id === "1" || params.id === undefined) {
        finalValue = [...renderValue];
      } else if (params.id === "2") {
        finalValue = renderValue.filter((value) => {
          return value.statusUser === false;
        });
      } else if (params.id === "3") {
        finalValue = renderValue.filter((value) => {
          return value.typeUser === "admin";
        });
      }
    }
    setUsersList(finalValue);
  }, [usState, params]);

  const handleAdminAction = (product, action) => {
    if (action === stateConst.VIEW_USER_ACTION_TYPE) {
      setShowDrawer({ data: product, show: true, viewSt: true });
    } else {
      dispatch(notifyAction.blockUser(product));
    }
  };

  const toggleDrawer = (status) => {
    setShowDrawer({ data: "", view: status, viewSt: true });
  };

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
      sorter: (a, b) => a.id - b.id,
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      // filters: [
      //   {
      //     text: "London",
      //     value: "London",
      //   },
      //   {
      //     text: "New York",
      //     value: "New York",
      //   },
      // ],
      filteredValue: filteredInfo.userName || null,
      onFilter: (value, record) => record.userName.includes(value),
      sorter: (a, b) => a.userName.length - b.userName.length,
      sortOrder: sortedInfo.columnKey === "userName" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "E-mail",
      dataIndex: "email",
      key: "email",
      filteredValue: filteredInfo.email || null,
      onFilter: (value, record) => record.email.includes(value),
      sorter: (a, b) => a.email.length - b.email.length,
      sortOrder: sortedInfo.columnKey === "email" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Trạng thái",
      key: "statusUser",
      dataIndex: "statusUser",
      render: (statusUser) => {
        return <span>{statusUser ? "Cho phép" : "Từ chối"} </span>;
      },
    },
    {
      title: "Hành động",
      key: "key",
      render: (data) => {
        return (
          <Space size="small">
            <Button
              type="primary"
              ghost
              size={size}
              onClick={() => {
                handleAdminAction(data, stateConst.VIEW_USER_ACTION_TYPE);
              }}
            >
              Xem
            </Button>
            {data.typeUser === "admin" ? (
              <></>
            ) : data.statusUser ? (
              <Button
                type="primary"
                danger
                size={size}
                onClick={() => {
                  handleAdminAction(data, stateConst.BLOCK_USER_ACTION_TYPE);
                }}
              >
                Chặn
              </Button>
            ) : (
              <Button
                type="primary"
                // ghost
                size={size}
                onClick={() => {
                  handleAdminAction(data, stateConst.BLOCK_USER_ACTION_TYPE);
                }}
              >
                Cho phép
              </Button>
            )}
          </Space>
        );
      },
    },
  ];

  let contextValue = {
    drawer: showDrawer,
    toggleDrawer: toggleDrawer,
  };

  let elementDrawer = !showDrawer.show ? <></> : <RightBarUserInfo />;
  return (
    <>
      <userManager.Provider value={contextValue}>
        <Table
          columns={columns}
          dataSource={usersList}
          onChange={handleChange}
        />
        {elementDrawer}
        <CenteredModal />
      </userManager.Provider>
    </>
  );
}

export default ManagerUserTable;
