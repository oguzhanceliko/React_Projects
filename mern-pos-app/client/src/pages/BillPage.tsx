import { Button, Card, Modal, Table } from 'antd'
import { useState } from 'react';
import PrintBill from '../components/bills/PrintBill';
import Header from '../components/header/Header'

const BillPage = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];

    return (
        <>
            <Header />
            <h1 className='text-4xl font-bold text-center mb-4'>Faturalar</h1>
            <div className='px-6 dark:bg-slate-600'>
                <Table className='border rounded' dataSource={dataSource} columns={columns} pagination={false} />
                <div className="cart-total flex justify-end mt-4">
                    <Card className='w-72'>

                        <Button className="mt-4 w-full" onClick={showModal} type="primary" size="large">Yazdır</Button>
                    </Card>
                </div>
            </div>
            <PrintBill isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </>
    )
}

export default BillPage