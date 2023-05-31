import React from 'react';
import { Row, Col } from 'antd';
import ItemCard from './ItemCard';

const Catalogue = () => {
    const items = [
        {
            id: 1,
            img: 'https://sun2-20.userapi.com/impg/0ljVTG_MyE8qfJi-_ryiv-pHKTyGbSloBCV7Vw/mUtagAQZqic.jpg?crop=0,0.125,1,0.75&size=179x0&quality=95&sign=263e706a72e500d0db7ebe86de378259',
            cost: '2720',
            title: 'Сарафан'
        },
        {
            id: 2,
            img: 'https://sun2-20.userapi.com/impg/zgXq_ZdqsYAZSKGa9edY0H_WIns70yMYZCd4Dg/-pcFZjK1itU.jpg?size=179x0&crop=0.008,0.106,0.98,0.792&quality=95&sign=3290a5bbb85e46766ed7651486d679c6',
            cost: '4200',
            title: 'Пиджак'
        },
        {
            id: 3,
            img: 'https://sun2-19.userapi.com/impg/RXarFmVpD0atnXrmVETBJb7nrVF2Ygj05VYUGg/1n7mXby2Bro.jpg?size=179x0&crop=0.082,0.416,0.671,0.51&quality=95&sign=6963409f5c68022b766839250762b83d',
            cost: '2900',
            title: 'Юбка'
        },
        {
            id: 4,
            img: 'https://sun2-18.userapi.com/impg/JtItBU9_vOHtiCBEiMPNQE9Xz37S_Ld60WFqEw/GB5hroQdkAY.jpg?size=0x179&crop=0.063,0.055,0.937,0.937&quality=95&sign=3e499637ef999a71e43f8537b76a075a',
            cost: '960',
            title: 'Боди трикотажное'
        },
        {
            id: 5,
            img: 'https://sun2-18.userapi.com/impg/U6-x6Uzeazz0TRak_ymOR_vynN1V6BlR4fbTXw/PIxB_r4oyB4.jpg?size=0x179&crop=0,0,0.984,0.984&quality=95&sign=d0cf1e59a5dbd7c7d739372fd514b83e',
            cost: '500',
            title: 'Юбка'
        },
        {
            id: 6,
            img: 'https://sun2-3.userapi.com/impg/FV0iiLG5a2yJeiTcS-GUONAyP8ldIXQcCnie-Q/zOYQhO_KIwY.jpg?size=179x0&crop=0.106,0.122,0.863,0.647&quality=95&sign=721660ea2c8aab1db7482d0ce0907ccb',
            cost: '2700',
            title: 'Бомбер коричневый'
        },
        {
            id: 7,
            img: 'https://sun9-59.userapi.com/impf/c830400/v830400520/bd877/zMSBfgDeAFQ.jpg?size=179x0&crop=0.008,0.067,0.98,0.733&quality=95&sign=c0912e04d278f445bac7748f4e7b1f7f',
            cost: '28000',
            title: 'Свадебное платье'
        },
        {
            id: 8,
            img: 'https://sun9-1.userapi.com/impf/c840329/v840329520/67cbd/dEH3HLVC2CQ.jpg?size=179x0&crop=0,0.051,0.98,0.733&quality=95&sign=699d98e28042071a5427bbd21c5e0020',
            cost: '15000',
            title: 'Свадебное платье'
        },
        {
            id: 9,
            img: 'https://sun2-10.userapi.com/impf/RaVpFKXjEDRHGhddgKHtbipiK90AyYAgSNN8cg/HYPh6weRzLI.jpg?size=179x0&crop=0.008,0.106,0.98,0.733&quality=95&sign=ab42211c5199f0ef960d010cd546caac',
            cost: '22000',
            title: 'Свадебное платье'
        }
    ]

    return (
        <Row>
            {
                !!items && items.map((item, index) =>
                    <Col span={6} style={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <ItemCard data={item} key={`cardItem_${index}`} />
                    </Col>
                )
            }
        </Row>
    )
};

export default Catalogue;