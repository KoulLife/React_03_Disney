import {useEffect, useState} from "react";
import React from 'react';

// value : 검색어
// delay : 지연 시간
export const useDebounce = (value, delay) => {
  //debounceValue의 값을 value로 초기화
  const [debounceValue, setDebounceValue] = useState(value);

  // delay가 지난 후 함수 실행
  useEffect(() => {
    const handler = setTimeout(() => {
      // debounceValue에 검색어(value) 추가
      setDebounceValue(value);
    }, delay);
    // 타이머를 클리어
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay]);

  return debounceValue
};
