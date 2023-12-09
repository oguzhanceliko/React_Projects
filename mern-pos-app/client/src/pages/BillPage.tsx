import { Button, Table } from "antd";
import { useEffect, useState } from "react";
import PrintBill from "../components/bills/PrintBill";
import Header from "../components/header/Header";
import { ICustomer } from "../interfaces/customer";

const BillPage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [billItems, setBillItems] = useState();
  const [customer, setCustomer] = useState<ICustomer>({
    _id: 0,
    cartItems: [],
    customerName: "",
    customerPhoneNumber: "",
    paymentMode: "",
    subTotal: 0,
    createdAt: "",
    tax: 0,
    totalAmount: 0,
  });

  useEffect(() => {
    const getBills = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/bills/get-all");
        const data = await res.json();
        setBillItems(data);
      } catch (error) {
        console.log(error);
      }
    };

    getBills();
  }, []);

  const columns = [
    {
      title: "Müşteri Adı",
      dataIndex: "customerName",
      key: "customerName",
    },
    {
      title: "Telefon Numarası",
      dataIndex: "customerPhoneNumber",
      key: "customerPhoneNumber",
    },
    {
      title: "Oluşturma Tarihi",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (text: any) => {
        return <span>{text.substring(0, 10)}</span>;
      },
    },
    {
      title: "Toplam Fiyat",
      dataIndex: "totalAmount",
      key: "totalAmount",
      render: (text: any) => {
        return <span>{text}₺</span>;
      },
    },
    {
      title: "Actions",
      dataIndex: "action",
      key: "action",
      render: (_: any, record: any) => {
        return (
          <Button
            type="link"
            className="pl-0"
            onClick={() => {
              setIsModalOpen(true);
              setCustomer(record);
            }}
          >
            Yazdır
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Header />
      <h1 className="text-4xl font-bold text-center mb-4">Faturalar</h1>
      <div className="px-6 dark:bg-slate-600 rounded-tr-">
        <Table
          className="border rounded"
          dataSource={billItems}
          columns={columns}
          pagination={false}
          scroll={{
            x: 1000,
            y: 300,
          }}
        />
      </div>
      <PrintBill
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        customer={customer}
      />
    </>
  );
};

export default BillPage;
