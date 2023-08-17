import React from 'react'

const Pagination = ({prev, next, onPrevious, onNext}) => {
    const handlePrevious = () => {
        onPrevious();
    }
    const handleNext = () => {
        onNext();
    }        


  return (
    <nav>
        <ul className='pagination justify-content-center mt-3'>
            {
              prev ? (
               <li className='page-item'>
                <button className='page-link bg-dark text-white'  onClick={handlePrevious}>Previous</button>
               </li>
              ):
               null}
            {
                next ? (
                <li className='page-item'>
                 <button className='page-link bg-dark text-white' onClick={handleNext}>Next</button>
                </li>
                ) : null}
        </ul>
    </nav>
  )
}

export default Pagination