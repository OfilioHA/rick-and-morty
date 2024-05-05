import { useEffect, useState } from "react";
import { characterAxios as axios } from "@/libs/axios"
import { IFetchHook, TypeApiID } from "@/types/IGenerics";
import { ILocationFilter, IResponseLocation } from "@/types/ILocation";

export function useLocation<T extends IResponseLocation>(
    locationIds: TypeApiID = null,
    filter: ILocationFilter | null = null
): IFetchHook<T> {
    const [loading, setLoading] = useState<boolean>(true);
    const [response, setResponse] = useState<T | null>(null);

    useEffect(() => {
        (async function () {
            const arraysId = (Array.isArray(locationIds)) ? locationIds : [locationIds];
            const stringId = arraysId.join(',');
            const response = await axios.get<T>(stringId, { params: { ...filter } });
            setLoading(false);
            setResponse(response?.data);
        })();
    }, [locationIds]);

    return {
        loading,
        result: response
    };
}
