import React from 'react'
import {LiaEyeSolid} from "react-icons/lia"
import Article from './Article'
const ReadNext = () => {
  return (
    <>
    <div className='flex justify-center items-center lg:mt-10'>
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="65" viewBox="0 0 82 65" fill="none">
<path d="M43.2857 32.8572C43.2857 41.3545 40.8575 49.0049 36.9827 54.5046C33.106 60.007 27.8445 63.2857 22.1429 63.2857C16.4412 63.2857 11.1797 60.007 7.30297 54.5046C3.4282 49.0049 1 41.3545 1 32.8572C1 24.3598 3.4282 16.7094 7.30297 11.2098C11.1797 5.70734 16.4412 2.42859 22.1429 2.42859C27.8445 2.42859 33.106 5.70734 36.9827 11.2098C40.8575 16.7094 43.2857 24.3598 43.2857 32.8572Z" fill="white" stroke="black" stroke-width="2"/>
<path d="M81 31.4286C81 39.9259 78.5718 47.5763 74.697 53.076C70.8203 58.5784 65.5588 61.8571 59.8572 61.8571C54.1555 61.8571 48.894 58.5784 45.0173 53.076C41.1425 47.5763 38.7143 39.9259 38.7143 31.4286C38.7143 22.9312 41.1425 15.2808 45.0173 9.78117C48.894 4.27875 54.1555 1 59.8572 1C65.5588 1 70.8203 4.27875 74.697 9.78117C78.5718 15.2808 81 22.9312 81 31.4286Z" fill="white" stroke="black" stroke-width="2"/>
<ellipse cx="25.5714" cy="45.1429" rx="8.57143" ry="12.1429" fill="black"/>
<ellipse cx="63.2857" cy="45.1429" rx="8.57143" ry="12.1429" fill="black"/>
</svg>
    </div>
    <div className='flex justify-center items-center'>
      <p className='text-2xl font-bold font-mono lg:m-3'>Read Next</p> </div>
      <div class='container'>
           <Article/>
           <Article/>
           <Article/>
           <Article/>
        </div>
    </>
  )
}

export default ReadNext