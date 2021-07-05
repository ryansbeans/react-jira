import { useEffect, useState } from "react"
export const isFalsy = (value) => value === 0 ? false : !value
// 在一个函数里,改变传入的对象本身是不好的
export const cleanObject = (object) => {
    const result = {...object}
    Object.keys(result).forEach(key => {
        const value = result[key]
        if (isFalsy(value)) {
            delete result[key]
        }
    })
    return result
}

export const useMount = (callback) => {
    useEffect(() => {
        callback()
    }, [])
}

export const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value)
    useEffect(() => {
        // 每当value变化后,设置一个定时器
        const timeout = setTimeout(() => setDebouncedValue(value), delay)
        return () => clearTimeout(timeout)
    }, [value, delay])
    
    return debouncedValue
}