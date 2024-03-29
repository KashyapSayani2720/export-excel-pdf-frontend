import React from "react";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

import {
  FileAddOutlined,
  DashboardOutlined,
  CheckCircleOutlined,
  TableOutlined,
  ProfileOutlined,
  SettingOutlined,
  UserOutlined,
  WarningOutlined,
  HighlightOutlined,
} from "@ant-design/icons";

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Dashboard", "1", <DashboardOutlined />),
  getItem("Form", "2", <FileAddOutlined />),
  getItem("List", "sub1", <TableOutlined />, [
    getItem("Search List", "g1", null, [
      getItem("Option 1", "13"),
      getItem("Option 2", "14"),
    ]),
    getItem("Sales Report", "/dashboard/sales-report", null),
    getItem("Shop Profile", "/dashboard/shop-profile", null),

    getItem("Daybook Report", "/dashboard/daybook-report", null),
    getItem("Card List", "g4", null),
  ]),

  getItem("Profile", "sub2", <ProfileOutlined />, [
    getItem("Option 1", "3"),
    getItem("Option 2", "4"),
  ]),

  getItem("Result", "sub3", <CheckCircleOutlined />, [
    getItem("Option 1", "5"),
    getItem("Option 2", "6"),
  ]),

  getItem("Exception", "sub4", <WarningOutlined />, [
    getItem("Option 1", "7"),
    getItem("Option 2", "8"),
  ]),

  getItem("Account", "sub5", <UserOutlined />, [
    getItem("Option 1", "9"),
    getItem("Option 2", "10"),
  ]),

  getItem("Graphic Editor", "sub6", <HighlightOutlined />, [
    getItem("Option 1", "11"),
    getItem("Option 2", "12"),
  ]),
  getItem("Register", "2", <FileAddOutlined />),
];
const Sidebar = () => {
  const navigate = useNavigate();

  const onClick = (e) => {
    navigate(e?.key);
  };

  return (
    <div>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        className="sidebar-container"
        defaultSelectedKeys={["g2"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </div>
  );
};

export default Sidebar;
