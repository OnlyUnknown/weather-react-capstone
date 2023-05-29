import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getName } from '../Redux/Slices/mainpageSlice';
import Nav from './Nav';

const MainPage = () => {
    const dispatch = useDispatch();
    const {
        countryList,isLoading
      } = useSelector((store) => store.main);
  useEffect(() => {

    dispatch(getName());

  }, [dispatch]);
    
    if (isLoading === true) {
    return <>
    <Nav/>
    <div>Loading</div>
    
    </>;
  } if (isLoading === false) {
    return (
      <div data-testid="RocketList">
        <Nav/>
        {countryList.map((item) => (
          <div>
          <div>
          {item.country}/{item.city}
        </div>
        <div>
        {item.key}
      </div>
      </div>
        ))}
      </div>
    );
  }
  return <div>{error}</div>;
};

export default MainPage;
