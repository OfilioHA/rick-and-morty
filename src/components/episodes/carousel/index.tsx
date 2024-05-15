import { useMemo } from "react"
import { useScreenSize } from "@/hooks/useScreenSize"
import { CarouselSection } from "../../utils/section-carousel"
import { CharacterCarouselContent } from "./content"
import { IEpisode } from "@/types/IEpisode"

type PropTypes = Readonly<{
    episodes: IEpisode[] | undefined
}>

export function EpisodeCarousel({ episodes: values }: PropTypes) {

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
        <CarouselSection
            text="Meet characters around the multiverses!"
            items={carouselItems}
            CarouselContent={CharacterCarouselContent}
        />
    )
}
