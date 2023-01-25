import axios from "axios"

export const fetcher = (...args) => fetch(...args).then(res => res.json())