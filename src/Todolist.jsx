import React, { useState } from 'react';

export default function() {
  const [list, setList] = useState([{ id: 1, name: '做作业' }, { id: 2, name: '看电影' }])
  const [value, setValue] = useState("")
  //完成
  const finish = (id) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }
  const handleChange=(e)=>{
    setValue(e.target.value)
  }
  const findMaxId = () => {
    let id = 0;
    list.forEach(item => {
      if (item.id > id) id = item.id
    })
    return id
  }
  //新增
  const add=()=>{
    if(value!==""){
      const newList=[...list,{id:findMaxId()+1,name:value}]
      setList(newList)
      setValue("")
    }
  }
  return (
    <div className="App">
      <input value={value} onChange={handleChange}/><button onClick={add}>add</button>
      <ul>
        {list.map(item => 
        <li key={item.id}>
          <span>{item.name}</span>
          <button className="finish" onClick={()=>finish(item.id)}>完成</button>
        </li>
        )}
      </ul>
    </div>
  );
}