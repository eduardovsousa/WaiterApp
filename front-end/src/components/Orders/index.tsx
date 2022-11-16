import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container } from './styles';

const orders: Order[] = [
  {
    '_id': '63753437218473e8a772bb81',
    'table': '3',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1668486481711-coca-cola.png',
          'price': 7,
        },
        'quantity': 3,
        '_id': '63753437218473e8a772bb82'
      }
    ],
  }
];

export function Orders() {
  return (
    <>
      <Container>
        <OrdersBoard
          icon='🕒'
          title='Fila de espera'
          orders={orders}
        />
        <OrdersBoard
          icon='👨🏽‍🍳'
          title='Em preparação'
          orders={[]}
        />
        <OrdersBoard
          icon='✅'
          title='Pronto!'
          orders={[]}
        />
      </Container>
    </>
  );
}
