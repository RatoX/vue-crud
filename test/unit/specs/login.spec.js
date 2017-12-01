import { mount } from 'avoriaz';
import sinon from 'sinon';
import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import Notifications from 'vue-notification';
import Login from '@/components/Login';

Vue.use(Vuex);
Vue.use(Notifications);
Vue.use(VueRouter);

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

      const router = new VueRouter;
      const store = new Vuex.Store({
        actions: {
          USER_AUTHENTICATION: authenticationActionStub,
        },
      });

      wrapper = mount(Login, {
        store,
        router,
      });
    });

    it('should call the authentication action with the username and the password after submit', () => {
       wrapper.setData({ username: 'opa', password: '12' });
       wrapper.first('.login__submit').trigger('click');

       expect(authenticationActionStub.called).toBeTruthy();
    });

    it('should redirect to news page with the authentication was ok', (done) => {
      authenticationActionStub
        .onCall(0)
        .resolves();

      sinon.stub(wrapper.vm.$router, 'push');
      wrapper.first('.login__submit').trigger('click');

      Vue
        .nextTick()
        .then(Vue.nextTick)
        .then(() => {
          const stub = wrapper.vm.$router.push;
          expect(stub.withArgs('/news').called).toBeTruthy();
        })
        .then(done, done);
    });

    it('should show notification for wrong password', (done) => {
      authenticationActionStub
        .onCall(0)
        .rejects();

      sinon.stub(wrapper.vm, '$notify');
      wrapper.first('.login__submit').trigger('click');

      Vue
        .nextTick()
        .then(Vue.nextTick)
        .then(() => {
          expect(wrapper.vm.$notify.called).toBeTruthy();
        })
        .then(done, done);
    });
  });
});
