import React, { FC } from "react";
import { Button, Layout, Space, Typography } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import styles from "./header.module.css";

const Header: FC = () => {
    return (
        <Layout.Header className={styles.header}>
            <Space>
                <HomeOutlined className={styles.icon} />
                <Button type="ghost">
                    <Typography.Title level={1}>Star Wars</Typography.Title>
                </Button>
            </Space>
        </Layout.Header>
    );
};

export default Header;