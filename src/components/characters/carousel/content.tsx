import { Row, Col } from 'react-bootstrap';
import { CharacterCard } from '../card';
import { ICharacter } from '@/types/ICharacter';

type PropTypes = Readonly<{
    values: ICharacter[] | undefined
}>

export function CharacterCarouselContent({ values }: PropTypes) {
    return (
        <Row xs={2} sm={3} md={2} lg={3} className="g-4 py-4 px-2">
            {values?.map((value, index) => (
                <Col key={index}>
                    <CharacterCard value={value} />
                </Col>
            ))}
        </Row>
    )
}