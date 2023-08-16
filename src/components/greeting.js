import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreeting } from '../redux/greeting/greetingSlice';

export default function Greeting() {
  const dispatch = useDispatch();
  const { greeting, loading } = useSelector((store) => store.greeting);

  useEffect(() => {
    dispatch(fetchGreeting());
  }, [dispatch]);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <div>
        <h1>Greetings</h1>
        <h2>{greeting.message}</h2>
      </div>
    </>
  );
}
