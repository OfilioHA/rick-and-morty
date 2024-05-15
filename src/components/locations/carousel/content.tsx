import { Row, Col } from 'react-bootstrap';
import { LocationCard } from '../card';
import { ILocation } from '@/types/ILocation';

type PropTypes = Readonly<{
    values: ILocation[] | undefined
}>

export function LocationCarouselContent({ values }: PropTypes) {
    return (
        <Row className="g-4 py-4 px-2">
            {values?.map((value, index) => (
                <Col md={6} key={index}>
                    <LocationCard value={value} />
                </Col>
            ))}
        </Row>
    )
}








