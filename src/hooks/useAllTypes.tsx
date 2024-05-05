import { useEffect, useState } from "react";
import { characterAxios, episodeAxios, locationAxios } from "@/libs/axios";
import { IPaginationCharacter } from "@/types/ICharacter";
import { IPaginationLocation } from "@/types/ILocation";
import { IPaginationEpisode } from "@/types/IEpisode";
import { IFetchHook } from "@/types/IGenerics";

type IAllTypes = {
    characters: IPaginationCharacter,
    locations: IPaginationLocation,
    episodes: IPaginationEpisode,
}

export function useAllTypes(filter: string = ''): IFetchHook<IAllTypes> {
    const [loading, setLoading] = useState<boolean>(true);
    const [types, setTypes] = useState<IAllTypes | null>(null);

    useEffect(() => {
        (async function () {
            const params = { name: filter };
            const catalogs = await Promise.all([
                characterAxios.get<IPaginationCharacter>('/', { params }),
                locationAxios.get<IPaginationLocation>('/', { params }),
                episodeAxios.get<IPaginationEpisode>('/', { params })
            ]);
            setTypes({
                characters: catalogs[0].data,
                locations: catalogs[1].data,
                episodes: catalogs[2].data,
            });
            setLoading(false);
        })();
    }, [filter]);

    return {
        loading,
        result: types
    }
}