import React, { useState, useCallback } from "react";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Avatar, Form, Input, Select, Button, Row, Col } from "antd";
import { useDropzone } from "react-dropzone";
import NoAvatar from "../../../../assets/img/png/no-avatar.png";

import "./EditUserForm.scss";

export default function EditUserForm(props) {
  const { user } = props;
  const [avatar, setAvatar] = useState(null);
  const [userData, setUserData] = useState({
    name: user.name,
    lastname: user.lastname,
    email: user.email,
    role: user.role,
    avatar: user.avatar,
  });

  const updateUser = (e) => {
    e.preventDefault();
    console.log(user.data);
  };

  return (
    <div className="edit-user-form">
      <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
      <EditForm
        user={user}
        userData={userData}
        setUserData={setUserData}
        updateUser={updateUser}
      />
      <h2>{user.email}</h2>
    </div>
  );
}

function UploadAvatar(props) {
  const { avatar, setAvatar } = props;

  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      setAvatar({ file, preview: URL.createObjectURL(file) });
    },
    [setAvatar]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: "image/jpeg, image/png",
    noKeyboard: true,
    onDrop,
  });
  return (
    <div className="upload-avatar" {...getRootProps()}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <Avatar size={150} src={NoAvatar} />
      ) : (
        <Avatar size={150} src={avatar ? avatar.preview : NoAvatar} />
      )}
    </div>
  );
}

function EditForm(props) {
  const { userData, setUserData, updateUser } = props;
  const { Option } = Select;

  return (
    <div>
      <Form className="form-edit" onSubmit={updateUser}>
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item>
              <Input
                prefix={<UserOutlined />}
                placeholder="Nombre"
                defaultValue={userData.name}
                onChange={(e) =>
                  setUserData({ ...userData, name: e.target.value })
                }
              />
            </Form.Item>
          </Col>
          <Col span={12}></Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}></Col>
          <Col span={12}></Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}></Col>
          <Col span={12}></Col>
        </Row>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="btn-submit">
            Actualizar Usuario
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
