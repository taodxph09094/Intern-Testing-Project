import { Button, Card, Form, Input } from "antd";

type Props = {};
const SettingPage = (props: Props) => {
  return (
    <div>
      <Card title="Banner" style={{ marginBottom: 20 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="link anh"
            style={{ width: 950 }}
            defaultValue="asdasjdhasjl"
          />
          <Button>Luu</Button>
        </div>
      </Card>
      <Card title="Logo" style={{ marginTop: 20, marginBottom: 20 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Input placeholder="Logo" style={{ width: 950 }} />
          <Button>Luu</Button>
        </div>
      </Card>
      <Card
        title="Thong tin cong ty"
        style={{ marginTop: 20, marginBottom: 20 }}
      >
        <Form  
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
         
       
            <div style={{ width: 950 }}>
              <Input placeholder="Thanh lap cong ty" />
              <Input
                style={{ marginTop: 20 }}
                placeholder="gioi thieu ve cong ty"
              />
            </div>
            <Button>luu</Button>
          
        </Form>
      </Card>
      <Card title="Ve chung toi" style={{ marginTop: 20 }}>
      <Form  
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
     
            <div style={{ width: 950 }}>
              <Input placeholder="Công ty ...  Retail" />
              <Input
                style={{ marginTop: 20 }}
                placeholder="Lien he"
              />
            </div>
            <Button>luu</Button>
         
        </Form>

      </Card>
    </div>
  );
};
export default SettingPage;
