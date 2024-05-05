import { useEffect, useState } from "react";
import { characterAxios as axios } from "@/libs/axios"
import { IFetchHook, TypeApiID } from "@/types/IGenerics";
import { IEpisodeFilter, IResponseEpisode } from "@/types/IEpisode";

export function useEpisode<T extends IResponseEpisode>(
    episodeIds: TypeApiID = null,
    filter: IEpisodeFilter | null = null
): IFetchHook<T> {
    const [loading, setLoading] = useState<boolean>(true);
    const [response, setResponse] = useState<T | null>(null);

    useEffect(() => {
        (async function () {
            const arraysId = (Array.isArray(episodeIds)) ? episodeIds : [episodeIds];
            const stringId = arraysId.join(',');
            const response = await axios.get<T>(stringId, { params: { ...filter } });
            setLoading(false);
            setResponse(response?.data);
        })();
    }, [episodeIds]);

    return {
        loading,
        result: response
    };
}
