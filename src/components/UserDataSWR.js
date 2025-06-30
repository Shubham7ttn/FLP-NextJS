'use client';

import { useCallback } from 'react';
import useSWR from 'swr';

const UserData = () => {
    const { data, error, isLoading } = useSWR(
    'https://jsonplaceholder.org/users/1',
    (url) => fetch(url).then(res => res.json())
  );

  
  const getData = useCallback(() => {
    if (isLoading) return <div>Please wait while data is being fetched...</div>;
    if (error) return <div>Failed to load user data</div>;

    return <div>
        <div>{data?.firstName}</div>
        <div>{data?.email}</div>
    </div>
  }, [data, error, isLoading]);

  return (
    <div className="user-container">
      <div className="title">4. SWR in a Client Component - Loading and error state</div>
      {getData()}
    </div>
  );
}

export default UserData;