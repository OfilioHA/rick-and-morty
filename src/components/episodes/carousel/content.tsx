import { Row, Col } from 'react-bootstrap';
import { IEpisode } from '@/types/IEpisode';
import { EpisodeCard } from '../card';

type PropTypes = Readonly<{
    values: IEpisode[] | undefined
}>

export function CharacterCarouselContent({ values }: PropTypes) {
    return (
        <Row className="g-4 py-4 px-2">
            {values?.map((value, index) => (
                <Col md={6} key={index}>
                    <EpisodeCard value={value} />
                </Col>
            ))}
        </Row>
    )
}