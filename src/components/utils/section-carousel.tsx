import { Container, Row, Col, Carousel, Button } from "react-bootstrap"
import { JSXElementConstructor, useCallback, useState } from "react"

type PropTypes = Readonly<{
    text: string,
    reverse?: boolean,
    items: unknown[] | undefined,
    CarouselContent: JSXElementConstructor<{ values: any }>
}>

export function CarouselSection({ items, text, reverse, CarouselContent }: PropTypes) {

    const [index, setIndex] = useState<number>(0);

    const handleCarouselIndex = useCallback((newIndex: number) => setIndex(newIndex), []);

    const handleNextItem = useCallback(() => {
        if (!items) return;
        let newIndex = index + 1;
        const maxIndex = items?.length;
        if (newIndex >= maxIndex) newIndex = 0;
        setIndex(newIndex);
    }, [index, items]);

    const handlePrevItem = useCallback(() => {
        if (!items) return;
        let newIndex = index - 1;
        const maxIndex = items?.length - 1;
        if (newIndex < 0) newIndex = maxIndex;
        setIndex(newIndex);
    }, [index, items]);

    return (
        <Container as={'section'} className="py-5">
            <Row className={`${reverse ? 'flex-lg-row-reverse' : ''} justify-content-between`}>
                <Col md={4}>
                    <div className="d-flex flex-column justify-content-center h-100 mb-4 mb-lg-0">
                        <h2 className="text-primary mb-4">
                            {text}
                        </h2>
                        <div className="d-flex gap-3">
                            <Button onClick={handlePrevItem} variant="outline-primary">
                                <i className="fa-solid fa-left-long fa-2xl"></i>
                            </Button>
                            <Button onClick={handleNextItem} variant="outline-primary">
                                <i className="fa-solid fa-right-long fa-2xl"></i>
                            </Button>
                            <Button className="fw-bold">
                                See More
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col md={7}>
                    <Carousel controls={false} indicators={false} activeIndex={index} onSelect={handleCarouselIndex}>
                        {items?.map((values, index) => (
                            <Carousel.Item key={index}>
                                <CarouselContent values={values} />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </Col>
            </Row>
        </Container>
    )
}
