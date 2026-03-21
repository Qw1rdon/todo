import { useState } from "react";

const SearshPanel = ({onSearchChange}) => {
  const [term, setTerm] = useState('');
  
  const handleChange = (e) => {
    const value = e.target.value;
    setTerm(value);
    onSearchChange(value);
  }

  return (
    <input value={term} className="form-control my-search" placeholder="search" onChange={handleChange}/>
  );
}

export default SearshPanel;