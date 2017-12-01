import { mount } from 'avoriaz';
import sinon from 'sinon';
import Vue from 'vue';
import Vuex from 'vuex';
import Login from '@/components/Login';

Vue.use(Vuex);

describe('Login.vue', () => {
  it('should render email', () => {
    const wrapper = mount(Login);
    const emailElement = wrapper.find('.login__email');

    expect(emailElement).toHaveLength(1)
  });

  it('should render password', () => {
    const wrapper = mount(Login);
    const passwordElement = wrapper.find('.login__password');

    expect(passwordElement).toHaveLength(1)
  });

  describe('Authentication action', () => {
    let wrapper, authenticationActionStub;

    beforeEach(() => {
      authenticationActionStub = sinon.stub();

      const store = new Vuex.Store({
        actions: {
          USER_AUTHENTICATION: authenticationActionStub,
        },
      });

      wrapper = mount(Login, {
        store,
      });
    });

    it('should call the authentication action with the username and the password after submit', () => {
       wrapper.setData({ username: 'opa', password: '12' });
       wrapper.first('.login__button').trigger('click');

       expect(authenticationActionStub.called).toBeTruthy();
    });
  });
});
