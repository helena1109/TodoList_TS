import React, {useRef} from "react";

interface TodoFormProps {
    onAdd(title: string): void;
}

export const ToDoForm: React.FC<TodoFormProps> =(props)=>{
    const ref=useRef<HTMLInputElement>(null)

    // const [title, setTitle]= useState<string>('');
    // const changeHandler=(e: React.ChangeEvent<HTMLInputElement>)=>{
    //     setTitle(e.target.value)
    // };

    const keyPressHandler=(e: React.KeyboardEvent)=>{
        if(e.key==='Enter'){
            props.onAdd(ref.current!.value)
            ref.current!.value='';
        }
    }

    return(
        <div className='input-field mt2'>
            <input
                onKeyPress={keyPressHandler}
                // onChange={changeHandler}
                // value={title}
                ref={ref}
                type='text'
                id='title'
                placeholder='Add new toDo'/>
            <label htmlFor='title' className='active'>
                Add new toDo
            </label>
        </div>
    )
}