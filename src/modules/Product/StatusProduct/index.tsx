import { Form, Modal, Select } from 'antd'
import React from 'react'


type Props ={
    setModalStatus: React.Dispatch<React.SetStateAction<boolean>>
    modalStatus: boolean
}
const StatusProduct = (props: Props) => {
    const {setModalStatus,modalStatus} =props
    const handleClose = () =>{
        setModalStatus(false)
    }
  return (
    <div>
      <Modal 
      title='Status'
      open={modalStatus}
      onCancel={handleClose}
      width={300}
      style={{textAlign:'center'}}
      >
        <Form style={{marginTop:40}}>
            <Form.Item>
                <Select 
                defaultValue={'True'}
                options={[
                    {value:'True', label:'True'},
                    {value:'fales', label:'Fales'}

                ]}
                />
            </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}

export default StatusProduct
