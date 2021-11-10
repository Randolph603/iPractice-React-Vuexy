import './app-loader.scss';
const ComponentSpinner = () => {
  return (
    <div className='fallback-spinner'>
      <div className='layout-box'>
        <h5 className='title'>Loading...</h5>
        <div className='loading component-loader'>
          <div className='effect-1 effects'></div>
          <div className='effect-2 effects'></div>
          <div className='effect-3 effects'></div>
        </div>
      </div>
    </div>
  )
}

export default ComponentSpinner
