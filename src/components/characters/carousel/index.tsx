import { useMemo } from "react"
import { ICharacter } from "@/types/ICharacter"
import { useScreenSize } from "@/hooks/useScreenSize"
import { CarouselSection } from "../../utils/section-carousel"
import { CharacterCarouselContent } from "./content"

type PropTypes = Readonly<{
    characters: ICharacter[] | undefined
}>

export function CharacterCarousel({ characters: values }: PropTypes) {

    const { width } = useScreenSize();

    const carouselItems = useMemo(() => {
        if (!values) return [];
        let separator = 6;
        if (width <= 991) separator = 4;
        if (width <= 767) separator = 6;
        if (width <= 575) separator = 4;
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
