import React, { useState, useEffect } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';

import BreadcrumdBar from '@/components/breadcrumd';

import { useStore } from '../stores';

const Containter = styled.div`
  text-align: center;
`;

const Home = () => {
  const { common, home } = useStore();
  const [userInfo, setUserInfo] = useState(home.userInfo);
  useEffect(() => {
    home.getUserInfo({ user: 'admin' }).then(() => {
      setUserInfo(home.userInfo);
    });
  }, []);
  return (
    <Containter>
      <BreadcrumdBar />
      <h1> hello {userInfo.name}</h1>
      <h2> hello {userInfo.pin}</h2>
    </Containter>
  );
};

// @inject('store')
// @observer
// class Home extends Component {
//   componentDidMount() {
//     this.props.store.home.getUserInfo({ user: 'admin' });
//   }
//   render() {
//     const {
//       store: { home },
//     } = this.props;
//     return (
//       <Containter>
//         <BreadcrumdBar />
//         <h1 n-style="color:red"> hello {home.userInfo.name}</h1>
//         <h2> hello {home.userInfo.pin}</h2>
//       </Containter>
//     );
//   }
// }

export default Home;
