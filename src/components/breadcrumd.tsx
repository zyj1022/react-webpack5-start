import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Breadcrumb } from 'antd';

const BreadcrumbBar: React.FC<IProps> = () => {
  return (
    <Breadcrumb style={{ margin: '16px 0' }}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>List</Breadcrumb.Item>
      <Breadcrumb.Item>App</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default inject('store')(observer(BreadcrumbBar));
