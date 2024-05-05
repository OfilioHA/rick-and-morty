import { useEffect, useState } from "react";
import { characterAxios as axios } from "@/libs/axios"
import { IFetchHook, TypeApiID } from "@/types/IGenerics";
import { ICharacterFilter, IResponseCharacter } from "@/types/ICharacter";

export function useCharacter<T extends IResponseCharacter>(
    characterIds: TypeApiID = null,
    filter: ICharacterFilter | null = null
): IFetchHook<T> {
    const [loading, setLoading] = useState<boolean>(true);
    const [response, setResponse] = useState<T | null>(null);

    useEffect(() => {
        (async function () {
            const arraysId = (Array.isArray(characterIds)) ? characterIds : [characterIds];
            const stringId = arraysId.join(',');
            const response = await axios.get<T>(stringId, { params: { ...filter } });
            setLoading(false);
            setResponse(response?.data);
        })();
    }, [characterIds]);

    return {
        loading,
        result: response
    };
}
