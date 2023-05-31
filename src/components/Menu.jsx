import React from 'react';
import { Space, Input, Button } from "antd"
import { ShoppingCartOutlined } from '@ant-design/icons';

const { Search } = Input;

const Menu = () => {

    const onSearch = (value) => {
        console.log('Searching for:', value);
    }

    return (
        <div className="market-menu">
            <Space align="center" style={{ width: '100%', justifyContent: 'space-between' }} direction='horizontal'>
                <div className='empty' style={{ width: '150px' }} />
                <Search
                    placeholder="input search text"
                    allowClear
                    enterButton="Поиск"
                    width='80%'
                    size="large"
                    onSearch={onSearch}
                    style={{ marginTop: '10px', minWidth: '800px' }}
                />
                <Button type="primary" shape="round" icon={<ShoppingCartOutlined />} size="large">Корзина</Button>
            </Space>
        </div>
    )
}

export default Menu;