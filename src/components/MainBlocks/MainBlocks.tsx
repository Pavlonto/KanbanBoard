import React, { useState } from 'react';
import { Block } from './Block/Block';

function MainBlocks() {

    let allTasks = [
        {
            title: "Хотим сделать",
            tasks: [
                { id: 1, title: "Закончить курсы (но это не точно)" },
                { id: 2, title: "Попрыгать" },
                { id: 3, title: "Побегать" }
            ]
        },
        {
            title: "Делаем",
            tasks: [
                { id: 1, title: "Html" },
                { id: 2, title: "Css" },
                { id: 3, title: "Js" },
                { id: 4, title: "React" }
            ]
        }        
    ]

    return (
        <main className="main-blocks">
            {allTasks.map(tl => {
                return (
                    <Block                        
                        title={tl.title}
                        tasks={tl.tasks}
                    />
                )
            })}
        </main>
    )
}

export default MainBlocks