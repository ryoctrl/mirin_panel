import * as React from 'react';
import Top from 'pages/index';
import { shallow } from 'enzyme';

import sinon from 'sinon';
import * as hooks from 'hooks';
import { Page } from 'libs';
import { SiteInfo } from 'libs';

describe('Home', () => {
  sinon.stub(hooks, 'usePage').returns({
    selectedPage: Page.TOP,
    changePage: sinon.spy(),
  });

  sinon.stub(hooks, 'useUsers').returns({
    userState: { name: 'TestUser' },
    login: sinon.spy(),
    logout: sinon.spy(),
  });

  test('chck Title', () => {
    const wrapper = shallow(<Top />);
    expect(wrapper.find('h1').text()).toEqual(SiteInfo.SITE_NAME);
  });

  // test(`Home snapshot`, () => {
  //   const store = makeStore({});

  //   const component = renderer.create(
  //     <Provider store={store}>
  //       <TODO />
  //     </Provider>
  //   );
  //   const tree = component.toJSON();

  //   expect(tree).toMatchSnapshot();
  // });
});
