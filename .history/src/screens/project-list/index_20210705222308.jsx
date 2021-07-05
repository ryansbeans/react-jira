import React from "react"
import { SearchPanel } from "./search-panel"
import { List } from "./list"
import { useEffect, useState } from "react"
import { cleanObject, useMount } from "../../utils"
import qs from "qs"

const apiUrl = process.env.REACT_APP_API_URL // 切换环境变量
export const ProjectListScreen = () => {
    // useState 第一个值是当前状态，第二个是设置的函数， useState(初始值)
    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const [list, setList] = useState([])  // 设置table的列表
    const [users, setUsers] = useState([])  // 设置option用户列表
    useEffect(() => {
        debounce(() => {
            fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(param))}`).then(async response => {
                if(response.ok) {
                    setList(await response.json())
                }
            })
        }, 600)
    }, [param]) // 当param改变时获取table列表

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if(response.ok) {
                setUsers(await response.json())
            }
        })
    })

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam} />
        <List users={users} list={list}/>
    </div>
}