import React from "react";

type BlockType = {    
    title: string
    tasks: any
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
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}