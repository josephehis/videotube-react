
import React,{useState} from 'react'

const InputComponent = ({ getUserInput}) => {

    const [userSearch, setUserSearch]= useState('');

    const handleChange=(event)=> setUserSearch(event.target.value);

    const handleSubmit=(event)=>{
        event.preventDefault();

        getUserInput(userSearch)
    }

  return (
    <div className="d-flex flex-column align-items-center w-100" >
        <h2>Video Search</h2>
        <form onSubmit={handleSubmit} className='w-50'>
            <input className='w-100 px-2 py-2' onChange={handleChange} type='text' value={userSearch}/>
        </form>
    </div>
  )
}

export default InputComponent;
