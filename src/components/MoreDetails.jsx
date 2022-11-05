
import { Button } from 'antd'
import React from 'react'
import CustomComponents from './CustomComponents'

function MoreDetails(props) {
    const {setVisible}=props
  return (
<CustomComponents
 className="custom-modal-container"
 visible={props.visible}
 title={props?.item?.name?.common}
 onCancel={() => setVisible(false)}
 footer={
    <>
      <Button onClick={() => setVisible(false)}>Close</Button>
        <Button
          type="primary"
          onClick={() => setVisible(false)}
        >Ok
        </Button>
    </>
  }
>
<p> Official Name:{props?.item?.name?.nativeName?.eng?.official}</p>
<p>Sub Region: {props?.item?.subregion}</p>
</CustomComponents>
  )
}

export default MoreDetails