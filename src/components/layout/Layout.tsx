import React, { FC } from "react";
import { Layout as AntLayout } from "antd";
import styles from "./layout.module.css";
import Header from "../header/Header";

interface LayoutProps {
    children: React.ReactNode
}

const Layout: FC<LayoutProps> = ({ children }) => {
    return (
        <div className={styles.main}>
            <Header />
            <AntLayout.Content style={{ height: '100%' }}>
                { children }
            </AntLayout.Content>
        </div>
    );
};

export default Layout;