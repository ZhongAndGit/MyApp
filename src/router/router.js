import home from '@/components/Home/home'
import myMusic from '@/components/MyMusic/myMusic'
import newMusic from '@/components/NewMusic/newMusic'
import bankID from '@/components/BankID/bankID'

const routes = [
  {path: '/', redirect: 'home'},
  {name: 'home', path: '/home', component: home},
  {name: 'myMusic', path: '/myMusic', component: myMusic},
  {name: 'newMusic', path: '/newMusic', component: newMusic},
  {name: 'bankID', path: '/bankID', component: bankID}
]

export default routes
