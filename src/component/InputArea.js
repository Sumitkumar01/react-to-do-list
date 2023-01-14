import React,{useState} from 'react'

export const InputArea = (props) => {

    const [note,setNote] = useState('');
    function handleChange(e) {
        const nValue = e.target.value;
        setNote(nValue);
    }

  return (
    <div className="form">
        <input onChange={handleChange} type="text" name='note' value={note} />
        <button>
          <span onClick={() => {props.add(note);setNote('');}}>Add</span>
        </button>
      </div>
  )
}
