import { useMemo } from "react";
import { CarouselSection } from "@/components/utils/section-carousel";
import { useScreenSize } from "@/hooks/useScreenSize";
import { LocationCarouselContent } from "./content";
import { ILocation } from "@/types/ILocation";

type PropTypes = Readonly<{
    locations: ILocation[] | undefined
}>

export function LocationCarusel({ locations: values }: PropTypes) {

    const { width } = useScreenSize();

    const carouselItems = useMemo(() => {
        if (!values) return [];
        let separator = 4;
        if (width <= 575) separator = 2;
        const items = [];
        for (let i = 0; i < values.length; i += separator) {
            let subArray = values.slice(i, i + separator);
            if (!(subArray.length % separator)) items.push(subArray);
        }
        return items;
    }, [width, values]);

    return (
        <div className="bg-body-tertiary">
            <CarouselSection
                text="Meet characters around the multiverses!"
                items={carouselItems}
                CarouselContent={LocationCarouselContent}
                reverse
            />
        </div>
    )
}
