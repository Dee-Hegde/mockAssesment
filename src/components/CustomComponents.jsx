import React from 'react';
import { Modal } from 'antd'

function CustomComponents(props) {
  return (
    <Modal
    className={`${props.className}`}
    style={props.style}
    centered
    title={props?.title}
    visible={props?.visible}
    okText={props.okButtonText || "Ok"}
    cancelText={props.cancelButtonText || "Cancel"}
    onCancel={props.onCancel}
    maskClosable={false}
    onOk={props.onOk}
    confirmLoading={props.loading}
    okButtonProps={props?.okButtonProps}
    footer={props.footer}
  >
    {props.children}
  </Modal>
  )
}

export default CustomComponents