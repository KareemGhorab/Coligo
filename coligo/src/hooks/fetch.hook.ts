import useSWR from "swr"
import axios, { RawAxiosRequestConfig } from "axios"

const fetcher = (config: RawAxiosRequestConfig) =>
	axios.request(config).then((res) => res.data)

export const useFetch = (config: RawAxiosRequestConfig) => {
	const { data, error, isLoading } = useSWR(config, fetcher)

	return {
		data,
		isLoading,
		isError: error,
	}
}
