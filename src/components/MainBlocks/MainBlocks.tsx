import React, { useState } from 'react';
import { Block } from './Block/Block';
import { v1 } from 'uuid'


    function MainBlocks() {

    let blockID_1 = v1()
    let blockID_2 = v1()
    let blockID_3 = v1()
    let blockID_4 = v1()

    let [tasks, setTasks] = useState({
        [blockID_1]: [
            { id: v1(), title: "Закончить курсы (но это не точно)" }
        ],
        [blockID_2]: [
            { id: v1(), title: "Html" },
            { id: v1(), title: "Css" },
            { id: v1(), title: "Js" },
            { id: v1(), title: "React" }
        ],
        [blockID_3]: [
            { id: v1(), title: "Сон" },
            { id: v1(), title: "Еду" }
        ],
        [blockID_4]: [
            { id: v1(), title: "Поиграть в геншин/доту" },
            { id: v1(), title: "¯\\_(ツ)_/¯" }
        ]
    })

    let [blocks, setBlocks] = useState([
        { id: blockID_1, title: "Хотим сделать"},
        { id: blockID_2, title: "Делаем"},
        { id: blockID_3, title: "Отложили"},
        { id: blockID_4, title: "Сделали"},
    ])

    let deleteTask = (idTask: string, idBlock: string) => {
        let newTasks = tasks[idBlock]
        let filteredTasks = newTasks.filter(t => t.id !== idTask)
        tasks[idBlock] = filteredTasks
        setTasks({...tasks})
    }

    return (
        <main className="main-blocks">
            {blocks.map(tl => {
                return (
                    <Block
                        key={tl.id}
                        id={tl.id}
                        title={tl.title}
                        tasks={tasks[tl.id]}
                        deleteTask={deleteTask}
                    />
                )
            })}
        </main>
    )
}

export default MainBlocks