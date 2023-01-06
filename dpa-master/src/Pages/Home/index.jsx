import { Button, Col, Row, Form, Input, Table, Typography, Space, Layout, Modal } from "antd";
import React, { useState } from "react";
import * as Styles from "./styles";
import { useFormik } from 'formik'
import * as Yup from "yup";
const { Text, Title } = Typography;
const { TextArea } = Input;
const { Footer, Content } = Layout;

const validationSchema = Yup.object({
  situation: Yup.string().required("Situação é um campo obrigatório"),
  thought: Yup.string().required("Pensamento é um campo obrigatório"),
  emotion: Yup.string().required("Emoção é um campo obrigatório"),
  behavior: Yup.string().required("Comportamento é um campo obrigatório")
})

export const Home = () => {
  const currentDate = new Date(Date.now()).toLocaleString('pt-BR');
  const form = useFormik({
    initialValues: {
      situation: "",
    },
    validationSchema: validationSchema,
    onSubmit: values => {
      setResultList(prev => [...prev, { ...values, data: currentDate }]);
    },
  })


  const [resultList, setResultList] = useState([]);
  const [visible, setVisible] = useState(false);
  const [formValues, setFormValues] = useState({ situation: "", thought: "", emotion: "", behavior: "" });

  const handleSubmit = values => {
    setFormValues({ ...values, data: currentDate });
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const columns = [
    {
      title: 'Data e horário',
      dataIndex: 'data',
      key: 'data',
    },
    {
      title: 'Situação',
      dataIndex: 'situation',
      key: 'situation',
    },
    {
      title: 'Pensamento automático',
      dataIndex: 'thought',
      key: 'thought',
    },
    {
      title: 'Emoção',
      dataIndex: 'emotion',
      key: 'emotion',
    },
    {
      title: 'Comportamento',
      dataIndex: 'behavior',
      key: 'behavior',
    },
    {
      title: 'Filtros',
      dataIndex: 'filters',
      key: 'filters',
      render: (text, record) => (
        <a onClick={() => setVisible(true)}>Detalhes</a>
      ),
    },
  ]

  return (
    <Styles.Container>
      <Modal
        title="Detalhes de cada pensamento automático"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Title level={2}
          style={{
            backgroundColor: '#FFFFFF',
            textAlign: 'left',
          }}>Pensamento nº</Title>

        <Space direction="vertical">
          <Text strong>Data e horário: </Text><Text>{currentDate}</Text>
          <Text strong>Situação: </Text><Text>{form.values.situation}</Text>
          <Text strong>Pensamento: </Text><Text>{form.values.thought}</Text>
          <Text strong>Emoção: </Text><Text>{form.values.emotion}</Text>
          <Text strong>Comportamento: </Text><Text>{form.values.behavior}</Text>
        </Space>
      </Modal>

      <Styles.CustomHeader>Diário de Pensamento Automático</Styles.CustomHeader>

      <Row >
        <Col span={12} >
          <Content
            style={{
              padding: '0 50px',
            }}
          >
            <Form
              labelAlign='left'
              layout="vertical"
              onFinish={form.handleSubmit}
            >
              <Form.Item label="Situação" name="situation" validateStatus={form.errors.situation && "error"} help={form.errors.situation} >
                <Input value={form.values.situation} onChange={form.handleChange} />
              </Form.Item>

              <Form.Item label="Pensamento automático" name="thought" validateStatus={form.errors.thought && "error"} help={form.errors.thought}>
                <Input value={form.values.thought} onChange={form.handleChange} />
              </Form.Item>

              <Form.Item label="Emoção" name="emotion" validateStatus={form.errors.emotion && "error"} help={form.errors.emotion}>
                <Input value={form.values.emotion} onChange={form.handleChange} />
              </Form.Item>

              <Form.Item label="Comportamento" name="behavior" validateStatus={form.errors.behavior && "error"} help={form.errors.behavior}>
                <TextArea rows={4} value={form.values.behavior} onChange={form.handleChange} />
              </Form.Item>

              <Row justify="end">
                <Col>
                  <Button
                    htmlType="submit"
                    type={"plus"}
                    style={{
                      width: '126px',
                      height: '33px',
                      background: '#D9D9D9',
                    }}
                  >Enviar</Button>
                </Col>
              </Row>
            </Form>
          </Content>
        </Col>

        <Col span={12}>
          <Content
            style={{
              padding: '0 25px',
            }}
          >
            <Space direction="vertical">
              <Text>O principio básico da Terapia Cognitivo Comportamental é que não são as situações em si que determinam como nos sentimos e comportamos, mas a forma como pensamos sobre elas, por esse motivo é fundamental que ao se submeter a este tratamento você aprenda a identificar e a relacionar os componentes a seguir:</Text>

              <Text strong>Situação:</Text><Text>Que tipo de situações me geram emoções ou-comportamentos negativos.</Text>

              <Text strong>Pensamento:</Text><Text>Como penso sobre essas situações.</Text>

              <Text strong>Emoções:</Text><Text>O que sinto quando estou nessas situações.</Text>

              <Text strong>Comportamento:</Text><Text>Que tipo de reações eu tenho nestas situações.</Text>

              <Text>Preencha os campos do diário abaixo toda vez que tiver experimentado uma emoção ou um comportamento negativo. Lembre-se que talvez inicialmente você não tenha tanta facilidade para identificar cada componente, mas a medida que praticar isso ficará mais fácil.</Text>
            </Space>
          </Content>
        </Col>
      </Row>

      <Row>
        <Col
          style={{
            backgroundColor: '#EEEEEE',
            marginTop: '30px',

          }}
          span={24}>
          <Table
            style={{
              backgroundColor: '#EEEEEE',
            }}
            dataSource={resultList} columns={columns} />
        </Col>
      </Row>

      <Footer
        style={{
          textAlign: 'center',
          backgroundColor: '#EEEEEE',
        }}
      >
        Ant Design ©2022 Created by Talita Santos
      </Footer>

    </Styles.Container >
  );
};
