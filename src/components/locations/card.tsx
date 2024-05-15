
import { ILocation } from "@/types/ILocation";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

type PropTypes = Readonly<{
    value: ILocation
}>

export function LocationCard({ value }: PropTypes) {
    return (
        <Card className="border-primary">
            <Card.Header as='h6' className="text-primary" style={{ fontSize: '1rem' }}>
                {value.name}
            </Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <i className="fa-solid fa-location-dot fa-lg me-2"></i>
                    <span>{value.dimension}</span>
                </ListGroup.Item>
                <ListGroupItem>
                    <i className="fa-solid fa-users  fa-lg me-2"></i> {value.residents.length}
                </ListGroupItem>
            </ListGroup>
        </Card>
    )
}


