import { Table } from 'antd'
import Header from '../components/header/Header'

const CustomerPage = () => {
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
            <h1 className='text-4xl font-bold text-center mb-4'>Müşteriler</h1>
            <div className='px-6 dark:bg-slate-600'>
                <Table className='border rounded' dataSource={dataSource} columns={columns} pagination={false} />
            </div>

        </>
    )
}

export default CustomerPage