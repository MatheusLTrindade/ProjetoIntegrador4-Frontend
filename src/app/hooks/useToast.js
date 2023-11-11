import React, { useState, useEffect } from 'react';
import Toast from '@/components/Toast';

export default function useToast() {
  const [toastData, setToastData] = useState(null)

  useEffect(() => {
    const storedType = sessionStorage.getItem('type')
    const storedMessage = sessionStorage.getItem('message')

    if (storedType && storedMessage) {
      setToastData({
        type: storedType,
        message: storedMessage,
      });

      const timeoutId = setTimeout(() => {
        hideToast();
      }, 5000);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [])

  function showToast(type, message) {
    try {
      sessionStorage.setItem('type', type)
      sessionStorage.setItem('message', message)
      setToastData({ type, message })
      setTimeout(() => {
        hideToast()
      }, 5000)
    } catch (error) {
      setToastData(null)
    }
  }

  function hideToast() {
    sessionStorage.removeItem('type')
    sessionStorage.removeItem('message')
    setToastData(null)
  }

  function ToastContainer() {
    return toastData ? (
      <Toast type={toastData.type} message={toastData.message} onClose={hideToast} />
    ) : null
  }

  return { showToast, hideToast, ToastContainer }
}
