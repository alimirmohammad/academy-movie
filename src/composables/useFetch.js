import { ref } from "vue";
import { client } from "../utils/client";

export function useFetch(initialData = null) {
    const data = ref(initialData)
    const loading = ref(false)
    const error = ref(null)

    async function doFetch(url, options) {
        try {
            error.value = null
            loading.value = true;
            const response = await client(url, options)
            data.value = response;
        } catch (err) {
            error.value = err;
        } finally {
            loading.value = false;
        }
    }

    return {data, loading, error, doFetch}
}