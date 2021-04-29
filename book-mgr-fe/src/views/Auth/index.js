import { defineComponent, ref, reactive } from 'vue'
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons-vue';

export default defineComponent({
  components: {
    UserOutlined,
    LockOutlined,
    MailOutlined,
  },
  setup() {
    const activeKey = ref('login')

    /** 登录相关 */
    const loginForm = reactive({
      account: '',
      password: ''
    })




    /** 注册相关 */
    const regForm = reactive({
      account: '',
      password: '',
      inviteCode: '',
    })

    return {
      activeKey,
      loginForm,
      regForm
    }
  }
})

