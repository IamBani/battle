import {
  Container,
  Header,
  Aside,
  Main,
  Menu,
  MenuItem,
  Button,
  Form,
  FormItem,
  Col,
  Row,
  Footer,
  Carousel,
  CarouselItem,
  Image,
  Card,
  TimelineItem,
  Timeline,
} from 'element-ui'
// import "view-design/dist/styles/iview.css";

import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
import locale from 'element-ui/lib/locale/lang/en'
export default {
  install(Vue) {
    Vue.use(Container, { locale })
    Vue.use(Header, { locale })
    Vue.use(Aside, { locale })
    Vue.use(Main, { locale })
    Vue.use(Menu, { locale })
    Vue.use(MenuItem, { locale })
    Vue.use(Button, { locale })
    Vue.use(Form, { locale })
    Vue.use(FormItem, { locale })
    Vue.use(Col, { locale })
    Vue.use(Row, { locale })
    Vue.use(Footer, { locale })
    Vue.use(Carousel, { locale })
    Vue.use(CarouselItem, { locale })
    Vue.use(Image, { locale })
    Vue.use(Card, { locale })
    Vue.use(TimelineItem, { locale })
    Vue.use(Timeline, { locale })
    Vue.component(CollapseTransition.name, CollapseTransition)
  },
}
