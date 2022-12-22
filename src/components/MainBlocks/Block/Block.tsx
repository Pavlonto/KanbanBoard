import React from "react";

type BlockType = {
    id: string
    title: string
    tasks: any
    deleteTask: (id: any, blockID: any) => void
}

export const Block = (props: BlockType) => {
    return (
        <div className="block">
            <div className="block-title">{props.title}</div>
            <hr />
            <ul>
                {props.tasks.map((el: any) => {
                    return (
                        <li key={el.id}>
                            <span>{el.title}</span>
                            <button onClick={() => {
                                props.deleteTask(el.id, props.id)
                            }}>x</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}