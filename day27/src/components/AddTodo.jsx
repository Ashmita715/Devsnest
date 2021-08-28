import {useState} from 'react';
import {useDispatch} from "react-redux";
import {addItem} from "../actions";

const AddTodo = () => {
    const [item, setItem] = useState("");
    const dispatch = useDispatch();
    return (
        <div>
            <input type="text" className="form__input" placeholder="Add todo..." value={item} onChange={(e) => {
                setItem(e.target.value);
            }}/>
            <button className="button1" onClick={()=>{
                dispatch(addItem({
                    title: item,
                    done: false,
                }));
                setItem("");
            }}>Add</button>
        </div>
    );
}

export default AddTodo;