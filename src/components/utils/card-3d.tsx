import styles from '@/styles/modules/card-3d.module.scss';
import { ReactNode } from 'react';
import { Card } from 'react-bootstrap';

type PropTypes = Readonly<{
    image: string,
    title: string,
    children: ReactNode
}>

export function Card3D({ image, title, children }: PropTypes) {
    return (
        <div className={styles.card_3d}>
            <Card className={`${styles.face} ${styles.front} shadow`}>
                <Card.Img src={image} alt={title} className='h-100' />
                <Card.ImgOverlay className='d-flex flex-column justify-content-end p-0'>
                    <Card.Title className={`${styles.title} text-center m-0 pb-2 pt-3 text-white`}>
                        {title}
                    </Card.Title>
                </Card.ImgOverlay>
            </Card>
            <Card className={`${styles.face} ${styles.back} shadow border-0`}>
                {children}
            </Card>
        </div>
    )
}
