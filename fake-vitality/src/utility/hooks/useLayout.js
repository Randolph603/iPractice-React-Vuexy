import { useState, useEffect, useCallback } from 'react';
import themeConfig from '@configs/themeConfig'

export const useLayout = () => {
  const [lastLayout, setLastLayout] = useState(null)
  const [layout, setLayout] = useState(() => {
    try {
      return themeConfig.layout.type
    } catch (error) {
      // ** If error return initialValue
      console.log(error)
      return themeConfig.layout.type
    }
  })

  // ** Return a wrapped version of useState's setter function
  const setValue = value => {
    try {
      // ** Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(layout) : value

      // ** Set state
      setLayout(valueToStore)
    } catch (error) {
      // ** A more advanced implementation would handle the error case
      console.log(error)
    }
  }

  const handleLayout = useCallback(() => {
    // ** If layout is horizontal & screen size is equals to or below 1200
    if (layout === 'horizontal' && window.innerWidth <= 1200) {
      setLayout('vertical')
      setLastLayout('horizontal')
    }
    // ** If lastLayout is horizontal & screen size is equals to or above 1200
    if (lastLayout === 'horizontal' && window.innerWidth >= 1200) {
      setLayout('horizontal')
    }
  }, [lastLayout, layout])

  // ** ComponentDidMount
  useEffect(() => {
    handleLayout();
  }, [handleLayout])

  useEffect(() => {
    // ** Window Resize Event
    window.addEventListener('resize', handleLayout)
  }, [layout, lastLayout, handleLayout])

  return [layout, setValue]
}
