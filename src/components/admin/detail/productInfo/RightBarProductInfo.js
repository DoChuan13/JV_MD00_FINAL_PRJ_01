import {
  Col,
  Drawer,
  Form,
  Input,
  Row,
  Space,
  Image,
  InputNumber,
  Button,
} from "antd";
import { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsState } from "../../../../services/redux/selectors/selectors";

import * as Ai from "react-icons/ai";
import { productManager } from "./ManagerProductTable";
import * as picture from "../../../../assets/images/images";
import * as valueConfig from "../../../../config/valueConfig";
import * as axios from "../../../../middleware/api/methods/methodAxios";
import UploadProductImage from "./UploadProductImage";
import * as resource from "../../../../config/resourcesAxiosConfig";
import * as saga from "../../../../services/redux/actions/sagaAction";
import { Success, Error, Warning } from "../../../toast/Toast";

function RightBarProductInfo() {
  let dispatch = useDispatch();
  let prState = useSelector(productsState);
  const [open, setOpen] = useState(false);
  const [viewStatus, setViewStatus] = useState(true);
  const [newStatus, setNewStatus] = useState(false);
  const [productInfo, setProductInfo] = useState({});
  let productContext = useContext(productManager);

  useEffect(() => {
    setOpen(productContext.drawer.show);
    setViewStatus(productContext.drawer.viewSt);
    setNewStatus(productContext.drawer.new);
    //Remove key form object and update state
    let newValue = { ...productContext.drawer.data };
    delete newValue.key;
    setProductInfo(newValue);
  }, [productContext]);

  const resetDrawer = () => {
    productContext.toggleDrawer(false);
  };

  const closeDrawer = () => {
    setOpen(false);
    setTimeout(resetDrawer, 200);
  };

  const checkSatisfyCond = (currentArr, newObj) => {
    let result = true;
    for (let i = 0; i < currentArr.length; i++) {
      if (
        currentArr[i].id !== newObj.id &&
        currentArr[i].productCode === newObj.productCode
      ) {
        return false;
      }
    }
    return result;
  };

  const getImageInfo = () => {
    let picture = document.querySelector(".ant-upload-list-item-image");
    let pictureName = "";
    if (picture != null) {
      pictureName = picture.getAttribute("alt").split(".")[0];
    }
    return pictureName;
  };

  const updateProductInfo = () => {
    let checkId = checkSatisfyCond(prState, productInfo);
    if (!checkId) {
      Warning("Mã sản phẩm đã tồn tại");
      return;
    }
    let pictureName = getImageInfo();
    let productValue = { ...productInfo, productImage: pictureName };
    if (
      productValue.productCode === "" ||
      productValue.productDesc === "" ||
      productValue.productImage === "" ||
      productValue.productName === "" ||
      productValue.productPrice === "" ||
      productValue.productQuantity === "" ||
      productValue.productTitle === "" ||
      productValue.remainQuantity === ""
    ) {
      Error("Vui lòng điền đầy đủ các thông tin");
      return;
    }
    delete productValue[""];
    setTimeout(() => {
      dispatch(saga.update_ProdInfoAct(productValue));
    }, 200);
    closeDrawer();
    console.log("%cUpdate thành công", "color: green");
    Success("Cập nhật sản phẩm thành công");
  };

  const addNewProduct = () => {
    let checkId = checkSatisfyCond(prState, productInfo);
    if (!checkId) {
      Warning("Mã sản phẩm đã tồn tại");
      return;
    }
    let pictureName = getImageInfo();
    let productValue = { ...productInfo, productImage: pictureName };
    console.log(productValue);
    if (
      productValue.productCode === "" ||
      productValue.productDesc === "" ||
      productValue.productImage === "" ||
      productValue.productName === "" ||
      productValue.productPrice === "" ||
      productValue.productQuantity === "" ||
      productValue.productTitle === "" ||
      productValue.remainQuantity === ""
    ) {
      Error("Vui lòng điền đầy đủ các thông tin");
      return;
    }
    axios.postDatabase(resource.products, "", productValue);
    setTimeout(() => {
      dispatch(saga.add_NewProductAct(productValue));
    }, 200);
    closeDrawer();
    console.log("%cThêm sản phẩm mới thành công", "color: green");
    Success("Thêm sản phẩm mới thành công");
  };

  const getDrawerValue = (event) => {
    let name = event.target.id;
    let value = event.target.value;
    setProductInfo({ ...productInfo, [name]: value });

    if (name === "productCode") {
      setProductInfo({ ...productInfo, [name]: value.toUpperCase() });
    }

    if (name === "productPrice") {
      let splitArr = value.split(" ");
      let newValue;
      if (splitArr[1] !== "" && splitArr[1] !== undefined) {
        newValue = parseFloat(splitArr[1].replace(/,/g, ""));
      }
      setProductInfo({ ...productInfo, [name]: newValue });
    }
    if (name === "productQuantity" || name === "remainQuantity") {
      let newValue = parseFloat(value.replace(/,/g, ""));
      setProductInfo({ ...productInfo, [name]: newValue });
    }
  };

  //==========Switch Element Title and Button==========//
  let elementBtnCtrl;
  let elementTitle;
  let elememntImage;
  elementBtnCtrl = viewStatus ? (
    <Space>
      <Ai.AiOutlineClose size={25} onClick={closeDrawer} />
    </Space>
  ) : newStatus ? (
    <Space>
      <Button onClick={closeDrawer}>Hủy bỏ</Button>
      <Button onClick={addNewProduct} type="primary">
        Thêm mới
      </Button>
    </Space>
  ) : (
    <Space>
      <Button onClick={closeDrawer}>Hủy bỏ</Button>
      <Button onClick={updateProductInfo} type="primary">
        Cập nhật
      </Button>
    </Space>
  );

  elementTitle = newStatus ? "Thêm sản phẩm mới" : "Thông tin sản phẩm";

  elememntImage =
    newStatus || !viewStatus ? (
      <UploadProductImage product={productInfo} />
    ) : (
      <Image width={150} src={picture[productInfo.productImage]} />
    );

  return (
    <>
      <Drawer
        title={elementTitle}
        width={720}
        onClose={() => {
          setOpen(false);
          setTimeout(resetDrawer, 200);
        }}
        open={open}
        bodyStyle={{
          paddingBottom: 80,
        }}
        extra={elementBtnCtrl}
      >
        {/* Drawer Form Start */}
        <Form
          layout="vertical"
          hideRequiredMark
          disabled={viewStatus}
          initialValues={productInfo}
          onChange={getDrawerValue}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="id" label="ID">
                <Input placeholder="Không có thông tin" disabled={true} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="productCode" label="Mã sản phẩm">
                <Input placeholder="Không có thông tin" disabled={viewStatus} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="productName" label="Tên sản phẩm">
                <Input placeholder="Không có thông tin" disabled={viewStatus} />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="productTitle" label="Thương hiệu">
                <Input placeholder="Không có thông tin" disabled={viewStatus} />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="productPrice" label="Đơn giá">
                <InputNumber
                  min={0}
                  placeholder="Không có thông tin"
                  disabled={viewStatus}
                  style={{ width: "100%" }}
                  formatter={(value) => {
                    return `${valueConfig.currencyIcon} ${value}`.replace(
                      /\B(?=(\d{3})+(?!\d))/g,
                      ","
                    );
                  }}
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item name="productQuantity" label="Tổng hàng">
                <InputNumber
                  min={0}
                  placeholder="Không có thông tin"
                  disabled={viewStatus}
                  style={{ width: "100%" }}
                  formatter={(value) => {
                    return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  }}
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item name="remainQuantity" label="Hàng tồn">
                <InputNumber
                  min={0}
                  placeholder="Không có thông tin"
                  disabled={viewStatus}
                  style={{ width: "100%" }}
                  formatter={(value) => {
                    return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                  }}
                  parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="productDesc" label="Mô tả chi tiết">
                <Input.TextArea
                  showCount
                  maxLength={100}
                  disabled={viewStatus}
                  rows={3}
                  placeholder="Không có thông tin"
                  style={{ height: 80, resize: "none" }}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Form.Item name="productImage" label="Hình ảnh">
              {elememntImage}
            </Form.Item>
          </Row>
        </Form>
        {/* Drawer Form End */}
      </Drawer>
    </>
  );
}

export default RightBarProductInfo;
