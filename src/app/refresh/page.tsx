'use client';

import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { redirect } from 'next/navigation';

export default function Page() {
  const toastId = nanoid();

  useEffect(() => {
    toast('페이지를 새로고침 했습니다!', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      toastId: toastId,
      pauseOnFocusLoss: false,
    });

    redirect('/');
    // eslint-disable-next-line
  }, []);

  return <></>;
}
