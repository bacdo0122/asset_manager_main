import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import useSWR from 'swr';
import { fetcher } from '../helper/fetch';
import { getAccessToken } from '../helper/localStorage/index';
import { setAuth, setUser } from '../reducer/auth';
import { setNotification } from '../reducer/notification';

export const useAuthenticated = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const isAuthenticated = useSelector((state) => state.auth.isAuth);

  const {
    data: user,
    error: userError,
    mutate: reloadUser,
  } = useSWR([getAccessToken() ? 'user/getMe/confirm' : null, getAccessToken()], fetcher);

  useEffect(() => {   
    const checkUser = async () => {
      if (user && getAccessToken()) {
        
        dispatch(setUser(user));
        dispatch(setAuth(true));
        dispatch(setNotification(null))
      }
    };
    checkUser();
  }, [user,userError]);

  useEffect(()=>{
    reloadUser();
  },[location.pathname])


  useEffect(() => {
    console.log("c");
    if (getAccessToken() !== null && getAccessToken() && location.pathname !== '/login') {
      dispatch(setAuth(true));
      navigate(location.pathname);
    } else if (location.pathname === '/login' && getAccessToken()) {
      dispatch(setAuth(true));
      navigate('/');
    } else if ((isAuthenticated !== null && !isAuthenticated) || !getAccessToken()) {
      dispatch(setUser(null));
      dispatch(setAuth(false));
      navigate("/login")
    }
  }, [isAuthenticated, location.pathname]);
};
