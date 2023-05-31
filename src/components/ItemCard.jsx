import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const ItemCard = ({ data }) => {
    return (
        <Card
            hoverable
            style={{
                width: 240,
                marginBottom: 20
            }}
            cover={<img alt={data.id} src={data.img} />}
        >
            <Meta title={`${data.cost} ₽`} description={data.title} />
        </Card>
    );
}
export default ItemCard;