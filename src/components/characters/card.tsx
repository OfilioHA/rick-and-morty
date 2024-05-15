import { ICharacter } from "@/types/ICharacter"
import { Card, ListGroup, Button } from "react-bootstrap"
import { Card3D } from "../utils/card-3d";

type PropTypes = Readonly<{
    value: ICharacter
}>

export function CharacterCard({ value }: PropTypes) {
    return (
        <Card3D title={value.name} image={value.image}>
            <Card.Header as='h6' className="text-primary" style={{ fontSize: '1rem' }}>{value.name}</Card.Header>
            <div className="d-flex flex-column justify-content-between h-100">
                <ListGroup variant="flush" className="border-bottom">
                    <ListGroup.Item>
                        <span className="fw-semibold">Status</span>  <span className="fw-medium text-primary">{value.status}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <span className="fw-semibold">Specie</span>  <span className="fw-medium text-primary">{value.species}</span>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <span className="fw-semibold">Episodes</span> <span className="fw-medium text-primary">{value.episode.length}</span>
                    </ListGroup.Item>
                </ListGroup>
                <Card.Footer className="d-grid gap-2 p-0 border-0">
                    <Button variant="primary" className="rounded-0 fw-bold">
                        See More
                    </Button>
                </Card.Footer>
            </div>
        </Card3D>
    );
}
