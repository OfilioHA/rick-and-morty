import { Card, ListGroup } from "react-bootstrap";
import { IEpisode } from "@/types/IEpisode";

type PropTypes = Readonly<{
    value: IEpisode
}>

export function EpisodeCard({ value: episode }: PropTypes) {
    return (
        <Card className="border-primary">
            <Card.Header as='h6' className="text-primary" style={{ fontSize: '1rem' }}>
                {episode.name}
            </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <i className="fa-solid fa-calendar fa-lg me-2"></i> {episode.air_date}
                </ListGroup.Item>
                <ListGroup.Item>
                    <i className="fa-solid fa-film fa-lg me-2"></i> {episode.episode}
                </ListGroup.Item>
            </ListGroup>
        </Card>
    )

}
