import { Button, Card, Form, Input, Modal, Select } from "antd";

type Props = {
    isModalOpen: boolean,
    setIsModalOpen: (isModalOpen: boolean) => void
}
interface IBillDetail {
    customerName: string;
    phoneNumber: string;
    paymentMode: string;
}

const CreateBill = ({ isModalOpen, setIsModalOpen }: Props) => {
    const [form] = Form.useForm();

    const onFinish = (values: IBillDetail) => {
        console.log("Received values of form: ", values);
        setIsModalOpen(false)
        form.resetFields();
    };

    const onReset = () => {
        setIsModalOpen(false)
        form.resetFields();
    };

    return (
        <Modal
            title="Fatura Oluştur"
            open={isModalOpen}
            footer={false}
            onCancel={onReset}
        >
            <Form layout={"vertical"} onFinish={onFinish} form={form}>
                <Form.Item label="Müşteri Adı" name={"customerName"} valuePropName='selected' rules={[
                    {
                        required: true,
                        message: "Username is required",
                    },
                ]}>
                    <Input placeholder="Bir Müşteri Adı Yazınız" />
                </Form.Item>
                <Form.Item
                    rules={[{ required: true, message: "phoneNumber is required", }]}
                    name={"phoneNumber"}
                    label="Tel No"
                >
                    <Input placeholder="Bir Tel No Yazınız" maxLength={11} />
                </Form.Item>
                <Form.Item
                    label="Ödeme Yöntemi"
                    rules={[{ required: true }]}
                    name={"paymentMode"}
                >
                    <Select placeholder="Bir Ödeme Yöntemi Seçiniz">
                        <Select.Option value="Nakit">Nakit</Select.Option>
                        <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
                    </Select>
                </Form.Item>
                <Card className='w-full'>
                    <div className='flex justify-between'>
                        <span>Ara Toplam</span>
                        <span>555.00₺</span>
                    </div>
                    <div className="flex justify-between my-2">
                        <span>KDV Toplam %8</span>
                        <span className="text-red-600">+43.92₺</span>
                    </div>
                    <div className="flex justify-between">
                        <b>Toplam</b>
                        <b>592.92₺</b>
                    </div>
                    <div className="flex justify-end">
                        <Button className="mt-4 " type="primary" htmlType="submit" >Sipariş Oluştur</Button>
                    </div>
                </Card>

            </Form>
        </Modal>
    );
};

export default CreateBill;