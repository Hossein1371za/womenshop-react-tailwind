import React from 'react'

const FilterProduct = () => {
  return (
    <div>
        <div className='title-filter'>
            <h3>دسته ها</h3>
            <p>تی شرت و پولوشرت</p>
            <p className='border-b-2 pb-4'>پالتو و کاپشن</p>
        </div>
        <div className='price-filter'>
            <h3>قیمت</h3>
            <input type='range' min="0" max="100" id='range' name='range'/>
            <label for="range"></label>
        </div>
    </div>
  )
}

export default FilterProduct