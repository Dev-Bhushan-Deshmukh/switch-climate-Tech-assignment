import type { Metadata } from "next";
import { AntdRegistry } from '@ant-design/nextjs-registry';
import "./globals.css";
import Layout, { Header,Content } from "antd/es/layout/layout";
// import { Header } from "./component/header/Header";
import Sider from "antd/es/layout/Sider";
// const { Header, Content, Sider } = Layout;

export const metadata: Metadata = {
  title: "Switch Climate Tech",
  description: "Switch Climate Tech application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 








{
  return (
    <html lang="en">
      <body >
      <AntdRegistry>
        {/* <Layout > */}

   
        <Header/>
        {children}
        
        {/* </Layout> */}
        </AntdRegistry>
      </body>
    </html>
  );
}
