import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';
export const todoSlice = createSlice({
    name: 'todo',
    initialState: [ 
        {id:uuidv4(), firstname:'Nana',lastname:'Mohamed',isDone:false},
        {id:uuidv4(), firstname:'Ben',lastname:'Maryam',isDone:false},
        {id:uuidv4(), firstname:'Awal',lastname:'Moctar',isDone:false}
      ],
    reducers: {
        handleAdd:(state, action)=>{
            const newTask={
                id:uuidv4(),
                firstname:action.payload,
                lastname:action.payload,
                isDone:false
            }
            state.push(newTask)
        },
        handleSearch:(state, action)=>{
            const searchTerm = action.payload.toLowerCase();
            const filteredTasks = state.filter(task => 
              task.firstname.toLowerCase().includes(searchTerm.trim()) || task.lastname.toLowerCase().includes(searchTerm.trim())
            );
            return filteredTasks;
        },
        handleDelete:(state, action)=>{
            state=state.filter((el)=>el.id !==action.payload)
            return state
        },
        handleisDone:(state, action)=>{
            const task=state.find((el)=>el.id===action.payload);
            task.isDone =!task.isDone
        }
    }
})
export const {handleAdd,handleisDone,handleDelete,handleSearch}=todoSlice.actions
export default todoSlice.reducer