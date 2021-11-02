import React, { useState, useEffect } from 'react';
import { toJS } from 'mobx';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';

import BreadcrumdBar from '@/components/breadcrumd';
import * as api from '../requests/common';

import { mobxSetter, mobxRequest } from 'mobx-value';

import { useStore } from '../stores';

const Containter = styled.div`
  text-align: center;
`;

export const getUserData = mobxRequest({
  value: {},
  autoCancelOnBecomeUnobserved: true,
  request: async (params) => {
    return await api.getUserInfo(params).then((res) => {
      const result = res.data.data;
      user.set(result);
      return result;
    });
  },
});

export const user = mobxSetter({
  value: {},
});

const Home = observer(() => {
  const { common, home } = useStore();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    // home.getUserInfo({ user: 'admin' }).then(() => {
    //   setUserInfo(home.userInfo);
    // });
    getUserData.request();
  }, []);

  console.log('getUserData--11', toJS(getUserData.value), toJS(user.value));

  return (
    <Containter>
      <BreadcrumdBar />
      <h1> hello {getUserData.value.name}</h1>
      <h2> hello {getUserData.value.pin}</h2>
    </Containter>
  );
});

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
