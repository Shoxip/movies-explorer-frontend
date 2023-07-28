import './FilterCheckbox.css';

export default function FilterCheckbox() {
  return (
    <div className='checkbox-container'>
      <label className='checkbox-label' htmlFor='checkbox'>Короткометражки</label>
      <input
        className='checkbox'
        type='checkbox'
        value='yes'
        id='checkbox'
        name='checkbox'
      />
      
    </div>
  );
};
